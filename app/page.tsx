'use client'

import { useRef, useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import ActionButton from '@/components/ActionButton'
import FormSubmitButton from '@/components/FormSubmitButton'

const ROTATING_WORDS = ['Build', 'Start', 'Expand']

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [currentWordIndex, setCurrentWordIndex] = useState(0)

  // Rotate through words
  useEffect(() => {
    const wordInterval = setInterval(() => {
      setCurrentWordIndex((prev) => (prev + 1) % ROTATING_WORDS.length)
    }, 1800)
    return () => clearInterval(wordInterval)
  }, [])

  // Auto-scroll carousel
  useEffect(() => {
    const container = carouselRef.current
    if (!container) return

    let scrollInterval: NodeJS.Timeout

    const startAutoScroll = () => {
      scrollInterval = setInterval(() => {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0
        } else {
          container.scrollLeft += 1
        }
      }, 30)
    }

    startAutoScroll()

    container.addEventListener('mouseenter', () => clearInterval(scrollInterval))
    container.addEventListener('mouseleave', startAutoScroll)

    return () => clearInterval(scrollInterval)
  }, [])

  return (
    <div className="min-h-screen bg-[#4a6fa5] selection:bg-white/20">
      {/* Hero Section - Full Viewport with Soft Blue Background */}
      <section
        className="min-h-screen p-4 md:p-6 lg:p-8 flex flex-col"
        style={{
          background: 'linear-gradient(180deg, #4a6fa5 0%, #5d7fb5 30%, #7a9cc7 60%, #a8c0d8 100%)',
        }}
      >
        {/* SVG Mask Definition - Subtle folder shape with smooth tab */}
        <svg width="0" height="0" className="absolute" aria-hidden="true">
          <defs>
            {/* Folder-shaped clip path with subtle tab on BOTTOM-RIGHT corner */}
            <clipPath id="folderClip" clipPathUnits="objectBoundingBox">
              {/* 
                Subtle folder shape with bottom-right tab:
                - Main body covers most of the area
                - Small step-down (8%) on the right side creates subtle tab
                - Smooth curved transition
              */}
              <path d="
                M 0.025 0
                Q 0 0 0 0.03
                L 0 0.89
                Q 0 0.92 0.025 0.92
                L 0.60 0.92
                C 0.63 0.92 0.65 0.93 0.66 0.95
                L 0.68 0.975
                C 0.69 0.99 0.70 1 0.72 1
                L 0.975 1
                Q 1 1 1 0.97
                L 1 0.03
                Q 1 0 0.975 0
                Z
              " />
            </clipPath>
          </defs>
        </svg>

        {/* Main Visual Container - The "Folder" Shape */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative flex-1 max-h-[85vh] overflow-hidden shadow-[0_25px_80px_-12px_rgba(0,0,0,0.3)] bg-white"
          style={{
            clipPath: 'url(#folderClip)',
          }}
        >
          {/* Video Background - Scaled to crop black edges */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              playsInline
              loop
              className="w-full h-full object-cover"
              style={{
                transform: 'scale(1.05)',
                transformOrigin: 'center center',
              }}
            >
              <source src="/videos/hero-video.mp4" type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Hero Text Content - Below the folder */}
        <div className="pt-8 md:pt-10 pb-4">
          {/* Main content row - headline left, description right */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 lg:gap-12">
            {/* Left Side - Headline */}
            <div className="lg:max-w-[55%]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/70 mb-3 font-medium"
              >
                A Space for Wealth Building
              </motion.p>

              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light leading-[1.05] tracking-tight text-white">
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                  className="block"
                >
                  Where <span className="font-semibold">Capital</span>
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="block"
                >
                  Evolves <span className="font-semibold">Beyond Limits</span>
                </motion.span>
              </h1>
            </div>

            {/* Right Side - Description + CTAs, aligned to baseline */}
            <div className="lg:max-w-[380px]">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="text-sm md:text-base text-white/75 mb-5 leading-relaxed"
              >
                We build portfolios powered by creative financing, strategic acquisitions, and designed for generational wealth.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.4 }}
                className="flex flex-row items-center gap-3"
              >
                <ActionButton>Explore the Future</ActionButton>
                <ActionButton>See Our Process</ActionButton>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Mute Button - positioned at bottom right */}
        <div className="flex items-center justify-end mt-auto">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white/70 hover:bg-white/20 hover:text-white transition-all"
            aria-label="Toggle audio"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
              <line x1="23" y1="9" x2="17" y2="15"></line>
              <line x1="17" y1="9" x2="23" y2="15"></line>
            </svg>
          </motion.button>
        </div>
      </section>

      {/* Track Record Section */}
      <section
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #a8c0d8 0%, #7a9cc7 50%, #5d7fb5 100%)',
        }}
      >
        {/* Subtle texture overlay */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16 md:mb-20"
          >
            <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/60 mb-4 font-medium">
              Our Track Record
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-light text-white max-w-xl leading-tight">
              A hand-holding creative finance solution for{' '}
              <span className="font-semibold">real estate investors</span>
            </h2>
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-3 gap-8 md:gap-12 mb-16">
            {[
              { value: '110+', label: 'Years of mortgage experience' },
              { value: '$817M', label: 'Total funded volume' },
              { value: '6.2%', label: 'Current interest rate' },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center md:text-left"
              >
                <p className="text-3xl md:text-5xl lg:text-6xl font-light text-white mb-2">{stat.value}</p>
                <p className="text-xs md:text-sm text-white/60 leading-relaxed">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <ActionButton>Book Free Strategy Call</ActionButton>
          </motion.div>
        </div>
      </section>

      {/* Recently Funded Deals Carousel */}
      <section
        className="py-16 md:py-24 overflow-hidden relative"
        style={{
          background: 'linear-gradient(180deg, #5d7fb5 0%, #4a6fa5 100%)',
        }}
      >
        <div className="px-6 md:px-12 lg:px-20 mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/60 font-medium"
          >
            Recently Funded Deals
          </motion.p>
        </div>

        {/* Carousel */}
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 py-4"
          style={{ scrollBehavior: 'smooth' }}
        >
          {[
            { amount: '$425,000', location: 'Cleveland, OH', downPayment: '10%', cashOnCash: '32%' },
            { amount: '$312,000', location: 'Detroit, MI', downPayment: '15%', cashOnCash: '28%' },
            { amount: '$275,000', location: 'Memphis, TN', downPayment: '10%', cashOnCash: '35%' },
            { amount: '$198,000', location: 'Indianapolis, IN', downPayment: '12%', cashOnCash: '30%' },
            { amount: '$385,000', location: 'Kansas City, MO', downPayment: '10%', cashOnCash: '29%' },
            { amount: '$342,000', location: 'Columbus, OH', downPayment: '11%', cashOnCash: '31%' },
            { amount: '$265,000', location: 'Birmingham, AL', downPayment: '10%', cashOnCash: '33%' },
            { amount: '$295,000', location: 'Louisville, KY', downPayment: '12%', cashOnCash: '27%' },
          ].concat([
            { amount: '$425,000', location: 'Cleveland, OH', downPayment: '10%', cashOnCash: '32%' },
            { amount: '$312,000', location: 'Detroit, MI', downPayment: '15%', cashOnCash: '28%' },
            { amount: '$275,000', location: 'Memphis, TN', downPayment: '10%', cashOnCash: '35%' },
            { amount: '$198,000', location: 'Indianapolis, IN', downPayment: '12%', cashOnCash: '30%' },
          ]).map((deal, i) => (
            <motion.div
              key={`${deal.location}-${i}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="min-w-[280px] md:min-w-[320px] rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 overflow-hidden flex-shrink-0 group hover:bg-white/15 hover:border-white/30 hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image placeholder */}
              <div className="aspect-[4/3] bg-white/5 relative">
                <span className="absolute top-3 left-3 px-2.5 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] font-medium rounded-full border border-white/10">
                  Just Funded
                </span>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              {/* Content */}
              <div className="p-6">
                <p className="text-xl font-semibold text-white mb-1">{deal.amount}</p>
                <p className="text-sm text-white/60 mb-4">{deal.location}</p>
                <div className="flex items-center gap-3 text-xs font-medium">
                  <span className="text-white/70">{deal.downPayment} Down</span>
                  <span className="text-white px-2.5 py-1 bg-white/20 rounded-full">{deal.cashOnCash} CoC</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trust Section */}
      <section
        className="px-6 md:px-12 lg:px-20 py-14 md:py-18 relative"
        style={{
          background: 'linear-gradient(180deg, #4a6fa5 0%, #3d5a87 100%)',
        }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/50 font-medium">
              Trusted by Real Estate Investors Nationwide
            </p>
          </motion.div>

          {/* Logo placeholders */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-8 md:gap-14"
          >
            {['Forbes', 'BiggerPockets', 'Yahoo Finance', 'NBC', 'BBB'].map((logo) => (
              <span
                key={logo}
                className="text-white/40 text-sm md:text-lg font-medium tracking-wide hover:text-white/70 transition-colors cursor-default"
              >
                {logo}
              </span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lead Magnet Section */}
      <section
        className="px-6 md:px-12 lg:px-20 py-20 md:py-28 relative"
        style={{
          background: 'linear-gradient(180deg, #3d5a87 0%, #5d7fb5 50%, #7a9cc7 100%)',
        }}
      >
        {/* Subtle texture */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }} />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-8 md:p-12 lg:p-16 shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Left Content */}
              <div>
                <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/60 mb-4 font-medium">
                  Free Resource
                </p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-light text-white leading-tight mb-4">
                  Free Hybrid DSCR &{' '}
                  <span className="font-semibold">Creative Financing</span> Guide
                </h3>
                <p className="text-lg text-white/80 mb-6">
                  How to Buy Real Estate with Less than 20% Down
                </p>
                <p className="text-sm text-white/60 leading-relaxed">
                  Traditional financing is getting stricter—discover how to outsmart them and acquire rental properties with less than 20% down using Hybrid DSCR Loans.
                </p>
              </div>

              {/* Right Form */}
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-5 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder:text-white/50 focus:outline-none focus:border-white/40 focus:bg-white/15 transition-all"
                />
                <FormSubmitButton text="Get Free Guide" sentText="Sent!" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section
        className="px-6 md:px-12 lg:px-20 py-24 md:py-32 relative overflow-hidden"
        style={{
          background: 'linear-gradient(180deg, #7a9cc7 0%, #a8c0d8 50%, #c4d6e6 100%)',
        }}
      >
        {/* Subtle glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl aspect-square bg-white/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] md:text-xs tracking-[0.25em] uppercase text-white/60 mb-6 font-medium">
              Ready to Scale?
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white leading-tight mb-6">
              Let's talk about your{' '}
              <span className="font-semibold">next deal</span>
            </h2>
            <p className="text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed text-lg">
              Ready to purchase your next property? Speak with one of our bankers to explore capital structure, portfolio strategies, or financing options.
            </p>
            <div className="flex justify-center">
              <ActionButton>Schedule a Meeting</ActionButton>
            </div>
          </motion.div>
        </div>
      </section>
    </div>

  )
}
