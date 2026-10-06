"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Entry({ onEnter }: { onEnter: () => void }) {
  const [clicks, setClicks] = useState(0);
  const [isOpening, setIsOpening] = useState(false);

  const handleKnock = () => {
    setClicks(prev => prev + 1);
    if (clicks >= 1) {
      setIsOpening(true);
      setTimeout(onEnter, 1500);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden z-50 bg-[#0a0a0a]">
      <div className="relative w-full h-full flex">
        {/* Left Door */}
        <motion.div
          animate={{ x: isOpening ? '-100%' : '0%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="w-1/2 h-full bg-[#1a1a1a] border-r border-[#d4af37]/30 flex items-center justify-end cursor-pointer relative overflow-hidden"
          onClick={handleKnock}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
          <div className="w-1 h-full bg-[#d4af37]/20 absolute right-0" />
        </motion.div>

        {/* Right Door */}
        <motion.div
          animate={{ x: isOpening ? '100%' : '0%' }}
          transition={{ type: 'spring', damping: 20, stiffness: 100 }}
          className="w-1/2 h-full bg-[#1a1a1a] border-l border-[#d4af37]/30 flex items-center justify-start cursor-pointer relative overflow-hidden"
          onClick={handleKnock}
        >
          <div className="absolute inset-0 opacity-20 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/dark-leather.png')]" />
          <div className="w-1 h-full bg-[#d4af37]/20 absolute left-0" />
        </motion.div>

        {/* Instructional Text */}
        <AnimatePresence>
          {!isOpening && (
            <motion.div
              exit={{ opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <div className="text-center">
                <p className="font-cinzel text-[#d4af37] text-xl tracking-[0.3em] uppercase opacity-80">
                  Knock twice to open
                </p>
                <div className="mt-4 h-px w-24 bg-[#d4af37]/40 mx-auto" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
