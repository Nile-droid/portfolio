import { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ExternalLink, CodeXml, Zap, Star, Server, Layout } from 'lucide-react';

interface ProjectLink {
  label: string;
  url: string;
  type: 'code' | 'live';
}

interface ProjectData {
  title: string;
  tech: string[];
  desc: string;
  links: ProjectLink[];
  featured?: boolean;
}

const ProjectCard = ({ project }: { project: ProjectData }) => {
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
      transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] as const }}
      className={`glass-panel p-8 relative group cursor-pointer interactive overflow-hidden ${project.featured ? 'md:col-span-2 lg:col-span-3 border-neon-green/30' : ''}`}
    >
      <div 
        style={{ transform: "translateZ(50px)" }}
        className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-100 transition-opacity duration-500"
      >
        <Zap className={project.featured ? "text-neon-green" : "text-neon-blue"} size={project.featured ? 60 : 40} />
      </div>

      <div className={`relative z-10 flex flex-col ${project.featured ? 'md:flex-row gap-12 items-center' : 'gap-6'}`} style={{ transform: "translateZ(30px)" }}>
        
        {/* Images Area */}
        <div className={`flex gap-4 ${project.featured ? 'md:w-1/2' : 'w-full'} flex-col`}>
          {project.featured && (
            <div className="flex items-center gap-2 text-neon-green font-orbitron text-[10px] tracking-widest uppercase mb-2">
              <Star size={14} className="fill-neon-green" /> Featured Project
            </div>
          )}
          
          <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 group-hover:border-white/20 transition-colors">
             <div className="absolute inset-0 bg-gradient-to-br from-cyber-black via-gray-900 to-black p-4 flex items-center justify-center">
                <div className="text-white/20 font-orbitron text-[10px] uppercase tracking-[0.3em] text-center flex flex-col items-center gap-4">
                   {project.featured ? <Layout size={40} className="text-neon-green/40"/> : <Server size={30} className="text-neon-blue/40"/>}
                   Simulation UI Placeholder
                </div>
             </div>
          </div>
          
          <div className="flex gap-2 h-16 w-full">
            <div className="flex-1 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10" />
            <div className="flex-1 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10" />
            <div className="flex-1 bg-gradient-to-br from-white/5 to-transparent rounded-lg border border-white/10" />
          </div>
        </div>

        {/* Content Area */}
        <div className={`space-y-6 ${project.featured ? 'md:w-1/2' : ''}`}>
          <h3 className={`font-black text-white group-hover:${project.featured ? 'text-neon-green' : 'text-neon-blue'} transition-colors duration-300 ${project.featured ? 'text-4xl' : 'text-2xl'}`}>
            {project.title}
          </h3>

          <p className="text-gray-400 text-xs leading-relaxed font-inter opacity-80 group-hover:opacity-100 transition-opacity">
            {project.desc}
          </p>

          <div className="flex flex-wrap gap-2">
            {project.tech.map((t: string) => (
              <span key={t} className={`text-[9px] font-orbitron border px-2 py-1 rounded-sm tracking-widest ${project.featured ? 'text-neon-green border-neon-green/20 bg-neon-green/5' : 'text-neon-blue border-neon-blue/20 bg-neon-blue/5'}`}>
                {t}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
            {project.links.map((link, idx) => (
              <a 
                key={idx} 
                href={link.url} 
                className={`flex items-center items-center justify-center gap-2 text-[10px] font-orbitron transition-all duration-300 interactive ${
                  link.type === 'live' 
                    ? 'text-black bg-neon-green border border-neon-green px-4 py-2 rounded-md hover:bg-white hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.5)]' 
                    : 'text-white/60 hover:text-white px-2 py-2 rounded-md hover:bg-white/5 border border-transparent hover:border-white/10'
                }`}
              >
                {link.type === 'code' ? <CodeXml size={14} /> : <ExternalLink size={14} />} 
                <span className="tracking-widest uppercase mt-[2px]">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      
      {/* Dynamic Glow Effect */}
      <div className={`absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ${project.featured ? 'from-neon-green/5' : 'from-neon-blue/5'} to-transparent`} />
      <div className={`absolute -inset-[1px] bg-gradient-to-r via-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${project.featured ? 'from-neon-green/30 to-neon-blue/30' : 'from-neon-blue/20 to-neon-purple/20'}`} />
    </motion.div>
  );
};

const ProjectPanels = () => {
  const projects: ProjectData[] = [
    {
      title: "SnackTrack",
      featured: true,
      tech: ["Java", "Firebase", "Gemini AI", "REST APIs"],
      desc: "An AI-powered nutrition tracking and fitness assistant. Engineered using Java and connected to Firebase for real-time data flow with seamless integration of external AI APIs for image recognition and smart diet planning.",
      links: [
        { label: "View Code", url: "#", type: "code" }
      ]
    },
    {
      title: "AI Task Processing Platform",
      tech: ["MERN", "Python", "Redis", "Docker", "Kubernetes", "Argo CD"],
      desc: "Full-scale production-ready system with async task processing, CI/CD, and GitOps deployment.",
      links: [
        { label: "App Code", url: "https://github.com/Nile-droid/ai-task-platform", type: "code" },
        { label: "Infra Code", url: "https://github.com/Nile-droid/ai-task-platform-infra", type: "code" },
        { label: "Live Demo", url: "#", type: "live" }
      ]
    },
    {
      title: "Advanced DevOps Project",
      tech: ["Docker", "Jenkins", "Nginx", "Prometheus", "Grafana"],
      desc: "Microservices-based system architecture integrating a robust CI/CD pipeline and granular monitoring tools.",
      links: [
        { label: "View Code", url: "https://github.com/Nile-droid/advanced-devops-project", type: "code" }
      ]
    },
    {
      title: "DevOps Starter Project",
      tech: ["Linux", "Git", "Docker", "Flask"],
      desc: "Demonstrates core DevOps workflows featuring a containerized Python web application and fluid GitHub integration.",
      links: [
        { label: "View Code", url: "https://github.com/Nile-droid/DevOps-Starter-Project", type: "code" }
      ]
    },
    {
      title: "Construction Field Management App",
      tech: ["React", "Vite", "Tailwind CSS"],
      desc: "Responsive high-performance web app for managing construction projects and dynamic daily reports tracking.",
      links: [
        { label: "View Code", url: "https://github.com/Nile-droid/construction-field-management-frontend", type: "code" }
      ]
    }
  ];

  return (
    <section className="py-32 px-10 max-w-7xl mx-auto" id="projects">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] as const }}
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
