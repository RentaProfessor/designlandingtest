export default function About() {
  return (
    <section 
      id="about" 
      className="min-h-screen flex flex-col items-center justify-center px-[5%] py-20 md:py-24 bg-gradient-to-br from-sand-100 to-sand-200"
    >
      <div className="max-w-5xl w-full text-center">
        <h2 className="font-serif text-4xl md:text-6xl font-normal text-brown-800 mb-8 md:mb-4 tracking-wide">
          About Us
        </h2>
        <p className="hidden md:block font-sans text-lg md:text-xl text-brown-400 mb-12 font-light leading-relaxed">
          Creating extraordinary outdoor spaces that blend beauty, functionality, and sustainability
        </p>
        
        <div className="bg-white p-8 md:p-10 inline-block shadow-lg mb-8 md:mb-12 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
          <img 
            src="/HIDEAWAY (1)_edited.avif" 
            alt="Hideaway Design Collective Logo" 
            className="w-40 md:w-56 h-auto"
          />
        </div>
        
        <div className="max-w-3xl mx-auto space-y-4 md:space-y-6 text-left md:text-center">
          <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed font-light">
            At Hideaway Design Collective, we believe every outdoor space has the potential to become a personal sanctuary. Our passion lies in transforming ordinary landscapes into extraordinary environments that reflect your unique style and enhance your connection with nature.
          </p>
          
          <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed font-light">
            Based in Corona Del Mar, California, we specialize in creating sustainable, drought-resistant designs that thrive in our beautiful coastal climate. We bring creativity, expertise, and environmental consciousness to every project, ensuring spaces that are not only visually stunning but also built to last.
          </p>
        </div>
      </div>
    </section>
  )
}

