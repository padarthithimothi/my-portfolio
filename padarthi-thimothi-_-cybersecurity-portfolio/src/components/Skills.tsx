import { motion } from 'motion/react';
import { Code, Shield, Database, Layout } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'PROGRAMMING',
      icon: Code,
      skills: ['Python', 'C', 'HTML', 'CSS']
    },
    {
      title: 'SECURITY TOOLS',
      icon: Shield,
      skills: ['Burp Suite', 'Nmap', 'Metasploit Framework', 'Zphisher', 'Aircrack-ng', 'Wireshark', 'Kali Linux']
    },
    {
      title: 'DATABASES & VERSION CONTROL',
      icon: Database,
      skills: ['MongoDB', 'MySQL', 'Git', 'GitHub Actions']
    },
    {
      title: 'SECURITY & CONCEPTS',
      icon: Layout,
      skills: ['CIA Triad', 'Network Security', 'OWASP Top 10', 'VAPT', 'Basic OOPs', 'Basic DSA']
    }
  ];

  return (
    <section id="skills" className="py-24 relative border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center flex flex-col md:items-center"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-brand-red"></div>
            <p className="text-sm font-medium tracking-widest text-brand-red uppercase">Capabilities</p>
            <div className="hidden md:block h-px w-8 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">TECHNICAL ARSENAL</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="glass-card p-8 group relative overflow-hidden"
            >
              <div className="absolute -right-12 -top-12 w-32 h-32 bg-brand-red/5 rounded-full blur-[30px] group-hover:bg-brand-red/10 transition-colors"></div>
              
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded-sm">
                  <category.icon className="w-6 h-6 text-brand-red" />
                </div>
                <h3 className="text-lg font-bold font-display tracking-widest text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-3 relative z-10">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1 bg-white/5 border border-white/10 text-[10px] uppercase tracking-widest text-gray-300 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
