import { motion } from 'motion/react';
import { GraduationCap, Building2 } from 'lucide-react';

export default function Education() {
  const educationList = [
    {
      degree: "BACHELOR OF TECHNOLOGY",
      field: "Computer Science and Engineering – Cyber Security",
      institution: "Bapatla Engineering College",
      location: "Bapatla, Andhra Pradesh",
      period: "Aug 2023 – Aug 2027",
      status: "Pursuing",
      score: "CGPA: 7.56 / 10"
    },
    {
      degree: "INTERMEDIATE",
      field: "Board of Intermediate Education",
      institution: "Sri Chaitanya Junior College",
      location: "Guntur, Andhra Pradesh",
      period: "Aug 2021 – May 2023",
      score: "Percentage: 74.6%"
    }
  ];

  return (
    <section id="education" className="py-24 relative border-t border-white/5 bg-transparent">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16 md:text-center flex flex-col md:items-center"
        >
          <div className="flex items-center space-x-4 mb-4">
            <div className="h-px w-8 bg-brand-red"></div>
            <p className="text-sm font-medium tracking-widest text-brand-red uppercase">Background</p>
            <div className="hidden md:block h-px w-8 bg-brand-red"></div>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold">EDUCATION</h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 md:-translate-x-1/2"></div>
          
          <div className="space-y-16">
            {educationList.map((edu, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Center Node */}
                <div className="absolute left-6 md:left-1/2 top-0 md:top-6 w-4 h-4 rounded-full bg-brand-dark border-2 border-brand-red md:-translate-x-1/2 md:translate-y-0 -translate-x-[7px] z-20"></div>

                {/* Content */}
                <div className={`md:w-1/2 pl-16 md:pl-0 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                  <div className="glass-card p-6 md:p-8 hover:border-brand-red/30 relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-red to-transparent opacity-50 group-hover:opacity-100 transition-opacity"></div>
                    
                    <div className={`flex items-center gap-3 mb-2 ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <GraduationCap className="w-5 h-5 text-brand-red" />
                      <h3 className="text-xl font-bold font-display text-white">{edu.degree}</h3>
                    </div>
                    
                    <p className="text-brand-red font-medium text-sm mb-4">{edu.field}</p>
                    
                    <div className={`flex items-start gap-2 mb-2 text-gray-400 text-sm ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <Building2 className="w-4 h-4 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-gray-300 font-medium">{edu.institution}</p>
                        <p>{edu.location}</p>
                      </div>
                    </div>
                    
                    <div className="w-full h-px bg-white/10 my-4"></div>
                    
                    <div className={`flex flex-wrap items-center gap-3 text-sm font-medium ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                      <span className="text-gray-400">{edu.period}</span>
                      {edu.status && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                          <span className="text-brand-red">{edu.status}</span>
                        </>
                      )}
                      <span className="w-1 h-1 rounded-full bg-gray-600"></span>
                      <span className="text-white bg-white/10 px-2 py-1 rounded">{edu.score}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
