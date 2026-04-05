import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const easeExpo = [0.19, 1, 0.22, 1] as const;

  const socialLinks = [
    { icon: <FaGithub size={20} />, url: "https://github.com/Nile-droid", label: "GitHub" },
    { icon: <FaLinkedin size={20} />, url: "https://www.linkedin.com/in/nilesh-mishra-b23a18282/", label: "LinkedIn" },
    { icon: <Mail size={20} />, url: "mailto:nileshboy36@gmail.com", label: "Email" },
    { icon: <Phone size={20} />, url: "tel:+918928212064", label: "Call" }
  ];

  return (
    <div className="relative min-h-screen flex items-center justify-center pt-10 overflow-hidden" id="hero">
      <div className="container mx-auto px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side: Text Content */}
        <motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: easeExpo }}
          className="flex-1 space-y-8 text-center md:text-left"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.3, ease: easeExpo }}
              className="w-20 h-1 bg-gradient-primary mb-8 rounded-full mx-auto md:mx-0 origin-left"
            />
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: easeExpo }}
              className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]"
            >
              NILESH<br/>
              <span className="text-gradient">
                MISHRA
              </span>
            </motion.h1>
            
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg md:text-2xl font-inter font-light tracking-wide text-white/80"
            >
              DevOps Engineer | Java Intern
            </motion.h2>
          </div>

          {/* Social Links Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 items-center"
          >
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive w-12 h-12 glass-panel flex items-center justify-center text-white/70 hover:text-white hover:border-[#ff6b6b]/50 transition-all duration-300 rounded-xl group"
                title={link.label}
              >
                <div className="group-hover:scale-110 group-hover:-translate-y-1 transition-transform">{link.icon}</div>
              </a>
            ))}
          </motion.div>

          {/* Floating Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2, ease: easeExpo }}
          >
            <a href="#projects" className="inline-block interactive group relative px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white font-orbitron tracking-[0.2em] transition-all duration-300 backdrop-blur-md overflow-hidden">
              <span className="relative z-10 transition-colors duration-300">
                VIEW WORK
              </span>
              <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: easeExpo, delay: 0.5 }}
          className="flex-1 relative group mt-10 md:mt-0"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Image Container */}
            <div className="absolute inset-0 rounded-full border-gradient shadow-2xl overflow-hidden glass-panel transition-all duration-500 hover:scale-[1.02]">
              <img 
                src="assets/profileee.jpg" 
                alt="Nilesh Mishra" 
                className="w-full h-full object-cover scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default Hero;
