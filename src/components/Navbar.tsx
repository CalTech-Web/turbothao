"use client";

import { useState, useEffect } from "react";
import { NAV_LINKS, BUSINESS_INFO } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    setIsOpen(false);
    setDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-primary/95 backdrop-blur-xl border-b border-border"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a
          href="#hero"
          className="font-heading text-lg tracking-[0.15em] uppercase text-text-primary transition-colors"
        >
          {BUSINESS_INFO.name}
        </a>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <button className="flex items-center gap-1 text-xs font-medium tracking-[0.1em] uppercase text-text-secondary transition-colors hover:text-rose-gold">
                  {link.label}
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5L6 7.5L9 4.5" /></svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 rounded-lg bg-surface-light border border-border py-2 shadow-2xl">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={handleLinkClick}
                        className="block px-5 py-2.5 text-xs tracking-wider text-text-secondary transition-colors hover:text-rose-gold hover:bg-surface-elevated"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-medium tracking-[0.1em] uppercase text-text-secondary transition-colors hover:text-rose-gold"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="rounded-none border border-rose-gold px-6 py-2.5 text-xs font-medium tracking-[0.15em] uppercase text-rose-gold transition-all duration-300 hover:bg-rose-gold hover:text-primary"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1"><path d="M15 5L5 15M5 5L15 15" /></svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1"><path d="M2 6H18M2 14H18" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-primary-light px-6 py-8 lg:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-xs tracking-[0.1em] uppercase text-text-secondary transition-colors hover:text-rose-gold"
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 border-l border-border">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={handleLinkClick}
                      className="block py-2 pl-4 text-xs tracking-wider text-text-muted transition-colors hover:text-rose-gold"
                    >
                      {child.label}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href="#contact"
            onClick={handleLinkClick}
            className="mt-6 block border border-rose-gold py-3 text-center text-xs tracking-[0.15em] uppercase text-rose-gold"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
