'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="w-full py-16 px-6 relative z-10 flex flex-col items-center justify-center text-center mt-20 border-t border-gold-base/10 bg-cream-light/30">
      
      {/* Decorative floral/accent element */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-6"
      >
        <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-gold-base/35" />
        <span className="text-gold-accent font-serif text-sm">❦</span>
        <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-gold-base/35" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-4"
      >
        {/* Milestone Statement */}
        <h3 className="font-serif text-xl sm:text-2xl italic text-earth-deep font-medium">
          Хамтдаа туулсан хоёр жил, цаашид урсах амьдралын эхлэл...
        </h3>

        {/* Milestone Dates */}
        <p className="font-sans text-[10px] sm:text-xs uppercase tracking-[0.25em] text-gold-accent font-semibold">
          July 3, 2024 — July 3, 2026
        </p>

        {/* Romantic Footer Note */}
        <p className="font-sans text-xs text-earth-light max-w-md mx-auto pt-4">
          Created for Anujin. Configured for production deployment at{' '}
          <a
            href="https://anujinxbazargur.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-rosewood-base transition-colors"
          >
            anujinxbazargur.vercel.app
          </a>
        </p>
      </motion.div>
    </footer>
  );
}
