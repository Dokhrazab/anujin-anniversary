'use client';

import { motion } from 'framer-motion';

export default function LetterContent() {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-20 flex flex-col items-center relative z-10">
      
      {/* Decorative Stamp or Wax Seal Motif */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="mb-8"
      >
        <div className="w-14 h-14 rounded-full border border-gold-accent/40 bg-cream-light flex items-center justify-center shadow-inner relative">
          <div className="absolute inset-1 rounded-full border border-dashed border-gold-base/20" />
          <span className="font-serif text-lg text-gold-accent font-semibold italic">II</span>
        </div>
      </motion.div>

      {/* Main Letter Card */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="w-full max-w-2xl bg-cream-light/70 backdrop-blur-md rounded-2xl p-8 sm:p-12 md:p-16 border border-gold-base/20 shadow-2xl relative"
      >
        {/* Soft vignette/glow effect */}
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-rosewood-base/[0.02] to-gold-bright/[0.02] pointer-events-none" />
        
        {/* Elegant Gold Corner Accents */}
        <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-gold-base/30 rounded-tl" />
        <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-gold-base/30 rounded-tr" />
        <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-gold-base/30 rounded-bl" />
        <div className="absolute bottom-4 right-4 w-4 h-4 border-b border-r border-gold-base/30 rounded-br" />

        {/* Editorial Headline */}
        <div className="text-center mb-10">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-earth-deep italic font-medium tracking-wide">
            Миний хайртдаа...
          </h1>
          <div className="flex items-center justify-center gap-3 mt-4">
            <span className="w-8 h-[1px] bg-gold-base/30" />
            <svg
              className="text-rosewood-base/50 fill-rosewood-base/30"
              width="12"
              height="12"
              viewBox="0 0 24 24"
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            <span className="w-8 h-[1px] bg-gold-base/30" />
          </div>
        </div>

        {/* The Personal Letter Body */}
        <div className="font-sans text-earth-medium text-base sm:text-lg leading-relaxed sm:leading-loose space-y-6 text-justify tracking-wide">
          <p className="first-letter:font-serif first-letter:text-5xl first-letter:float-left first-letter:mr-3 first-letter:text-rosewood-base first-letter:font-bold first-letter:leading-[0.8] first-letter:mt-1">
            Anujin, хоёр жилийн ойдоо баяр хүргэе! Чи бол миний амьдралын хамгийн том баяр баясгалан юм. Two incredible years together, full of love and laughter.
          </p>
          <p>
            Энэ цаг хугацаа ямар хурдан өнгөрөв дөө, гэхдээ бидний хамтын дурсамж үүрд үлдэнэ. I can't imagine my life without you.
          </p>
          <p className="text-center font-serif italic text-rosewood-base text-lg sm:text-xl font-medium mt-10">
            Би чамд хайртай. Үүрд хамтдаа...
          </p>
        </div>

        {/* Sign-off Signature */}
        <div className="mt-14 flex flex-col items-end pr-2">
          <span className="text-xs uppercase tracking-widest text-gold-accent font-medium">
            Үүрд чинийх,
          </span>
          <span className="font-serif text-2xl italic text-earth-deep font-semibold mt-2 relative">
            Bazargur
            <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-gold-base/30" />
          </span>
        </div>
      </motion.div>
    </div>
  );
}
