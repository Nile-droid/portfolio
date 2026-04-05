import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Mail, User, Check, Phone } from 'lucide-react';

const ContactGlass = () => {
  const [sent, setSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setFormData({ name: '', email: '', message: '' });
    }, 5000);
  };

  const easeExpo = [0.19, 1, 0.22, 1] as const;

  return (
    <section className="py-32 px-10 max-w-7xl mx-auto" id="contact">
      <div className="flex flex-col lg:flex-row gap-20 items-stretch">
        <div className="flex-1 space-y-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: easeExpo }}
            className="space-y-4"
          >
            <div className="flex items-center gap-4 text-neon-green">
              <div className="w-12 h-[1px] bg-neon-green" />
              <span className="text-[10px] font-orbitron tracking-[0.5em] uppercase">Communication_Relay</span>
            </div>
            <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none">Comm <span className="text-neon-green">Link</span></h2>
            <div className="text-gray-500 font-orbitron text-[10px] tracking-[0.5em] uppercase">Subspace frequency active</div>
          </motion.div>

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
            <motion.a 
              href="mailto:nileshboy36@gmail.com"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex items-center gap-6 group interactive glass-panel p-4 hover:border-neon-green transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-neon-green/5 flex items-center justify-center text-neon-green group-hover:bg-neon-green group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(57,255,20,0.1)]">
                <Mail size={20} />
              </div>
              <div>
                <div className="text-[8px] font-orbitron text-neon-green opacity-50 uppercase tracking-widest mb-1">Direct_Signal</div>
                <div className="text-white font-orbitron text-xs tracking-wider">nileshboy36@gmail.com</div>
              </div>
            </motion.a>
            
            <motion.a 
              href="tel:+918928212064"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-center gap-6 group interactive glass-panel p-4 hover:border-neon-blue transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-neon-blue/5 flex items-center justify-center text-neon-blue group-hover:bg-neon-blue group-hover:text-black transition-all duration-500 shadow-[0_0_15px_rgba(0,243,255,0.1)]">
                <Phone size={20} />
              </div>
              <div>
                <div className="text-[8px] font-orbitron text-neon-blue opacity-50 uppercase tracking-widest mb-1">Voice_Node</div>
                <div className="text-white font-orbitron text-xs tracking-wider">+91 8928212064</div>
              </div>
            </motion.a>

            <motion.a 
              href="https://www.linkedin.com/in/nilesh-mishra-b23a18282/"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex items-center gap-6 group interactive glass-panel p-4 hover:border-neon-purple/50 transition-all duration-500"
            >
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/50 group-hover:bg-white group-hover:text-black transition-all duration-500">
                <User size={20} />
              </div>
              <div>
                <div className="text-[8px] font-orbitron text-white/30 uppercase tracking-widest mb-1">Social_Identity</div>
                <div className="text-white/80 font-orbitron text-[10px] tracking-wider uppercase">NILESH-MISHRA</div>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Message Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, x: 30 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, ease: easeExpo }}
          className="flex-1 glass-panel p-12 relative overflow-hidden"
        >
          <AnimatePresence mode="wait">
            {!sent ? (
              <motion.form 
                key="form"
                exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
                onSubmit={handleSubmit} 
                className="space-y-8"
              >
                <div className="space-y-3">
                  <label className="text-[10px] font-orbitron text-neon-green/50 uppercase tracking-[0.3em]">Identity_ID</label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="ENTER_NAME.exe"
                    className="w-full glass-input p-5 text-white font-orbitron text-[10px] placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-orbitron text-neon-green/50 uppercase tracking-[0.3em]">Return_Address</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="MAIL@TARGET.SYS"
                    className="w-full glass-input p-5 text-white font-orbitron text-[10px] placeholder:opacity-20"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-orbitron text-neon-green/50 uppercase tracking-[0.3em]">Signal_Payload</label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    placeholder="ESTABLISH CONTEXT..."
                    className="w-full glass-input p-5 text-white font-orbitron text-[10px] resize-none placeholder:opacity-20"
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full py-6 bg-neon-green/5 border border-neon-green/20 text-neon-green font-orbitron text-[10px] tracking-[0.8em] rounded-xl hover:bg-neon-green hover:text-black transition-all duration-500 group overflow-hidden relative"
                >
                  <span className="relative z-10 flex items-center justify-center gap-4">
                    SEND SIGNAL <Send size={14} className="group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform duration-500" />
                  </span>
                  <div className="absolute inset-0 bg-neon-green scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-700 ease-[0.19,1,0.22,1]" />
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center text-center space-y-8 py-20"
              >
                <div className="w-24 h-24 rounded-full border border-neon-green flex items-center justify-center text-neon-green shadow-[0_0_30px_#39ff14]">
                  <Check size={48} />
                </div>
                <div className="space-y-4">
                  <div className="text-4xl font-black text-white tracking-widest uppercase">Signal Relayed</div>
                  <div className="text-neon-green text-[10px] font-orbitron uppercase tracking-[0.5em] animate-pulse">Transmission Successful</div>
                  <div className="w-12 h-[1px] bg-white/20 mx-auto mt-8" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
      
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-neon-green/[0.03] blur-[150px] -z-10 pointer-events-none rounded-full" />
    </section>
  );
};

export default ContactGlass;
