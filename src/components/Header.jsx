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
    const element = document.getElementById(id)
    if (element) {
      // Use larger offset for mobile to account for header
      const isMobile = window.innerWidth < 768
      const offset = isMobile ? 70 : 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'process', label: 'Process' },
    { id: 'contact', label: 'Contact' },
  ]

  return (
    <>
      {/* Header */}
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'py-4 shadow-lg bg-white/95 backdrop-blur-md' 
            : 'py-5 shadow-md bg-white/70 backdrop-blur-sm'
        }`}
        style={{
          paddingTop: 'max(1.25rem, env(safe-area-inset-top))',
          paddingLeft: 'max(5%, env(safe-area-inset-left))',
          paddingRight: 'max(5%, env(safe-area-inset-right))',
        }}
      >
        <div className="flex justify-between items-center px-[5%]">
          {/* Logo */}
          <h1 className={`font-serif text-sm md:text-lg font-semibold tracking-[0.15em] uppercase z-[1003] transition-colors duration-300 ${
            isScrolled ? 'text-brown-800' : 'text-brown-700'
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

          {/* Hamburger Menu */}
          <button
            className="md:hidden flex flex-col gap-[6px] p-2 z-[1003]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span 
              className={`w-7 h-0.5 rounded transition-all duration-300 ${
                isScrolled ? 'bg-brown-800' : 'bg-brown-700'
              } ${isMenuOpen ? 'rotate-45 translate-y-[8px]' : ''}`}
            />
            <span 
              className={`w-7 h-0.5 rounded transition-all duration-300 ${
                isScrolled ? 'bg-brown-800' : 'bg-brown-700'
              } ${isMenuOpen ? 'opacity-0 -translate-x-5' : ''}`}
            />
            <span 
              className={`w-7 h-0.5 rounded transition-all duration-300 ${
                isScrolled ? 'bg-brown-800' : 'bg-brown-700'
              } ${isMenuOpen ? '-rotate-45 -translate-y-[8px]' : ''}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <nav 
        className={`md:hidden fixed inset-0 z-[1002] bg-gradient-to-br from-brown-500/98 to-brown-400/98 backdrop-blur-md flex flex-col items-center justify-center gap-8 transition-all duration-500 ${
          isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
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

