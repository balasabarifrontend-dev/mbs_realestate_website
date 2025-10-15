import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { StarIcon, ChevronRightIcon, PhoneIcon } from '@heroicons/react/24/outline';
import BannerImage from "../assets/BannerImage.avif";

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Enhanced Fixed Background Section */}
      <section className="fixed top-0 left-0 w-full h-screen -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${BannerImage})`
          }}
        >
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/30 to-gray-900/60"></div>
          {/* Animated Gradient Overlay */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-purple-600/10 to-pink-600/10"
            animate={{
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
        
        {/* Enhanced Floating Elements */}
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-soft-light opacity-30 blur-xl"
          animate={{ 
            y: [0, -40, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-soft-light opacity-25 blur-xl"
          animate={{ 
            y: [0, 30, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mix-blend-soft-light opacity-20 blur-xl"
          animate={{ 
            y: [0, -25, 0],
            x: [0, 20, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, delay: 1 }}
        />
      </section>

      {/* Enhanced Scrollable Content Sections */}
      <div className="relative z-10">
        {/* Enhanced Hero Content */}
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            className="text-center max-w-6xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Enhanced Premium Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring" }}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-lg border border-white/20 px-6 py-3 rounded-2xl mb-12 shadow-2xl"
            >
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-3 h-3 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full"
                />
                <span className="text-white/90 font-semibold text-sm">Premium Properties Available</span>
              </div>
              <StarIcon className="w-4 h-4 text-yellow-400" />
            </motion.div>

            {/* Enhanced Main Heading */}
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-white mb-8 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              Find Your
              <motion.span 
                className="block bg-gradient-to-r from-blue-300 via-purple-300 to-cyan-300 bg-clip-text text-transparent mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Dream Home
              </motion.span>
            </motion.h1>

            {/* Enhanced Subtitle */}
            <motion.p
              className="text-2xl sm:text-3xl text-white/80 mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Discover extraordinary luxury properties in the world's most exclusive and desirable locations
            </motion.p>

            {/* Enhanced CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.a
                href="#properties"
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Listings
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <motion.a
                href="#contact"
                className="group border-2 border-white/40 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 hover:shadow-2xl flex items-center gap-3"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Agent
                <PhoneIcon className="w-5 h-5" />
              </motion.a>
            </motion.div>

            {/* Enhanced Stats */}
            <motion.div
              className="grid grid-cols-3 gap-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              {[
                { number: "750+", label: "Premium Properties" },
                { number: "60+", label: "Global Locations" },
                { number: "99%", label: "Client Satisfaction" }
              ].map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm font-semibold uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: isScrolled ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="flex flex-col items-center gap-3"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="text-white/70 text-sm font-medium tracking-wider">SCROLL TO EXPLORE</span>
            <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-1">
              <motion.div
                className="w-1 h-3 bg-white/70 rounded-full"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}