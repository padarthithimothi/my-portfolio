import { motion } from 'motion/react';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "ETHICAL HACKING & PENETRATION TESTING CERTIFICATION",
      issuer: "SynthoQuest",
      year: "2025"
    },
    {
      title: "WI-FI SECURITY SPECIALIST CERTIFICATION",
      issuer: "SynthoQuest",
      year: "2026"
    }
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-brand-red"></div>
            <p className="text-sm font-medium tracking-widest text-brand-red uppercase">Validation</p>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">CERTIFICATIONS</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="glass-card p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:border-brand-red/50"
            >
              <div className="flex items-start gap-6">
                <div className="w-14 h-14 shrink-0 bg-brand-red/10 border border-brand-red/20 flex items-center justify-center rounded-full group-hover:scale-110 group-hover:bg-brand-red/20 transition-all duration-300">
                  <Award className="w-7 h-7 text-brand-red" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-display text-white mb-2 leading-snug">{cert.title}</h3>
                  <div className="flex items-center gap-3 text-sm font-medium text-gray-400">
                    <span>{cert.issuer}</span>
                    <span className="w-1 h-1 rounded-full bg-brand-red"></span>
                    <span>Issued: {cert.year}</span>
                  </div>
                </div>
              </div>
              <button className="md:w-auto w-full flex items-center justify-center gap-2 border border-white/20 hover:border-white px-5 py-2.5 text-xs font-bold tracking-widest transition-colors shrink-0">
                VIEW <ExternalLink className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
