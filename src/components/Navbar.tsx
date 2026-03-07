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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 shadow-sm backdrop-blur-md border-b border-rose-gold/10"
          : "bg-white/80 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className="font-heading text-2xl font-semibold text-charcoal transition-colors md:text-2xl"
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
                <button
                  className="flex items-center gap-1 text-sm font-medium text-medium-gray transition-colors hover:text-rose-gold"
                >
                  {link.label}
                  <svg className="h-4 w-4" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 6L8 10L12 6" />
                  </svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white py-2 shadow-lg border border-rose-gold/10">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-2.5 text-sm text-medium-gray transition-colors hover:bg-blush hover:text-rose-gold"
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
                className="text-sm font-medium text-medium-gray transition-colors hover:text-rose-gold"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="rounded-full bg-rose-gold px-6 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:bg-rose-gold-dark hover:shadow-md"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-charcoal lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M18 6L6 18M6 6L18 18" /></svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 8H21M3 16H21" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-rose-gold/10 bg-white px-6 py-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-medium-gray transition-colors hover:text-rose-gold"
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 border-l border-rose-gold/15">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={handleLinkClick}
                      className="block py-2 pl-4 text-sm text-warm-gray transition-colors hover:text-rose-gold"
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
            className="mt-4 block rounded-full bg-rose-gold px-6 py-3 text-center font-medium text-white"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
