'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'

interface Card {
    title: string
    description: string
    icon?: React.ReactNode
    action?: React.ReactNode
}

interface FocusCardsProps {
    cards: Card[]
}

export function FocusCards({ cards }: FocusCardsProps) {
    const [hovered, setHovered] = useState<number | null>(null)

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl mx-auto">
            {cards.map((card, index) => (
                <div
                    key={index}
                    onMouseEnter={() => setHovered(index)}
                    onMouseLeave={() => setHovered(null)}
                    className={cn(
                        'relative items-center justify-center overflow-hidden rounded-none bg-[#101826] border transition-colors duration-300 ease-out',
                        hovered === index ? 'border-accent-warm' : 'border-white/10'
                    )}
                >
                    <div className="p-8 h-full flex flex-col">
                        {/* Header */}
                        <div className="mb-4 text-accent-warm opacity-80">
                            {card.icon}
                        </div>

                        <h3 className={cn(
                            "text-xl font-semibold text-white mb-2 transition-colors",
                            hovered === index ? "text-accent-warm" : "text-white"
                        )}>
                            {card.title}
                        </h3>

                        <p className="text-white/60 text-sm leading-relaxed mb-6 flex-grow">
                            {card.description}
                        </p>

                        {/* Bottom Action Area */}
                        {card.action && (
                            <div className={cn(
                                "mt-auto pt-4 border-t border-white/5 transition-opacity duration-300",
                                hovered === index ? "opacity-100" : "opacity-50"
                            )}>
                                {card.action}
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}
