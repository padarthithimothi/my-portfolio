import { Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/5 bg-brand-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
        
        <div className="text-center md:text-left">
          <a href="#home" className="text-xl font-bold font-display tracking-wider block mb-2">
            <span className="text-white">PADARTHI </span>
            <span className="text-brand-red">THIMOTHI.</span>
          </a>
          <p className="text-xs text-gray-500 font-medium tracking-widest uppercase">
            Cybersecurity • VAPT • Ethical Hacking
          </p>
        </div>

        <div className="flex items-center gap-6">
          <a 
            href="https://linkedin.com/in/padarthi-thimothi-474058362" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com/padarthithimothi" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="mailto:padarthithimothi@gmail.com" 
            className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-8 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500 font-medium">
        <p>© {currentYear > 2026 ? currentYear : 2026} <span className="text-red-500">Padarthi Thimothi</span>. All rights reserved.</p>
        <div className="flex gap-4">
          <span className="hover:text-gray-300 transition-colors cursor-pointer">Privacy Policy</span>
          <span className="hover:text-gray-300 transition-colors cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
}
