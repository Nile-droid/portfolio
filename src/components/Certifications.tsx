import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';

interface Cert {
  title: string;
  platform: string;
  desc: string;
  link: string;
}

const CertCard = ({ cert, index }: { cert: Cert, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      className="glass-panel p-8 relative group border-gradient flex flex-col h-full"
    >
      <div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-30 transition-opacity duration-300">
        <Award size={48} className="text-[#00d2d3]" />
      </div>

      <div className="space-y-4 relative z-10 flex-1 flex flex-col">
        <div className="text-[10px] font-orbitron tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-primary font-bold">
          {cert.platform}
        </div>
        
        <h3 className="text-xl font-black text-white group-hover:text-white transition-colors duration-300">
          {cert.title}
        </h3>

        <p className="text-gray-400 text-sm leading-relaxed font-inter opacity-80 flex-1">
          {cert.desc}
        </p>

        <div className="pt-6 mt-auto">
          <a rel="noopener noreferrer"
             href={cert.link} 
             target="_blank" 
             className="inline-flex items-center gap-2 text-[10px] font-orbitron bg-white/5 border border-white/10 hover:border-[#ff6b6b]/50 px-4 py-2 rounded-md transition-all duration-300 text-white/70 hover:text-white group-hover:bg-gradient-primary group-hover:border-transparent"
          >
             <ExternalLink size={14} />
             <span className="tracking-widest uppercase">View Credential</span>
          </a>
        </div>
      </div>
      
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500 rounded-2xl pointer-events-none" />
    </motion.div>
  );
};

const Certifications = () => {
  const certifications: Cert[] = [
    {
      title: "Web Development Training (NSDC Certified)",
      platform: "Internshala",
      desc: "Comprehensive training covering full-stack web development methodologies, authenticated by NSDC.",
      link: "https://trainings.internshala.com/certificate/view/nsdc/207cwc1z0rw/j1j20a3i66d/"
    },
    {
      title: "Web Development Training",
      platform: "Internshala",
      desc: "Intensive training focusing on building robust, responsive, and dynamic web applications.",
      link: "https://trainings.internshala.com/view_certificate/207cwc1z0rw/4bv9zf9slgb/"
    },
    {
      title: "AWS Services Fundamentals",
      platform: "Simplilearn",
      desc: "Fundamental certification in Amazon Web Services detailing core cloud computing and architecture principles.",
      link: "https://drive.google.com/file/d/1kkHuRAJm2qsnavS4ATR55Hw2gVMtrSt3/view"
    }
  ];

  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <section className="py-24 px-10 max-w-7xl mx-auto relative z-10" id="certifications">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: easeExpo }}
        viewport={{ once: true }}
        className="mb-16 space-y-4 text-center md:text-left"
      >
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-gradient-primary rounded-full shadow-[0_0_15px_rgba(0,210,211,0.5)] mx-auto md:mx-0" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certifications.map((cert, idx) => (
          <CertCard key={idx} cert={cert} index={idx} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
