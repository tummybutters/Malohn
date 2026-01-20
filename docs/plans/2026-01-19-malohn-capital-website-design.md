# Malohn Capital Group Website - Design Document

**Date:** 2026-01-19
**Status:** Approved
**Stack:** Next.js 14 + Tailwind CSS + Framer Motion

---

## Overview

A professional real estate financing website for Malohn Capital Group, replicating the structure and design language of Munoz Ghezlan Capital. Dark-themed, premium financial services aesthetic targeting real estate investors.

**MVP Scope:** 3 pages (Home, About, Services) - UI only, no functional integrations.

---

## Design System

### Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `bg-primary` | `#000000` | Page backgrounds |
| `bg-secondary` | `#0A0A0A` | Card backgrounds, alternating sections |
| `bg-tertiary` | `#111111` | Subtle elevation |
| `accent-primary` | `#2B4B7C` | Primary buttons, highlights |
| `accent-light` | `#6B8FC7` | Hover states, secondary accents |
| `text-primary` | `#FFFFFF` | Headlines, body text |
| `text-muted` | `#9CA3AF` | Secondary text, captions |
| `border-subtle` | `rgba(255,255,255,0.1)` | Card borders, dividers |

### Typography

- **Font Family:** Inter or Manrope (clean sans-serif)
- **Headlines:** Bold (700), tracking tight
- **Body:** Regular (400), comfortable line height
- **Accent:** Optional italic serif for emphasis phrases

### Component Styles

**Glassmorphic Elements:**
- Background: `bg-white/5` or `bg-black/40`
- Backdrop blur: `backdrop-blur-md`
- Border: `border border-white/10`
- Border radius: `rounded-xl` or `rounded-full` (navbar)

**Buttons:**
- Primary: Navy blue (`#2B4B7C`), white text, `rounded-lg`, hover lightens
- Secondary: Transparent with border, hover fills

**Cards:**
- Dark glass effect
- Subtle hover lift animation
- Consistent padding (`p-6` or `p-8`)

**Animations:**
- Scroll-triggered fade-in (Framer Motion)
- Counter animations for statistics
- Smooth hover transitions (200-300ms)

---

## Page Structures

### Home Page (`/`)

#### 1. Hero Section
- Full viewport height (`min-h-screen`)
- **Headline:** "Build a Portfolio of Cash-Flowing Rentals"
- **Subheadline:** "For investors with $50k+ in liquid capital targeting 30%+ cash-on-cash returns in high-yield markets."
- Video placeholder (dark thumbnail with centered play button)
- Primary CTA: "Book Free Strategy Call" (navy button)

#### 2. Products Section
- **Heading:** "Our Signature Products"
- Two-column card layout:

**Card 1 - Syndicated DSCR Loans:**
- Icon + title
- 4 bullet benefits:
  - Invest with as little as 10% down
  - Competitive rates, minimal paperwork
  - 3-4 week closings
  - Full capital structure handled for you
- CTA: "Book Free Strategy Call"

**Card 2 - Working Capital Support:**
- Icon + title
- 4 bullet benefits:
  - Up to $500K unsecured funding
  - No collateral required
  - Funding in as fast as 2 weeks
  - Leverage to scale your portfolio
- CTA: "Book Free Strategy Call"

#### 3. Track Record Section
- **Heading:** "Malohn Capital Group Track Record"
- **Tagline:** "A hand-holding creative finance solution for real estate investors."
- 3 animated counters:
  - "85+" → "Years Combined Experience"
  - "$500M+" → "Funded Volume"
  - "6.5%" → "Current Rate"
- CTA: "Book Free Strategy Call"

#### 4. Recently Funded Carousel
- Horizontal scrolling cards
- Each card:
  - Property image placeholder (dark gradient overlay)
  - "Just Funded" badge (accent blue)
  - Amount (e.g., "$425,000")
  - Stats row: Down Payment %, Cash-on-Cash %, Location
- Auto-scroll or drag interaction

#### 5. Trust/Media Section
- **Heading:** "Trusted by Real Estate Investors Nationwide"
- Logo row: Grayscale placeholder logos (Forbes, BiggerPockets, Yahoo Finance, NBC, BBB)
- Logos at ~50% opacity, subtle hover brightens

#### 6. Lead Magnet Section
- **Headline:** "Free Hybrid DSCR & Creative Financing Guide"
- **Subhead:** "How to Buy Real Estate with Less than 20% Down"
- **Copy:** "Traditional financing is getting stricter—discover how to outsmart the banks and acquire rental properties with less capital."
- Form placeholder: Name, Email, Phone fields (non-functional)
- CTA: "Get Free Guide"

#### 7. Final CTA Section
- Background: Blurred city skyline (dark overlay)
- **Headline:** "Let's talk about your next deal"
- **Subhead:** "Ready to scale your portfolio? Speak with an advisor."
- CTA: "Schedule a Meeting"

#### 8. Footer
- Logo (left)
- Navigation links: Home, About, Services
- Placeholder social icons (Instagram, Facebook, LinkedIn)
- Placeholder phone number and address
- Copyright: "© 2026 Malohn Capital Group. All rights reserved."
- Disclaimer text (small, muted)

---

### About Page (`/about`)

#### 1. Hero Section
- **Headline:** "About Malohn Capital Group"
- 2 paragraphs:
  - **Paragraph 1:** "We believe every investor deserves access to the same financing strategies used by institutions. Malohn Capital Group was founded to democratize creative real estate financing—making it possible for everyday investors to build wealth through cash-flowing properties."
  - **Paragraph 2:** "Our team brings decades of combined mortgage and finance experience, structured to help you scale faster with less capital tied up. We handle the complexity so you can focus on finding deals."
- CTA: "Schedule a Meeting"

#### 2. Our Approach Section
- Two-column layout
- **Left column:** Text about hands-on advisory, handling full capital structure, personalized guidance
- **Right column:** Professional imagery placeholder (Wall Street aesthetic, dark toned)

#### 3. Why Choose Us Section
- 4 value cards in grid (2x2 on desktop, stacked on mobile):

| Card | Icon | Title | Description |
|------|------|-------|-------------|
| 1 | Lightbulb | Innovation | Creative financing structures others don't offer |
| 2 | DoorOpen | Accessibility | Low barriers—10% down, minimal paperwork |
| 3 | Zap | Speed | 3-4 week closings, fast funding decisions |
| 4 | Award | Expertise | 85+ years combined mortgage experience |

- Cards use glassmorphic style

#### 4. Our Commitment Section
- Short section with partnership messaging
- **Copy:** "Your success is our success. We're not just lenders—we're partners in your real estate journey. Our advisors are invested in helping you build a portfolio that generates lasting wealth."

#### 5. Our Story (Simplified)
- 2-3 milestone blocks or timeline items:
  - **Founded:** "Started with a mission to make institutional financing accessible"
  - **Growth:** "Scaled to $500M+ in funded volume"
  - **Today:** "Serving investors nationwide with creative financing solutions"
- Keep brief—placeholders for real milestones later

---

### Services Page (`/services`)

#### 1. Hero Section
- **Headline:** "Malohn Capital Group Products"
- **Subhead:** "Financing solutions designed to help you scale faster with less capital tied up."

#### 2. Tabbed Product Display
- 3 tabs (pill-style or underlined):
  - Tab 1: Syndicated DSCR Loans (default active)
  - Tab 2: Working Capital Support
  - Tab 3: Real Estate Investment Insurance

#### Tab 1 - Syndicated DSCR Loans
- **Icon:** Building/Bank icon
- **Product Name:** "Syndicated DSCR Loans"
- **Description:** "We structure debt financing that helps real estate investors scale faster. With our multi-tranche DSCR loans, you can invest with as little as 10% down while keeping capital free for new opportunities."

**Key Benefits (checkmark list):**
- As little as 10% down payment
- No income verification required
- 30-year fixed terms available
- No limit on number of properties
- Competitive rates starting at 6.5%
- 3-4 week closings
- Full capital structure handled by our advisors

**Requirements:**
- $50K+ liquid capital
- Investment property only (no owner-occupied)

**CTAs:** "Schedule a Meeting" | "Get Pre-Qualified"

#### Tab 2 - Working Capital Support
- **Icon:** Wallet/Cash icon
- **Product Name:** "Working Capital Support Loan"
- **Description:** "Up to $500,000 in unsecured funding, eliminating lack of capital as a barrier to buying real estate, starting a business, or pursuing new opportunities."

**Key Benefits:**
- Up to $500K unsecured funding
- No collateral required
- Funding available in 2 weeks
- Use for real estate, business, or investments
- Fast, reliable approval process

**Requirements:**
- Minimum 680 credit score
- Strong business plan or investment thesis

**Scarcity line:** "Due to limited capital, funding is reserved for the most motivated individuals with clear vision for growth."

**CTAs:** "Schedule a Meeting" | "Apply Now"

#### Tab 3 - Real Estate Investment Insurance
- **Icon:** Shield icon
- **Product Name:** "Real Estate Investment Insurance"
- **Description:** "Comprehensive property and casualty coverage designed for first-time investors, professional investors, REITs, and owners of vacant properties."

**Key Benefits:**
- Rental income protection
- Liability coverage
- Property safeguards
- Tailored policies for your portfolio
- White-glove service experience

**For:**
- First-time rental investors
- Professional investors with multiple properties
- REITs and institutional holders
- Vacant property owners

**CTA:** "Get a Custom Quote"

---

## Global Components

### Navbar
- **Style:** Floating glassmorphic pill
- **Position:** Fixed top, centered with horizontal margin
- **Background:** `bg-black/40 backdrop-blur-md`
- **Border:** `border border-white/10 rounded-full`
- **Contents:**
  - Logo (left)
  - Nav links center: Home, About, Services
  - CTA button (right): "Book a Call" (small, navy)
- **Mobile:** Hamburger menu, slides in from right

### Footer
- Dark background (`bg-black` or `bg-secondary`)
- Logo
- Navigation links
- Social icons (placeholder)
- Contact info (placeholder)
- Copyright + disclaimer

### Buttons
- **Primary:** `bg-[#2B4B7C] hover:bg-[#3A5A8C] text-white rounded-lg px-6 py-3`
- **Secondary:** `bg-transparent border border-white/20 hover:bg-white/5 text-white rounded-lg px-6 py-3`
- **Small:** Same styles with `px-4 py-2 text-sm`

### Form Inputs (Placeholder)
- Dark background: `bg-white/5`
- Border: `border border-white/10`
- Focus: `focus:border-accent-light`
- Placeholder text: muted gray
- Non-functional for MVP

---

## Project Structure

```
/miles
├── app/
│   ├── layout.tsx          # Root layout (navbar + footer)
│   ├── page.tsx            # Home page
│   ├── about/
│   │   └── page.tsx        # About page
│   ├── services/
│   │   └── page.tsx        # Services page
│   └── globals.css         # Tailwind + custom styles
├── components/
│   ├── Navbar.tsx          # Glassmorphic pill navbar
│   ├── Footer.tsx          # Site footer
│   ├── Hero.tsx            # Reusable hero component
│   ├── ProductCard.tsx     # Product/service cards
│   ├── StatCounter.tsx     # Animated number counter
│   ├── Carousel.tsx        # Horizontal scroll carousel
│   ├── ValueCard.tsx       # Why choose us cards
│   ├── TabSection.tsx      # Tabbed content display
│   ├── LeadForm.tsx        # Lead capture form (placeholder)
│   └── Button.tsx          # Reusable button component
├── public/
│   ├── images/
│   │   ├── logo.png        # Malohn logo
│   │   └── placeholder/    # Placeholder images
│   └── fonts/              # Custom fonts if needed
├── lib/
│   └── constants.ts        # Site content, navigation, etc.
├── tailwind.config.ts      # Custom colors, fonts
├── package.json
├── tsconfig.json
└── next.config.js
```

---

## Dependencies

```json
{
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "framer-motion": "^10.16.0",
    "lucide-react": "^0.294.0"
  },
  "devDependencies": {
    "typescript": "^5.0.0",
    "tailwindcss": "^3.4.0",
    "autoprefixer": "^10.4.0",
    "postcss": "^8.4.0",
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0"
  }
}
```

---

## Tailwind Config

```typescript
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#000000',
        'bg-secondary': '#0A0A0A',
        'bg-tertiary': '#111111',
        'accent-primary': '#2B4B7C',
        'accent-light': '#6B8FC7',
        'text-primary': '#FFFFFF',
        'text-muted': '#9CA3AF',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Content Notes

All content is placeholder and should be replaced with real information:

- **Statistics:** 85+ years, $500M+, 6.5% rate (placeholder)
- **Team:** Not included in MVP
- **Funded deals:** Placeholder property cards
- **Media logos:** Placeholder/generic
- **Contact info:** Placeholder phone, email, address
- **Forms:** Non-functional, UI only
- **CTAs:** Buttons present but no real booking integration

---

## Hormozi Principles Applied (Subtle)

1. **Dream outcome focus:** Headlines about results (cash-flowing rentals, financial freedom)
2. **Value equation:** Emphasize low effort, fast time, high likelihood
3. **Scarcity:** "Limited funding," "Reserved for serious investors"
4. **Risk reversal:** "No obligation call" messaging
5. **Status:** "Build your real estate empire" language

Applied subtly throughout copy—professional tone, not salesy.

---

## Next Steps

1. Initialize Next.js project
2. Configure Tailwind with custom theme
3. Build global components (Navbar, Footer, Button)
4. Build Home page sections
5. Build About page
6. Build Services page
7. Add animations with Framer Motion
8. Test responsive design
9. Deploy to Vercel (when ready)

---

**Document Status:** Ready for implementation
