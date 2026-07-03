'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

interface PolaroidProps {
  src: string;
  alt: string;
  caption: string;
  date: string;
  rotation: number;
  delay: number;
}

function PolaroidCard({ src, alt, caption, date, rotation, delay }: PolaroidProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: rotation - 5 }}
      whileInView={{ opacity: 1, y: 0, rotate: rotation }}
      viewport={{ once: true, margin: '-100px' }}
      whileHover={{ 
        scale: 1.05, 
        rotate: 0, 
        y: -10, 
        zIndex: 10,
        boxShadow: "0 20px 40px -15px rgba(44, 34, 30, 0.25)"
      }}
      transition={{ 
        type: 'spring', 
        stiffness: 75, 
        damping: 15,
        delay: delay 
      }}
      className="relative flex flex-col p-4 pb-10 bg-white border border-cream-dark/30 rounded-[2px] polaroid-shadow cursor-pointer select-none max-w-[280px] sm:max-w-[320px] w-full"
    >
      {/* Photo Frame Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-cream-base rounded-[1px]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-w-768px) 100vw, 350px"
          className="object-cover transition-transform duration-700 hover:scale-105"
          priority
        />
        {/* Soft shadow vignette overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-earth-deep/5 to-transparent pointer-events-none" />
      </div>
      
      {/* Handwriting-style bottom area */}
      <div className="mt-4 flex flex-col items-center text-center">
        <span className="font-serif text-sm italic text-earth-medium tracking-wide">
          {caption}
        </span>
        <span className="mt-1 text-[10px] uppercase tracking-widest text-gold-accent font-medium">
          {date}
        </span>
      </div>
    </motion.div>
  );
}

export default function MemoryPolaroids() {
  const photos = [
    {
      src: '/photo1.jpg',
      alt: 'Sunset Beach Walk',
      caption: 'Walking hand in hand into our future',
      date: 'Est. July 2024',
      rotation: -3,
      delay: 0,
    },
    {
      src: '/photo2.jpg',
      alt: 'Cozy Morning Coffee',
      caption: 'Quiet mornings filled with your laughter',
      date: 'Our Warm Café Dates',
      rotation: 2,
      delay: 0.2,
    },
    {
      src: '/photo3.jpg',
      alt: 'Fairy Light Evening',
      caption: 'Under the golden lights, holding you close',
      date: 'Endless Sweet Memories',
      rotation: -1.5,
      delay: 0.4,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto px-4 py-16 flex flex-col items-center">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <span className="text-xs uppercase tracking-widest text-gold-accent font-semibold block mb-2">
          Captured Moments
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl text-earth-deep font-semibold tracking-tight">
          Дурсамж бүхэн гэрэлтэнэ
        </h2>
        <div className="w-12 h-[1px] bg-gold-base mx-auto mt-4" />
      </motion.div>

      {/* Polaroid Grid Layout */}
      <div className="flex flex-col md:flex-row gap-12 md:gap-8 lg:gap-12 items-center justify-center w-full px-4">
        {photos.map((photo, index) => (
          <PolaroidCard
            key={index}
            src={photo.src}
            alt={photo.alt}
            caption={photo.caption}
            date={photo.date}
            rotation={photo.rotation}
            delay={photo.delay}
          />
        ))}
      </div>
    </div>
  );
}
