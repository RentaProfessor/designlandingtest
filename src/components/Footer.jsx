export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-sand-200 to-sand-300 text-brown-500 px-[5%] py-16 md:py-24 text-center">
      <img 
        src="/HIDEAWAY (1)_edited.avif" 
        alt="Hideaway Design Collective Logo" 
        className="w-48 md:w-72 h-auto mx-auto mb-12 drop-shadow-lg"
      />
      
      <div className="mb-12">
        <h3 className="font-serif text-4xl md:text-5xl font-bold mb-2 tracking-wider">
          HIDEAWAY
        </h3>
        <p className="font-serif text-2xl md:text-3xl italic text-brown-400">
          Design Collective
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-12">
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-lg transition-all duration-300 hover:bg-white/60 hover:-translate-y-1">
          <p className="font-sans font-semibold text-sm uppercase tracking-wider mb-2">
            Phone
          </p>
          <p className="font-sans text-base text-gray-600">
            (949) 403-0040
          </p>
        </div>
        
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-lg transition-all duration-300 hover:bg-white/60 hover:-translate-y-1">
          <p className="font-sans font-semibold text-sm uppercase tracking-wider mb-2">
            Email
          </p>
          <p className="font-sans text-base text-gray-600 break-all">
            kendall@hideawaydesign.com
          </p>
        </div>
        
        <div className="bg-white/40 backdrop-blur-md p-6 rounded-lg transition-all duration-300 hover:bg-white/60 hover:-translate-y-1">
          <p className="font-sans font-semibold text-sm uppercase tracking-wider mb-2">
            Location
          </p>
          <p className="font-sans text-base text-gray-600">
            Corona Del Mar, CA
          </p>
        </div>
      </div>
      
      <div className="mb-12">
        <a 
          href="#" 
          aria-label="Instagram"
          className="inline-flex items-center justify-center w-12 h-12 md:w-14 md:h-14 bg-white/40 backdrop-blur-md rounded-full transition-all duration-300 hover:bg-white/60 hover:-translate-y-2"
        >
          <svg 
            className="w-6 h-6 text-brown-500" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
            <line x1="17.5" y1="6.5" x2="17.5" y2="6.5"/>
          </svg>
        </a>
      </div>
      
      <div className="border-t border-brown-500/30 pt-8">
        <p className="font-sans text-sm text-brown-400 tracking-wide">
          © 2025 by Hideaway Design Collective. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

