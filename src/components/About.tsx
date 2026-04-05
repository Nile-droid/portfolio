import { motion } from 'framer-motion';

const About = () => {
  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <section className="py-32 px-10 max-w-7xl mx-auto relative z-10" id="about">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
        
        {/* Left Side: Graphic / Abstract */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: easeExpo }}
          viewport={{ once: true }}
          className="relative h-[400px] w-full glass-panel overflow-hidden border-gradient flex items-center justify-center p-10"
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/5 to-transparent pointer-events-none" />
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-64 h-64 border border-white/10 rounded-full flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="w-48 h-48 border border-white/20 rounded-full flex items-center justify-center border-t-[#ff6b6b] border-b-[#00d2d3]"
            >
              <div className="w-24 h-24 bg-gradient-primary rounded-full blur-xl opacity-50" />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Right Side: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: easeExpo }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-tighter">ABOUT_ME</h2>
            <div className="w-32 h-1 bg-gradient-primary rounded-full" />
          </div>

          <div className="space-y-6 text-gray-400 font-inter leading-relaxed">
            <p>
              I am a BSc IT student and aspiring DevOps Engineer with a strong foundation in Java and cloud technologies.
            </p>
            <p>
              I specialize in building scalable systems, automating workflows, and working with modern DevOps tools like Docker, Kubernetes, and CI/CD pipelines.
            </p>
            <p>
              I am also exploring Agentic AI systems and intelligent automation to build smarter, efficient applications that solve real-world problems.
            </p>
          </div>
          
          <div className="pt-4 border-t border-white/5">
            <div className="flex gap-4 items-center">
              <div className="w-2 h-2 rounded-full bg-[#00d2d3] animate-pulse" />
              <span className="text-[10px] font-orbitron tracking-widest uppercase text-white/50">Available for Opportunities</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
