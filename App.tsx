
import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { Heart, ChevronDown, Music, Mail, Calendar, MapPin, Sparkles } from 'lucide-react';
import FloatingParticles from './components/FloatingParticles';
import JourneyTimeline from './components/JourneyTimeline';
import MemoriesSection from './components/MemoriesSection';
import ParallaxSection from './components/ParallaxSection';
import { HEARTFELT_LETTER } from './constants';

const App: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  // Color transformations based on scroll
  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    ["#0f172a", "#1e1b4b", "#312e81", "#4c1d95"]
  );

  return (
    <motion.div 
      style={{ backgroundColor: bgColor }}
      className="text-white selection:bg-rose-500/30 transition-colors duration-1000 min-h-screen overflow-x-hidden"
    >
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-emerald-500 to-rose-500 z-50 origin-left shadow-[0_0_10px_rgba(244,63,94,0.5)]"
        style={{ scaleX }}
      />

      <FloatingParticles />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden py-20">
        <div className="absolute inset-0 mesh-gradient opacity-30 z-0" />
        
        <motion.div 
          style={{ y: heroY, opacity: heroOpacity }}
          className="z-10 text-center px-6 w-full max-w-7xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="flex justify-center mb-6">
              <motion.div 
                animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.1, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="p-3 bg-white/10 rounded-2xl backdrop-blur-lg border border-white/20 text-rose-400"
              >
                <Sparkles size={32} />
              </motion.div>
            </div>
            
            <h2 className="text-blue-400 font-black tracking-[0.5em] uppercase text-[10px] md:text-sm mb-6 drop-shadow-lg">
              Prath's Tribute to a Legend
            </h2>
            
            <h1 className="text-5xl sm:text-6xl md:text-[8rem] font-serif font-black mb-8 tracking-tighter leading-none bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-blue-300">
              HAPPY BIRTHDAY<br/>
              <span className="text-rose-400 italic">NIMESH</span>
            </h1>
            
            <p className="max-w-2xl mx-auto text-white/60 text-lg md:text-2xl font-light mb-12 tracking-wide leading-relaxed">
              To my father, my hero, and the man who taught me how to fly.
            </p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="inline-flex items-center gap-4 bg-white/5 backdrop-blur-md px-8 py-4 rounded-full border border-white/10"
            >
              <Calendar size={18} className="text-emerald-400" />
              <span className="font-semibold tracking-widest text-sm uppercase">Feb 4, 2026</span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Large Parallax Background Text */}
        <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden select-none pointer-events-none">
          <motion.div 
            style={{ 
              y: useTransform(scrollYProgress, [0, 1], [0, -300]),
              opacity: useTransform(scrollYProgress, [0, 0.2], [0.1, 0])
            }}
            className="text-[25vw] font-serif font-black text-white/5 whitespace-nowrap"
          >
            NIMESH
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/20"
        >
          <ChevronDown size={32} strokeWidth={1} />
        </motion.div>
      </section>

      {/* Heartfelt Quote */}
      <section className="py-40 md:py-60 px-6 relative">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <ParallaxSection offset={100}>
          <div className="max-w-5xl mx-auto text-center">
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart className="mx-auto text-rose-500 mb-10 drop-shadow-[0_0_15px_rgba(244,63,94,0.5)]" size={64} fill="currentColor" fillOpacity={0.2} />
            </motion.div>
            <blockquote className="text-3xl md:text-7xl font-serif font-bold italic text-white leading-[1.2]">
              "Dad: A son's first <span className="text-blue-400">hero</span>, a child's forever <span className="text-rose-400">guide</span>."
            </blockquote>
          </div>
        </ParallaxSection>
      </section>

      {/* The Journey Timeline */}
      <JourneyTimeline />

      {/* Our Memories Folder Section */}
      <MemoriesSection />

      {/* Letter Section */}
      <section className="py-32 md:py-40 px-6 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/20 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/[0.03] backdrop-blur-3xl border border-white/10 rounded-[2rem] md:rounded-[3rem] p-8 md:p-20 shadow-2xl overflow-hidden group"
          >
            <div className={`absolute top-0 right-0 w-64 h-64 bg-rose-500/10 blur-[100px] -mr-32 -mt-32 group-hover:bg-rose-500/20 transition-all duration-1000`} />
            <div className={`absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[100px] -ml-32 -mb-32 group-hover:bg-blue-500/20 transition-all duration-1000`} />

            <div className="flex flex-col md:flex-row items-center gap-6 mb-12">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500 to-rose-500 flex items-center justify-center text-white shadow-lg">
                <Mail size={28} />
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">A Message from Prath</h2>
            </div>
            
            <div className="font-script text-2xl md:text-5xl text-white/90 leading-relaxed whitespace-pre-line tracking-wide">
              {HEARTFELT_LETTER}
            </div>
          </motion.div>
        </div>

        {/* Floating Decorative Icon */}
        <motion.div 
          style={{ 
            rotate: -15,
            y: useTransform(scrollYProgress, [0.8, 1], [100, -100])
          }}
          className="absolute left-10 bottom-20 text-emerald-500/5 select-none pointer-events-none"
        >
          <Music size={250} strokeWidth={0.5} />
        </motion.div>
      </section>

      {/* Closing Footer */}
      <footer className="py-24 md:py-32 px-6 text-center relative overflow-hidden flex flex-col items-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        
        <div className="mb-16 relative z-10 w-full">
          <h3 className="font-serif text-5xl md:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-white to-rose-400">
            Happy Birthday Nimesh
          </h3>
          <div className="flex flex-col items-center gap-4 text-white/50 tracking-[0.4em] uppercase text-[10px] md:text-sm">
            <span className="flex items-center gap-2 font-bold"><Heart size={14} className="text-rose-400" /> FROM YOUR SON PRATH</span>
            <span className="flex items-center gap-2"><Calendar size={14} className="text-blue-400" /> February 4, 2026</span>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05, y: -5 }}
          whileTap={{ scale: 0.95 }}
          className="relative group bg-white text-black font-black py-5 px-12 md:py-6 md:px-16 rounded-full transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.3)] mb-20 overflow-hidden"
          onClick={() => alert("Happy Birthday Papa! Prath loves you more than words can say.")}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400 opacity-0 group-hover:opacity-10 transition-opacity" />
          <span className="relative flex items-center gap-3 text-sm md:text-base">
            I LOVE YOU PAPA <Heart size={18} fill="currentColor" />
          </span>
        </motion.button>

        <div className="w-full pt-16 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/30 text-[9px] md:text-xs gap-6 tracking-[0.2em] uppercase font-bold">
          <p>© 2026 NIMESH'S SPECIAL DAY | CREATED BY PRATH</p>
          <div className="flex gap-8">
            <span className="hover:text-rose-400 transition-colors cursor-pointer">Family</span>
            <span className="hover:text-blue-400 transition-colors cursor-pointer">Legacy</span>
            <span className="hover:text-emerald-400 transition-colors cursor-pointer">Gratitude</span>
          </div>
        </div>

        {/* Final Background Glow */}
        <div className="absolute bottom-[-100px] left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-rose-500/5 blur-[120px] rounded-full pointer-events-none" />
      </footer>
    </motion.div>
  );
};

export default App;
