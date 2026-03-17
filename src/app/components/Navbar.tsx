'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMenu4Line, RiCloseLine } from 'react-icons/ri';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/about', label: 'About' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="w-full bg-white border-b border-brand-teal/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Logo */}
          {/* Logo */}
<Link href="/" className="flex items-center">
  <motion.div 
    whileHover={{ scale: 1.05 }}
    className="relative h-16 w-56" // Increased height (h-16) and width (w-56)
  >
    <Image
      src="/assets/images/Logo_H.png" // The path to your logo file
      alt="Crystal Smile Dental Clinic"
      fill
      className="object-contain"
      priority
    />
  </motion.div>
</Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileHover={{ y: -2 }}
              >
                <Link
                  href={link.href}
                  className="font-ui text-sm text-brand-navy hover:text-brand-teal transition-all duration-300 tracking-wide"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="ml-4"
            >
              <Link
               <a
  href="https://wa.me/201092797153?text=Hello%20Crystal%20Smile%20Dental%2C%20I%20would%20like%20to%20book%20an%20appointment."
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block font-ui text-sm px-6 py-3 bg-brand-teal text-white hover:bg-brand-navy transition-all duration-300 rounded-full tracking-wide"
>
  Book Appointment
</a>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-full hover:bg-primary-gold/10 transition-all duration-300"
            >
              {isOpen ? (
                <RiCloseLine className="w-7 h-7 text-brand-teal" />
              ) : (
                <RiMenu4Line className="w-7 h-7 text-brand-teal" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -20 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="px-4 pt-2 pb-6 bg-white border-t border-brand-teal/20">
          {navLinks.map((link) => (
            <motion.div
              key={link.href}
              whileHover={{ x: 4 }}
            >
              <Link
                href={link.href}
                className="block py-4 font-ui text-sm text-brand-navy hover:text-brand-teal transition-all duration-300 tracking-wide"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            </motion.div>
          ))}
          <motion.div
            whileHover={{ scale: 1.02 }}
            className="mt-4"
          >
            <Link
              href="/appointment"
              className="block w-full text-center font-ui text-sm px-6 py-3 bg-brand-teal text-white hover:bg-brand-navy transition-all duration-300 rounded-full tracking-wide"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </motion.div>
        </div>
      </motion.div>
    </motion.nav>
  );
} 
