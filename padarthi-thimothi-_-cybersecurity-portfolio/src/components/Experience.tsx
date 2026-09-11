import { motion } from 'motion/react';
import { Briefcase, ArrowUpRight } from 'lucide-react';

export default function Experience() {
  const achievements = [
    "Assisted in Vulnerability Assessment and Penetration Testing (VAPT) of 8+ web applications and 3 internal servers, identifying critical loopholes and decreasing security exposure by 30%.",
    "Performed active and passive reconnaissance, mapping 120+ network endpoints using Nmap, theHarvester, and Subfinder.",
    "Conducted security testing against OWASP Top 10 vulnerabilities using Burp Suite and documented 15+ security findings.",
    "Drafted professional assessment reports containing risk ratings and remediation guidelines, helping accelerate patch deployment turnaround time by 25%.",
    "Collaborated with the security team on technical documentation and used Kali Linux, Metasploit, and Wireshark to simulate realistic attack vectors."
  ];

  return (
    <section id="experience" className="py-24 relative border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center flex flex-col md:items-center"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-brand-red"></div>
            <p className="text-sm font-medium tracking-widest text-brand-red uppercase">Career</p>
            <div className="hidden md:block h-px w-8 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">EXPERIENCE</h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-white/10"></div>
          <div className="absolute left-0 md:left-8 top-0 h-32 w-px bg-gradient-to-b from-brand-red to-transparent z-10"></div>

          {/* Experience Item */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="relative pl-8 md:pl-24"
          >
            {/* Timeline Node */}
            <div className="absolute left-[-5px] md:left-[27px] top-6 w-3 h-3 rounded-full bg-brand-red box-glow z-20 ring-4 ring-brand-dark"></div>
            
            <div className="glass-card p-8 md:p-10">
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-4">
                <div>
                  <h3 className="text-2xl font-bold font-display text-white mb-2">CYBER SECURITY INTERN</h3>
                  <div className="flex items-center text-brand-red font-medium mb-1">
                    <Briefcase className="w-4 h-4 mr-2" />
                    <span>SynthoQuest</span>
                  </div>
                </div>
                <div className="text-left md:text-right">
                  <span className="inline-block px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-gray-300 font-medium mb-2">Remote / On-site</span>
                  <p className="text-sm text-gray-400">May 2026 – June 2026</p>
                </div>
              </div>

              <div className="w-full h-px bg-white/5 my-6"></div>

              <ul className="space-y-4">
                {achievements.map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <ArrowUpRight className="w-5 h-5 text-brand-red shrink-0 mr-3 mt-0.5" />
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">{item}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
