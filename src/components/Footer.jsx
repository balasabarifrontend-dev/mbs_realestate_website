import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  BuildingOfficeIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    {
      name: 'Facebook',
      icon: '📘',
      url: '#',
      color: 'hover:text-blue-400'
    },
    {
      name: 'Instagram',
      icon: '📷',
      url: '#',
      color: 'hover:text-pink-400'
    },
    {
      name: 'Twitter',
      icon: '🐦',
      url: '#',
      color: 'hover:text-blue-300'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: '#',
      color: 'hover:text-blue-500'
    }
  ]

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Properties', href: '#properties' },
    { name: 'Services', href: '#services' },
    { name: 'About Us', href: '#about' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' }
  ]

  const services = [
    'Property Sales',
    'Property Valuation',
    'Investment Consulting',
    'Legal Support',
    'Property Management',
    'Mortgage Assistance'
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white rounded-full"></div>
        <div className="absolute top-20 left-10 w-24 h-24 bg-white rounded-full"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <motion.div 
              className="lg:col-span-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                  <BuildingOfficeIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    MBS Reality
                  </span>
                  <p className="text-blue-200 text-sm">Premium Real Estate</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6 max-w-md text-lg leading-relaxed">
                Your trusted partner in luxury real estate. We specialize in helping clients find their dream properties with exceptional service, expertise, and personalized attention to detail.
              </p>
              
              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-lg transition-all duration-300 ${social.color} hover:scale-110 hover:bg-gray-600`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <ChevronRightIcon className="w-4 h-4 text-blue-400" />
                Quick Links
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={link.name}>
                    <motion.a 
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                      whileHover={{ x: 5 }}
                    >
                      <ChevronRightIcon className="w-3 h-3 text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6 text-white flex items-center gap-2">
                <ChevronRightIcon className="w-4 h-4 text-blue-400" />
                Contact Info
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">123 Luxury Lane</p>
                    <p className="text-gray-300">Beverly Hills, CA 90210</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <PhoneIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300">+91 9876543210</p>
                </div>
                <div className="flex items-center gap-3">
                  <EnvelopeIcon className="w-5 h-5 text-blue-400 flex-shrink-0" />
                  <p className="text-gray-300">info@mbsreality.com</p>
                </div>
              </div>

              {/* Newsletter Signup */}
              <div className="mt-6">
                <h4 className="text-sm font-semibold text-white mb-3">Stay Updated</h4>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:border-blue-400 transition-colors"
                  />
                  <motion.button
                    className="px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg text-sm font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Join
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-700 py-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              &copy; {currentYear} MBS Reality. All rights reserved. | Premium Real Estate Services
            </p>
            <div className="flex gap-6 text-sm text-gray-400">
              <a href="#" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors duration-300">Cookie Policy</a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating CTA */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0, y: 100 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <motion.a
          href="#contact"
          className="w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-2xl text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.9 }}
        >
          <PhoneIcon className="w-6 h-6" />
        </motion.a>
      </motion.div>
    </footer>
  )
}

export default Footer