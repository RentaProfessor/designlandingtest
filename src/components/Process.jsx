export default function Process() {
  const steps = [
    {
      number: '1',
      title: 'Consultation',
      description: "We meet with you to understand your vision, needs, and budget. We'll assess your space and discuss design possibilities that align with your lifestyle."
    },
    {
      number: '2',
      title: 'Design & Planning',
      description: "Our team creates detailed design plans and 3D renderings. We'll present options, refine the design based on your feedback, and finalize all details."
    },
    {
      number: '3',
      title: 'Installation',
      description: 'Our skilled team brings the design to life with quality craftsmanship. We manage every detail, from sourcing materials to final installation and cleanup.'
    },
    {
      number: '4',
      title: 'Ongoing Support',
      description: 'We provide guidance on maintenance and care to ensure your landscape thrives. Our team is always available for questions and seasonal adjustments.'
    }
  ]

  return (
    <section 
      id="process" 
      className="min-h-screen flex flex-col items-center justify-center px-[5%] py-24 bg-gradient-to-br from-[#F9F7F4] to-white"
    >
      <div className="max-w-6xl w-full">
        <h2 className="font-serif text-4xl md:text-6xl font-normal text-brown-800 mb-4 tracking-wide text-center">
          Our Process
        </h2>
        <p className="font-sans text-lg md:text-xl text-brown-400 mb-16 font-light leading-relaxed text-center">
          A streamlined approach to bringing your vision to life
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {steps.map((step) => (
            <div 
              key={step.number}
              className="bg-white p-8 md:p-10 border border-[#E5DDD5] shadow-md transition-all duration-400 hover:-translate-y-2 hover:shadow-2xl hover:border-sand-400 relative overflow-hidden group"
            >
              <div className="absolute top-0 left-0 w-1 h-0 bg-gradient-to-b from-brown-500 to-brown-400 transition-all duration-400 group-hover:h-full" />
              
              <div className="flex items-center justify-center w-14 h-14 bg-brown-500 text-white rounded-full font-serif text-2xl font-medium mb-6 transition-all duration-300 group-hover:bg-brown-400 group-hover:scale-110">
                {step.number}
              </div>
              
              <h3 className="font-serif text-2xl md:text-3xl font-medium text-brown-800 mb-4 tracking-wide">
                {step.title}
              </h3>
              
              <p className="font-sans text-base md:text-lg text-gray-600 leading-relaxed font-light">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

