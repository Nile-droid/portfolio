import { motion } from 'framer-motion';

const SkillBar = ({ name, level, delay }: { name: string, level: number, delay: number }) => {
  return (
    <div className="space-y-2 group">
      <div className="flex justify-between items-end">
        <span className="text-[10px] font-orbitron text-white/70 group-hover:text-neon-green transition-colors uppercase tracking-widest">{name}</span>
        <span className="text-[8px] font-orbitron text-neon-green opacity-0 group-hover:opacity-100 transition-opacity">LEVEL_{level}%</span>
      </div>
      <div className="h-[2px] w-full bg-white/5 relative overflow-hidden rounded-full">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay, ease: [0.19, 1, 0.22, 1] }}
          className="absolute inset-y-0 left-0 bg-gradient-to-r from-neon-green to-neon-blue shadow-[0_0_10px_#39ff14]"
        />
      </div>
    </div>
  );
};

const SkillsSpecs = () => {
  const skillGroups = [
    {
      title: "Backend_Engineering",
      skills: [
        { name: "Java / Spring", level: 95 },
        { name: "Python", level: 85 },
        { name: "Microservices", level: 80 },
        { name: "REST APIs", level: 90 }
      ]
    },
    {
      title: "DevOps_n_Cloud",
      skills: [
        { name: "Docker / Containers", level: 88 },
        { name: "CI/CD (GitHub Actions)", level: 85 },
        { name: "Linux / Bash", level: 90 },
        { name: "AWS Configurations", level: 75 }
      ]
    },
    {
      title: "Database_Architecture",
      skills: [
        { name: "MySQL / SQL", level: 92 },
        { name: "Firebase / NoSQL", level: 85 },
        { name: "ORM (Hibernate)", level: 90 },
        { name: "Redis", level: 75 }
      ]
    },
    {
      title: "System_Design",
      skills: [
        { name: "OOPs & Design Patterns", level: 95 },
        { name: "Distributed Systems", level: 80 },
        { name: "Web Servers (NGINX)", level: 85 },
        { name: "Version Control (Git)", level: 92 }
      ]
    }
  ];

  return (
    <section className="py-32 px-10 max-w-7xl mx-auto" id="skills">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: [0.19, 1, 0.22, 1] }}
        className="glass-panel p-10 md:p-16 relative overflow-hidden"
      >
        <div className="absolute top-0 right-0 p-8 flex flex-col items-end opacity-20 pointer-events-none">
          <div className="text-[8px] font-orbitron text-neon-green">SYSTEM_DIAGNOSTIC</div>
          <div className="text-[8px] font-orbitron text-white">X_REF_0.44.1</div>
        </div>

        <div className="mb-20 space-y-4">
          <div className="flex items-center gap-4 text-neon-green">
            <div className="w-12 h-[1px] bg-neon-green" />
            <span className="text-[10px] font-orbitron tracking-[0.5em] uppercase">Tech_Capabilities</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter">COGNITIVE_STACK</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-16 gap-y-12">
          {skillGroups.map((group, gIdx) => (
            <div key={group.title} className="space-y-8">
              <h3 className="text-[10px] font-orbitron text-neon-green tracking-[0.3em] uppercase opacity-50 mb-10">
                // {group.title}
              </h3>
              <div className="space-y-8">
                {group.skills.map((skill, sIdx) => (
                  <SkillBar 
                    key={skill.name} 
                    name={skill.name} 
                    level={skill.level} 
                    delay={0.1 * (gIdx + sIdx)} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-neon-green/5 blur-[80px] rounded-full pointer-events-none" />
      </motion.div>
    </section>
  );
};

export default SkillsSpecs;
