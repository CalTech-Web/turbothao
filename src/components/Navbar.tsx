"use client";

import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
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
          ? "bg-soft-white/95 shadow-md backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <a
          href="#hero"
          className={`font-heading text-xl font-bold transition-colors md:text-2xl ${
            scrolled ? "text-deep-plum" : "text-white"
          }`}
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
                  className={`flex items-center gap-1 text-sm font-medium transition-colors ${
                    scrolled
                      ? "text-charcoal hover:text-rose-gold"
                      : "text-white/90 hover:text-white"
                  }`}
                >
                  {link.label}
                  <ChevronDown className="h-4 w-4" />
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-56 rounded-xl bg-white py-2 shadow-xl">
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-2.5 text-sm text-charcoal transition-colors hover:bg-blush hover:text-rose-gold"
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
                className={`text-sm font-medium transition-colors ${
                  scrolled
                    ? "text-charcoal hover:text-rose-gold"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            )
          )}
          <a
            href="#contact"
            className="rounded-full bg-rose-gold px-6 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-rose-gold-light hover:shadow-lg"
          >
            Book Now
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden ${scrolled ? "text-charcoal" : "text-white"}`}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-blush bg-soft-white px-6 py-6 lg:hidden">
          {NAV_LINKS.map((link) => (
            <div key={link.label}>
              <a
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-charcoal transition-colors hover:text-rose-gold"
              >
                {link.label}
              </a>
              {link.children && (
                <div className="ml-4 border-l-2 border-blush">
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
            className="mt-4 block rounded-full bg-rose-gold px-6 py-3 text-center font-semibold text-white"
          >
            Book Now
          </a>
        </div>
      )}
    </header>
  );
}
