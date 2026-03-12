"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { NAV_LINKS, BUSINESS_INFO, BOOKING_URL } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
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
          : "bg-white/90 backdrop-blur-md"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image src="/logo.webp" alt={BUSINESS_INFO.name} width={180} height={60} className="h-16 w-auto animate-spin-slow" priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) =>
            link.children ? (
              <div
                key={link.label}
                className="relative"
                ref={dropdownRef}
              >
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                  className="flex items-center gap-1 text-sm font-medium text-text-secondary transition-colors hover:text-accent-pink"
                >
                  {link.label}
                  <svg className={`h-3 w-3 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"><path d="M3 4.5L6 7.5L9 4.5" /></svg>
                </button>
                {dropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-56 rounded-xl bg-white border border-border py-2 shadow-[0_15px_25px_-7px_rgba(0,0,0,0.1)]">
                    {link.children.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={handleLinkClick}
                        className="block px-5 py-2.5 text-sm font-medium text-text-secondary transition-colors hover:text-accent-pink hover:bg-primary-soft"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-secondary transition-colors hover:text-accent-pink"
              >
                {link.label}
              </Link>
            )
          )}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-accent-pink px-7 py-2.5 text-sm font-semibold text-white shadow-[0_4px_15px_rgba(242,4,115,0.3)] transition-all duration-300 hover:bg-accent-pink-light hover:shadow-[0_6px_20px_rgba(242,4,115,0.4)]"
          >
            Book Appointment
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
              <Link
                href={link.href}
                onClick={handleLinkClick}
                className="block py-3 text-base font-medium text-text-secondary transition-colors hover:text-accent-pink"
              >
                {link.label}
              </Link>
              {link.children && (
                <div className="ml-4 border-l-2 border-accent-pink/20">
                  {link.children.map((child) => (
                    <Link
                      key={child.label}
                      href={child.href}
                      onClick={handleLinkClick}
                      className="block py-2 pl-4 text-sm font-medium text-text-muted transition-colors hover:text-accent-pink"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
          <a
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleLinkClick}
            className="mt-6 block rounded-full bg-accent-pink py-3 text-center text-sm font-medium text-white"
          >
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
