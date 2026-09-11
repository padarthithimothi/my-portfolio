/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Focus from './components/Focus';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Education from './components/Education';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';

export default function App() {
  return (
    <div className="bg-gradient-to-br from-[#4a0000] via-[#1a0000] to-black min-h-screen text-white font-sans selection:bg-brand-red selection:text-white overflow-x-hidden relative">
      {/* Global Background Elements */}
      <Background3D />
      <div className="fixed inset-0 bg-black/40 pointer-events-none z-0"></div>
      
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Focus />
          <Experience />
          <Projects />
          <Skills />
          <Certifications />
          <Education />
          <Stats />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
