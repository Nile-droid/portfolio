import { motion } from 'framer-motion';

const SkillsSpecs = () => {
  const skillGroups = [
    {
      title: "Cloud & DevOps",
      skills: ["AWS", "Docker", "Jenkins", "Git/GitHub", "Linux", "Shell Scripting"]
    },
    {
      title: "Programming",
      skills: ["Java", "JavaScript", "SQL"]
    },
    {
      title: "Web Development",
      skills: ["HTML5", "CSS3", "React"]
    },
    {
      title: "Backend & APIs",
      skills: ["JDBC", "REST API"]
    },
    {
      title: "Databases",
      skills: ["MySQL", "PostgreSQL", "Normalization"]
    },
    {
      title: "Networking",
      skills: ["TCP/IP", "DNS", "HTTP/HTTPS", "SSH"]
    },
    {
      title: "Tools",
      skills: ["VS Code", "IntelliJ", "Postman", "Git Bash", "Putty", "Docker Desktop"]
    }
  ];

  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <section className="py-24 px-10 max-w-7xl mx-auto relative z-10" id="skills">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: easeExpo }}
        viewport={{ once: true }}
        className="mb-16 space-y-4 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">TECHNICAL_ARSENAL</h2>
        <div className="w-48 h-1 bg-gradient-primary rounded-full shadow-[0_0_15px_rgba(255,107,107,0.5)] mx-auto md:mx-0" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {skillGroups.map((group, groupIdx) => (
          <motion.div
            key={groupIdx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: groupIdx * 0.1, ease: easeExpo }}
            viewport={{ once: true }}
            className={`glass-panel p-6 relative group border border-white/5 hover:border-white/20 transition-all duration-300 ${groupIdx === 0 ? 'md:col-span-2 lg:col-span-2 bg-gradient-to-br from-white/5 to-transparent' : ''}`}
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-4">
              <div className="w-2 h-2 bg-[#ff6b6b] rounded-full group-hover:animate-ping" />
              <h3 className="text-sm font-orbitron tracking-widest text-[#00d2d3] font-bold uppercase">{group.title}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill, skillIdx) => (
                <div 
                  key={skillIdx}
                  className="bg-white/5 text-white/80 hover:text-white px-3 py-1.5 rounded-md text-xs font-inter border border-white/5 hover:border-white/30 hover:bg-white/10 transition-all cursor-default"
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSpecs;
