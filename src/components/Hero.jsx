import { motion } from "framer-motion";
import { useState, useEffect, Suspense, lazy } from "react";
import {
  StarIcon,
  ChevronRightIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import BannerImage from "../assets/BannerImage.avif";

// Lazy load AboutUs
const AboutUs = lazy(() => import("./AboutUs"));

export default function Hero() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      {/* Pre-loaded background section */}
      <section className="fixed top-0 left-0 w-full h-screen -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${BannerImage})` }}
        />

        {/* Floating decor – start after hero text */}
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full mix-blend-soft-light opacity-30 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -40, 0], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, delay: 1.4 }}
        />
        <motion.div
          className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full mix-blend-soft-light opacity-25 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 30, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 10, repeat: Infinity, delay: 1.6 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-20 h-20 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full mix-blend-soft-light opacity-20 blur-xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, -25, 0], x: [0, 20, 0] }}
          transition={{ duration: 7, repeat: Infinity, delay: 1.8 }}
        />
      </section>

      {/* Hero content section */}
      <div className="relative z-10">
        <section className="min-h-screen flex items-center justify-center px-6">
          <motion.div
            className="text-center max-w-6xl"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <motion.h1
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-blue-800 mb-4 leading-none"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            >
              MBS Reality
              <motion.span
                className="block text-white bg-clip-text mt-4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 1 }}
              >
                Your Best Choice For <br />
                Real Estate Solution
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl sm:text-3xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              Discover extraordinary luxury properties in the world's most
              exclusive and desirable locations
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
            >
              <motion.button
                onClick={() => scrollToSection("testimonials")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 shadow-2xl hover:shadow-3xl hover:from-blue-700 hover:to-purple-700 flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Explore Listings
                <ChevronRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                onClick={() => scrollToSection("contact")}
                className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 backdrop-blur-sm hover:bg-white/10 hover:border-white/60 hover:shadow-2xl flex items-center gap-3 cursor-pointer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Contact Agent
                <PhoneIcon className="w-5 h-5" />
              </motion.button>
            </motion.div>

            <motion.div
              className="grid grid-cols-3 gap-12 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              {[
                { number: "750+", label: "Premium Properties" },
                { number: "60+", label: "Global Locations" },
                { number: "99%", label: "Client Satisfaction" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center group"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="text-3xl sm:text-4xl font-black text-white mb-2 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-white/60 text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section>

        <Suspense fallback={<div></div>}>
          <AboutUs />
        </Suspense>

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
            <span className="text-white/70 text-sm font-medium tracking-wider">
              SCROLL TO EXPLORE
            </span>
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
