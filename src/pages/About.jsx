import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { 
  BuildingOfficeIcon, 
  TrophyIcon, 
  UserGroupIcon, 
  HeartIcon,
  MapPinIcon,
  CheckBadgeIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import AboutBannerImage from "../assets/AboutBannerImage.avif"

export default function About() {
  const stats = [
    { number: "15+", label: "Years Experience", icon: <TrophyIcon className="w-6 h-6" /> },
    { number: "500+", label: "Happy Clients", icon: <UserGroupIcon className="w-6 h-6" /> },
    { number: "$4.2B", label: "Property Sold", icon: <BuildingOfficeIcon className="w-6 h-6" /> },
    { number: "50+", label: "Prime Locations", icon: <MapPinIcon className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <CheckBadgeIcon className="w-8 h-8" />,
      title: "Integrity First",
      description: "We believe in complete transparency and honesty in all our dealings."
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Client Focused",
      description: "Your goals and dreams are at the center of everything we do."
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Excellence",
      description: "We strive for excellence in every transaction and interaction."
    }
  ];

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "15+ years in luxury real estate"
    },
    {
      name: "Michael Chen",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Expert in property valuation"
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Agent",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80",
      description: "Luxury homes specialist"
    }
  ];

  return (
    <>
      <Navbar />
      
      {/* Hero Section */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${AboutBannerImage})`
          }}
        >
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-gray-900/70 via-blue-900/60 to-purple-900/70"></div>
        </div>
        
        {/* Background Elements */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        
        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-4xl"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-full mb-8"
            >
              <BuildingOfficeIcon className="w-5 h-5 text-white" />
              <span className="text-white/90 text-sm font-medium">About LuxeEstates</span>
            </motion.div>

            <motion.h1
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Crafting Your
              <span className="block bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
                Dream Legacy
              </span>
            </motion.h1>

            <motion.p
              className="text-xl text-blue-100 max-w-2xl mx-auto mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              For over 15 years, we've been transforming real estate dreams into extraordinary realities. 
              We don't just sell properties; we craft legacies and build relationships that last generations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Our Team
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Story
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 }
                }}
                className="text-center group"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-500 p-1 rounded-2xl shadow-2xl">
                <div className="bg-white rounded-2xl p-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    Our Journey to Excellence
                  </h2>
                  <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                    Founded in 2009, LuxeEstates began as a small boutique agency with a simple mission: 
                    to provide unparalleled real estate service that puts clients first.
                  </p>
                  <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                    Today, we're recognized as one of the leading luxury real estate firms, 
                    but our core values remain unchanged. We believe that every property tells a story, 
                    and every client deserves a personalized experience.
                  </p>
                  <motion.button
                    className="flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
                    whileHover={{ x: 5 }}
                  >
                    Read Our Full Story
                    <ArrowRightIcon className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              <div className="space-y-4">
                <div className="bg-gradient-to-br from-blue-400 to-cyan-400 rounded-2xl h-48"></div>
                <div className="bg-gradient-to-br from-purple-400 to-pink-400 rounded-2xl h-32"></div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="bg-gradient-to-br from-green-400 to-emerald-400 rounded-2xl h-32"></div>
                <div className="bg-gradient-to-br from-orange-400 to-red-400 rounded-2xl h-48"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every relationship we build.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:shadow-xl transition-all duration-500 group"
              >
                <motion.div 
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Experts
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our team of dedicated professionals brings decades of combined experience in luxury real estate.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="h-64 bg-gradient-to-br from-blue-400 to-purple-500 relative overflow-hidden">
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-blue-100 text-xl mb-8 max-w-2xl mx-auto">
              Let's work together to find your dream property or get the best value for your current home.
            </p>
            <motion.button
              className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Schedule Consultation
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}