import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// Enhanced Navbar Component
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [forceActiveSection, setForceActiveSection] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position (only on home page)
      if (location.pathname === "/") {
        const sections = ['property-services', 'contact'];
        let currentSection = "";
        
        sections.forEach(section => {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
            }
          }
        });
        
        setActiveSection(currentSection);
      } else {
        setActiveSection("");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [location.pathname]);

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

  // Check if properties section is active (for underline)
  const isPropertiesActive = () => {
    return location.pathname === "/" && (activeSection === "property-services" || forceActiveSection === "property-services");
  };

  // Check if contact section is active (for underline)
  const isContactActive = () => {
    return location.pathname === "/" && (activeSection === "contact" || forceActiveSection === "contact");
  };

  // Check if home is active (for underline)
  const isHomeActive = () => {
    return location.pathname === "/" && activeSection === "" && forceActiveSection === "";
  };

  // Navigation handlers
  const handleHomeNavigation = () => {
    if (location.pathname === "/") {
      // Scroll to top of home page
      window.scrollTo({ top: 0, behavior: "smooth" });
      setForceActiveSection("");
    } else {
      // Navigate to home page
      navigate("/");
      setForceActiveSection("");
    }
    setIsMobileMenuOpen(false);
  };

  const handleAboutNavigation = () => {
    if (location.pathname === "/about") {
      // Scroll to top of about page
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Navigate to about page
      navigate("/about");
    }
    setIsMobileMenuOpen(false);
  };

  const handlePropertiesNavigation = () => {
    if (location.pathname === "/") {
      // If on home page, scroll to PropertyServices section
      const element = document.getElementById("property-services");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setForceActiveSection("property-services");
      }
    } else {
      // Navigate to home page first, then scroll to properties
      navigate("/");
      // Use a small delay to ensure the home page is loaded
      setTimeout(() => {
        const scrollToProperties = () => {
          const element = document.getElementById("property-services");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setForceActiveSection("property-services");
          } else {
            // If element not found yet, try again after a short delay
            setTimeout(scrollToProperties, 50);
          }
        };
        scrollToProperties();
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleContactNavigation = () => {
    if (location.pathname === "/") {
      // If on home page, scroll to contact section
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setForceActiveSection("contact");
      }
    } else {
      // Navigate to home page first, then scroll to contact section
      navigate("/");
      // Use a small delay to ensure the home page is loaded
      setTimeout(() => {
        const scrollToContact = () => {
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setForceActiveSection("contact");
          } else {
            // If element not found yet, try again after a short delay
            setTimeout(scrollToContact, 50);
          }
        };
        scrollToContact();
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

  const handleScheduleTour = () => {
    if (location.pathname === "/") {
      // If on home page, scroll to contact section
      const element = document.getElementById("contact");
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setForceActiveSection("contact");
      }
    } else {
      // Navigate to home page first, then scroll to contact section
      navigate("/");
      setTimeout(() => {
        const scrollToContact = () => {
          const element = document.getElementById("contact");
          if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setForceActiveSection("contact");
          } else {
            setTimeout(scrollToContact, 50);
          }
        };
        scrollToContact();
      }, 100);
    }
    setIsMobileMenuOpen(false);
  };

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
              <button 
                onClick={handleHomeNavigation}
                className="text-3xl font-bold focus:outline-none"
              >
                {shouldUseLightText ? (
                  <span className="text-white">MBS Reality</span>
                ) : (
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    MBS Reality
                  </span>
                )}
              </button>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {/* Home */}
              <button
                onClick={handleHomeNavigation}
                className={`relative font-semibold transition-all duration-300 focus:outline-none ${
                  shouldUseLightText
                    ? "text-white hover:text-blue-200"
                    : isHomeActive()
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Home
                {isHomeActive() && !shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="navbar-indicator-home"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {isHomeActive() && shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                    layoutId="navbar-indicator-home"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>

              {/* About */}
              <button
                onClick={handleAboutNavigation}
                className={`relative font-semibold transition-all duration-300 focus:outline-none ${
                  shouldUseLightText
                    ? "text-white hover:text-blue-200"
                    : location.pathname === "/about"
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                About
                {location.pathname === "/about" && !shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="navbar-indicator-about"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {location.pathname === "/about" && shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                    layoutId="navbar-indicator-about"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>

              {/* Properties */}
              <button
                onClick={handlePropertiesNavigation}
                className={`relative font-semibold transition-all duration-300 focus:outline-none ${
                  shouldUseLightText
                    ? "text-white hover:text-blue-200"
                    : isPropertiesActive()
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Properties
                {isPropertiesActive() && !shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="navbar-indicator-properties"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {isPropertiesActive() && shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                    layoutId="navbar-indicator-properties"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>

              {/* Contact */}
              <button
                onClick={handleContactNavigation}
                className={`relative font-semibold transition-all duration-300 focus:outline-none ${
                  shouldUseLightText
                    ? "text-white hover:text-blue-200"
                    : isContactActive()
                    ? "text-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                Contact
                {isContactActive() && !shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500"
                    layoutId="navbar-indicator-contact"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                {isContactActive() && shouldUseLightText && (
                  <motion.div
                    className="absolute -bottom-1 left-0 w-full h-0.5 bg-white"
                    layoutId="navbar-indicator-contact"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
              
              {/* CTA Button */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <button
                  onClick={handleScheduleTour}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg focus:outline-none ${
                    shouldUseLightText
                      ? "bg-white text-gray-900 hover:bg-gray-100"
                      : "bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700"
                  }`}
                >
                  Schedule Appointment
                </button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className={`md:hidden p-3 rounded-xl transition-all focus:outline-none ${
                shouldUseLightText
                  ? "bg-white/20 text-white hover:bg-white/30 backdrop-blur-sm"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y=1.5">
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
                {/* Home */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  <button
                    onClick={handleHomeNavigation}
                    className={`block w-full text-left py-4 px-4 text-lg font-semibold transition-all rounded-xl mb-2 focus:outline-none ${
                      isHomeActive()
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    Home
                  </button>
                </motion.div>

                {/* About */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <button
                    onClick={handleAboutNavigation}
                    className={`block w-full text-left py-4 px-4 text-lg font-semibold transition-all rounded-xl mb-2 focus:outline-none ${
                      location.pathname === "/about"
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    About
                  </button>
                </motion.div>

                {/* Properties */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <button
                    onClick={handlePropertiesNavigation}
                    className={`block w-full text-left py-4 px-4 text-lg font-semibold transition-all rounded-xl mb-2 focus:outline-none ${
                      isPropertiesActive()
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    Properties
                  </button>
                </motion.div>

                {/* Contact */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <button
                    onClick={handleContactNavigation}
                    className={`block w-full text-left py-4 px-4 text-lg font-semibold transition-all rounded-xl mb-2 focus:outline-none ${
                      isContactActive()
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                  >
                    Contact
                  </button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 }}
                  className="pt-4"
                >
                  <button
                    onClick={handleScheduleTour}
                    className="block w-full text-center bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg focus:outline-none"
                  >
                    Schedule Appointment
                  </button>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Spacer for fixed navbar - ONLY for home page */}
      {location.pathname === "/" && <div className="h-6 md:h-12"></div>}
    </>
  );
}

export default Navbar;