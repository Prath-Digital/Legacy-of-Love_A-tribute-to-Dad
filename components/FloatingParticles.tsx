
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Particle } from '../types';

const COLORS = [
  'rgba(59, 130, 246, 0.4)', // Blue
  'rgba(16, 185, 129, 0.4)', // Emerald
  'rgba(245, 158, 11, 0.4)', // Amber
  'rgba(244, 63, 94, 0.4)',  // Rose
  'rgba(139, 92, 246, 0.4)', // Violet
];

const FloatingParticles: React.FC = () => {
  const particles = useMemo(() => {
    const p: Particle[] = [];
    for (let i = 0; i < 60; i++) {
      p.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 6 + 2,
        duration: Math.random() * 25 + 15,
        delay: Math.random() * 10,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    return p;
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full blur-[2px]"
          initial={{ x: `${p.x}vw`, y: `${p.y}vh`, opacity: 0 }}
          animate={{
            y: ['-10vh', '110vh'],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
          style={{
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
          }}
        />
      ))}
    </div>
  );
};

export default FloatingParticles;
