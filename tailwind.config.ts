import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Light theme backgrounds
        'bg-primary': '#FAFAF8',      // Warm off-white
        'bg-secondary': '#F5F5F2',    // Soft cream
        'bg-tertiary': '#EDEDE8',     // Light warm gray
        'bg-card': '#FFFFFF',         // Pure white for cards

        // Accent colors - refined navy palette
        'accent-primary': '#1E3A5F',  // Deep navy
        'accent-light': '#4A7BA7',    // Soft steel blue
        'accent-warm': '#8B7355',     // Warm bronze accent

        // Text colors for light backgrounds
        'text-primary': '#1A1A1A',    // Near black
        'text-secondary': '#4A4A4A',  // Charcoal
        'text-muted': '#7A7A7A',      // Medium gray
        'text-light': '#A8A8A8',      // Light gray
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
