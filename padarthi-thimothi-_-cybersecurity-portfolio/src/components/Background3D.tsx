import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function Background3D() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // --- Setup ---
    const container = containerRef.current;
    const scene = new THREE.Scene();
    
    // Add some fog for depth integration
    scene.fog = new THREE.FogExp2(0x0a0000, 0.03);

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 12; // Start closer

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    
    // Optimize for mobile: limit pixel ratio and size
    const isMobile = window.innerWidth < 768;
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.5 : 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    container.appendChild(renderer.domElement);

    // --- Geometry ---
    // Subdivided Icosahedron gives a spherical network of points and lines
    const detail = isMobile ? 12 : 24; 
    const geometry = new THREE.IcosahedronGeometry(6, detail);
    
    const basePositions = geometry.attributes.position.array as Float32Array;
    const targetPositions = new Float32Array(basePositions.length);
    
    // Morph Target: A scattered, expanding spiral/galaxy shape
    for (let i = 0; i < basePositions.length; i += 3) {
      const x = basePositions[i];
      const y = basePositions[i + 1];
      const z = basePositions[i + 2];
      
      // Calculate a distorted outward position
      const length = Math.sqrt(x*x + y*y + z*z);
      const normalizedX = x / length;
      const normalizedY = y / length;
      const normalizedZ = z / length;
      
      const newRadius = 10 + Math.random() * 20;
      const twist = y * 0.5; // twist based on height
      
      targetPositions[i] = (normalizedX * Math.cos(twist) - normalizedZ * Math.sin(twist)) * newRadius;
      targetPositions[i + 1] = y * (2.0 + Math.random() * 2.0); // stretch vertically
      targetPositions[i + 2] = (normalizedX * Math.sin(twist) + normalizedZ * Math.cos(twist)) * newRadius;
    }
    
    geometry.setAttribute('targetPosition', new THREE.BufferAttribute(targetPositions, 3));

    // --- Custom Shader for Morphing ---
    const vertexShader = `
      uniform float uMorphProgress;
      uniform float uTime;
      attribute vec3 targetPosition;
      
      varying vec3 vColor;
      
      void main() {
        // Add subtle floating/breathing animation
        vec3 floatingPos = position;
        floatingPos.x += sin(uTime * 0.5 + position.y * 1.5) * 0.3 * (1.0 - uMorphProgress);
        floatingPos.y += cos(uTime * 0.3 + position.x * 1.5) * 0.3 * (1.0 - uMorphProgress);
        
        // Lerp between sphere and scattered galaxy based on scroll
        vec3 finalPos = mix(floatingPos, targetPosition, uMorphProgress);
        
        vec4 mvPosition = modelViewMatrix * vec4(finalPos, 1.0);
        gl_Position = projectionMatrix * mvPosition;
        
        // Point size varies by distance
        gl_PointSize = (isMobile ? 25.0 : 35.0) / -mvPosition.z;
        
        // Core red color with slight variation
        float intensity = 0.8 + 0.2 * sin(uTime + position.y);
        vColor = vec3(1.0, 0.1, 0.1) * intensity;
      }
    `;

    const pointsFragmentShader = `
      varying vec3 vColor;
      void main() {
        // Soft glowing circle
        vec2 coord = gl_PointCoord - vec2(0.5);
        float dist = length(coord);
        if (dist > 0.5) discard;
        
        float strength = pow(1.0 - (dist * 2.0), 1.5);
        gl_FragColor = vec4(vColor, strength * 0.9);
      }
    `;
    
    const linesFragmentShader = `
      varying vec3 vColor;
      void main() {
        gl_FragColor = vec4(vColor, 0.15); // Subtle red lines
      }
    `;

    // We inject isMobile into vertex shader using a define
    const customizedVertexShader = (isMobile ? '#define isMobile true\n' : '#define isMobile false\n') + vertexShader;

    const uniforms = {
      uMorphProgress: { value: 0 },
      uTime: { value: 0 }
    };

    const pointsMaterial = new THREE.ShaderMaterial({
      vertexShader: customizedVertexShader,
      fragmentShader: pointsFragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const linesMaterial = new THREE.ShaderMaterial({
      vertexShader: customizedVertexShader,
      fragmentShader: linesFragmentShader,
      uniforms,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      wireframe: true // Automatically renders edges of the Icosahedron
    });

    const points = new THREE.Points(geometry, pointsMaterial);
    const lines = new THREE.Mesh(geometry, linesMaterial);

    const group = new THREE.Group();
    group.add(points);
    group.add(lines);
    scene.add(group);

    // --- Scroll Integration ---
    let scrollProgress = 0;
    let targetScrollProgress = 0;
    
    const onScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      targetScrollProgress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
    };
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    // Resize Handler
    const onResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };
    window.addEventListener('resize', onResize);

    // --- Animation Loop ---
    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();
      uniforms.uTime.value = time;
      
      // Smooth interpolation (lerp) for scroll progress
      scrollProgress += (targetScrollProgress - scrollProgress) * 0.05;
      uniforms.uMorphProgress.value = scrollProgress;
      
      // Rotate the entire particle system
      group.rotation.y = time * 0.1 + scrollProgress * Math.PI * 1.5;
      group.rotation.x = time * 0.05 + scrollProgress * Math.PI * 0.5;
      
      // Camera movement based on scroll
      // Start close, pull back, and shift slightly up as user scrolls down
      camera.position.z = 12 + (scrollProgress * 20);
      camera.position.y = scrollProgress * 15;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    
    animate();

    // --- Cleanup ---
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      
      geometry.dispose();
      pointsMaterial.dispose();
      linesMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 z-0 pointer-events-none mix-blend-screen"
    />
  );
}
