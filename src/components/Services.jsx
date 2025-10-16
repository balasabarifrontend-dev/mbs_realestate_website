import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

const Services = () => {
  const services = [
    {
      name: "Industrial Properties",
      description: "Strategic industrial locations with excellent connectivity and infrastructure for manufacturing and warehousing.",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Warehouses", "Manufacturing Units", "Industrial Parks"],
      color: "from-blue-500 to-teal-500",
    },
    {
      name: "Commercial Spaces",
      description: "Premium commercial properties in prime business districts offering exceptional growth potential.",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Office Spaces", "Retail Outlets", "Business Centers"],
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Residential Projects",
      description: "Luxurious residential properties that combine elegant living with modern amenities and security.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      features: ["Apartments", "Villas", "Gated Communities"],
      color: "from-green-500 to-emerald-500",
    },
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
            Our <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">Expert</span> Services
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We specialize in comprehensive real estate solutions tailored to your unique needs, 
            leveraging deep market expertise and innovative strategies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2, type: "spring" }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl transform group-hover:scale-105 group-hover:shadow-2xl transition-all duration-500 border border-gray-100"></div>
              <div className="relative p-8 h-full flex flex-col">
                <div className="mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center text-white mb-4 transform group-hover:scale-110 transition-all duration-500`}>
                    <BuildingOfficeIcon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-black text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                    {service.name}
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>
                
                <div className="mt-auto">
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckBadgeIcon className="w-5 h-5 text-green-500" />
                        <span className="text-gray-700 font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 group"
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="flex items-center justify-center gap-3">
                      Explore {service.name}
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services