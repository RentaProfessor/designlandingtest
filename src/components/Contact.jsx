import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you for your message! We will get back to you soon.')
    setFormData({ firstName: '', lastName: '', email: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section 
      id="contact" 
      className="min-h-screen flex flex-col items-center justify-center px-[5%] py-24 bg-gradient-to-br from-sand-200 to-sand-300"
    >
      <div className="max-w-4xl w-full">
        <h2 className="font-serif text-4xl md:text-6xl font-normal text-brown-800 mb-4 tracking-wide text-center">
          Get In Touch
        </h2>
        <p className="font-sans text-lg md:text-xl text-brown-400 mb-12 font-light leading-relaxed text-center">
          Let's discuss your landscape design vision and bring it to life
        </p>
        
        <div className="bg-white p-8 md:p-14 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs font-semibold text-brown-500 uppercase tracking-wider">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="bg-[#FAF8F5] border border-sand-400 text-brown-800 px-5 py-3 font-sans text-base transition-all duration-300 focus:outline-none focus:border-brown-500 focus:bg-white focus:ring-2 focus:ring-brown-500/20"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs font-semibold text-brown-500 uppercase tracking-wider">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="bg-[#FAF8F5] border border-sand-400 text-brown-800 px-5 py-3 font-sans text-base transition-all duration-300 focus:outline-none focus:border-brown-500 focus:bg-white focus:ring-2 focus:ring-brown-500/20"
                />
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-sans text-xs font-semibold text-brown-500 uppercase tracking-wider">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-[#FAF8F5] border border-sand-400 text-brown-800 px-5 py-3 font-sans text-base transition-all duration-300 focus:outline-none focus:border-brown-500 focus:bg-white focus:ring-2 focus:ring-brown-500/20"
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-sans text-xs font-semibold text-brown-500 uppercase tracking-wider">
                Tell us about your project
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Describe your vision, project goals, timeline, and any specific requirements..."
                className="bg-[#FAF8F5] border border-sand-400 text-brown-800 px-5 py-3 font-sans text-base leading-relaxed resize-y min-h-[140px] transition-all duration-300 focus:outline-none focus:border-brown-500 focus:bg-white focus:ring-2 focus:ring-brown-500/20"
              />
            </div>
            
            <div className="text-center">
              <button
                type="submit"
                className="inline-block bg-brown-500 text-white px-12 py-4 border-2 border-brown-500 font-sans text-sm font-semibold tracking-widest uppercase rounded-sm transition-all duration-300 hover:bg-transparent hover:text-brown-500 hover:-translate-y-1 hover:shadow-xl"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

