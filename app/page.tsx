'use client'

import { useRef, useEffect, useState } from 'react'
import { animate, motion, useInView, useReducedMotion } from 'framer-motion'
import ActionButton from '@/components/ActionButton'
import FormSubmitButton from '@/components/FormSubmitButton'
import { ArrowRight, Play } from 'lucide-react'

const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Strategy & Objectives',
    body: 'We review your portfolio goals, capital stack requirements, and liquidity targets to define the optimal structure.',
  },
  {
    step: '02',
    title: 'Structure Design',
    body: 'We engineer a multi-tranche solution aligning DSCR financing and working capital with your cash flow models.',
  },
  {
    step: '03',
    title: 'Execution & Close',
    body: 'We confirm terms, coordinate underwriting, and manage the closing process with disciplined precision.',
  },
]

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const statsInView = useInView(statsRef, { once: true, margin: '-20% 0px' })
  const [counts, setCounts] = useState({ years: 0, volume: 0, rate: 0 })
  const hasCountedRef = useRef(false)
  const shouldReduceMotion = useReducedMotion()
  const [isVideoFading, setIsVideoFading] = useState(false)
  const videoFadeTriggeredRef = useRef(false)

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

  // Stats Counter
  useEffect(() => {
    if (!statsInView || hasCountedRef.current) return
    hasCountedRef.current = true

    if (shouldReduceMotion) {
      setCounts({ years: 39, volume: 351, rate: 5.99 })
      return
    }

    const duration = 2.2
    const ease: [number, number, number, number] = [0.16, 1, 0.3, 1]

    const controls = [
      animate(0, 39, {
        duration,
        ease,
        onUpdate: (latest) => setCounts((prev) => ({ ...prev, years: Math.floor(latest) })),
      }),
      animate(0, 351, {
        duration,
        ease,
        onUpdate: (latest) => setCounts((prev) => ({ ...prev, volume: Math.floor(latest) })),
      }),
      animate(0, 5.99, {
        duration,
        ease,
        onUpdate: (latest) => setCounts((prev) => ({ ...prev, rate: Number(latest.toFixed(2)) })),
      }),
    ]

    return () => controls.forEach((control) => control.stop())
  }, [statsInView, shouldReduceMotion])

  return (
    <div className="min-h-screen bg-[#050608] selection:bg-white/15">
      {/* Hero Section - Sharp Technical Layout */}
      <section className="pt-28 md:pt-36 pb-0 flex flex-col border-b border-white/5">
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto w-full">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-12">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-6"
              >
                Malohn Capital Group
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1, duration: 0.5 }}
                className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.95]"
              >
                Build a cash flowing portfolio without the <span className="text-accent-warm italic">roadblocks.</span>
              </motion.h1>
            </div>

            <div className="max-w-sm pb-2">
              <p className="text-sm text-white/60 leading-relaxed mb-6">
                Unlock powerful working capital that lets you scale faster, with less money down and fewer income docs.
                DSCR structuring for sophisticated investors.
              </p>
              <div className="flex gap-4">
                <ActionButton href="/schedule">Get Started</ActionButton>
                <a href="#process" className="px-5 py-3 text-xs uppercase tracking-wider text-white/50 hover:text-white border border-transparent hover:border-white/10 transition-all">
                  How it Works
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sharp Video Container */}
        <div className="w-full border-y border-white/10 bg-[#0a0f15] relative group">
          <div className="absolute inset-0 bg-black/20 pointer-events-none z-10" />

          <video
            autoPlay
            muted
            playsInline
            loop
            className="w-full h-[50vh] md:h-[70vh] object-cover opacity-80"
          >
            <source src="/videos/tommyb3__Cinematic_drone_shot_moving_slowly_forward_at_a_cons_ecaac372-605b-4bff-a8eb-ed7bf403821d_0.mp4" type="video/mp4" />
          </video>

          {/* Technical Overlays */}
          <div className="absolute bottom-0 left-0 p-8 z-20 hidden md:block">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
                <Play size={16} className="text-white ml-1" />
              </div>
              <div>
                <p className="text-xs uppercase tracking-widest text-white/70">Institutional Focus</p>
                <p className="text-white font-serif">Capital Deployment Reel 2026</p>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Strip */}
        <div className="border-b border-white/5 bg-[#07080b]">
          <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 py-12">
            <div ref={statsRef} className="grid grid-cols-3 gap-8">
              {[
                { label: 'Founded', value: counts.years, suffix: ' Years Ago' },
                { label: 'Funded Vol', value: '$' + counts.volume, suffix: 'M+' },
                { label: 'Current Rate', value: counts.rate.toFixed(2), suffix: '%' }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col border-l border-white/10 pl-6 first:border-l-0 first:pl-0">
                  <p className="text-[10px] uppercase tracking-wider text-white/40 mb-2">{stat.label}</p>
                  <p className="text-3xl md:text-5xl font-serif text-white">
                    {stat.value}<span className="text-white/30 text-2xl">{stat.suffix}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Section - Sharp Grid */}
      <section id="process" className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608] border-b border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <p className="text-[10px] uppercase tracking-[0.2em] text-accent-warm mb-4">The Process</p>
              <h2 className="text-3xl md:text-5xl font-serif text-white">Disciplined execution from start to close.</h2>
            </div>
            <p className="text-sm text-white/50 max-w-sm text-right md:text-left">
              We align structure, pricing, and timing with your objectives, keeping every step transparent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-px bg-white/10 border border-white/10">
            {PROCESS_STEPS.map((step, i) => (
              <div key={i} className="group bg-[#07080b] p-8 md:p-10 hover:bg-[#0a0f15] transition-colors duration-500 relative">
                <span className="text-xs font-mono text-white/30 mb-6 block group-hover:text-accent-warm transition-colors">{step.step}</span>
                <h3 className="text-xl font-medium text-white mb-4">{step.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed max-w-xs">{step.body}</p>

                {/* Hover accent line */}
                <div className="absolute top-0 left-0 w-full h-[1px] bg-accent-warm transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Transactions - Technical Carousel */}
      <section className="py-24 bg-[#07080b] border-b border-white/5 overflow-hidden">
        <div className="px-6 md:px-12 lg:px-20 max-w-7xl mx-auto mb-10">
          <div className="flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-accent-warm" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-white/60">Track Record</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-serif text-white">Recent Deployments</h2>
        </div>

        <div
          ref={carouselRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide px-6 md:px-12 lg:px-20 pb-8"
        >
          {[
            { amount: '$425,000', location: 'Cleveland, OH', label: 'Purchase' },
            { amount: '$312,000', location: 'Detroit, MI', label: 'Refinance' },
            { amount: '$1.2M', location: 'Memphis, TN', label: 'Portfolio' },
            { amount: '$198,000', location: 'Indianapolis, IN', label: 'Bridge' },
            { amount: '$385,000', location: 'Kansas City, MO', label: 'Purchase' },
            { amount: '$342,000', location: 'Columbus, OH', label: 'Working Capital' },
          ].map((deal, i) => (
            <div key={i} className="min-w-[300px] bg-[#0a0f15] border border-white/10 p-6 hover:border-accent-warm/50 transition-colors group">
              <div className="flex justify-between items-start mb-8">
                <span className="px-2 py-1 bg-white/5 border border-white/10 text-[10px] uppercase text-white/50 tracking-wider group-hover:bg-accent-warm/10 group-hover:text-accent-warm transition-colors">
                  {deal.label}
                </span>
                <div className="w-2 h-2 rounded-full bg-accent-warm opacity-50" />
              </div>
              <p className="text-2xl font-serif text-white mb-1">{deal.amount}</p>
              <p className="text-xs text-white/50 uppercase tracking-widest">{deal.location}</p>

              <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center">
                <span className="text-xs text-white/30">Status</span>
                <span className="text-xs text-white font-medium flex items-center gap-2">
                  Closed <ArrowRight size={12} className="text-accent-warm" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lead Magnet - Technical Layout */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#050608]">
        <div className="max-w-7xl mx-auto">
          <div className="border border-white/10 bg-[#0a0f15] p-8 md:p-16 grid lg:grid-cols-2 gap-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
              <svg width="200" height="200" viewBox="0 0 100 100" className="text-white fill-current">
                <circle cx="50" cy="50" r="20" />
                <path d="M50 20 L50 80 M20 50 L80 50" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>

            <div>
              <span className="text-accent-warm font-mono text-xs mb-4 block">04 // RESOURCES</span>
              <h2 className="text-3xl md:text-5xl font-serif text-white mb-6">The Smarter Way to Buy with &lt;15% Down</h2>
              <p className="text-white/60 leading-relaxed mb-8 max-w-md">
                Traditional options are limiting. Learn how DSCR loans + working capital tranches can help you bypass income hurdles.
              </p>
              <ul className="space-y-3 mb-8">
                {['No personal income required', 'Scale faster with less equity', 'Protect reserves'].map(item => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/80">
                    <div className="w-1 h-1 bg-accent-warm" /> {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative z-10 bg-[#050608] border border-white/10 p-8">
              <h3 className="text-white font-medium mb-6">Get the Free Guide</h3>
              <div className="space-y-4">
                <input
                  type="text" placeholder="Full Name"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors placeholder:text-white/30"
                />
                <input
                  type="email" placeholder="Email Address"
                  className="w-full bg-white/5 border border-white/10 px-4 py-3 text-white focus:outline-none focus:border-accent-warm transition-colors placeholder:text-white/30"
                />
                <FormSubmitButton text="Download PDF" sentText="Access Granted" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ - Sharp Accordion Style */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[#07080b] border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-2xl font-serif text-white">Common Questions</h2>
          </div>
          <div className="space-y-px bg-white/10 border border-white/10">
            {[
              { q: 'What qualifies for a strategy call?', a: 'Active investors looking to deploy capital in the next 30-60 days.' },
              { q: 'Do you work with new investors?', a: 'Yes, provided there is a clear liquidity plan and strong credit profile.' },
              { q: 'How fast can we close?', a: 'Typical DSCR timelines are 21-30 days. Bridge deals can close in 7-14 days.' }
            ].map((faq, i) => (
              <div key={i} className="bg-[#050608] p-6 flex flex-col md:flex-row gap-4 md:items-center justify-between group hover:bg-[#0a0f15] transition-colors">
                <p className="text-white font-medium">{faq.q}</p>
                <p className="text-sm text-white/50 text-right group-hover:text-white/80 transition-colors max-w-sm">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
