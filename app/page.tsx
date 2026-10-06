"use client";

import React, { useState, useEffect } from 'react';
import Entry from '@/components/Entry';
import Descent from '@/components/Descent';
import ArtPage from '@/components/Page';
import { motion, AnimatePresence } from 'framer-motion';

const GALLERY_DATA = [
  {
    title: "The Eternal Now",
    quote: "Existence is a flow of moments.",
    artist: "The Void",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&fit=crop&w=800&q=80",
    philosophy: "Within the stillness of art, we find the intersection of time and eternity. Every stroke is a breath, every color a heartbeat of the universe."
  },
  {
    title: "Shadows of Reason",
    quote: "Truth is a mirror broken into a thousand pieces.",
    artist: "The Mind",
    imageUrl: "https://images.unsplash.com/photo-1549490349-864336224755?auto=format&fit=crop&w=800&q=80",
    philosophy: "Philosophy does not provide answers; it refines the questions. Like shadows, the truth is felt more than seen."
  },
  {
    title: "Divine Silence",
    quote: "The silence is the only language the soul understands.",
    artist: "The Spirit",
    imageUrl: "https://images.unsplash.com/photo-1515405299443-f717963f17bc?auto=format&fit=crop&w=800&q=80",
    philosophy: "In the absence of noise, the essence of existence reveals itself. Art is the bridge between the seen and the unseen."
  }
];

export default function Home() {
  const [stage, setStage] = useState<'entry' | 'descent' | 'gallery'>('entry');
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    if (stage === 'descent') {
      const timer = setTimeout(() => {
        setStage('gallery');
      }, 3500);
      return () => clearTimeout(timer);
    }
  }, [stage]);

  return (
    <main className="relative min-h-screen bg-[#0a0a0a] text-[#f4e4bc]">
      <div className="grain" />

      <AnimatePresence mode="wait">
        {stage === 'entry' && (
          <Entry key="entry" onEnter={() => setStage('descent')} />
        )}

        {stage === 'descent' && (
          <Descent key="descent" onComplete={() => setStage('gallery')} />
        )}

        {stage === 'gallery' && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            {/* Introduction / Header */}
            {currentPage === 0 && (
              <div className="h-screen flex flex-col items-center justify-center text-center p-8 space-y-6">
                <motion.h1
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="font-cinzel text-5xl md:text-7xl text-[#d4af37]"
                >
                  The Digital Grimoire
                </motion.h1>
                <motion.p
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="font-cursive text-3xl opacity-80 max-w-2xl"
                >
                  A descent into the intersection of art and existential thought.
                </motion.p>
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  onClick={() => setCurrentPage(1)}
                  className="mt-8 px-6 py-2 border border-[#d4af37] text-[#d4af37] font-cinzel hover:bg-[#d4af37]/10 transition-colors uppercase tracking-widest text-sm"
                >
                  Begin the Journey
                </motion.button>
              </div>
            )}

            {/* Gallery Pages */}
            {currentPage > 0 && currentPage <= GALLERY_DATA.length && (
              <ArtPage
                page={GALLERY_DATA[currentPage - 1]}
                index={currentPage - 1}
                total={GALLERY_DATA.length}
              />
            )}

            {/* Conclusion Page */}
            {currentPage > GALLERY_DATA.length && (
              <div className="h-screen flex flex-col items-center justify-center text-center p-8 space-y-8">
                <h2 className="font-cinzel text-5xl text-[#d4af37]">The End</h2>
                <p className="font-serif text-xl opacity-80 max-w-md">
                  You have returned from the void. May the silence you found here linger in your mind.
                </p>
                <p className="font-cursive text-4xl text-[#d4af37]">Thank You</p>
              </div>
            )}

            {/* Gallery Navigation */}
            {currentPage > 0 && currentPage <= GALLERY_DATA.length && (
              <div className="fixed bottom-10 right-10 z-50 flex gap-4">
                <button
                  onClick={() => setCurrentPage(prev => prev - 1)}
                  className="p-3 rounded-full border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
                  disabled={currentPage === 1}
                >
                  ←
                </button>
                <button
                  onClick={() => setCurrentPage(prev => prev + 1)}
                  className="p-3 rounded-full border border-[#d4af37]/30 text-[#d4af37] hover:bg-[#d4af37]/10 transition-all"
                  disabled={currentPage > GALLERY_DATA.length}
                >
                  →
                </button>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
