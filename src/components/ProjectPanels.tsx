import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, CodeXml, Zap } from 'lucide-react';

const ProjectCard = ({ project }: { project: any }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  
  // 3D Tilt Logic
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
      className="glass-panel p-8 relative group cursor-pointer interactive overflow-hidden"
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-500"
      >
        <Zap className="text-neon-green" size={40} />
      </div>

      <div className="relative z-10 space-y-6" style={{ transform: "translateZ(30px)" }}>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t: string) => (
            <span key={t} className="text-[9px] font-orbitron text-neon-green bg-neon-green/5 border border-neon-green/20 px-2 py-1 rounded-sm tracking-wider">
              {t}
            </span>
          ))}
        </div>

        <h3 className="text-2xl font-black text-white group-hover:text-neon-green transition-colors duration-300">
          {project.title}
        </h3>

        <p className="text-gray-400 text-xs leading-relaxed font-inter opacity-80 group-hover:opacity-100 transition-opacity">
          {project.desc}
        </p>

        <div className="flex gap-6 pt-4">
          <a href={project.github} className="flex items-center gap-2 text-[10px] font-orbitron text-white/50 hover:text-neon-green transition-all interactive">
            <CodeXml size={14} /> <span className="tracking-widest">REPOSITORY</span>
          </a>
          <a href={project.link} className="flex items-center gap-2 text-[10px] font-orbitron text-white/50 hover:text-neon-blue transition-all interactive">
            <ExternalLink size={14} /> <span className="tracking-widest">LIVE_SYSTEM</span>
          </a>
        </div>
      </div>
      
      {/* Dynamic Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-neon-green/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-[1px] bg-gradient-to-r from-neon-green/20 via-transparent to-neon-blue/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

const ProjectPanels = () => {
  const projects = [
    {
      title: "SnackTrack",
      tech: ["Java", "Firebase", "Gemini AI", "Cloud Functions"],
      desc: "AI-powered nutrition & fitness platform with image recognition, chatbot, BMI calculator, and diet/workout planning. Built using Java, Firebase, Gemini AI, and APIs. Focus on real-world full-stack system.",
      link: "#", github: "#"
    },
    {
      title: "Banking Account System",
      tech: ["Java", "Hibernate", "MySQL", "JDBC"],
      desc: "Backend system using Java, Hibernate, MySQL with CRUD operations, ACID transactions, DAO pattern, and audit logging. Focus on scalable backend architecture.",
      link: "#", github: "#"
    },
    {
      title: "DevOps CI/CD Pipeline",
      tech: ["GitHub Actions", "Docker", "Linux", "NGINX"],
      desc: "Learning project using GitHub Actions, Docker, and Linux. Focus on deployment automation and DevOps fundamentals.",
      link: "#", github: "#"
    }
  ];

  return (
    <section className="py-32 px-10 max-w-7xl mx-auto" id="projects">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="mb-24 space-y-4"
      >
        <div className="text-neon-green font-orbitron text-[10px] tracking-[0.8em] uppercase mb-2">Portfolio_Directives</div>
        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">ACTIVE_MODULES</h2>
        <div className="w-48 h-1 bg-gradient-to-r from-neon-green via-neon-blue to-transparent rounded-full shadow-[0_0_15px_#39ff14]" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </section>
  );
};

export default ProjectPanels;
