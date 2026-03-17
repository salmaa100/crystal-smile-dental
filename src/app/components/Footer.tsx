'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { RiMapPin2Line, RiPhoneLine, RiMailLine, RiInstagramLine, RiFacebookLine } from 'react-icons/ri';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Unified Pulse Animation for all icons
  const pulseVariants = {
    initial: { scale: 1, opacity: 1 },
    animate: {
      scale: [1, 1.15, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <footer className="bg-brand-navy">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          
          {/* Clinic Info */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl text-white">
              Crystal Smile
            </h3>
            <p className="font-body text-sm text-brand-mint/90">
              Luxury dental care for those who appreciate excellence in dental health and aesthetics.
            </p>
            <div className="flex space-x-4">
              <motion.a
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                whileHover={{ y: -4, scale: 1.2, opacity: 1 }}
                href="https://www.instagram.com/crystalsmile.dentalclinic?igsh=cmQ0Nmd3aG9nOHQx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:text-white transition-colors"
              >
                <RiInstagramLine className="w-6 h-6" />
              </motion.a>
              <motion.a
                variants={pulseVariants}
                initial="initial"
                animate="animate"
                whileHover={{ y: -4, scale: 1.2, opacity: 1 }}
                href="https://www.facebook.com/share/19VRjVe6CT/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-teal hover:text-white transition-colors"
              >
                <RiFacebookLine className="w-6 h-6" />
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-xl mb-4 text-white">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="font-ui text-sm text-white hover:text-brand-teal transition-colors">
                  Our Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="font-ui text-sm text-white hover:text-brand-teal transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="font-ui text-sm text-white hover:text-brand-teal transition-colors">
                  Smile Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="font-ui text-sm text-white hover:text-brand-teal transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                {/* FIXED WHATSAPP LINK */}
                <a 
                  href="https://wa.me/201092797153?text=Hello%20Crystal%20Smile%20Dental%2C%20I%20would%20like%20to%20book%20a%20consultation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-white hover:text-brand-teal transition-colors cursor-pointer"
                >
                  Book Your Consultation
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-heading text-xl mb-4 text-white">Contact Us</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                {/* Pulsing Map Icon */}
                <motion.div variants={pulseVariants} initial="initial" animate="animate">
                  <RiMapPin2Line className="w-6 h-6 text-brand-teal mt-1 shrink-0" />
                </motion.div>
                <a 
                  href="https://share.google/q6aAKkqsbjbkibpEO" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="font-ui text-sm text-white hover:text-brand-teal transition-colors leading-relaxed"
                >
                  Gateway Mall, Rehab City, Second New Cairo, Cairo Governorate 4750061
                </a>
              </li>
              <li className="flex items-center space-x-3">
                {/* Pulsing Phone Icon */}
                <motion.div variants={pulseVariants} initial="initial" animate="animate">
                  <RiPhoneLine className="w-6 h-6 text-brand-teal shrink-0" />
                </motion.div>
                <a href="tel:+201092797153" className="font-ui text-sm text-white hover:text-brand-teal transition-colors">
                  010 92797153
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <RiMailLine className="w-6 h-6 text-brand-teal shrink-0" />
                <a href="mailto:info@crystalsmile.com" className="font-ui text-sm text-white hover:text-brand-teal transition-colors">
                  info@crystalsmile.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-brand-teal/20">
          <p className="text-center text-sm font-ui text-white">
            © {currentYear} Crystal Smile Dental Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
