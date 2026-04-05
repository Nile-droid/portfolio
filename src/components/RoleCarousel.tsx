

const RoleCarousel = () => {
  const roles = [
    "Python Developer",
    "Java Developer",
    "DevOps Enthusiast",
    "Software Engineer",
    "Full Stack Architect"
  ];

  return (
    <div className="py-20 overflow-hidden bg-white/5 border-y border-white/10 relative">
      <div className="absolute inset-0 bg-gradient-to-r from-cyber-black via-transparent to-cyber-black z-10 pointer-events-none" />
      
      <div className="flex animate-[infinite-scroll_30s_linear_infinite] whitespace-nowrap">
        {[...roles, ...roles].map((role, idx) => (
          <div key={idx} className="flex items-center gap-10 px-10">
            <span className="text-4xl md:text-6xl font-black text-white/20 hover:text-neon-blue transition-colors duration-500 cursor-default font-orbitron uppercase tracking-tighter">
              {role}
            </span>
            <div className="w-4 h-4 rounded-full bg-neon-purple shadow-[0_0_15px_#bc13fe]" />
          </div>
        ))}
      </div>

      <style>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
};

export default RoleCarousel;
