import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  PaperAirplaneIcon,
  MapIcon
} from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    service: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form submitted:', formData)
    alert('Thank you for your message! We will get back to you within 24 hours.')
    setFormData({ name: '', email: '', phone: '', message: '', service: '' })
    setIsSubmitting(false)
  }

  const contactInfo = [
    {
      icon: <MapPinIcon className="w-6 h-6" />,
      title: 'Visit Our Office',
      details: '123 Luxury Lane, Beverly Hills, CA 90210',
      subtitle: 'Main Headquarters'
    },
    {
      icon: <PhoneIcon className="w-6 h-6" />,
      title: 'Call Us',
      details: '+91 9876543210',
      subtitle: 'Mon-Fri from 8am to 6pm'
    },
    {
      icon: <EnvelopeIcon className="w-6 h-6" />,
      title: 'Email Us',
      details: 'info@mbsreality.com',
      subtitle: 'We reply within 24 hours'
    },
    {
      icon: <ClockIcon className="w-6 h-6" />,
      title: 'Business Hours',
      details: 'Monday - Friday: 9AM - 6PM',
      subtitle: 'Saturday: 10AM - 4PM'
    }
  ]

  const services = [
    'Property Purchase',
    'Property Sale',
    'Property Valuation',
    'Investment Consulting',
    'Legal Support',
    'Other'
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-500/10 rounded-full -translate-y-36 translate-x-36"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full translate-y-48 -translate-x-48"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 border border-blue-500/30">
            <EnvelopeIcon className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's Find Your Dream Property
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Ready to start your real estate journey? Contact us today and let our experts guide you every step of the way.
          </p>
        </motion.div>

        {/* Top Section - Contact Info and Form Side by Side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start gap-4 group cursor-pointer"
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-white text-lg mb-1">{item.title}</h4>
                      <p className="text-blue-200 font-medium">{item.details}</p>
                      <p className="text-blue-300/80 text-sm mt-1">{item.subtitle}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Additional Info */}
              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="text-white font-semibold mb-4">Why Choose Us?</h4>
                <ul className="space-y-2 text-blue-200">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    15+ Years of Experience
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    500+ Happy Clients
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    Premium Property Portfolio
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    24/7 Customer Support
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-2xl p-8 h-full">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Send Us a Message</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      placeholder="+91 9876543210"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>{service}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Tell us about your real estate needs, preferred location, budget, and timeline..."
                  ></textarea>
                </div>
                
                <motion.button 
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <PaperAirplaneIcon className="w-5 h-5" />
                      Send Message
                    </>
                  )}
                </motion.button>

                <p className="text-center text-gray-500 text-sm">
                  * Required fields
                </p>
              </form>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section - Full Width Map */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
            {/* Map Header */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 text-white">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white/20 rounded-xl">
                  <MapIcon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-bold text-2xl mb-2">Find Our Office</h3>
                  <p className="text-blue-100 text-lg">123 Luxury Lane, Beverly Hills, CA 90210</p>
                </div>
              </div>
            </div>

            {/* Map Container */}
            <div className="h-96 bg-gray-200 relative">
              {/* Google Maps Embed */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.953366754852!2d-118.3998379243321!3d34.06246207316616!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2bc04d74f4d67%3A0x7db3f2b6a1f7b9e0!2sBeverly%20Hills%2C%20CA%2C%20USA!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="MBS Reality Office Location"
                className="absolute inset-0"
              ></iframe>
              
              {/* Map Overlay Info */}
              <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg max-w-xs">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                  <p className="font-semibold text-gray-900 text-lg">MBS Reality</p>
                </div>
                <p className="text-sm text-gray-600 mb-1">123 Luxury Lane</p>
                <p className="text-sm text-gray-600 mb-3">Beverly Hills, CA 90210</p>
                <div className="flex items-center gap-2">
                  <ClockIcon className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-gray-500">Open 9AM - 6PM</span>
                </div>
              </div>
            </div>

            {/* Map Actions */}
            <div className="p-6 bg-gray-50 border-t border-gray-200">
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-xl font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-3"
                  onClick={() => window.open('https://maps.google.com/?q=123+Luxury+Lane,+Beverly+Hills,+CA+90210', '_blank')}
                >
                  <MapPinIcon className="w-5 h-5" />
                  Get Directions
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-gray-200 text-gray-700 py-3 px-6 rounded-xl font-semibold hover:bg-gray-300 transition-colors flex items-center justify-center gap-3"
                  onClick={() => window.open('tel:+919876543210')}
                >
                  <PhoneIcon className="w-5 h-5" />
                  Call Now
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default Contact