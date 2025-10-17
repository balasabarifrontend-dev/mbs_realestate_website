import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  HomeIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  CheckBadgeIcon,
  ArrowRightIcon,
  MagnifyingGlassIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import FilterPage from './FilterPage'

const PropertyServices = () => {
  const [activeTab, setActiveTab] = useState('buy')
  const [selectedPropertyType, setSelectedPropertyType] = useState('all')
  const [showFilterPage, setShowFilterPage] = useState(false)
  const [selectedService, setSelectedService] = useState('')

  const services = [
    {
      id: 'buy',
      title: 'Buy Properties',
      icon: <HomeIcon className="w-8 h-8" />,
      description: 'Find your dream property from our extensive collection of premium listings',
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      features: [
        'Premium Residential Properties',
        'Commercial Spaces',
        'Industrial Properties',
        'Luxury Villas & Apartments',
        'Agricultural Lands',
        'Investment Opportunities'
      ],
      process: [
        'Property Search & Selection',
        'Site Visits & Verification',
        'Legal Documentation',
        'Price Negotiation',
        'Registration & Handover'
      ]
    },
    {
      id: 'sell',
      title: 'Sell Properties',
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      description: 'Get the best value for your property with our expert marketing and negotiation',
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      features: [
        'Free Property Valuation',
        'Professional Photography',
        'Digital Marketing',
        'Wide Buyer Network',
        'Expert Negotiation',
        'Quick Closing'
      ],
      process: [
        'Property Valuation',
        'Marketing Strategy',
        'Buyer Screening',
        'Price Finalization',
        'Documentation',
        'Fund Transfer'
      ]
    },
    {
      id: 'rent',
      title: 'Rent Properties',
      icon: <BuildingStorefrontIcon className="w-8 h-8" />,
      description: 'Discover perfect rental properties for your residential or commercial needs',
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      features: [
        'Residential Apartments',
        'Commercial Offices',
        'Retail Spaces',
        'Short-term Rentals',
        'Fully Furnished Options',
        'Flexible Lease Terms'
      ],
      process: [
        'Requirement Analysis',
        'Property Shortlisting',
        'Site Visits',
        'Agreement Drafting',
        'Security Deposit',
        'Key Handover'
      ]
    },
    {
      id: 'lease',
      title: 'Lease Properties',
      icon: <DocumentTextIcon className="w-8 h-8" />,
      description: 'Long-term leasing solutions for corporate and commercial requirements',
      color: 'from-blue-600 to-purple-600',
      bgColor: 'from-blue-50 to-purple-50',
      borderColor: 'border-blue-200',
      features: [
        'Long-term Contracts',
        'Commercial Leasing',
        'Industrial Leasing',
        'Corporate Solutions',
        'Lease Management',
        'Renewal Services'
      ],
      process: [
        'Requirement Assessment',
        'Property Identification',
        'Legal Framework',
        'Contract Negotiation',
        'Maintenance Planning',
        'Ongoing Support'
      ]
    }
  ]

  const propertyTypes = [
    { id: 'all', name: 'All Properties', icon: <BuildingLibraryIcon className="w-5 h-5" /> },
    { id: 'residential', name: 'Residential', icon: <HomeIcon className="w-5 h-5" /> },
    { id: 'commercial', name: 'Commercial', icon: <BuildingStorefrontIcon className="w-5 h-5" /> },
    { id: 'industrial', name: 'Industrial', icon: <BuildingOfficeIcon className="w-5 h-5" /> },
    { id: 'land', name: 'Lands', icon: <MapPinIcon className="w-5 h-5" /> }
  ]

  const activeService = services.find(service => service.id === activeTab)

  const handleExploreClick = (serviceId) => {
    setSelectedService(serviceId)
    setShowFilterPage(true)
  }

  return (
    <>
      <section id="property-services" className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-36 -translate-y-36 opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-100 rounded-full translate-x-48 translate-y-48 opacity-30"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          {/* Header */}
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-purple-50 text-blue-600 px-6 py-3 rounded-2xl mb-6 border border-blue-100 shadow-lg"
            >
              <StarIcon className="w-5 h-5 text-yellow-500" />
              <span className="font-bold text-sm tracking-wide">PROPERTY SERVICES</span>
            </motion.div>

            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Find Your Perfect <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Property Solution</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Comprehensive real estate services tailored to your needs. Whether you're buying, selling, 
              renting, or leasing, we've got you covered with expert guidance.
            </p>
          </motion.div>

          {/* Service Tabs */}
          <motion.div
            className="flex flex-wrap justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            {services.map((service) => (
              <motion.button
                key={service.id}
                onClick={() => setActiveTab(service.id)}
                className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                  activeTab === service.id
                    ? `bg-gradient-to-r ${service.color} text-white shadow-2xl scale-105`
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300 hover:shadow-lg'
                }`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {service.icon}
                {service.title}
              </motion.button>
            ))}
          </motion.div>

          {/* Property Type Filter */}
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {propertyTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSelectedPropertyType(type.id)}
                className={`flex items-center gap-2 px-4 py-3 rounded-xl font-medium transition-all duration-300 ${
                  selectedPropertyType === type.id
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-2xl'
                    : 'bg-white text-gray-600 border border-gray-200 hover:bg-blue-50 hover:border-blue-200'
                }`}
              >
                {type.icon}
                {type.name}
              </button>
            ))}
          </motion.div>

          {/* Active Service Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start"
          >
            {/* Left Content */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                  {activeService.title}
                </h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  {activeService.description}
                </p>
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">What We Offer</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="flex items-center gap-3 group"
                    >
                      <div className={`w-6 h-6 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <CheckBadgeIcon className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <h4 className="text-xl font-bold text-gray-900 mb-4">Our Process</h4>
                <div className="space-y-4">
                  {activeService.process.map((step, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                      className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-200 hover:shadow-lg hover:border-blue-200 transition-all duration-300"
                    >
                      <div className={`w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 shadow-lg`}>
                        {index + 1}
                      </div>
                      <span className="text-gray-700 font-medium">{step}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* CTA Button */}
              {/* <motion.button
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                onClick={() => handleExploreClick(activeTab)}
                className={`flex items-center gap-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 group`}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <MagnifyingGlassIcon className="w-5 h-5" />
                Explore {activeService.title}
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button> */}
            </div>

            {/* Right Side - Visual Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="relative"
            >
              <div className={`bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-700`}>
                <div className="bg-white rounded-3xl p-8 backdrop-blur-sm">
                  <div className="aspect-video rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 relative overflow-hidden">
                    {/* Placeholder for service-specific image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 flex items-center justify-center">
                      <div className="text-center">
                        {activeService.icon}
                        <p className="text-gray-600 font-bold text-xl mt-4">{activeService.title}</p>
                        <p className="text-gray-400 text-sm">Premium Property Solutions</p>
                      </div>
                    </div>
                    
                    {/* Floating Stats */}
                    <motion.div
                      className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                    >
                      <span className="text-sm font-bold text-gray-800">500+ Properties</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute top-4 right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-3 py-2 rounded-lg shadow-lg"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.6, delay: 1 }}
                    >
                      <span className="text-sm font-bold">99% Success Rate</span>
                    </motion.div>
                    
                    <motion.div
                      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.2 }}
                    >
                      <span className="text-sm font-bold text-gray-800">Expert Guidance</span>
                    </motion.div>
                  </div>
                  
                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-6">
                    <div className="text-center">
                      <div className="text-2xl font-black text-gray-900">500+</div>
                      <div className="text-gray-500 text-sm">Properties</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-gray-900">15+</div>
                      <div className="text-gray-500 text-sm">Years Experience</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-gray-900">99%</div>
                      <div className="text-gray-500 text-sm">Client Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Filter Page */}
      {showFilterPage && (
        <FilterPage 
          serviceType={selectedService} 
          onClose={() => setShowFilterPage(false)} 
        />
      )}
    </>
  )
}

export default PropertyServices