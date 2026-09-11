import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Github, Linkedin, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    
    // Simulate network delay for UX
    setTimeout(() => {
      setStatus('success');
      // We do not clear the form immediately here so they can still send it via the buttons
    }, 1000);
  };

  const handleSendViaGmail = () => {
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=padarthithimothi@gmail.com&su=${encodeURIComponent(formData.subject || 'New Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.open(gmailUrl, '_blank');
    resetForm();
  };

  const handleSendViaDefaultApp = () => {
    const mailtoUrl = `mailto:padarthithimothi@gmail.com?subject=${encodeURIComponent(formData.subject || 'New Contact Form Submission')}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`;
    window.location.href = mailtoUrl;
    resetForm();
  };

  const resetForm = () => {
    setFormData({ name: '', email: '', subject: '', message: '' });
    setStatus('idle');
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-red/5 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-px w-8 bg-brand-red"></div>
              <p className="text-sm font-medium tracking-widest text-brand-red uppercase">Contact</p>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-display font-bold leading-[1.1] mb-6 text-white">
              LET'S BUILD <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-red to-brand-red-dark text-glow">
                SOMETHING SECURE.
              </span>
            </h2>
            
            <p className="text-lg text-gray-400 mb-12 max-w-md font-light leading-relaxed">
              Have a security project, internship opportunity, or collaboration in mind? Let's connect.
            </p>

            <div className="space-y-6 mb-12">
              <a href="mailto:padarthithimothi@gmail.com" className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded group-hover:border-brand-red/50 transition-colors">
                  <Mail className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-1">Email</p>
                  <p className="text-white group-hover:text-brand-red transition-colors font-medium">padarthithimothi@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded group-hover:border-brand-red/50 transition-colors">
                  <Phone className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-1">Phone</p>
                  <p className="text-white font-medium">+91 9704135381</p>
                </div>
              </div>

              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center rounded group-hover:border-brand-red/50 transition-colors">
                  <MapPin className="w-5 h-5 text-brand-red" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 font-medium tracking-wider uppercase mb-1">Location</p>
                  <p className="text-white font-medium">Bapatla District, Andhra Pradesh, India</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a 
                href="mailto:padarthithimothi@gmail.com"
                className="flex items-center gap-2 bg-brand-red text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-brand-red-dark transition-colors box-glow"
              >
                <Mail className="w-4 h-4" /> EMAIL ME
              </a>
              <a 
                href="https://linkedin.com/in/padarthi-thimothi-474058362"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors"
              >
                <Linkedin className="w-4 h-4" /> LINKEDIN
              </a>
              <a 
                href="https://github.com/padarthithimothi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 border border-white/20 text-white px-6 py-3 text-sm font-bold tracking-wider hover:bg-white/10 transition-colors"
              >
                <Github className="w-4 h-4" /> GITHUB
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="glass-card p-8 md:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-xs font-medium text-gray-400 tracking-wider uppercase">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  placeholder="John Doe"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-xs font-medium text-gray-400 tracking-wider uppercase">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  placeholder="john@example.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-medium text-gray-400 tracking-wider uppercase">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all"
                  placeholder="Security Consultation"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium text-gray-400 tracking-wider uppercase">Message</label>
                <textarea 
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-black/50 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-brand-red focus:ring-1 focus:ring-brand-red transition-all resize-none"
                  placeholder="How can I help you?"
                ></textarea>
              </div>

              {status !== 'success' ? (
                <button 
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full bg-white text-black font-bold tracking-wider py-4 rounded flex items-center justify-center gap-2 hover:bg-gray-200 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'idle' && (
                    <>CONTINUE <Send className="w-4 h-4" /></>
                  )}
                  {status === 'sending' && (
                    <>PREPARING MESSAGE...</>
                  )}
                </button>
              ) : (
                <div className="flex flex-col gap-3 p-4 bg-brand-red/10 border border-brand-red/20 rounded-md">
                  <p className="text-xs text-white/80 text-center mb-2">How would you like to send this message?</p>
                  
                  <button 
                    type="button"
                    onClick={handleSendViaGmail}
                    className="w-full bg-red-600 text-white font-bold tracking-wider py-3 rounded flex items-center justify-center gap-2 hover:bg-red-700 transition-colors"
                  >
                    SEND VIA GMAIL (WEB)
                  </button>
                  
                  <button 
                    type="button"
                    onClick={handleSendViaDefaultApp}
                    className="w-full bg-white/10 text-white font-bold tracking-wider py-3 rounded flex items-center justify-center gap-2 hover:bg-white/20 transition-colors text-xs"
                  >
                    SEND VIA DESKTOP MAIL APP
                  </button>

                  <button 
                    type="button"
                    onClick={() => setStatus('idle')}
                    className="mt-2 text-[10px] text-gray-400 hover:text-white uppercase tracking-widest text-center underline decoration-gray-600 underline-offset-4"
                  >
                    Cancel / Edit Message
                  </button>
                </div>
              )}
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
