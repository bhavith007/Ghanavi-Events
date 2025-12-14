# Project Specification: Ghanavi Events (React Version)

## 1. Project Overview
Build a premium, single-page React application for "Ghanavi Events."
The design must be "Royal Luxury" (Dark mode + Gold accents) with heavy use of Glassmorphism.

## 2. Tech Stack
- **Framework:** React (Vite).
- **Styling:** Tailwind CSS (Mobile-first).
- **Animations:** Framer Motion (for scroll reveals, parallax, and hover effects).
- **Icons:** `lucide-react` library.
- **Fonts:** Google Fonts (Playfair Display, Poppins).

## 3. Design System (Tailwind Config)
- **Colors:**
  - `gold`: `#D4AF37` (Primary accent)
  - `gold-dim`: `#b59226`
  - `dark`: `#0f0f0f` (Background)
  - `glass`: `rgba(255, 255, 255, 0.05)`
- **Typography:**
  - Headings: `font-playfair`
  - Body: `font-poppins`
- **UI Patterns:**
  - **Glassmorphism:** `bg-white/5 backdrop-blur-lg border border-white/10`
  - **Golden Gradient:** Text gradients using the gold palette.

## 4. Component Architecture (`/src/components`)
1. **Navbar.jsx:** Fixed top, glass effect. Hamburger menu for mobile (using Framer Motion `AnimatePresence`).
2. **Hero.jsx:** Full `h-screen`. Parallax background image. Animated text entry.
3. **About.jsx:** Grid layout (Text + Image).
4. **Services.jsx:** Grid of cards.
   - *Component:* `ServiceCard.jsx` (Props: icon, title, description).
5. **Gallery.jsx:** Masonry or Grid of images with hover zoom.
6. **Contact.jsx:** Two-column layout (Info + Form).
7. **Footer.jsx:** Simple links and copyright.

## 5. Content Data (Source of Truth)
- **Business Name:** Ghanavi Events
- **Owner:** Manjunath R
- **Phones:** +91 9141007006, +91 9916325007
- **Address:** #28, 10th Cross, Bhyraveshwara Nagar, Laggere, Bengaluru: 58
- **Services:** Engagement, Wedding, Office Functions, Baby Shower, Naming Ceremony, Birthday.

## 6. Implementation Rules for AI
- Use `framer-motion` for all entrance animations (fadeInUp).
- Use Tailwind utility classes for all styling.
- Ensure the mobile menu closes when a link is clicked.
- Do not use external CSS files; keep styles in Tailwind classes.