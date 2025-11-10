# Hideaway Design Collective - React + Tailwind Version

Modern, performant landing page built with React, Tailwind CSS, and Vite.

## 🚀 Tech Stack

- **React 18** - Modern UI library with hooks
- **Tailwind CSS 3** - Utility-first CSS framework
- **Vite** - Fast build tool and dev server
- **Vanilla JavaScript** - For smooth scroll and interactions

## ✨ Features

- ⚡ **Lightning Fast** - Vite dev server and optimized builds
- 📱 **Fully Responsive** - Perfect on mobile, tablet, and desktop
- 🎨 **Tailwind Styling** - Clean, maintainable utility classes
- 🔄 **React Components** - Modular, reusable component structure
- 🎯 **Smooth Scrolling** - Native smooth scroll with proper offsets
- 🍔 **Mobile Menu** - Animated hamburger menu overlay
- ♿ **Accessible** - Semantic HTML and ARIA labels
- 🎭 **Elegant Animations** - Smooth hover effects and transitions

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx       # Fixed header with mobile menu
│   ├── Hero.jsx         # Hero section with CTA
│   ├── About.jsx        # About section with logo
│   ├── Process.jsx      # 2x2 process grid
│   ├── Contact.jsx      # Contact form
│   └── Footer.jsx       # Footer with contact info
├── App.jsx              # Main app component
├── main.jsx             # React entry point
└── index.css            # Tailwind directives + custom styles
```

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎨 Custom Theme

Tailwind is configured with custom colors matching the brand:

- **Sand tones**: `sand-100` through `sand-600`
- **Brown tones**: `brown-400` through `brown-800`
- **Custom fonts**: Cormorant Garamond (serif) & Montserrat (sans)

## 📱 Mobile Optimizations

- Proper viewport meta tags with `viewport-fit=cover`
- Safe area insets for notched devices
- Touch-friendly tap targets (min 44x44px)
- Optimized font sizes with responsive scaling
- No horizontal scroll issues
- Smooth scrolling with proper header offset

## 🚢 Deployment

The built files go to `dist/` folder:

```bash
npm run build
```

Deploy the `dist` folder to:
- GitHub Pages
- Vercel
- Netlify
- Any static hosting service

## 🔧 Development

- Hot module replacement (HMR) in dev mode
- Fast refresh for instant updates
- TypeScript ready (just rename .jsx to .tsx)
- ESLint/Prettier ready

## 📝 Notes

- Old HTML version backed up as `index.html`
- New React entry point is `index-react.html`
- All images remain in the root directory
- No external dependencies except React core

---

Built with ❤️ using React + Tailwind CSS

