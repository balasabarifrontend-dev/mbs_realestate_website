import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

// Enhanced Navbar Component
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/properties", label: "Properties" },
    { path: "/contact", label: "Contact" },
  ];

  // Enhanced logic for determining navbar style
  const isTransparentNavbar = () => {
   
    if (location.pathname === "/") {
      return !isScrolled;
    }
    
    if (location.pathname === "/about") {
      return !isScrolled;
    }
    
    return false;
  };

  const shouldUseLightText = isTransparentNavbar();

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isTransparentNavbar()
            ? "bg-transparent py-6"
            : "bg-white/95 backdrop-blur-md shadow-2xl py-3"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Link to="/" className="text-3xl font-bold">
                {shouldUseLightText ? (
                  <span className="text-white">MBS Reality</span>
                ) : (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MBS Reality
                  </span>
                )}
              </Link>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`relative font-semibold transition-all duration-300 ${
                      shouldUseLightText
                        ? "text-white hover:text-blue-200"
                        : isActive
                        ? "text-blue-600"
                        : "text-gray-700 hover:text-blue-600"
                    }`}
                  >
                    {item.label}
                    {isActive && !shouldUseLightText && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    {isActive && shouldUseLightText && (
                      <motion.div
                        className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                        layoutId="navbar-indicator"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/schedule-tour"
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg ${
                    shouldUseLightText
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  }`}
                >
                  Schedule Tour
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-3 rounded-xl transition-all ${
                shouldUseLightText
                  ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-6 ${
                    shouldUseLightText ? "bg-white" : "bg-gray-700"
                  }`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                  className={`block h-0.5 w-6 ${
                    shouldUseLightText ? "bg-white" : "bg-gray-700"
                  }`}
                />
                <motion.span
                  animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                  className={`block h-0.5 w-6 ${
                    shouldUseLightText ? "bg-white" : "bg-gray-700"
                  }`}
                />
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-2xl border-t border-gray-200/50"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="px-6 py-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.path}
                      className={`block py-4 px-4 text-lg font-semibold transition-all rounded-xl mb-2 ${
                        location.pathname === item.path
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                          : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                      }`}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.1 }}
                  className="pt-4"
                >
                  <Link
                    to="/schedule-tour"
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Schedule Tour
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar - ONLY for home page */}
      {location.pathname === "/" && <div className="h-20 md:h-24"></div>}
    </>
  );
}

export default Navbar;
