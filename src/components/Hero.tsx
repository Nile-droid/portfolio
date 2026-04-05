import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, Phone, ExternalLink } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Typewriter = ({ texts }: { texts: string[] }) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  useEffect(() => {
    const handleType = () => {
      const currentFullText = texts[currentIndex % texts.length];
      
      if (isDeleting) {
        setDisplayText(currentFullText.substring(0, displayText.length - 1));
        setTypingSpeed(50);
      } else {
        setDisplayText(currentFullText.substring(0, displayText.length + 1));
        setTypingSpeed(100);
      }

      if (!isDeleting && displayText === currentFullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setCurrentIndex(currentIndex + 1);
        setTypingSpeed(500);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentIndex, texts, typingSpeed]);

  return <span className="typewriter-cursor text-neon-green">{displayText}</span>;
};

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll();
  
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 1.1]);

  const easeExpo = [0.19, 1, 0.22, 1] as const;

  const socialLinks = [
    { icon: <FaGithub size={18} />, url: "https://github.com/Nile-droid", label: "GitHub" },
    { icon: <FaLinkedin size={18} />, url: "https://www.linkedin.com/in/nilesh-mishra-b23a18282/", label: "LinkedIn" },
    { icon: <Mail size={18} />, url: "mailto:nileshboy36@gmail.com", label: "Email" },
    { icon: <Phone size={18} />, url: "tel:+918928212064", label: "Call" }
  ];

  return (
    <div ref={containerRef} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Cinematic Animated Gradient BG */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-green/5 blur-[120px] rounded-full animate-pulse-slow font-inter" />
        <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-neon-blue/5 blur-[100px] rounded-full animate-pulse-slow" />
      </div>

      <div className="container mx-auto px-10 relative z-10 flex flex-col md:flex-row items-center justify-between gap-20">
        
        {/* Left Side: Text Content */}
        <motion.div 
          style={{ y: y1 }}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5, ease: easeExpo }}
          className="flex-1 space-y-10 text-center md:text-left"
        >
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 1, delay: 0.8, ease: easeExpo }}
              className="w-20 h-1 bg-neon-green mb-8 rounded-full shadow-[0_0_15px_#39ff14] mx-auto md:mx-0"
            />
            
            <motion.h1 
              className="text-6xl md:text-8xl font-black tracking-tighter text-white leading-[0.9]"
            >
              NILESH<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neon-green/50">
                MISHRA
              </span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="text-sm md:text-xl font-orbitron tracking-widest text-white/80 min-h-[1.5em]"
            >
              <Typewriter texts={[
                "DevOps Engineer",
                "Software Developer",
                "Java Specialist"
              ]} />
            </motion.div>
          </div>

          {/* Social Links Grid */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="flex flex-wrap justify-center md:justify-start gap-4 items-center"
          >
            {socialLinks.map((link) => (
              <a 
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="interactive w-10 h-10 glass-panel flex items-center justify-center text-white/50 hover:text-neon-green hover:border-neon-green hover:shadow-[0_0_15px_rgba(57,255,20,0.3)] transition-all duration-500 rounded-lg group"
                title={link.label}
              >
                <div className="group-hover:scale-110 transition-transform">{link.icon}</div>
              </a>
            ))}
          </motion.div>

          {/* Floating Call to Action */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8, ease: easeExpo }}
            className="pointer-events-auto"
          >
            <button className="interactive group relative px-10 py-5 bg-white/5 border border-white/10 rounded-full text-white font-orbitron text-[10px] tracking-[0.5em] hover:border-neon-green hover:shadow-[0_0_30px_rgba(57,255,20,0.3)] transition-all duration-500 backdrop-blur-md uppercase overflow-hidden">
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">
                🚀 Hire Me / View Projects
              </span>
              <div className="absolute inset-0 bg-neon-green translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]" />
            </button>
          </motion.div>
        </motion.div>

        {/* Right Side: Profile Photo */}
        <motion.div
          initial={{ opacity: 0, x: 100, scale: 0.8 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.5, ease: easeExpo, delay: 0.5 }}
          className="flex-1 relative group"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
            {/* Animated Glow Rings */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-4 border border-dashed border-neon-green/30 rounded-full"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-8 border border-dotted border-neon-blue/20 rounded-full"
            />
            
            {/* Image Container */}
            <div className="absolute inset-0 rounded-full border-2 border-neon-green/50 shadow-[0_0_40px_rgba(57,255,20,0.2)] overflow-hidden glass-panel group-hover:border-neon-green group-hover:shadow-[0_0_60px_rgba(57,255,20,0.4)] transition-all duration-700 hover:scale-105 group-hover:rotate-3">
              <img 
                src="assets/profileee.jpg" 
                alt="Nilesh Mishra" 
                className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-1000"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-cyber-black/40 to-transparent pointer-events-none" />
            </div>

            {/* Float Element (Decoration) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-4 -right-4 w-12 h-12 glass-panel flex items-center justify-center text-neon-green"
            >
              <ExternalLink size={20} className="animate-pulse" />
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Parallax Orbs */}
      <motion.div
        style={{ scale }}
        className="absolute w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-neon-green/5 via-neon-blue/5 to-transparent blur-3xl opacity-40 pointer-events-none"
      />
    </div>
  );
};

export default Hero;
