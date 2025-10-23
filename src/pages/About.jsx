import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  BuildingOfficeIcon,
  TrophyIcon,
  UserGroupIcon,
  HeartIcon,
  MapPinIcon,
  ArrowRightIcon,
  StarIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import AboutBannerImage from "../assets/AboutBannerImage.avif";
import Services from "../components/Services";

export default function About() {
  const stats = [
    {
      number: "15+",
      label: "Years Experience",
      icon: <TrophyIcon className="w-6 h-6" />,
    },
    {
      number: "500+",
      label: "Happy Clients",
      icon: <UserGroupIcon className="w-6 h-6" />,
    },
    {
      number: " ₹4.2M",
      label: "Property Sold",
      icon: <BuildingOfficeIcon className="w-6 h-6" />,
    },
    {
      number: "50+",
      label: "Prime Locations",
      icon: <MapPinIcon className="w-6 h-6" />,
    },
  ];

  const values = [
    {
      icon: <ShieldCheckIcon className="w-8 h-8" />,
      title: "Integrity First",
      description:
        "We believe in complete transparency and honesty in all our dealings. Your trust is our most valuable asset.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <HeartIcon className="w-8 h-8" />,
      title: "Client Focused",
      description:
        "Your goals and dreams are at the center of everything we do. We listen, understand, and deliver beyond expectations.",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: <TrophyIcon className="w-8 h-8" />,
      title: "Excellence",
      description:
        "We strive for perfection in every transaction and interaction. Good enough is never enough for our clients.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: <LightBulbIcon className="w-8 h-8" />,
      title: "Innovation",
      description:
        "We leverage cutting-edge technology and innovative strategies to give you a competitive edge in the market.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const team = [
    {
      name: "Mr R. MAHALINGAM",
      role: "Founder & CEO",
      image:
        "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Visionary leader with 15+ years in luxury real estate, transforming the industry with innovative approaches.",
      social: ["LinkedIn", "Twitter"],
    },
    {
      name: "Michael Chen",
      role: "Head of Sales",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Expert in property valuation and market analysis with a track record of record-breaking deals.",
      social: ["LinkedIn", "Instagram"],
    },
    {
      name: "Emily Rodriguez",
      role: "Senior Agent",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
      description:
        "Luxury homes specialist known for exceptional client service and attention to detail.",
      social: ["LinkedIn", "Facebook"],
    },
  ];

  const achievements = [
    {
      year: "2008",
      event: "Company Founded",
      description: "Started with a vision to transform real estate services",
    },
    {
      year: "2012",
      event: "First  ₹1M in Sales",
      description: "Reached milestone of ₹1 million in property sales",
    },
    {
      year: "2015",
      event: "50+ Team Members",
      description: "Expanded our expert team to serve more clients",
    },
    {
      year: "2020",
      event: "Digital Transformation",
      description: "Implemented cutting-edge technology solutions",
    },
    {
      year: "2023",
      event: "Market Leadership",
      description: "Became regional leader in luxury real estate",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Enhanced Hero Section */}
      <section className="min-h-screen relative overflow-hidden bg-gray-900">
        {/* Animated Background */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url(${AboutBannerImage})`,
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center p-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="max-w-6xl"
          >
            <motion.h1
              className="text-6xl sm:text-7xl md:text-8xl font-bold text-white mb-8 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Building
              <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient">
                Extraordinary
              </span>
              Legacies
            </motion.h1>

            <motion.p
              className="text-2xl text-white max-w-4xl mx-auto mb-12 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              For over 15 years, we've been the architects of dreams,
              transforming real estate visions into extraordinary realities. We
              don't just sell properties; we craft legacies and build
              relationships that transcend generations.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <motion.button
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:shadow-2xl transition-all duration-500 shadow-lg relative overflow-hidden"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center gap-3">
                  Meet Our Visionaries
                  <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.button>

              <motion.button
                className="group bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 backdrop-blur-sm transition-all duration-500"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="flex items-center gap-3">
                  Our Journey
                  <StarIcon className="w-5 h-5 text-yellow-400" />
                </span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-400 rounded-full blur-xl opacity-20"></div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-purple-400 rounded-full blur-xl opacity-20"></div>

                <div className="bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1 rounded-3xl shadow-2xl transform hover:scale-[1.02] transition-all duration-700">
                  <div className="bg-white rounded-3xl p-12 backdrop-blur-sm">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center">
                        <BuildingOfficeIcon className="w-6 h-6 text-white" />
                      </div>
                      <h2 className="text-4xl md:text-5xl font-black text-gray-900">
                        Our Legacy of Excellence
                      </h2>
                    </div>

                    <div className="space-y-6">
                      <p className="text-gray-700 text-lg leading-relaxed font-medium">
                        <strong>MBS Realty</strong> stands as a premier
                        full-service real estate powerhouse, offering
                        comprehensive solutions in Sales, Investment
                        Opportunities, Market Analysis, Corporate Services, and
                        Property Management across Tamil Nadu.
                      </p>

                      <p className="text-gray-600 text-lg leading-relaxed">
                        With{" "}
                        <span className="text-blue-600 font-bold">
                          15+ years of excellence
                        </span>
                        , we've served diverse clients ranging from individual
                        home seekers to large corporate entities and industrial
                        pioneers. Our success is built on a foundation of trust,
                        expertise, and unwavering commitment to client
                        satisfaction.
                      </p>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-2xl border border-blue-100">
                        <p className="text-gray-700 font-semibold">
                          "Our vision is to redefine real estate experiences
                          through innovation, integrity, and exceptional service
                          that exceeds expectations."
                        </p>
                        <p className="text-blue-600 font-bold mt-3">
                          — Mr R. MAHALINGAM, Founder & CEO
                        </p>
                      </div>
                    </div>

                    <motion.button
                      className="flex items-center gap-3 mt-8 text-blue-600 font-bold hover:text-blue-700 transition-colors group"
                      whileHover={{ x: 10 }}
                    >
                      Explore Our Journey
                      <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Timeline */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, type: "spring" }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="space-y-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="flex gap-6 group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {achievement.year}
                      </div>
                      <div className="w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 mt-4 rounded-full"></div>
                    </div>
                    <div className="flex-1 pb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {achievement.event}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 bg-gray-50 relative overflow-hidden">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6">
              Meet Our{" "}
              <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Dream Team
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Our success is powered by a team of passionate experts who bring
              decades of combined experience, innovative thinking, and
              unwavering dedication to every client relationship.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-3xl transform group-hover:scale-105 transition-all duration-500 shadow-2xl"></div>
                <div className="relative bg-white rounded-3xl p-8 shadow-xl transform group-hover:-translate-y-2 transition-all duration-500 overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-purple-500"></div>

                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-6 relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform group-hover:scale-110 transition-all duration-500"></div>
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-30 h-30 rounded-full object-cover relative z-10 mx-auto border-4 border-white shadow-lg"
                      />
                    </div>

                    <h3 className="text-2xl font-black text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {member.name}
                    </h3>
                    <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
                      {member.role}
                    </div>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {member.description}
                    </p>

                    <div className="flex justify-center gap-4">
                      {member.social.map((platform, idx) => (
                        <motion.button
                          key={idx}
                          className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold hover:bg-blue-500 hover:text-white transition-all duration-300"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {platform}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Component */}
      <Services />

      {/* Values Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-500/10 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            className="text-center mb-20"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/20 px-6 py-3 rounded-2xl mb-6">
              <StarIcon className="w-5 h-5 text-yellow-400" />
              <span className="text-white font-semibold">Our Foundation</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
              Core Values That{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                Drive Us
              </span>
            </h2>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide every decision we make, every
              relationship we build, and every dream we help achieve.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  type: "spring",
                }}
                viewport={{ once: true }}
                className="group relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 rounded-3xl backdrop-blur-sm border border-white/10 transform group-hover:scale-105 transition-all duration-500"></div>
                <div className="relative p-8 h-full flex flex-col">
                  <motion.div
                    className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${value.color} rounded-3xl text-white mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-lg`}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    {value.icon}
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-blue-200 leading-relaxed flex-1">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Original Stats Section Design */}
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
                  staggerChildren: 0.2,
                },
              },
            }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0 },
                }}
                className="text-center group"
              >
                <motion.div
                  className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl text-white mb-4 mx-auto group-hover:scale-110 transition-transform duration-300"
                  whileHover={{ rotate: 5 }}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Original CTA Section Design */}
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
              Let's work together to find your dream property or get the best
              value for your current home.
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
