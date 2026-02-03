
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MEMORIES_DATA } from '../constants';
import { Play, Image as ImageIcon, Heart, X } from 'lucide-react';

const MemoriesSection: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const item = selectedItem ? MEMORIES_DATA.find(m => m.id === selectedItem) : null;

  return (
    <section className="py-32 px-6 max-w-7xl mx-auto relative overflow-hidden">
      {/* Section Header */}
      <div className="text-center mb-24 relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-white/5 border border-white/10 text-[10px] tracking-[0.4em] uppercase text-blue-400 mb-6"
        >
          <Heart size={14} className="text-rose-500 animate-pulse" /> Our Beautiful Journey
        </motion.div>
        
        <h2 className="text-6xl md:text-8xl font-serif font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-rose-300 to-white">
          Our Memories
        </h2>
        <p className="text-white/40 max-w-xl mx-auto tracking-[0.2em] uppercase text-xs leading-loose">
          Every photo tells a story, and every video holds a heartbeat. These are the moments that make us us.
        </p>
      </div>

      {/* Grid Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 auto-rows-[280px] md:auto-rows-[350px]">
        {MEMORIES_DATA.map((memoryItem, index) => (
          <motion.div
            key={memoryItem.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            className={`group relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl bg-white/5 cursor-pointer
              ${memoryItem.size === 'large' ? 'md:row-span-2 md:col-span-2' : ''}
              ${memoryItem.size === 'medium' ? 'md:row-span-2' : ''}
            `}
            onClick={() => setSelectedItem(memoryItem.id)}
          >
            {memoryItem.type === 'video' ? (
              <div className="w-full h-full relative">
                {/* Fallback for preview if video doesn't load */}
                <div className="absolute inset-0 bg-neutral-900 animate-pulse flex items-center justify-center -z-10">
                  <Play size={48} className="text-white/10" />
                </div>
                <video
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  src={memoryItem.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
                <div className="absolute top-6 left-6 p-3 bg-black/40 backdrop-blur-xl rounded-2xl text-white border border-white/10">
                  <Play size={16} fill="white" />
                </div>
              </div>
            ) : (
              <div className="w-full h-full">
                <img
                  src={memoryItem.url}
                  alt={memoryItem.caption}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  onError={(e) => {
                    // Fallback to picsum if file not found locally
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${memoryItem.id}/800/1000`;
                  }}
                />
              </div>
            )}

            {/* Hover Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 p-8 flex flex-col justify-end items-start translate-y-4 group-hover:translate-y-0">
              <span className="text-rose-400 font-black tracking-widest text-[10px] uppercase mb-2">Memory #{memoryItem.id}</span>
              <h3 className="text-white font-serif italic text-2xl md:text-3xl leading-tight">
                {memoryItem.caption}
              </h3>
              <motion.div 
                className="w-16 h-1 bg-gradient-to-r from-blue-500 to-rose-500 mt-6 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: 64 }}
              />
            </div>

            {/* Border Glow Effect */}
            <div className="absolute inset-0 border-[0.5px] border-white/0 group-hover:border-white/20 transition-colors duration-500 pointer-events-none rounded-[2rem]" />
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedItem && item && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-full h-full flex items-center justify-center max-w-6xl max-h-screen"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-6 right-6 z-10 p-3 bg-white/10 hover:bg-white/20 backdrop-blur-xl rounded-full border border-white/20 text-white transition-all duration-300"
                aria-label="Close fullscreen"
              >
                <X size={24} />
              </button>

              {/* Content */}
              {item.type === 'video' ? (
                <video
                  src={item.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-contain rounded-2xl"
                />
              ) : (
                <img
                  src={item.url}
                  alt={item.caption}
                  className="w-full h-full object-contain rounded-2xl"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${item.id}/1200/1400`;
                  }}
                />
              )}

              {/* Caption */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-8 rounded-b-2xl"
              >
                <h3 className="text-white font-serif italic text-2xl md:text-4xl">
                  {item.caption}
                </h3>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="absolute -left-1/4 top-1/4 w-[50%] h-[50%] bg-blue-500/5 blur-[150px] rounded-full -z-10" />
      <div className="absolute -right-1/4 bottom-1/4 w-[50%] h-[50%] bg-rose-500/5 blur-[150px] rounded-full -z-10" />
    </section>
  );
};

export default MemoriesSection;
