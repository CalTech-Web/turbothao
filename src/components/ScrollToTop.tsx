"use client";

import { useState, useEffect } from "react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className="fixed right-6 bottom-6 z-40 flex h-10 w-10 items-center justify-center border border-border bg-surface text-rose-gold/60 transition-all duration-300 hover:border-rose-gold/30 hover:text-rose-gold hover:bg-rose-gold-glow"
    >
      <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round">
        <path d="M8 13V3M4 7L8 3L12 7" />
      </svg>
    </button>
  );
}
