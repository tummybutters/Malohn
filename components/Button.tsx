'use client'

import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  size?: 'default' | 'small'
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = '', variant = 'primary', size = 'default', children, ...props }, ref) => {
    const baseStyles = 'font-medium transition-all duration-200 rounded-lg'

    const variants = {
      primary: 'bg-accent-primary hover:bg-accent-light text-white',
      secondary: 'bg-transparent border border-white/20 hover:bg-white/5 text-white',
    }

    const sizes = {
      default: 'px-6 py-3',
      small: 'px-4 py-2 text-sm',
    }

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
