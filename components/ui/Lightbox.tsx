"use client";

import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { GalleryImage } from "@/data/galleryData";
import { EASE_ARCHITECTURAL } from "@/components/ui/Motion";

interface LightboxProps {
  isOpen: boolean;
  images: GalleryImage[];
  currentIndex: number;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  isOpen,
  images,
  currentIndex,
  onClose,
  onIndexChange,
}) => {
  const currentImage = images[currentIndex];
  const shouldReduceMotion = useReducedMotion();

  const handleNext = useCallback(() => {
    onIndexChange((currentIndex + 1) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  const handlePrev = useCallback(() => {
    onIndexChange((currentIndex - 1 + images.length) % images.length);
  }, [currentIndex, images.length, onIndexChange]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    if (isOpen) {
      document.body.style.overflow = "hidden";
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, handleNext, handlePrev, onClose]);

  return (
    <AnimatePresence>
      {isOpen && currentImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE_ARCHITECTURAL }}
          className="fixed inset-0 z-50 bg-charcoal-950/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-8"
        >
          {/* Top Bar */}
          <div className="flex items-center justify-between text-ivory-100 max-w-6xl mx-auto w-full pb-4 border-b border-charcoal-800">
            <div>
              <span className="text-[10px] uppercase tracking-editorial text-brass font-medium">
                {currentImage.categoryLabel} · {currentIndex + 1} / {images.length}
              </span>
              <h3 className="text-base sm:text-lg font-serif text-ivory-50 font-normal">
                {currentImage.title}
              </h3>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-ivory-200 hover:text-ivory-50 bg-charcoal-800 hover:bg-charcoal-700 rounded-full border border-charcoal-700 transition-colors"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Main Presentation Area */}
          <div className="relative flex-1 flex items-center justify-center my-4 max-w-6xl mx-auto w-full">
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-10 p-3 bg-charcoal-800/80 hover:bg-charcoal-700 text-ivory-50 rounded-full border border-charcoal-700 transition-all active:scale-95"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <motion.div
              key={currentImage.id}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE_ARCHITECTURAL }}
              className="relative w-full h-[65vh] sm:h-[75vh] max-w-4xl"
            >
              <Image
                src={currentImage.src}
                alt={currentImage.title}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                priority
              />
            </motion.div>

            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-10 p-3 bg-charcoal-800/80 hover:bg-charcoal-700 text-ivory-50 rounded-full border border-charcoal-700 transition-all active:scale-95"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Caption Footer */}
          <div className="text-center max-w-2xl mx-auto text-xs text-charcoal-400 font-sans pb-2">
            <p>{currentImage.caption}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
