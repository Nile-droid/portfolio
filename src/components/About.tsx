import { useRef } from 'react';
import { motion } from 'framer-motion';

const FloatingAbout = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const cards = [
    { title: "Status", value: "Available for Roles", desc: "Open to full-time Software & DevOps engineering opportunities.", delay: 0.1 },
    { title: "Identity", value: "Developer & Explorer", desc: "BSc IT (Mumbai University, 2026). Passionate about high-end UI and Scalable Systems.", delay: 0.2 },
    { title: "Location", value: "Global / remote", desc: "Based in Mumbai, India. Operating in zero-gravity digital space.", delay: 0.3 },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
        ease: [0.19, 1, 0.22, 1] as const
      }
    }
  };

  return (
    <section ref={containerRef} className="py-32 px-10 max-w-7xl mx-auto relative overflow-hidden" id="about">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="flex flex-col md:flex-row gap-20 items-center"
      >
        <div className="flex-1 space-y-10">
          <motion.div variants={itemVariants} className="flex items-center gap-4">
            <div className="w-10 h-[1px] bg-neon-green" />
            <span className="text-neon-green font-orbitron tracking-[0.5em] text-[10px] uppercase">About_Identity [01]</span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-5xl md:text-7xl font-black text-white leading-[0.9] tracking-tighter">
            ARCHITECTING <br/>THE <span className="text-neon-green">FUTURE_OS</span>
          </motion.h2>

          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-gray-400 leading-relaxed text-lg max-w-xl font-inter">
              I architect digital ecosystems where anti-gravity aesthetics meet high-performance code. Specialized in Python, Java, and the entire DevOps lifecycle. 
            </p>
            <p className="text-gray-400 leading-relaxed text-lg max-w-xl font-inter">
              My mission is to build systems that are not only scalable but also visually immersive, bridging the gap between cold logic and human intuition.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="flex gap-10">
            <div className="space-y-1">
              <div className="text-white font-orbitron text-2xl font-black">2026_</div>
              <div className="text-neon-green font-orbitron text-[8px] uppercase tracking-widest opacity-50">GRADUATE_EXPECTED</div>
            </div>
            <div className="space-y-1">
              <div className="text-white font-orbitron text-2xl font-black">15+_</div>
              <div className="text-neon-green font-orbitron text-[8px] uppercase tracking-widest opacity-50">CORE_MODULES_BUILT</div>
            </div>
          </motion.div>
        </div>

        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 relative">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              whileHover={{ 
                y: -10, 
                scale: 1.02,
                borderColor: 'rgba(57,255,20,0.4)',
                boxShadow: '0 0 40px rgba(57,255,20,0.1)'
              }}
              className="glass-panel p-10 space-y-6 transition-all duration-700 interactive group relative overflow-hidden"
            >
              <div className="w-8 h-1 bg-neon-green rounded-full group-hover:w-full transition-all duration-700 ease-[0.19,1,0.22,1]" />
              <div className="text-[10px] font-orbitron text-neon-green uppercase tracking-widest opacity-60 group-hover:opacity-100 transition-opacity">{card.title}</div>
              <div className="text-xl font-black text-white group-hover:text-glow-green transition-all">{card.value}</div>
              <div className="text-xs text-gray-400 group-hover:text-white/80 transition-colors leading-relaxed">{card.desc}</div>
              
              {/* Internal Glow on Hover */}
              <div className="absolute inset-0 bg-neon-green/0 group-hover:bg-neon-green/[0.02] transition-colors pointer-events-none" />
            </motion.div>
          ))}
          
          {/* Decorative Corner Element */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-neon-green/5 blur-3xl rounded-full pointer-events-none" />
        </div>
      </motion.div>
    </section>
  );
};

export default FloatingAbout;
