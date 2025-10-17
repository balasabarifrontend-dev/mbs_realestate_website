import React from 'react'
import { motion } from 'framer-motion'
import { 
  StarIcon, 
  MapPinIcon, 
  HomeIcon, 
  ArrowsPointingOutIcon,
  ChevronRightIcon,
  BuildingOfficeIcon
} from '@heroicons/react/24/outline'

export function FeaturedProperties() {
  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      location: 'Beverly Hills, CA',
      price: '$2,500,000',
      beds: 5,
      baths: 4,
      sqft: '3,500',
      image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      featured: true,
      tags: ['Infinity Pool', 'Smart Home', 'Wine Cellar']
    },
    {
      id: 2,
      title: 'Skyline Penthouse',
      location: 'Manhattan, NY',
      price: '$3,800,000',
      beds: 3,
      baths: 3,
      sqft: '2,800',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.8,
      featured: true,
      tags: ['City Views', 'Private Elevator', 'Terrace']
    },
    {
      id: 3,
      title: 'Oceanfront Estate',
      location: 'Miami Beach, FL',
      price: '$5,200,000',
      beds: 6,
      baths: 5,
      sqft: '4,200',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80',
      rating: 4.9,
      featured: true,
      tags: ['Beach Access', 'Boat Dock', 'Spa']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-36 -translate-y-36 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-48 translate-y-48 opacity-30"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Enhanced Header Section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-6 py-3 rounded-2xl mb-6 border border-blue-100 shadow-lg"
          >
            <StarIcon className="w-5 h-5 text-yellow-500" />
            <span className="font-bold text-sm tracking-wide">EXCLUSIVE COLLECTION</span>
          </motion.div>
          
          <motion.h2
            className="text-5xl md:text-6xl font-black text-gray-900 mb-6"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Featured
            <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-2">
              Properties
            </span>
          </motion.h2>
          
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Discover our handpicked selection of extraordinary homes in the world's most prestigious locations. 
            Each property represents the pinnacle of luxury living and architectural excellence.
          </motion.p>
        </motion.div>

        {/* Enhanced Properties Grid */}
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {properties.map((property) => (
            <motion.div
              key={property.id}
              variants={cardVariants}
              className="group relative bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700 overflow-hidden"
              whileHover={{ y: -12, scale: 1.02 }}
            >
              {/* Enhanced Image Container */}
              <div className="relative h-80 overflow-hidden">
                <motion.img 
                  src={property.image} 
                  alt={property.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.8 }}
                />
                
                {/* Enhanced Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Enhanced Featured Badge */}
                <motion.div 
                  className="absolute top-6 left-6"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-2xl text-sm font-black tracking-wide shadow-2xl">
                    FEATURED
                  </div>
                </motion.div>

                {/* Enhanced Rating */}
                <motion.div 
                  className="absolute top-6 right-6 bg-white/95 backdrop-blur-lg px-4 py-2 rounded-2xl shadow-2xl"
                  whileHover={{ scale: 1.1 }}
                >
                  <div className="flex items-center gap-2 text-sm font-black text-gray-900">
                    <StarIcon className="w-4 h-4 fill-yellow-500 text-yellow-500" />
                    {property.rating}
                    <span className="text-gray-500 font-normal">/5</span>
                  </div>
                </motion.div>

                {/* Enhanced Price Tag */}
                <motion.div 
                  className="absolute bottom-6 left-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-white/95 backdrop-blur-lg px-5 py-3 rounded-2xl shadow-2xl">
                    <span className="text-2xl font-black text-gray-900">{property.price}</span>
                  </div>
                </motion.div>
              </div>
              
              {/* Enhanced Content */}
              <div className="p-8">
                {/* Enhanced Title and Location */}
                <div className="mb-6">
                  <motion.h3
                    className="text-2xl font-black text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {property.title}
                  </motion.h3>
                  <div className="flex items-center text-gray-500 font-medium">
                    <MapPinIcon className="w-5 h-5 mr-2 text-blue-500" />
                    <span>{property.location}</span>
                  </div>
                </div>

                {/* Enhanced Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {property.tags.map((tag, index) => (
                    <motion.span 
                      key={index}
                      className="bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-3 py-1.5 rounded-xl text-xs font-bold border border-blue-100"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>

                {/* Enhanced Property Features */}
                <div className="flex justify-between items-center py-6 border-t border-gray-100">
                  {[
                    { icon: <HomeIcon className="w-5 h-5" />, value: `${property.beds} beds` },
                    { icon: <div className="text-lg">🚿</div>, value: `${property.baths} baths` },
                    { icon: <ArrowsPointingOutIcon className="w-5 h-5" />, value: `${property.sqft} sqft` }
                  ].map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="flex items-center gap-2 text-gray-600 font-semibold text-sm"
                      whileHover={{ scale: 1.05 }}
                    >
                      {feature.icon}
                      <span>{feature.value}</span>
                    </motion.div>
                  ))}
                </div>

                {/* Enhanced CTA Button */}
                <motion.button 
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-2xl font-bold text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-2xl group/btn flex items-center justify-center gap-3"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  View Details
                  <ChevronRightIcon className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                </motion.button>
              </div>

              {/* Enhanced Hover Border Effect */}
              <div className="absolute inset-0 rounded-3xl border-3 border-transparent bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-padding opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10">
                <div className="absolute inset-[3px] rounded-3xl bg-white z-10" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-transparent border-3 border-blue-600 text-blue-600 px-12 py-5 rounded-2xl font-black text-lg hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-2xl group flex items-center justify-center gap-3 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
          >
            Explore All Properties
            <BuildingOfficeIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
          </motion.button>
          
          {/* Enhanced Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-12 max-w-2xl mx-auto mt-16 pt-16 border-t border-gray-200"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            {[
              { number: '750+', label: 'Luxury Properties' },
              { number: '60+', label: 'Global Locations' },
              { number: '99%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <motion.div 
                key={index} 
                className="text-center group"
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-3xl font-black text-gray-900 mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-gray-900 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturedProperties;