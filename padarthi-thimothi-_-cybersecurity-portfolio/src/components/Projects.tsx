import { motion } from 'motion/react';
import { ExternalLink, Github, ShieldAlert } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "WEB APPLICATION VULNERABILITY ASSESSMENT",
      category: "Personal Project",
      tools: ["Burp Suite", "Kali Linux", "Nmap", "OWASP Top 10"],
      description: "Performed vulnerability testing in controlled environments to identify and verify web application security weaknesses.",
      results: [
        "Identified and verified 8 high/medium severity vulnerabilities",
        "SQL Injection",
        "Cross-Site Scripting (XSS)",
        "Broken Authentication",
        "Created detailed risk-assessment documentation",
        "Developed reproduction PoCs",
        "Proposed system hardening measures"
      ],
      lab: false
    },
    {
      id: "02",
      title: "NETWORK SECURITY ASSESSMENT USING NMAP",
      category: "Personal Project",
      tools: ["Nmap", "Wireshark", "Kali Linux"],
      description: "Conducted comprehensive network security assessments on custom local laboratory systems.",
      results: [
        "Examined 40+ distinct services and port structures",
        "Performed network reconnaissance and scanning",
        "Analyzed packet captures using Wireshark",
        "Identified cleartext credential flows",
        "Prepared system hardening reports",
        "Proposed service configuration improvements"
      ],
      lab: false
    },
    {
      id: "03",
      title: "WI-FI SECURITY ASSESSMENT",
      category: "Personal Lab",
      tools: ["Kali Linux", "Aircrack-ng", "Wireshark"],
      description: "Performed controlled wireless security testing in a safe home laboratory environment.",
      results: [
        "Simulated wireless handshake de-authentication attacks",
        "Identified 2 WPA2 configuration design flaws",
        "Analyzed wireless security configurations",
        "Proposed security improvements",
        "Recommended WPS disabling",
        "Recommended periodic credential rotation"
      ],
      lab: true
    }
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-red/5 blur-[150px] pointer-events-none rounded-l-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-brand-red"></div>
            <p className="text-sm font-medium tracking-widest text-brand-red uppercase">Portfolio</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">SELECTED SECURITY PROJECTS</h2>
        </motion.div>

        <div className="space-y-12 md:space-y-24">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7 }}
              className="glass-card group hover:border-white/20 transition-all duration-500 overflow-hidden relative"
            >
              {/* Decorative Number */}
              <div className="absolute -right-8 -top-8 text-[150px] font-display font-bold text-white/[0.02] group-hover:text-white/[0.05] transition-colors duration-500 pointer-events-none select-none z-0">
                {project.id}
              </div>

              <div className="p-8 md:p-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-12">
                  
                  {/* Left Column: Info */}
                  <div className="lg:w-5/12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-xs font-bold tracking-widest text-gray-500">PROJECT {project.id}</span>
                        <span className="w-8 h-px bg-white/20"></span>
                        <span className="text-xs font-medium tracking-wider text-brand-red bg-brand-red/10 px-2 py-1 rounded">{project.category}</span>
                      </div>
                      
                      <h3 className="text-2xl md:text-3xl font-display font-bold mb-6 group-hover:text-brand-red transition-colors duration-300">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-8">
                        {project.tools.map((tool, i) => (
                          <span key={i} className="text-[11px] font-medium tracking-wider text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-4">
                      <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 bg-white text-black px-6 py-3 text-sm font-bold tracking-wider hover:bg-gray-200 transition-colors">
                        VIEW PROJECT <ExternalLink className="w-4 h-4" />
                      </button>
                      <button className="flex-1 lg:flex-none flex items-center justify-center gap-2 border border-white/20 px-6 py-3 text-sm font-bold tracking-wider hover:bg-white/5 transition-colors">
                        GITHUB <Github className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Right Column: Results */}
                  <div className="lg:w-7/12 bg-black/40 border border-white/5 p-6 md:p-8 rounded-lg">
                    {project.lab && (
                      <div className="flex items-center gap-2 bg-brand-red/10 text-brand-red border border-brand-red/20 px-4 py-2 rounded mb-6 w-fit">
                        <ShieldAlert className="w-4 h-4" />
                        <span className="text-[11px] font-bold tracking-widest uppercase">CONTROLLED SECURITY LAB</span>
                      </div>
                    )}
                    
                    <h4 className="text-sm font-bold text-white mb-4 tracking-wider uppercase flex items-center gap-2">
                      Key Results & Findings
                    </h4>
                    
                    <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                      {project.results.map((result, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-brand-red mr-3 text-lg leading-none mt-0.5">•</span>
                          <span className="text-gray-300 text-sm leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
