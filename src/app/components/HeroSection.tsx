'use client';

import { motion } from 'framer-motion';

export default function HeroSection() {
  // Let's create key statistics for 2 years
  const stats = [
    { label: 'Years of Love', value: '2' },
    { label: 'Days Together', value: '730+' },
    { label: 'Beautiful Hours', value: '17,520+' },
  ];

  return (
    <div className="min-h-screen flex flex-col justify-between items-center px-6 py-12 relative z-10">
      {/* Decorative Top Line */}
      <div className="w-[1px] h-20 bg-gradient-to-b from-transparent to-gold-base/40" />

      {/* Main Hero Header */}
      <div className="flex-1 flex flex-col justify-center items-center text-center max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
          className="space-y-6"
        >
          {/* Elegant Roman Numeral Emblem */}
          <span className="font-serif text-xs uppercase tracking-[0.25em] text-gold-accent font-semibold block">
            A Celebration of Us
          </span>

          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="font-serif text-7xl sm:text-8xl md:text-9xl font-extralight text-gold-base/20 select-none cursor-default leading-none"
          >
            II
          </motion.div>

          {/* Editorial Title */}
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-earth-deep font-semibold tracking-tight leading-tight">
            хоёр жилийн ойдоо <br />
            <span className="italic text-rosewood-base font-normal">баяр хүргэе</span>
          </h1>

          <p className="font-sans text-earth-muted text-sm sm:text-base tracking-widest uppercase font-medium max-w-md mx-auto">
            Anujin & Bazargur
          </p>

          <div className="w-16 h-[1px] bg-gold-base/30 mx-auto my-6" />

          <p className="font-serif italic text-earth-light text-base sm:text-lg max-w-lg mx-auto leading-relaxed">
            "Бид хоёрын дурлал дурсамжийг ертөнцийн төгсгөл хүртэл хадгалах цуглуулга Хайвт минь."
          </p>
        </motion.div>

        {/* Subtle Staggered Stats Counters */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="grid grid-cols-3 gap-8 sm:gap-16 mt-16 max-w-xl w-full border-t border-b border-gold-base/10 py-6"
        >
          {stats.map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="font-serif text-2xl sm:text-3xl text-rosewood-base font-semibold">
                {stat.value}
              </span>
              <span className="text-[10px] sm:text-xs uppercase tracking-widest text-earth-light mt-1 text-center font-medium">
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Floating Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: [0, 1, 0], y: [0, 8, 0] }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: 'easeInOut',
          delay: 1.2
        }}
        className="flex flex-col items-center cursor-pointer"
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight,
            behavior: 'smooth'
          });
        }}
      >
        <span className="text-[9px] uppercase tracking-[0.2em] text-gold-accent font-semibold mb-2">
          Scroll to open letter
        </span>
        <svg
          className="text-gold-accent"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </motion.div>
    </div>
  );
}
