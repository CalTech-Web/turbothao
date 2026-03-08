"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
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
          ? "bg-white/95 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)]"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#hero" className="transition-opacity hover:opacity-80">
          <Image src="/logo.webp" alt={BUSINESS_INFO.name} width={180} height={60} className="h-16 w-auto animate-spin-slow" priority />
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
                <button className="flex items-center gap-1 text-sm italic text-text-secondary transition-colors hover:text-accent-pink">
                  {link.label}
                  <svg className="h-3 w-3" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5L6 7.5L9 4.5" /></svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-white border border-border py-2 shadow-[0_15px_25px_-7px_rgba(0,0,0,0.1)]">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={handleLinkClick}
                        className="block px-5 py-2.5 text-sm italic text-text-secondary transition-colors hover:text-accent-pink hover:bg-primary-soft"
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
                className="text-sm italic text-text-secondary transition-colors hover:text-accent-pink"
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="rounded-full bg-accent-pink px-7 py-2.5 text-sm font-medium text-white shadow-[2px_2px_5px_0px_rgba(21,63,33,0.2)] transition-all duration-300 hover:bg-accent-pink-light hover:shadow-[0_15px_25px_-7px_rgba(0,0,0,0.1)]"
          >
            Make A Reservation
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-text-primary lg:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M15 5L5 15M5 5L15 15" /></svg>
          ) : (
            <svg className="h-6 w-6" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 6H18M2 14H18" /></svg>
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-border bg-white px-6 py-8 lg:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-base italic text-text-secondary transition-colors hover:text-accent-pink"
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 border-l-2 border-accent-pink/20">
                  {link.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      onClick={handleLinkClick}
                      className="block py-2 pl-4 text-sm italic text-text-muted transition-colors hover:text-accent-pink"
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
            className="mt-6 block rounded-full bg-accent-pink py-3 text-center text-sm font-medium text-white"
          >
            Make A Reservation
          </a>
        </div>
      )}
    </header>
  );
}
