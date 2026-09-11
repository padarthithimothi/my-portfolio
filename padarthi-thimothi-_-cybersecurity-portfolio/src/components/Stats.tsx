import { motion } from 'motion/react';
import { useEffect, useState, useRef } from 'react';
import { useInView } from 'motion/react';

const CountUp = ({ end, label, suffix = "" }: { end: number, label: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000; // ms
      const increment = end / (duration / 16); // 60fps

      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [isInView, end]);

  return (
    <div ref={ref} className="text-center md:text-left flex flex-col items-center md:items-start">
      <h4 className="text-5xl md:text-6xl font-display font-bold text-white mb-2 flex items-center tracking-tighter">
        {count}
        <span className="text-white/80 ml-1">{suffix}</span>
      </h4>
      <p className="text-[10px] font-bold tracking-widest text-white/70 uppercase max-w-[150px] leading-relaxed">
        {label}
      </p>
    </div>
  );
};

export default function Stats() {
  return (
    <section className="py-20 relative bg-transparent overflow-hidden">
      <div className="absolute inset-0 bg-dots opacity-20 pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 md:gap-6">
          <CountUp end={8} label="Web Applications Assessed" suffix="+" />
          <CountUp end={3} label="Internal Servers Tested" />
          <CountUp end={120} label="Network Endpoints Mapped" suffix="+" />
          <CountUp end={15} label="Security Findings" suffix="+" />
          <CountUp end={40} label="Services Analyzed" suffix="+" />
          <CountUp end={8} label="Vulnerabilities Verified" />
        </div>
      </div>
    </section>
  );
}
