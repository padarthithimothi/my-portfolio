import { motion } from 'motion/react';
import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden bg-transparent">
      {/* Massive Background Text Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-0">
        <span className="font-bebas text-[30vw] text-white/[0.03] leading-none select-none">
          THIMOTHI
        </span>
      </div>

      {/* Main Container */}
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full z-10 relative flex flex-col lg:flex-row items-center gap-12 lg:gap-0">
        
        {/* LEFT COLUMN - TEXT CONTENT */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="w-full lg:w-5/12 flex flex-col justify-center relative z-20 order-2 lg:order-1"
        >
          <motion.div variants={itemVariants} className="mb-2">
            <span className="font-caveat text-4xl md:text-5xl text-red-400 font-light tracking-wide rotate-[-2deg] inline-block mb-2">
              Hello, I'm
            </span>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="font-bebas leading-[0.85] tracking-normal mb-4">
            <span className="text-white block text-5xl md:text-6xl lg:text-[75px] opacity-80">PADARTHI</span>
            <span className="text-white block text-7xl md:text-8xl lg:text-[110px]">THIMOTHI</span>
          </motion.h1>

          <motion.div variants={itemVariants} className="mb-6 flex flex-col gap-1">
            <h2 className="text-red-500 text-[11px] font-bold tracking-[0.3em] uppercase">
              CYBERSECURITY UNDERGRADUATE / VAPT / ETHICAL HACKING
            </h2>
            <p className="text-red-700/80 text-[10px] font-bold tracking-[0.3em] uppercase">
              B.TECH CS STUDENT (4TH YEAR)
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="text-gray-300/80 text-xs md:text-sm max-w-sm leading-relaxed mb-10 font-medium">
            A detail-oriented Cybersecurity undergraduate with hands-on experience in ethical hacking, penetration testing, and network vulnerability assessment. Passionate about mitigating digital risks, strengthening enterprise security postures, and building resilient systems using advanced tools and modern workflows.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 mb-10">
            <a 
              href="#contact" 
              className="bg-transparent text-white border border-white/20 rounded-full px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              GET IN TOUCH →
            </a>
            <a 
              href="/resume.pdf" 
              download="Padarthi_Thimothi_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-transparent text-white border border-white/20 rounded-full px-6 py-2.5 text-[11px] font-bold uppercase tracking-widest hover:bg-white hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              DOWNLOAD CV <span className="text-red-500 ml-1">↓</span>
            </a>
            <div className="flex items-center gap-1 text-[10px] text-gray-400 uppercase tracking-widest ml-2">
              <MapPin className="w-3 h-3 text-red-500" /> BAPATLA, INDIA
            </div>
          </motion.div>

          {/* Social Icons Container */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 bg-black/40 border border-white/10 rounded-full px-6 py-3 w-fit backdrop-blur-sm">
            <a href="https://linkedin.com/in/padarthi-thimothi-474058362" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href="https://github.com/padarthithimothi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-4 h-4" />
            </a>
            <a href="mailto:padarthithimothi@gmail.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
              <Mail className="w-4 h-4" />
            </a>
          </motion.div>
        </motion.div>

        {/* CENTER COLUMN - PORTRAIT */}
        <motion.div 
          initial={{ opacity: 0, y: 100, rotateX: 15, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          style={{ perspective: 1200 }}
          className="w-full lg:w-4/12 flex justify-center items-end relative opacity-100 pointer-events-auto h-[50vh] md:h-[60vh] lg:h-[85vh] z-10 order-1 lg:order-2"
        >
          {/* We use the image with a clean fade at the bottom. */}
          <motion.div 
            animate={{ 
              y: [0, -20, 0],
              rotateX: [0, 5, 0],
              rotateY: [0, -5, 0]
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full max-w-[500px] h-full flex items-end transform-gpu"
          >
            <img 
              src="/img.png" 
              alt="Padarthi Thimothi" 
              className="w-full object-cover object-bottom h-[90%] filter contrast-[1.05] border-[3px] border-red-600 rounded-[2rem] animate-neon-blink bg-black/20"
              style={{ maskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 75%, transparent 100%)' }}
            />
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN - ID CARD & STATS */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
          className="w-full lg:w-3/12 flex flex-col items-center lg:items-end justify-start mt-8 lg:mt-0 relative z-20 order-3 pb-20 lg:pb-0"
        >
          {/* ID Card Graphic */}
          <motion.div 
            initial={{ y: -150, opacity: 0, rotateZ: -15 }}
            animate={{ y: 0, opacity: 1, rotateZ: 0 }}
            transition={{ type: "spring", bounce: 0.5, duration: 1.5, delay: 1.2 }}
            className="relative w-48 mb-8 flex flex-col items-center origin-top"
          >
            {/* Lanyard/Clip */}
            <div className="w-2 h-16 bg-red-600 absolute -top-16 rounded-sm z-0"></div>
            <div className="w-6 h-4 bg-gray-300 absolute -top-4 rounded-sm z-10 border border-gray-400 shadow-md flex justify-center">
              <div className="w-3 h-2 bg-gray-800 rounded-b-sm mt-1"></div>
            </div>
            
            {/* The ID Card */}
            <div className="bg-black/60 backdrop-blur-md border-[2px] border-red-600 animate-neon-blink p-2 rounded-xl shadow-2xl w-full rotate-3 hover:rotate-0 transition-transform duration-500 z-20">
              <div className="bg-[#0a0a0a] rounded-lg overflow-hidden border border-red-500/30">
                <div className="h-32 w-full overflow-hidden relative">
                  <img src="/img.png" className="w-full h-full object-cover grayscale-[0.2]" alt="ID Portrait" />
                  {/* Subtle red overlay */}
                  <div className="absolute inset-0 bg-red-600/10 mix-blend-overlay"></div>
                </div>
                <div className="p-3 bg-white text-black flex justify-between items-center gap-2">
                  <span className="font-bebas text-xl leading-none truncate">THIMOTHI</span>
                  <span className="text-[7px] font-bold uppercase tracking-wider text-red-600 bg-red-100 px-1.5 py-0.5 rounded-sm whitespace-nowrap">Cyber Security</span>
                </div>
              </div>
            </div>
            
            {/* Circular decorative text next to lanyard */}
            <div className="absolute -top-12 -right-8 w-16 h-16 animate-spin-slow opacity-50 pointer-events-none">
               <svg viewBox="0 0 100 100" width="100" height="100">
                <defs>
                  <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"/>
                </defs>
                <text fontSize="10" fill="white" letterSpacing="2">
                  <textPath href="#circle">
                    • CYBERSECURITY • VAPT • NETWORK
                  </textPath>
                </text>
              </svg>
            </div>
          </motion.div>

          {/* Bullet Point */}
          <div className="flex items-start gap-3 mb-8 mx-auto lg:mr-0 lg:ml-auto max-w-[200px]">
            <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 shrink-0 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></div>
            <p className="text-[10px] text-gray-300 leading-relaxed uppercase tracking-wider text-left">
              Building resilient systems, vulnerability assessments, and strengthening campus tech innovation.
            </p>
          </div>

          {/* Stats Display */}
          <div className="flex flex-col items-center lg:items-end gap-8 text-right">
            <div className="flex items-center gap-3">
              <div className="text-left text-[8px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                B-TECH CS • <br/>
                EMERGING TECH
              </div>
              <div className="text-5xl font-bebas text-red-600 leading-none">4TH<br/><span className="text-3xl">YR</span></div>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="text-left text-[8px] uppercase tracking-widest text-gray-400 font-bold leading-tight">
                FEATURED <br/>
                PROJECTS
              </div>
              <div className="text-6xl font-bebas text-red-600 leading-none">4+</div>
            </div>
          </div>
          
        </motion.div>

      </div>
    </section>
  );
}
