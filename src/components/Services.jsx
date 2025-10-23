import React from 'react'
import { motion } from 'framer-motion'
import { 
  ArrowRightIcon,
  BuildingOfficeIcon,
  CheckBadgeIcon
} from '@heroicons/react/24/outline'

import IndustrialImage from "../assets/IndustrialImage.avif"
import ComercialImage from "../assets/ComercialImage.avif"
import ResidentialImage from "../assets/ResidentialImage.avif"

const Services = () => {
  const services = [
    {
      name: "Industrial Properties",
      description: "Strategic industrial locations with excellent connectivity and infrastructure for manufacturing and warehousing.",
      image: IndustrialImage, 
      features: ["Warehouses", "Manufacturing Units", "Industrial Parks"],
      color: "from-blue-500 to-teal-500",
      iconColor: "text-blue-500",
    },
    {
      name: "Commercial Spaces",
      description: "Premium commercial properties in prime business districts offering exceptional growth potential.",
      image: ComercialImage,
      features: ["Office Spaces", "Retail Outlets", "Business Centers"],
      color: "from-purple-500 to-pink-500",
      iconColor: "text-purple-500",
    },
    {
      name: "Residential Projects",
      description: "Luxurious residential properties that combine elegant living with modern amenities and security.",
      image: ResidentialImage, 
      features: ["Apartments", "Villas", "Gated Communities"],
      color: "from-green-500 to-emerald-500",
      iconColor: "text-green-500",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

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
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our <span className="text-green-600">Expert</span> Services
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We specialize in comprehensive real estate solutions tailored to your unique needs, 
            leveraging deep market expertise and innovative strategies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              {/* Content Section */}
              <div className="p-6">
                {/* Icon and Title */}
                <div className="flex items-start space-x-4 mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color} shadow-md`}>
                    <BuildingOfficeIcon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-green-600 transition-colors">
                    {service.name}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <CheckBadgeIcon className={`w-5 h-5 ${service.iconColor}`} />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Button */}
                <motion.button
                  className="w-full bg-gray-900 text-white py-3 px-6 rounded-xl font-semibold hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center space-x-2 group/btn"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>Explore More</span>
                  <ArrowRightIcon className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Services