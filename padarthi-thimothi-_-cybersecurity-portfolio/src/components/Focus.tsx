import { motion } from 'motion/react';
import { ShieldCheck, Terminal, Globe, Network, Wifi, LineChart } from 'lucide-react';

export default function Focus() {
  const focuses = [
    {
      title: 'VAPT',
      description: 'Vulnerability Assessment & Penetration Testing',
      icon: ShieldCheck
    },
    {
      title: 'ETHICAL HACKING',
      description: 'Security testing and controlled attack simulation',
      icon: Terminal
    },
    {
      title: 'WEB SECURITY',
      description: 'OWASP Top 10 and web application security testing',
      icon: Globe
    },
    {
      title: 'NETWORK SECURITY',
      description: 'Network reconnaissance, scanning and packet analysis',
      icon: Network
    },
    {
      title: 'WIRELESS SECURITY',
      description: 'Wi-Fi security assessment and WPA2 testing',
      icon: Wifi
    },
    {
      title: 'SECURITY ANALYSIS',
      description: 'Risk assessment, reporting and remediation',
      icon: LineChart
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-24 relative">
      {/* Background element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-brand-red/5 blur-[120px] pointer-events-none rounded-full"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-brand-red"></div>
            <p className="text-sm font-medium tracking-widest text-brand-red uppercase">Expertise</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">WHAT I WORK WITH</h2>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {focuses.map((focus, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              className="glass-card p-8 group relative overflow-hidden h-full flex flex-col justify-center"
            >
              {/* Subtle hover background */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <focus.icon className="w-10 h-10 text-gray-400 group-hover:text-brand-red transition-colors duration-300 mb-6" strokeWidth={1.5} />
                <h3 className="text-lg font-bold font-display tracking-wide mb-2 group-hover:text-white transition-colors text-gray-200">{focus.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors">{focus.description}</p>
              </div>
              
              {/* Decorative corner accent */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-brand-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-x-8 -translate-y-8 group-hover:translate-x-0 group-hover:translate-y-0"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
