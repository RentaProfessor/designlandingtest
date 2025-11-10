export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section 
      id="home" 
      className="min-h-screen flex flex-col items-center justify-center text-center px-[5%] py-32 bg-gradient-to-br from-sand-400 via-sand-500 to-sand-600"
    >
      <div className="max-w-4xl mx-auto">
        <h1 className="font-serif text-5xl md:text-7xl font-normal text-brown-800 mb-6 tracking-wide leading-tight">
          Transform Your Outdoor Space
        </h1>
        <p className="font-sans text-lg md:text-xl text-brown-700 text-shadow mb-12 leading-relaxed font-medium max-w-2xl mx-auto">
          Creating beautiful, sustainable landscapes in Corona Del Mar that bring your vision to life.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-block bg-brown-500 text-white px-14 py-4 border-2 border-brown-500 font-sans text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-transparent hover:text-brown-500 hover:-translate-y-1 hover:shadow-xl"
        >
          Get Started
        </button>
      </div>
    </section>
  )
}

