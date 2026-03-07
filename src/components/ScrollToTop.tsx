"use client";

import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

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
      className="fixed right-6 bottom-6 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-rose-gold text-white shadow-lg transition-all duration-300 hover:bg-rose-gold-light hover:scale-110"
    >
      <ArrowUp className="h-5 w-5" />
    </button>
  );
}
