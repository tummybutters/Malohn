'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import ActionButton from '@/components/ActionButton'
import { TransactionCard } from '@/components/ui/TransactionCard'
import { Percent, Activity, Layers, Calendar, DollarSign, TrendingUp } from 'lucide-react'
import { cn } from '@/lib/utils'

// Mock Data with "Structure" replaced by Key Metrics
const transactions = [
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Single-family portfolio acquisition',
    location: 'Columbus, OH',
    date: '10/12/2025',
    amount: '$3.2M',
    imageUrl: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=2670&auto=format&fit=crop', // House
    metrics: [
      { label: 'LTV', value: '75%', icon: <Percent /> },
      { label: 'Rate', value: '6.875%', icon: <Activity /> },
      { label: 'Cash Flow', value: '$12k/mo', icon: <DollarSign /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Bridge liquidity for renovation',
    location: 'Tampa, FL',
    date: '09/28/2025',
    amount: '$420,000',
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2670&auto=format&fit=crop', // Modern Home
    metrics: [
      { label: 'Term', value: '12 Mo', icon: <Calendar /> },
      { label: 'LTV', value: 'N/A', icon: <Percent /> },
      { label: 'Draw', value: '48 Hrs', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Small multifamily refinance',
    location: 'Phoenix, AZ',
    date: '08/15/2025',
    amount: '$1.1M',
    imageUrl: 'https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?q=80&w=2670&auto=format&fit=crop', // Apt Building
    metrics: [
      { label: 'LTV', value: '70%', icon: <Percent /> },
      { label: 'DSCR', value: '1.25x', icon: <TrendingUp /> },
      { label: 'Cash Out', value: '$340k', icon: <DollarSign /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Acquisition reserves',
    location: 'Cleveland, OH',
    date: '07/10/2025',
    amount: '$260,000',
    imageUrl: 'https://images.unsplash.com/photo-1605276374104-dee2a0ed3cd6?q=80&w=2670&auto=format&fit=crop', // Brick House
    metrics: [
      { label: 'Term', value: '18 Mo', icon: <Calendar /> },
      { label: 'Usage', value: 'Rehab', icon: <Layers /> },
      { label: 'Funding', value: '5 Days', icon: <Activity /> },
    ]
  },
  {
    type: 'DSCR Transaction',
    category: 'DSCR',
    title: 'Stabilized rental portfolio',
    location: 'Nashville, TN',
    date: '06/22/2025',
    amount: '$5.8M',
    imageUrl: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2670&auto=format&fit=crop', // Luxury House
    metrics: [
      { label: 'LTV', value: '80%', icon: <Percent /> },
      { label: 'Rate', value: '6.5%', icon: <Activity /> },
      { label: 'Units', value: '42', icon: <Layers /> },
    ]
  },
  {
    type: 'Working Capital',
    category: 'Working Capital',
    title: 'Liquidity buffer',
    location: 'Dallas, TX',
    date: '05/30/2025',
    amount: '$350,000',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2670&auto=format&fit=crop', // Modern Villa
    metrics: [
      { label: 'Term', value: '24 Mo', icon: <Calendar /> },
      { label: 'Type', value: 'Unsecured', icon: <Layers /> },
      { label: 'Rate', value: 'Fixed', icon: <Activity /> },
    ]
  },
]

const filters = ['All', 'DSCR', 'Working Capital', 'Multi-Family']

export default function TransactionsPage() {
  const [activeFilter, setActiveFilter] = useState('All')

  const filteredTransactions = transactions.filter((t) => {
    if (activeFilter === 'All') return true
    if (activeFilter === 'Multi-Family') return t.title.toLowerCase().includes('multifamily') || t.title.toLowerCase().includes('portfolio')
    return t.category === activeFilter
  })

  return (
    <div className="min-h-screen bg-[#07080b] selection:bg-white/15">
      {/* Hero Header - Condensed */}
      <section className="pt-28 md:pt-36 pb-12 px-6 md:px-12 lg:px-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-[10px] md:text-xs tracking-[0.3em] uppercase text-white/50 font-medium mb-4"
            >
              Munoz Ghezlan Transactions
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-7xl font-light tracking-tight text-white font-serif leading-[0.9]"
            >
              Capital <span className="text-accent-warm italic">Deployed.</span>
            </motion.h1>
          </div>

          {/* Legacy Metrics (Optional - kept small) */}
          <div className="flex gap-8 text-white/60">
            <div>
              <p className="text-[10px] uppercase tracking-wider opacity-50">Volume</p>
              <p className="text-xl font-serif text-white">$351M+</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-wider opacity-50">Deals</p>
              <p className="text-xl font-serif text-white">420+</p>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <div className="sticky top-20 z-40 bg-[#07080b]/90 backdrop-blur-md border-b border-white/5 px-6 md:px-12 lg:px-20 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center">
          {/* Filter Toggle */}
          <div className="flex p-1 bg-white/5 border border-white/10 rounded-none w-full sm:w-auto">
            {filters.map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={cn(
                  "px-4 py-2 text-xs uppercase tracking-wider font-medium transition-all duration-300 flex-1 sm:flex-none text-center",
                  activeFilter === filter
                    ? "bg-white text-black"
                    : "text-white/50 hover:text-white hover:bg-white/5"
                )}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Result Count */}
          <p className="text-xs text-white/40 font-mono hidden sm:block">
            Showing {filteredTransactions.length} Results
          </p>
        </div>
      </div>

      {/* Grid */}
      <section className="px-6 md:px-12 lg:px-20 py-12 min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            layout
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
          >
            <AnimatePresence mode='popLayout'>
              {filteredTransactions.map((t) => (
                <motion.div
                  layout
                  key={t.title + t.date}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <TransactionCard
                    type={t.type}
                    title={t.title}
                    amount={t.amount}
                    location={t.location}
                    date={t.date}
                    metrics={t.metrics}
                    imageUrl={t.imageUrl}
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CTA Footer - Simplified */}
      <section className="py-24 border-t border-white/5 px-6 bg-[#050608]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-serif text-white mb-6">Start your next transaction.</h2>
          <div className="flex justify-center gap-4">
            <ActionButton>Submit a Deal</ActionButton>
            <Link href="/capital-solutions" className="px-6 py-3 border border-white/20 text-white text-sm uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-300">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
