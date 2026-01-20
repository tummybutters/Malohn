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
        <div className="flex items-center gap-2 px-2 py-2 rounded-full bg-[#9fb6d9]/70 backdrop-blur-xl border border-white/30 shadow-[0_10px_30px_rgba(12,26,50,0.25)]">
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
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-1 left-5 right-5 h-px transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-white/80 scale-x-100'
                      : 'bg-white/50 scale-x-0 group-hover:scale-x-100'
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
              className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/30 hover:border-white/60 transition-colors duration-300 bg-white/80"
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
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/70 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-1 left-5 right-5 h-px transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-white/80 scale-x-100'
                      : 'bg-white/50 scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              )
            })}

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="ml-2 px-6 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/40 text-white text-sm font-medium shadow-[0_8px_20px_rgba(12,26,50,0.25)] hover:bg-white/25 hover:border-white/60 transition-all duration-200"
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
        <div className="flex items-center justify-between px-4 py-3 rounded-full bg-[#9fb6d9]/75 backdrop-blur-xl border border-white/30 shadow-[0_10px_24px_rgba(12,26,50,0.22)]">
          {/* Mobile Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full overflow-hidden border border-white/40 bg-white/85">
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
            className="w-10 h-10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
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
              className="mt-3 p-4 rounded-2xl bg-[#9fb6d9]/95 backdrop-blur-xl border border-white/30 shadow-[0_20px_45px_rgba(12,26,50,0.3)]"
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
                          ? 'bg-white/20 text-white'
                          : 'text-white/70 hover:text-white hover:bg-white/10'
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
                  className="mt-2 pt-2 border-t border-white/20"
                >
                  <motion.button
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-4 py-3 rounded-xl bg-white/15 backdrop-blur-md border border-white/40 text-white text-base font-medium shadow-[0_10px_22px_rgba(12,26,50,0.25)]"
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
