import { motion } from 'motion/react';
import { MapPin, ShieldAlert, GraduationCap, Target } from 'lucide-react';

export default function About() {
  const infoCards = [
    {
      icon: GraduationCap,
      label: 'EDUCATION',
      value: 'B.Tech CSE – Cyber Security',
    },
    {
      icon: ShieldAlert,
      label: 'SPECIALIZATION',
      value: 'Cybersecurity',
    },
    {
      icon: MapPin,
      label: 'LOCATION',
      value: 'Bapatla District, AP',
    },
    {
      icon: Target,
      label: 'FOCUS',
      value: 'VAPT & Ethical Hacking',
    },
  ];

  return (
    <section id="about" className="py-24 relative border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-8">
              SECURITY IS <br />
              NOT JUST A SKILL. <br />
              <span className="text-brand-red">IT'S A MINDSET.</span>
            </h2>
            <div className="w-20 h-1 bg-brand-red"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-12"
          >
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed font-light">
              Motivated and detail-oriented Cybersecurity undergraduate with hands-on experience in ethical hacking, penetration testing, and network vulnerability assessment. Skilled in utilizing industry-standard tools like Kali Linux, Metasploit, Burp Suite, and Nmap to mitigate digital risks, strengthen enterprise security postures, and build resilient systems.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {infoCards.map((card, index) => (
                <div key={index} className="glass-card p-5 group flex flex-col justify-between">
                  <div className="mb-4">
                    <card.icon className="text-brand-red/70 group-hover:text-brand-red transition-colors w-6 h-6 mb-3" />
                    <p className="text-[10px] text-gray-500 font-medium tracking-[0.15em] uppercase mb-1">{card.label}</p>
                  </div>
                  <p className="text-sm font-medium text-gray-200">{card.value}</p>
                </div>
              ))}
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
