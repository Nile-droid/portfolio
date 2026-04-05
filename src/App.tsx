import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SpaceBackground from './components/SpaceBackground';
import MagneticCursor from './components/MagneticCursor';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSpecs from './components/SkillsSpecs';
import ProjectPanels from './components/ProjectPanels';
import RoleCarousel from './components/RoleCarousel';
import ContactGlass from './components/ContactGlass';

const Preloader = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 1, ease: [0.19, 1, 0.22, 1] } }}
      className="fixed inset-0 z-[99999] bg-cyber-black flex flex-col items-center justify-center space-y-12"
    >
      <div className="relative w-40 h-40">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.1, 1] }}
          transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 border-t-[1px] border-neon-green rounded-full shadow-[0_0_30px_rgba(57,255,20,0.2)]"
        />
        <motion.div
          animate={{ rotate: -360, scale: [1, 1.2, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-6 border-b-[1px] border-neon-blue rounded-full shadow-[0_0_30px_rgba(0,243,255,0.2)]"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-1 h-1 bg-white rounded-full animate-ping shadow-[0_0_20px_#fff]" />
        </div>
      </div>
      
      <div className="space-y-4 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-white font-orbitron text-[10px] tracking-[1.5em] uppercase ml-[1.5em]"
        >
          Initializing_Neural_Link
        </motion.div>
        <div className="flex gap-1 justify-center">
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
              className="w-1.5 h-1.5 bg-neon-green rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <div className="relative min-h-screen bg-cyber-black text-white selection:bg-neon-green/30 overflow-x-hidden selection:text-black">
      <AnimatePresence mode="wait">
        {loading && <Preloader key="loader" />}
      </AnimatePresence>

      <SpaceBackground />
      <MagneticCursor />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-10 z-50 flex justify-between items-center pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-white pointer-events-auto interactive tracking-tighter"
        >
          NILESH<span className="text-neon-green">.SYS</span>
        </motion.div>
        
        <div className="hidden md:flex gap-12 pointer-events-auto">
          {["About", "Skills", "Projects", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, ease: easeExpo }}
              className="text-[10px] font-orbitron tracking-[0.4em] text-white/40 hover:text-neon-green transition-all duration-500 interactive group flex flex-col items-center"
            >
              <span className="mb-1 opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
              {`// ${item.toUpperCase()}`}
            </motion.a>
          ))}
        </div>

        <div className="flex items-center gap-4 pointer-events-auto">
          <div className="w-2 h-2 rounded-full bg-neon-green animate-pulse shadow-[0_0_10px_#39ff14]" />
          <div className="text-[10px] font-orbitron text-white/50 tracking-widest uppercase">
            System_Stable
          </div>
        </div>
      </nav>

      <main className="relative z-20">
        <Hero />
        <RoleCarousel />
        
        <div className="relative">
          <About />
          <SkillsSpecs />
          <ProjectPanels />
          <ContactGlass />
        </div>

        <footer className="py-24 border-t border-white/5 text-center space-y-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-neon-green/[0.02] pointer-events-none" />
          <div className="text-[10px] font-orbitron tracking-[1.5em] text-white/20 uppercase ml-[1.5em]">
            Digital_Singularity_Protocol_2026
          </div>
          <p className="text-[8px] font-orbitron text-white/10 tracking-[0.5em]">MADE WITH QUANTUM COMPUTE // NILESH MISHRA</p>
          
          <div className="flex justify-center gap-4 pt-4">
             <div className="w-1 h-1 bg-neon-green/20 rounded-full" />
             <div className="w-1 h-1 bg-neon-blue/20 rounded-full" />
             <div className="w-1 h-1 bg-neon-green/20 rounded-full" />
          </div>
        </footer>
      </main>
      
      {/* Global Vignette & Grain */}
      <div className="fixed inset-0 pointer-events-none shadow-[inset_0_0_150px_rgba(0,0,0,0.8)] z-40" />
      <div className="fixed inset-0 pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] z-[100] brightness-150" />
    </div>
  );
}

export default App;
