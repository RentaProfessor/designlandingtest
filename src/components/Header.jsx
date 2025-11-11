import { useState, useEffect } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    setIsMenuOpen(false)
    // Wait for menu to close before scrolling
    setTimeout(() => {
      const element = document.getElementById(id)
      if (element) {
        const isMobile = window.innerWidth < 768
        
        if (isMobile) {
          // For mobile: scroll much further down to show full section without previous section visible
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - 10 // Only 10px from top
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        } else {
          // Desktop behavior
          const header = document.querySelector('header')
          const headerHeight = header ? header.offsetHeight : 90
          const elementPosition = element.getBoundingClientRect().top
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight
          
          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: 'smooth'
          })
        }
      }
    }, 300) // Wait for menu animation to complete
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Header - Permanently fixed at top */}
      <header 
        className="fixed top-0 left-0 right-0 z-50 py-5 shadow-md bg-white/98 backdrop-blur-md"
        style={{
          paddingTop: 'max(1.25rem, env(safe-area-inset-top))',
          paddingLeft: 'max(5%, env(safe-area-inset-left))',
          paddingRight: 'max(5%, env(safe-area-inset-right))',
          position: 'fixed',
          willChange: 'transform',
          transform: 'translate3d(0, 0, 0)',
          WebkitTransform: 'translate3d(0, 0, 0)',
        }}
      >
        <div className="flex justify-between items-center px-[5%]">
          {/* Logo */}
          <h1 className={`font-serif text-sm md:text-lg font-semibold tracking-[0.15em] uppercase z-[1003] transition-colors duration-300 ${
            isScrolled ? 'text-brown-800' : 'text-brown-800 md:text-brown-700'
          }`}>
            HIDEAWAY DESIGN COLLECTIVE
          </h1>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-12">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`font-sans text-sm font-medium tracking-wider uppercase hover:text-brown-400 transition-colors duration-300 relative group ${
                  isScrolled ? 'text-brown-700' : 'text-brown-600'
                }`}
              >
                {link.label}
                <span className="absolute bottom-[-5px] left-0 w-0 h-0.5 bg-brown-400 transition-all duration-300 group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Hamburger Menu - Highly visible on all backgrounds */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2 z-[1003] relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`w-7 h-[2.5px] rounded transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-[8px] bg-white' : 'bg-brown-900'
              }`}
              style={{ 
                boxShadow: isMenuOpen ? 'none' : '0 0 0 1px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.3)'
              }}
            />
            <span 
              className={`w-7 h-[2.5px] rounded transition-all duration-300 ${
                isMenuOpen ? 'opacity-0 -translate-x-5 bg-white' : 'bg-brown-900'
              }`}
              style={{ 
                boxShadow: isMenuOpen ? 'none' : '0 0 0 1px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.3)'
              }}
            />
            <span 
              className={`w-7 h-[2.5px] rounded transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-[8px] bg-white' : 'bg-brown-900'
              }`}
              style={{ 
                boxShadow: isMenuOpen ? 'none' : '0 0 0 1px rgba(255,255,255,0.8), 0 2px 4px rgba(0,0,0,0.3)'
              }}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Fully opaque to prevent text visibility issues */}
      <nav 
        className={`md:hidden fixed inset-0 z-[1002] bg-gradient-to-br from-brown-600 to-brown-500 flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
        style={{
          overscrollBehavior: 'contain',
        }}
      >
        {navLinks.map((link, index) => (
          <button
            key={link.id}
            onClick={() => scrollToSection(link.id)}
            className={`font-serif text-4xl text-sand-100 hover:text-white transition-all duration-300 hover:bg-white/10 px-8 py-3 w-full text-center ${
              isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}
            style={{
              transitionDelay: isMenuOpen ? `${index * 100 + 100}ms` : '0ms'
            }}
          >
            {link.label}
          </button>
        ))}
      </nav>
    </>
  )
}

