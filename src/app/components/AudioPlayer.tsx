'use client';

import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Create audio element
    const audio = new Audio('https://upload.wikimedia.org/wikipedia/commons/2/2a/Gymnopedie_No._1_%28ISRC_USUAN1100787%29.mp3');
    audio.loop = true;
    audio.volume = 0.3; // Gentle background volume
    audioRef.current = audio;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
      }
    };
  }, []);

  const togglePlayback = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((err) => {
          console.error('Audio play blocked or failed:', err);
        });
    }
  };

  if (!mounted) return null;

  return (
    <div className="fixed top-6 right-6 z-50">
      <motion.button
        onClick={togglePlayback}
        whileHover={{ scale: 1.04, y: -1 }}
        whileTap={{ scale: 0.98 }}
        className="flex items-center gap-3 rounded-full border border-gold-base/30 bg-cream-light/80 px-4 py-2 text-xs font-medium text-earth-medium uppercase tracking-widest backdrop-blur-md transition-all hover:border-gold-accent hover:bg-cream-light hover:text-earth-deep shadow-md"
      >
        <span className="flex items-center justify-center">
          {isPlaying ? (
            <Volume2 className="h-4.5 w-4.5 text-rosewood-base animate-pulse" />
          ) : (
            <VolumeX className="h-4.5 w-4.5 text-earth-muted" />
          )}
        </span>
        
        <span>{isPlaying ? 'Playing Our Song' : 'Play Our Song'}</span>

        {/* Mini Soundwave visualizer */}
        <AnimatePresence>
          {isPlaying && (
            <motion.div 
              initial={{ opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={{ opacity: 0, width: 0 }}
              className="flex items-end gap-0.5 h-3 overflow-hidden ml-1"
            >
              {[1, 2, 3, 4].map((bar) => (
                <motion.span
                  key={bar}
                  className="w-[2px] bg-rosewood-base rounded-full"
                  animate={{
                    height: [
                      '20%', 
                      bar === 1 ? '70%' : bar === 2 ? '100%' : bar === 3 ? '60%' : '80%', 
                      '20%'
                    ]
                  }}
                  transition={{
                    duration: bar === 1 ? 0.6 : bar === 2 ? 0.8 : bar === 3 ? 0.5 : 0.7,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: bar * 0.1
                  }}
                />
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
