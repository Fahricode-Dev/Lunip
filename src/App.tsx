import { motion } from 'motion/react';
import { ChevronDown, Sparkles, Globe, Shield, Zap, ArrowRight, ExternalLink, Users, Server, Pickaxe } from 'lucide-react';

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Modern 3D Glass Cube Component (Minecraft Block inspired)
const FloatingCube = ({ className, delay = 0, size = 60, color = "from-cyan-400 to-blue-500" }: { className?: string, delay?: number, size?: number, color?: string }) => {
  return (
    <motion.div
      className={`absolute ${className} pointer-events-none`}
      style={{ width: size, height: size, transformStyle: 'preserve-3d' }}
      animate={{
        y: [0, -40, 0],
        rotateX: [0, 360],
        rotateY: [0, 360],
      }}
      transition={{
        y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay },
        rotateX: { duration: 25, repeat: Infinity, ease: "linear", delay },
        rotateY: { duration: 30, repeat: Infinity, ease: "linear", delay },
      }}
    >
      {['front', 'back', 'right', 'left', 'top', 'bottom'].map((face) => {
        let transform = '';
        const half = size / 2;
        if (face === 'front') transform = `translateZ(${half}px)`;
        if (face === 'back') transform = `rotateY(180deg) translateZ(${half}px)`;
        if (face === 'right') transform = `rotateY(90deg) translateZ(${half}px)`;
        if (face === 'left') transform = `rotateY(-90deg) translateZ(${half}px)`;
        if (face === 'top') transform = `rotateX(90deg) translateZ(${half}px)`;
        if (face === 'bottom') transform = `rotateX(-90deg) translateZ(${half}px)`;

        return (
          <div
            key={face}
            className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 border border-white/30 backdrop-blur-sm rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.2)]`}
            style={{ transform }}
          />
        );
      })}
    </motion.div>
  );
};

export default function App() {
  const scrollToCommunity = () => {
    document.getElementById('community')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-cyan-500/30 relative overflow-hidden">
      
      {/* 1. Blurred Background Image */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ 
          // Menggunakan gambar Minecraft Shaders berkualitas tinggi sebagai placeholder
          // Anda dapat mengganti URL ini dengan URL gambar Anda sendiri jika sudah di-host
          backgroundImage: `url('https://images.unsplash.com/photo-1607513746994-51f730a44832?q=80&w=2564&auto=format&fit=crop')`,
          filter: 'blur(12px) brightness(0.35)'
        }}
      />

      {/* 2. Modern Block Grid Overlay */}
      <div className="fixed inset-0 z-0 pointer-events-none bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      {/* 3. Floating 3D Glass Blocks (Modern Minecraft Elements) */}
      <div className="fixed inset-0 z-0 pointer-events-none" style={{ perspective: '1000px' }}>
        <FloatingCube className="top-[15%] left-[10%]" size={80} color="from-cyan-400 to-blue-600" delay={0} /> {/* Diamond */}
        <FloatingCube className="top-[40%] right-[12%]" size={60} color="from-purple-400 to-pink-600" delay={2} /> {/* Amethyst */}
        <FloatingCube className="bottom-[20%] left-[15%]" size={100} color="from-green-400 to-emerald-600" delay={1} /> {/* Emerald */}
        <FloatingCube className="bottom-[15%] right-[20%]" size={70} color="from-yellow-400 to-orange-600" delay={3} /> {/* Gold */}
        <FloatingCube className="top-[60%] left-[40%]" size={40} color="from-red-400 to-rose-600" delay={1.5} /> {/* Redstone */}
      </div>

      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-purple-600 p-[1px]">
              <div className="w-full h-full bg-black/50 rounded-xl backdrop-blur-md flex items-center justify-center">
                <Pickaxe className="w-5 h-5 text-white" />
              </div>
            </div>
            <span className="font-display font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-white/70">LUNIVE</span>
          </div>
          <button 
            onClick={scrollToCommunity}
            className="px-6 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 font-medium text-sm flex items-center gap-2 backdrop-blur-md shadow-[0_0_15px_rgba(255,255,255,0.05)]"
          >
            Join Network
          </button>
        </div>
      </nav>

      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="min-h-[90vh] flex flex-col items-center justify-center px-6 relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center max-w-4xl mx-auto mt-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-medium mb-8 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.15)]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Server is Online & Active
            </div>
            
            <h1 className="font-display text-6xl md:text-8xl font-bold tracking-tighter mb-6 leading-tight drop-shadow-2xl">
             Server Roleplaying Rpg Medevial Fantasy. <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 filter drop-shadow-[0_0_20px_rgba(6,182,212,0.3)]">
                Lunive Universe.
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md">
              Experience Minecraft like never before. Lunive Universe offers a next-generation survival and community experience with breathtaking custom rpg worlds and fantasy medevial.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button 
                onClick={scrollToCommunity}
                className="px-8 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all duration-300 flex items-center gap-2 shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)] hover:shadow-[0_0_40px_-5px_rgba(6,182,212,0.7)] border border-white/10"
              >
                Gabung <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => {
                  document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-8 py-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-300 font-medium backdrop-blur-md"
              >
                Explore Features
              </button>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 animate-bounce"
          >
            <ChevronDown className="w-6 h-6 text-white/50" />
          </motion.div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-32 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Feature Lunive</h2>
              <p className="text-gray-300 max-w-2xl mx-auto drop-shadow-md">We'Lunive Adalah server survival murni, dengan roleplay alur di dalamnya, setiap mati, banned 25 menit.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: <Globe className="w-8 h-8 text-cyan-400" />,
                  title: "Rpg Worlds",
                  desc: "Roleplay Lunive diperbagus dengan world cuatom fantasy",
                  color: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.15)]"
                },
                {
                  icon: <Server className="w-8 h-8 text-purple-400" />,
                  title: "Event Feature",
                  desc: "Sampingan roleplay, banyak sekali event² yang ada, bahkan bansos untuk all member.",
                  color: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]"
                },
                {
                  icon: <Users className="w-8 h-8 text-emerald-400" />,
                  title: "Admin No Abouse",
                  desc: "Admin tidak diperbolehkan operator akses, hanya untuk keperluan roleplaying, baru akses dibuka.",
                  color: "group-hover:shadow-[0_0_30px_rgba(52,211,153,0.15)]"
                }
              ].map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.2 }}
                  className={`group relative p-8 rounded-2xl bg-black/40 border border-white/10 backdrop-blur-xl transition-all duration-500 hover:bg-white/5 hover:-translate-y-2 ${feature.color}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 shadow-inner">
                      {feature.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Community Links Section */}
        <section id="community" className="py-32 px-6 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none"></div>
          
          <div className="max-w-5xl mx-auto relative z-10">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">Join The Sirkel</h2>
              <p className="text-gray-300 max-w-2xl mx-auto drop-shadow-md">Connect with our community across all platforms. Get the latest updates, chat with players, and watch our highlights.</p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {/* WA Group */}
              <motion.a
                href="https://chat.whatsapp.com/HXdg2Ixv05gKDpbTITBR6O?mode=hq2tcla"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-black/40 border border-[#25D366]/30 hover:border-[#25D366]/60 hover:bg-[#25D366]/5 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-[0_0_20px_rgba(37,211,102,0.05)] hover:shadow-[0_0_30px_rgba(37,211,102,0.2)]"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <ExternalLink className="w-5 h-5 text-[#25D366]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#25D366]/10 flex items-center justify-center mb-6 border border-[#25D366]/20">
                  <WhatsAppIcon className="w-7 h-7 text-[#25D366]" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">WhatsApp Group</h3>
                <p className="text-gray-300 text-sm">Grup official lunive, gabung untuk ikut serta roleplaying, Mumpung masi open member.</p>
              </motion.a>

              {/* WA Channel */}
              <motion.a
                href="https://whatsapp.com/channel/0029VbBwPf88V0tgb9ZWrE08"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="group relative p-8 rounded-2xl bg-black/40 border border-[#128C7E]/30 hover:border-[#128C7E]/60 hover:bg-[#128C7E]/5 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-[0_0_20px_rgba(18,140,126,0.05)] hover:shadow-[0_0_30px_rgba(18,140,126,0.2)]"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <ExternalLink className="w-5 h-5 text-[#128C7E]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#128C7E]/10 flex items-center justify-center mb-6 border border-[#128C7E]/20">
                  <WhatsAppIcon className="w-7 h-7 text-[#128C7E]" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">Official Channel</h3>
                <p className="text-gray-300 text-sm">Dapatkan pengumuman, atau info diskon topup dan juga info info lainnya di saluran lunive.</p>
              </motion.a>

              {/* TikTok */}
              <motion.a
                href="https://www.tiktok.com/@universelunive?_r=1&_t=ZP-94VupACDGOs"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ y: -5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="group relative p-8 rounded-2xl bg-black/40 border border-[#ff0050]/30 hover:border-[#ff0050]/60 hover:bg-[#ff0050]/5 transition-all duration-300 backdrop-blur-xl overflow-hidden shadow-[0_0_20px_rgba(255,0,80,0.05)] hover:shadow-[0_0_30px_rgba(255,0,80,0.2)]"
              >
                <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-100 transition-opacity transform translate-x-4 group-hover:translate-x-0">
                  <ExternalLink className="w-5 h-5 text-[#ff0050]" />
                </div>
                <div className="w-14 h-14 rounded-xl bg-[#ff0050]/10 flex items-center justify-center mb-6 border border-[#ff0050]/20">
                  <TikTokIcon className="w-7 h-7 text-[#ff0050]" />
                </div>
                <h3 className="text-xl font-bold mb-2 font-display">TikTok Official</h3>
                <p className="text-gray-300 text-sm">Tempat dimana Lunive mengupload karya dan video maupun media lainnya.</p>
              </motion.a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-6 relative z-10 bg-black/50 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <Pickaxe className="w-5 h-5 text-cyan-400" />
            <span className="font-display font-bold tracking-wider text-white/80">LUNIVE UNIVERSE</span>
          </div>
          <p className="text-gray-400 text-sm text-center md:text-left">
            Server roleplay yang disajikan dengan Rpg fantasy fitur, untuk melengkapi roleplay yang diciptakan agar menjadi beda, dengan feel dunia baru, sistem baru, dan aturan baru.
          </p>
          <div className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Lunive Universe. We Lunivee.
          </div>
        </div>
      </footer>
    </div>
  );
}
