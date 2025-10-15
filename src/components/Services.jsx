import React from 'react'
import { motion } from 'framer-motion'
import { 
  HomeModernIcon, 
  CurrencyDollarIcon, 
  ChartBarIcon, 
  ScaleIcon,
  ArrowRightIcon 
} from '@heroicons/react/24/outline'

const Services = () => {
  const services = [
    {
      icon: <HomeModernIcon className="w-8 h-8" />,
      title: 'Property Sales',
      description: 'Expert guidance through the entire home buying and selling process with personalized market insights.',
      features: ['Market Analysis', 'Property Marketing', 'Negotiation'],
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      title: 'Property Valuation',
      description: 'Accurate market analysis and comprehensive valuation reports for informed decision making.',
      features: ['Market Reports', 'Comparative Analysis', 'Value Optimization'],
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: <ChartBarIcon className="w-8 h-8" />,
      title: 'Investment Consulting',
      description: 'Strategic advice and portfolio management for maximizing real estate investment returns.',
      features: ['Portfolio Analysis', 'ROI Projections', 'Risk Assessment'],
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      icon: <ScaleIcon className="w-8 h-8" />,
      title: 'Legal Support',
      description: 'Comprehensive legal assistance and contract management for seamless transactions.',
      features: ['Contract Review', 'Legal Compliance', 'Documentation'],
      gradient: 'from-orange-500 to-red-500'
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        {/* Header Section */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <ChartBarIcon className="w-4 h-4" />
            What We Offer
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Premium Real Estate Services
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to simplify your real estate journey 
            and maximize your investment potential.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
              whileHover={{ y: -5 }}
            >
              {/* Content */}
              <div className="relative p-8 z-10">
                {/* Icon Container */}
                <motion.div 
                  className={`inline-flex items-center justify-center p-4 rounded-2xl bg-gradient-to-br ${service.gradient} text-white mb-6 shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {service.icon}
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button className="flex items-center gap-2 text-sm font-semibold text-gray-700 hover:text-gray-900 transition-colors">
                  Learn More
                  <ArrowRightIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA Section */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-xl">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-blue-100 text-lg mb-6 max-w-2xl mx-auto">
              Let's discuss how we can help you achieve your real estate goals with our premium services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-blue-600 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Consultation
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Our Team
              </motion.button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto mt-12 pt-12 border-t border-gray-200">
            {[
              { number: '15+', label: 'Years Experience' },
              { number: '2,500+', label: 'Happy Clients' },
              { number: '$4.2B', label: 'Property Sold' }
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services