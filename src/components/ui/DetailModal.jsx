import { ExternalLink } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

export const DetailModal = ({ isOpen, onClose, title, subtitle, period, description, images = [], link, linkText = "Visit Page" }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dialogRef = useRef(null);
  const touchStart = useRef({ x: 0, y: 0, time: 0 });
  const touchDelta = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (isOpen) setCurrentIndex(0);
  }, [isOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;
    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  // Close on Escape, navigate with Arrow keys, and focus dialog on open
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === 'Escape') {
        e.stopPropagation();
        onClose?.();
        return;
      }
      if (!hasImages) return;
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        e.stopPropagation();
        goPrev();
        return;
      }
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        e.stopPropagation();
        goNext();
        return;
      }
    };
    document.addEventListener('keydown', handleKey, { capture: true });
    // focus dialog for better a11y and to ensure key events reach it
    dialogRef.current?.focus();
    return () => document.removeEventListener('keydown', handleKey, { capture: true });
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const hasImages = Array.isArray(images) && images.length > 0;

  const goPrev = () => setCurrentIndex((idx) => (idx - 1 + images.length) % images.length);
  const goNext = () => setCurrentIndex((idx) => (idx + 1) % images.length);

  const modalUi = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 overflow-y-auto">
      <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose}></div>
      <div role="dialog" aria-modal="true" ref={dialogRef} className="relative bg-slate-900/90 backdrop-blur-lg border border-cyan-500/20 rounded-2xl max-w-3xl w-full my-8 shadow-2xl focus:outline-none max-h-[90vh] flex flex-col" tabIndex={-1}>
        <button
          onClick={onClose}
          className="absolute top-3 right-3 px-3 py-1 rounded-md bg-slate-800/80 border border-slate-700 text-sm hover:bg-slate-700/80 transition z-10"
        >
          ✕
        </button>
        <div className="p-6 space-y-4 overflow-y-auto">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-amber-400 bg-clip-text text-transparent">{title}</h3>
            {subtitle && <p className="text-cyan-300/80 font-semibold">{subtitle}</p>}
            {period && <p className="text-gray-400 text-sm mt-1">{period}</p>}
          </div>
          {description && (
            <p className="text-gray-200 leading-relaxed whitespace-pre-line">{description}</p>
          )}
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-all hover:scale-105 font-medium"
            >
              <ExternalLink size={18} />
              <span>{linkText}</span>
            </a>
          )}
          {hasImages && (
            <div className="space-y-3">
              <div
                className="relative w-full aspect-video bg-slate-800/60 rounded-lg overflow-hidden border border-cyan-500/20"
                onTouchStart={(e) => {
                  if (!e.touches || e.touches.length === 0) return;
                  const t = e.touches[0];
                  touchStart.current = { x: t.clientX, y: t.clientY, time: Date.now() };
                  touchDelta.current = { x: 0, y: 0 };
                }}
                onTouchMove={(e) => {
                  if (!e.touches || e.touches.length === 0) return;
                  const t = e.touches[0];
                  touchDelta.current = {
                    x: t.clientX - touchStart.current.x,
                    y: t.clientY - touchStart.current.y,
                  };
                }}
                onTouchEnd={() => {
                  const dx = touchDelta.current.x;
                  const dy = touchDelta.current.y;
                  const dt = Date.now() - touchStart.current.time;
                  const horizontal = Math.abs(dx) > 40 && Math.abs(dy) < 60; // threshold
                  const quick = dt < 600; // quick swipe window
                  if (horizontal && quick) {
                    if (dx > 0) {
                      goPrev();
                    } else {
                      goNext();
                    }
                  }
                }}
              >
                <img
                  src={images[currentIndex]}
                  alt={`${title} ${currentIndex + 1}`}
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
                {images.length > 1 && (
                  <>
                    <button
                      onClick={goPrev}
                      className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
                      aria-label="Previous image"
                    >
                      ‹
                    </button>
                    <button
                      onClick={goNext}
                      className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white px-3 py-2 rounded-full"
                      aria-label="Next image"
                    >
                      ›
                    </button>
                  </>
                )}
                {images.length > 1 && (
                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrentIndex(i)}
                        className={`w-2 h-2 rounded-full ${i === currentIndex ? 'bg-cyan-400' : 'bg-white/40'}`}
                        aria-label={`Go to image ${i + 1}`}
                      />
                    ))}
                  </div>
                )}
              </div>
              <div className="grid grid-cols-6 gap-2">
                {images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentIndex(i)}
                    className={`aspect-video rounded-md overflow-hidden border ${i === currentIndex ? 'border-cyan-400' : 'border-transparent'} hover:border-cyan-300/60`}
                    aria-label={`Select image ${i + 1}`}
                  >
                    <img src={img} alt={`${title} thumb ${i + 1}`} className="w-full h-full object-cover" loading="lazy" />
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalUi, document.body);
};

export default DetailModal;


