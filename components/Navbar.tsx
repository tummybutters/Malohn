'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMenuVisible, setIsMenuVisible] = useState(false)
  const pathname = usePathname()

  const leftLinks = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/capital-solutions', label: 'Capital Solutions' },
  ]

  const rightLinks = [
    { href: '/transactions', label: 'Transactions' },
    { href: '/client-success', label: 'Client Success' },
    { href: '/about', label: 'About' },
    { href: '/capital-group', label: 'Capital Group' },
  ]

  const allLinks = [...leftLinks, ...rightLinks]
  const solutionLinks = allLinks.filter((link) =>
    ['/services', '/capital-solutions'].includes(link.href)
  )
  const companyLinks = allLinks.filter((link) =>
    ['/', '/transactions', '/client-success', '/about', '/capital-group'].includes(link.href)
  )

  const isLinkActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname === href || pathname.startsWith(`${href}/`)
  }

  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuVisible(true)
      return
    }

    if (!isMenuVisible) return

    const timeout = window.setTimeout(() => setIsMenuVisible(false), 200)
    return () => window.clearTimeout(timeout)
  }, [isMenuOpen, isMenuVisible])

  return (
    <>
      {/* Desktop Navbar - Refined Technical Look */}
      <nav className="fixed top-6 left-0 right-0 z-50 hidden md:flex justify-center animate-fade-down">
        <div className="flex items-center px-4 py-2.5 rounded-none bg-[#0b111a]/95 border border-white/10 shadow-[0_14px_30px_rgba(0,0,0,0.55)] backdrop-blur-md">
          {/* Logo - Left aligned */}
          <Link href="/" className="relative group">
            <div className="relative w-32 h-12 opacity-90 group-hover:opacity-100 transition-opacity">
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                fill
                className="object-contain scale-[1.15]"
              />
            </div>
          </Link>

          <div className="h-4 w-px bg-white/10 mx-3" />

          {/* Left Links */}
          <div className="flex items-center">
            {leftLinks.map((link, index) => {
              const isActive = isLinkActive(link.href)
              return (
                <div key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className="relative px-3 py-0.5 group"
                  >
                    <span className={`relative z-10 text-[11px] font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}>
                      {link.label}
                    </span>
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[1px] transition-all duration-300 ease-out origin-left ${isActive
                        ? 'bg-accent-warm scale-x-100'
                        : 'bg-accent-warm/70 scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </Link>
                  {index < leftLinks.length - 1 && <div className="h-3.5 w-px bg-white/10 mx-1" />}
                </div>
              )
            })}
          </div>

          <div className="h-4 w-px bg-white/10 mx-3" />

          {/* Right Links */}
          <div className="flex items-center">
            {rightLinks.map((link, index) => {
              const isActive = isLinkActive(link.href)
              return (
                <div key={link.href} className="flex items-center">
                  <Link
                    href={link.href}
                    className="relative px-3 py-0.5 group"
                  >
                    <span className={`relative z-10 text-[11px] font-medium transition-colors duration-300 ${isActive ? 'text-white' : 'text-white/60 group-hover:text-white'
                      }`}>
                      {link.label}
                    </span>
                    <span
                      className={`absolute bottom-0 left-3 right-3 h-[1px] transition-all duration-300 ease-out origin-left ${isActive
                        ? 'bg-accent-warm scale-x-100'
                        : 'bg-accent-warm/70 scale-x-0 group-hover:scale-x-100'
                        }`}
                    />
                  </Link>
                  {index < rightLinks.length - 1 && <div className="h-3.5 w-px bg-white/10 mx-1" />}
                </div>
              )
            })}

            <div className="h-4 w-px bg-white/10 mx-3" />

            <Link
              href="https://form.typeform.com/to/lGiCs1cM"
              className="px-4 py-1.5 rounded-none bg-white/5 border border-white/10 text-white/90 text-[11px] font-medium hover:bg-white/10 hover:border-white/20 hover:text-white transition-all duration-200"
            >
              Schedule a Meeting
            </Link>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-2 left-3 right-3 z-50 md:hidden animate-fade-down sm:top-3 sm:left-4 sm:right-4">
        <div className="flex items-center justify-between px-3 py-2.5 rounded-none bg-[#0b111a]/95 border border-white/10 shadow-[0_12px_28px_rgba(0,0,0,0.5)] backdrop-blur-md sm:px-4">
          <Link href="/" className="flex items-center gap-3">
            <div className="relative w-9 h-9 sm:w-10 sm:h-10">
              <Image
                src="/images/logo.png"
                alt="Malohn Capital Group"
                fill
                className="object-contain"
              />
            </div>
            <div className="leading-tight max-w-[132px]">
              <p className="text-[10px] sm:text-[11px] font-semibold text-white leading-[1.1]">Malohn Capital Group</p>
            </div>
          </Link>

          <button
            className="flex items-center gap-2 px-2.5 py-1.5 rounded-none bg-white/5 border border-white/10 text-white/70 hover:text-white transition-colors active:scale-90"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="relative h-5 w-5">
              <Menu
                size={20}
                className={`absolute inset-0 transition-all duration-200 ${isMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}
              />
              <X
                size={20}
                className={`absolute inset-0 transition-all duration-200 ${isMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}
              />
            </span>
            <span className="text-[10px] uppercase tracking-[0.16em] font-medium">Menu</span>
          </button>
        </div>

        {isMenuVisible && (
          <div
            id="mobile-menu"
            className={`mt-2 p-4 rounded-none bg-[#101826] border border-white/10 shadow-[0_20px_45px_rgba(0,0,0,0.55)] transition-all duration-200 ease-[cubic-bezier(0.16,1,0.3,1)] ${isMenuOpen ? 'opacity-100 translate-y-0 scale-100 pointer-events-auto' : 'opacity-0 -translate-y-2 scale-[0.98] pointer-events-none'}`}
          >
            <div className="flex flex-col gap-1">
              <p className="px-4 pt-1 pb-1 text-[10px] uppercase tracking-[0.2em] text-white/40">Solutions</p>
              {solutionLinks.map((link, i) => {
                const isActive = isLinkActive(link.href)
                return (
                  <div
                    key={link.href}
                    className={`transition-all duration-200 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    style={{ transitionDelay: `${i * 50}ms` }}
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
                  </div>
                )
              })}
              <p className="mt-3 px-4 pt-1 pb-1 text-[10px] uppercase tracking-[0.2em] text-white/40">Company</p>
              {companyLinks.map((link, i) => {
                const isActive = isLinkActive(link.href)
                const offset = solutionLinks.length + i
                return (
                  <div
                    key={link.href}
                    className={`transition-all duration-200 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                    style={{ transitionDelay: `${offset * 50}ms` }}
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
                  </div>
                )
              })}
              <div
                className={`mt-4 pt-4 border-t border-white/10 transition-all duration-200 ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}
                style={{ transitionDelay: `${(solutionLinks.length + companyLinks.length) * 50}ms` }}
              >
                <Link
                  href="https://form.typeform.com/to/lGiCs1cM"
                  className="block w-full px-4 py-3 rounded-none bg-white/10 border border-white/10 text-white text-sm font-medium text-center hover:bg-white/15"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}
