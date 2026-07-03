'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface HeartConfig {
  id: number;
  x: number; // percentage from left (0 to 100)
  scale: number; // scale factor (0.3 to 0.7)
  opacity: number; // opacity (0.3 to 0.7)
  duration: number; // duration of float (8 to 15)
  delay: number; // animation delay (negative to randomize initial position)
  rotate: number; // initial rotation (-20 to 20 deg)
}

export default function AntiGravityHearts() {
  const [hearts, setHearts] = useState<HeartConfig[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Generate 30 hearts with random configurations
    const newHearts = Array.from({ length: 30 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      scale: 0.3 + Math.random() * 0.4, // 0.3 to 0.7 scale
      opacity: 0.25 + Math.random() * 0.35, // 0.25 to 0.60 opacity
      duration: 8 + Math.random() * 7, // 8s to 15s floating duration
      delay: Math.random() * -15, // Negative delay so they start mid-screen
      rotate: Math.random() * 40 - 20, // Random rotation from -20deg to +20deg
    }));
    setHearts(newHearts);
  }, []);

  if (!mounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute bottom-0"
          style={{
            left: `${heart.x}%`,
            opacity: heart.opacity,
          }}
          initial={{ y: '110vh', scale: heart.scale, rotate: heart.rotate }}
          animate={{
            y: '-10vh',
            x: [
              `${heart.x}%`,
              `${heart.x + (Math.random() * 6 - 3)}%`,
              `${heart.x + (Math.random() * 8 - 4)}%`,
              `${heart.x}%`,
            ],
            rotate: [heart.rotate, heart.rotate + 10, heart.rotate - 10, heart.rotate],
          }}
          transition={{
            duration: heart.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: heart.delay,
          }}
        >
          <svg
            className="text-rosewood-base/20 fill-rosewood-base/10"
            width="28"
            height="28"
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}
