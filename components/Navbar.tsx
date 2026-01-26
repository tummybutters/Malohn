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
    { href: '/capital-solutions', label: 'Capital Solutions' },
    { href: '/transactions', label: 'Transactions' },
  ]

  const rightLinks = [
    { href: '/about', label: 'About' },
    { href: '/capital-group', label: 'Capital Group' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]

  return (
    <>
      {/* Desktop Navbar - Refined Technical Look */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center"
      >
        <div className="flex items-center px-6 py-3 rounded-none bg-[#0b111a]/95 border border-white/10 shadow-[0_14px_30px_rgba(0,0,0,0.55)] backdrop-blur-md">

          {/* Left Links */}
          <div className="flex items-center">
            {leftLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-1 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[1px] transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-accent-warm scale-x-100'
                      : 'bg-accent-warm/70 scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              )
            })}
          </div>

          {/* Divider 1 */}
          <div className="h-4 w-px bg-white/10 mx-2" />

          {/* Center Logo - Unboxed */}
          <Link href="/" className="relative mx-0 group">
            <div className="relative w-14 h-14 opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          {/* Divider 2 */}
          <div className="h-4 w-px bg-white/10 mx-2" />

          {/* Right Links */}
          <div className="flex items-center">
            {rightLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative px-5 py-1 group"
                >
                  <span className={`relative z-10 text-sm font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                    }`}>
                    {link.label}
                  </span>
                  {/* Underline */}
                  <span
                    className={`absolute bottom-0 left-5 right-5 h-[1px] transition-all duration-300 ease-out origin-left ${isActive
                      ? 'bg-accent-warm scale-x-100'
                      : 'bg-accent-warm/70 scale-x-0 group-hover:scale-x-100'
                      }`}
                  />
                </Link>
              )
            })}

            {/* Vertical Divider before CTA */}
            <div className="h-8 w-px bg-white/10 mx-5" />

            {/* CTA Button */}
            <Link
              href="/schedule"
              className="px-6 py-2 rounded-none bg-white/5 border border-white/10 text-white/90 text-sm font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              Schedule a Meeting
            </Link>
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
        <div className="flex items-center justify-between px-4 py-3 rounded-none bg-[#0b111a]/95 border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.5)] backdrop-blur-md">
          {/* Mobile Logo - Unboxed Link */}
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-8 h-8">
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight">
              <p className="text-sm font-semibold text-white">Malohn Capital</p>
            </div>
          </Link>

          {/* Mobile Menu Button - Sharp */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            className="flex items-center gap-2 px-3 py-2 rounded-none bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors"
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
                  <X size={20} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} />
                </motion.div>
              )}
            </AnimatePresence>
            <span className="text-[10px] uppercase tracking-[0.2em] font-medium">Menu</span>
          </motion.button>
        </div>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 p-4 rounded-none bg-[#101826] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.55)]"
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
                        className={`block px-4 py-3 rounded-none text-sm font-medium transition-all duration-200 border-l-2 ${isActive
                          ? 'bg-white/5 text-white border-accent-warm'
                          : 'text-white/60 border-transparent hover:text-white hover:bg-white/5 hover:border-white/20'
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
                  className="mt-4 pt-4 border-t border-white/10"
                >
                  <Link
                    href="/schedule"
                    className="block w-full px-4 py-3 rounded-none bg-white/10 border border-white/10 text-white text-sm font-medium text-center hover:bg-white/15"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Schedule a Meeting
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>

  )
}
