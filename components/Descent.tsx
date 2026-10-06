"use client";

import React from 'react';
import { motion } from 'framer-motion';

const FRAMES = [1, 2, 3, 4, 5];

export default function Descent({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="fixed inset-0 bg-black overflow-hidden perspective-1000 flex items-center justify-center">
      {/* Divine Light */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.1, opacity: 0 }}
          animate={{ scale: 10, opacity: 0.6 }}
          transition={{ duration: 3, ease: "easeOut" }}
          className="w-64 h-64 rounded-full bg-white blur-[100px] mix-blend-screen"
        />
        <div className="absolute w-full h-full bg-gradient-to-b from-transparent via-transparent to-black opacity-50" />
      </div>

      {/* Falling Frames */}
      <div className="relative w-full h-full flex items-center justify-center transform-style-3d">
        {FRAMES.map((i) => (
          <motion.div
            key={i}
            initial={{ z: -1000 * i, opacity: 0, scale: 0.5 }}
            animate={{ z: 1500, opacity: [0, 1, 1, 0], scale: 2 }}
            transition={{
              duration: 2.5,
              delay: i * 0.4,
              ease: "easeIn"
            }}
            className="absolute w-[80vw] h-[80vh] border-[12px] border-[#d4af37]/40 rounded-sm flex items-center justify-center"
            style={{
              boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8), 0 0 20px rgba(212,175,55,0.2)',
              backgroundColor: 'rgba(20, 20, 20, 0.8)'
            }}
          >
            {/* Ornate Cursive Decor */}
            <div className="absolute top-4 left-4 font-cursive text-[#d4af37] text-4xl opacity-40">❧</div>
            <div className="absolute bottom-4 right-4 font-cursive text-[#d4af37] text-4xl opacity-40">❧</div>

            {/* Inner Content (Pseudo-Text) */}
            <div className="w-full h-full p-8 grid grid-cols-3 gap-4 opacity-20 pointer-events-none">
              {[...Array(12)].map((_, idx) => (
                <div key={idx} className="h-4 bg-[#d4af37]/20 rounded-full" />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Timeout to move to Gallery */}
      <div
        className="hidden"
        onLoad={() => {}} // Logic handled in page.tsx
      />
    </div>
  );
}
