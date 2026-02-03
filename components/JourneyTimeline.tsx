
import React from 'react';
import { motion } from 'framer-motion';
import { TIMELINE_DATA } from '../constants';
import ParallaxSection from './ParallaxSection';

const JourneyTimeline: React.FC = () => {
  return (
    <section className="py-32 px-4 max-w-6xl mx-auto relative">
      <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block" />
      
      <div className="text-center mb-24">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-rose-400">
          A Vibrant Legacy
        </h2>
        <p className="text-white/60 tracking-[0.5em] uppercase text-sm">Every chapter painted with love</p>
      </div>

      {TIMELINE_DATA.map((item, index) => (
        <div key={index} className={`flex flex-col md:flex-row items-center mb-32 md:mb-56 ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
          <div className="w-full md:w-1/2 px-4 md:px-16 mb-12 md:mb-0">
            <ParallaxSection offset={80}>
              <div className="relative group">
                <div className={`absolute -inset-4 bg-gradient-to-br ${item.color} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity duration-700`} />
                <div className="relative overflow-hidden rounded-3xl border border-white/10 shadow-2xl">
                  <img 
                    src={item.imageUrl} 
                    alt={item.title}
                    className="w-full aspect-[4/3] object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} mix-blend-overlay opacity-30 group-hover:opacity-10 transition-opacity duration-700`} />
                </div>
              </div>
            </ParallaxSection>
          </div>

          <div className="w-full md:w-1/2 px-4 md:px-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className={`text-transparent bg-clip-text bg-gradient-to-r ${item.color} font-black tracking-[0.3em] uppercase text-sm mb-6 block`}>
                {item.year}
              </span>
              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-8 text-white leading-tight">
                {item.title}
              </h3>
              <p className="text-xl text-white/70 leading-relaxed font-light italic border-l-4 border-white/10 pl-6">
                "{item.description}"
              </p>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default JourneyTimeline;
