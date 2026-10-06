"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface ArtPageProps {
  title: string;
  quote: string;
  artist: string;
  imageUrl: string;
  philosophy: string;
}

export default function ArtPage({ page, index, total }: { page: ArtPageProps, index: number, total: number }) {
  return (
    <div className="relative w-full h-screen p-8 md:p-20 flex flex-col md:flex-row items-center justify-center gap-12 overflow-hidden">
      {/* Aged Paper Background Overlay */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/beige-paper.png')] mix-blend-multiply" />

      {/* Art Piece (Collage Style) */}
      <motion.div
        initial={{ rotate: -2, scale: 0.9, opacity: 0 }}
        whileInView={{ rotate: -1, scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full md:w-1/2 aspect-[3/4] bg-white p-4 shadow-2xl"
      >
        <div className="w-full h-full overflow-hidden rotate-1 shadow-inner">
          <img
            src={page.imageUrl}
            alt={page.title}
            className="w-full h-full object-cover grayscale-[20%] sepia-[20%]"
          />
        </div>
        {/* Torn Edge Effect on Image */}
        <div className="absolute inset-0 pointer-events-none torn-edge" />
      </motion.div>

      {/* Text Content */}
      <motion.div
        initial={{ x: 50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative z-10 w-full md:w-1/2 space-y-6 text-center md:text-left"
      >
        <h2 className="font-cinzel text-4xl md:text-6xl text-[#d4af37]">{page.title}</h2>
        <p className="font-cursive text-2xl md:text-4xl italic opacity-80 text-[#f4e4bc]">
          "{page.quote}"
        </p>
        <div className="h-px w-20 bg-[#d4af37]/40 mx-auto md:mx-0" />
        <p className="font-serif text-lg md:text-xl leading-relaxed opacity-90">
          {page.philosophy}
        </p>
        <p className="font-cinzel text-sm tracking-widest opacity-60 uppercase">
          — {page.artist}
        </p>
      </motion.div>
    </div>
  );
}
