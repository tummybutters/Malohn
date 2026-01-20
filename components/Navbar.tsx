'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const leftLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
  ]

  const rightLinks = [
    { href: '/services', label: 'Services' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center"
      >
        <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-white/70 backdrop-blur-xl border border-black/[0.05] shadow-[0_8px_32px_rgba(0,0,0,0.06)]">
          {/* Left Links */}
          <div className="flex items-center">
            {leftLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-text-primary' : 'text-text-muted group-hover:text-text-primary'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-1 left-5 right-5 h-px transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-accent-primary scale-x-100'
                      : 'bg-accent-primary scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Center Logo */}
          <Link href="/" className="relative mx-2">
            <motion.div
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-black/[0.05] hover:border-black/10 transition-colors duration-300 bg-white"
            >
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                width={48}
                height={48}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </Link>

          {/* Right Links */}
          <div className="flex items-center">
            {rightLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-2 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-text-primary' : 'text-text-muted group-hover:text-text-primary'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-1 left-5 right-5 h-px transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-accent-primary scale-x-100'
                      : 'bg-accent-primary scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              )
            })}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2 px-6 py-2 rounded-full bg-accent-primary text-white text-sm font-medium hover:bg-accent-primary/90 transition-colors duration-200 shadow-md shadow-accent-primary/20"
            >
              Book a Call
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-4 left-4 right-4 z-50 md:hidden"
      >
        <div className="flex items-center justify-between px-4 py-3 rounded-full bg-white/80 backdrop-blur-xl border border-black/[0.05] shadow-lg shadow-black/[0.03]">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-black/10 bg-white">
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
          </Link>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="w-10 h-10 flex items-center justify-center text-text-muted hover:text-text-primary transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={22} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={22} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 p-4 rounded-2xl bg-white/95 backdrop-blur-xl border border-black/[0.05] shadow-2xl"
            >
              <div className="flex flex-col gap-1">
                {allLinks.map((link, i) => {
                  const isActive = pathname === link.href
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                    >
                      <Link
                        href={link.href}
                        className={`block px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${isActive
                          ? 'bg-bg-secondary text-text-primary'
                          : 'text-text-muted hover:text-text-primary hover:bg-bg-secondary/50'
                          }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  )
                })}
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: allLinks.length * 0.05 }}
                  className="mt-2 pt-2 border-t border-black/5"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 rounded-xl bg-accent-primary text-white text-base font-medium shadow-lg shadow-accent-primary/20"
                  >
                    Book a Call
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>

  )
}
