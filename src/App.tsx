import { motion } from 'framer-motion';
import Hero from './components/Hero';
import About from './components/About';
import SkillsSpecs from './components/SkillsSpecs';
import Certifications from './components/Certifications';
import ProjectPanels from './components/ProjectPanels';
import ContactGlass from './components/ContactGlass';

function App() {
  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <div className="relative min-h-screen bg-cyber-black text-white selection:bg-[#5f27cd]/30 overflow-x-hidden selection:text-white">
      {/* Background Gradient Mesh */}
      <div className="fixed inset-0 pointer-events-none bg-gradient-to-br from-gray-950 via-[#0b0c10] to-gray-900 -z-10 flex items-center justify-center">
         <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#ff6b6b]/5 blur-[120px] rounded-full pointer-events-none" />
         <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#00d2d3]/5 blur-[120px] rounded-full pointer-events-none" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full p-6 md:p-10 z-50 flex flex-col md:flex-row justify-between items-center pointer-events-none backdrop-blur-md bg-cyber-black/40 border-b border-white/5">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black text-white pointer-events-auto interactive tracking-tighter"
        >
          NILESH<span className="text-gradient">.DEV</span>
        </motion.div>
        
        <div className="hidden md:flex gap-10 pointer-events-auto">
          {["About", "Skills", "Certifications", "Projects", "Contact"].map((item, i) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i, ease: easeExpo }}
              className="text-xs font-orbitron tracking-widest text-white/50 hover:text-white transition-all duration-300 interactive group"
            >
              {`// ${item.toUpperCase()}`}
              <div className="h-0.5 w-0 group-hover:w-full bg-gradient-primary mt-1 transition-all duration-300" />
            </motion.a>
          ))}
        </div>
      </nav>

      <main className="relative z-20 pt-20">
        <Hero />
        
        <div className="relative">
          <About />
          <SkillsSpecs />
          <Certifications />
          <ProjectPanels />
          <ContactGlass />
        </div>

        <footer className="py-12 border-t border-white/5 text-center space-y-4 relative overflow-hidden">
          <p className="text-[10px] font-orbitron text-white/40 tracking-[0.2em]">
            DESIGNED & BUILT BY NILESH MISHRA © 2026
          </p>
        </footer>
      </main>
    </div>
  );
}

export default App;
