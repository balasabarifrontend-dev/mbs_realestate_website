// components/FilterPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  XMarkIcon,
  AdjustmentsHorizontalIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  HomeIcon,
  BuildingStorefrontIcon,
  BuildingOfficeIcon,
  BuildingLibraryIcon,
  StarIcon,
  HeartIcon,
  EyeIcon,
  FunnelIcon,
  Squares2X2Icon,
  ListBulletIcon,
  PhoneIcon,
  CalendarIcon,
  UserGroupIcon,
  ClockIcon,
  CheckCircleIcon,
  SparklesIcon,
  MagnifyingGlassIcon,
  PlayIcon,
  PauseIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid, StarIcon as StarSolid } from '@heroicons/react/24/solid';

const FilterPage = ({ serviceType, onClose }) => {
  const [filters, setFilters] = useState({
    priceRange: [0, 10000000],
    propertyType: 'all',
    bedrooms: 'any',
    bathrooms: 'any',
    location: '',
    amenities: [],
    sortBy: 'newest'
  });

  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [viewMode, setViewMode] = useState('grid');
  const [favoriteProperties, setFavoriteProperties] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilterCount, setActiveFilterCount] = useState(0);
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [bannerLoaded, setBannerLoaded] = useState(false);

  // Use refs to prevent layout shifts
  const bannerContainerRef = useRef(null);
  const filterContainerRef = useRef(null);

  // Banner data
  const banners = [
    {
      id: 1,
      title: "Premium Luxury Properties",
      subtitle: "Discover Exclusive Listings",
      description: "Handpicked luxury properties with premium amenities and breathtaking views",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      cta: "View Luxury Collection",
      stats: "50+ Premium Listings"
    },
    {
      id: 2,
      title: "Smart Investment Opportunities",
      subtitle: "Grow Your Portfolio",
      description: "High-return investment properties in prime locations with proven track records",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800",
      cta: "Explore Investments",
      stats: "20% Average ROI"
    },
    {
      id: 3,
      title: "Modern Urban Living",
      subtitle: "City Center Locations",
      description: "Contemporary apartments and condos in the heart of the city with modern amenities",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      cta: "Find Urban Homes",
      stats: "100+ City Properties"
    }
  ];

  // Preload banner images
  useEffect(() => {
    banners.forEach(banner => {
      const img = new Image();
      img.src = banner.image;
      img.onload = () => setBannerLoaded(true);
    });
  }, []);

  // Auto-rotate banners with fixed timing
  useEffect(() => {
    if (!isPlaying || !bannerLoaded) return;
    
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, bannerLoaded, banners.length]);

  // Calculate active filters
  useEffect(() => {
    let count = 0;
    if (filters.propertyType !== 'all') count++;
    if (filters.bedrooms !== 'any') count++;
    if (filters.bathrooms !== 'any') count++;
    if (filters.location) count++;
    if (filters.amenities.length > 0) count++;
    if (filters.priceRange[1] < 10000000) count++;
    setActiveFilterCount(count);
  }, [filters]);

  // Mock properties data
  const properties = [
    {
      id: 1,
      title: "Luxury Apartment in City Center",
      price: 2500000,
      type: 'residential',
      bedrooms: 3,
      bathrooms: 2,
      area: 1800,
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400",
      featured: true,
      rating: 4.8,
      reviews: 124,
      agent: "Sarah Johnson",
      posted: "2 hours ago",
      tags: ['Luxury', 'Pool', 'Gym']
    },
    {
      id: 2,
      title: "Modern Commercial Space",
      price: 4500000,
      type: 'commercial',
      bedrooms: 0,
      bathrooms: 1,
      area: 2500,
      location: "Business District",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400",
      featured: true,
      rating: 4.6,
      reviews: 89,
      agent: "Mike Chen",
      posted: "1 day ago",
      tags: ['Commercial', 'Prime Location']
    },
    {
      id: 3,
      title: "Industrial Warehouse Facility",
      price: 3200000,
      type: 'industrial',
      bedrooms: 0,
      bathrooms: 1,
      area: 5000,
      location: "Industrial Zone",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400",
      featured: false,
      rating: 4.4,
      reviews: 45,
      agent: "David Wilson",
      posted: "3 days ago",
      tags: ['Industrial', 'Storage']
    },
    {
      id: 4,
      title: "Premium Residential Plot",
      price: 800000,
      type: 'land',
      bedrooms: 0,
      bathrooms: 0,
      area: 2400,
      location: "Suburban Area",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400",
      featured: false,
      rating: 4.7,
      reviews: 67,
      agent: "Emma Davis",
      posted: "1 week ago",
      tags: ['Plot', 'Residential']
    },
    {
      id: 5,
      title: "Modern Luxury Villa",
      price: 7500000,
      type: 'residential',
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      location: "Premium Location",
      image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=400",
      featured: true,
      rating: 4.9,
      reviews: 156,
      agent: "James Miller",
      posted: "Just now",
      tags: ['Luxury', 'Villa', 'Pool']
    },
    {
      id: 6,
      title: "Retail Shop Space",
      price: 1800000,
      type: 'commercial',
      bedrooms: 0,
      bathrooms: 1,
      area: 1200,
      location: "Shopping Mall",
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400",
      featured: false,
      rating: 4.5,
      reviews: 78,
      agent: "Lisa Brown",
      posted: "2 days ago",
      tags: ['Retail', 'Mall']
    }
  ];

  const propertyTypes = [
    { id: 'all', name: 'All Properties', icon: <BuildingLibraryIcon className="w-4 h-4" />, count: properties.length },
    { id: 'residential', name: 'Residential', icon: <HomeIcon className="w-4 h-4" />, count: properties.filter(p => p.type === 'residential').length },
    { id: 'commercial', name: 'Commercial', icon: <BuildingStorefrontIcon className="w-4 h-4" />, count: properties.filter(p => p.type === 'commercial').length },
    { id: 'industrial', name: 'Industrial', icon: <BuildingOfficeIcon className="w-4 h-4" />, count: properties.filter(p => p.type === 'industrial').length },
    { id: 'land', name: 'Lands', icon: <MapPinIcon className="w-4 h-4" />, count: properties.filter(p => p.type === 'land').length }
  ];

  const amenitiesList = [
    { name: 'Parking', icon: '🚗' },
    { name: 'Swimming Pool', icon: '🏊' },
    { name: 'Garden', icon: '🌿' },
    { name: 'Security', icon: '🔒' },
    { name: 'Elevator', icon: '🛗' },
    { name: 'Furnished', icon: '🛋️' },
    { name: 'Air Conditioning', icon: '❄️' },
    { name: 'Heating', icon: '🔥' },
    { name: 'Balcony', icon: '🏙️' },
    { name: 'Gym', icon: '💪' },
    { name: 'Pet Friendly', icon: '🐾' },
    { name: 'Smart Home', icon: '🏠' }
  ];

  const locations = [
    'Downtown', 'Business District', 'City Center', 'Suburban Area', 
    'Premium Location', 'Shopping Mall', 'Financial District', 'Industrial Zone'
  ];

  const handleFilterChange = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleAmenityToggle = (amenity) => {
    setFilters(prev => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter(a => a !== amenity)
        : [...prev.amenities, amenity]
    }));
  };

  const toggleFavorite = (propertyId) => {
    setFavoriteProperties(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  };

  const clearFilters = () => {
    setFilters({
      priceRange: [0, 10000000],
      propertyType: 'all',
      bedrooms: 'any',
      bathrooms: 'any',
      location: '',
      amenities: [],
      sortBy: 'newest'
    });
    setSearchQuery('');
  };

  const FilterSidebar = () => (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      ref={filterContainerRef}
      className="bg-white rounded-2xl p-6 shadow-2xl border border-gray-200/50 backdrop-blur-sm"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg">
            <FunnelIcon className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-gray-900">Filters</h3>
            {activeFilterCount > 0 && (
              <p className="text-sm text-blue-600 font-medium">{activeFilterCount} active</p>
            )}
          </div>
        </div>
        <button
          onClick={clearFilters}
          className="text-sm text-blue-600 hover:text-blue-700 font-medium bg-blue-50 px-3 py-1 rounded-lg transition-colors"
        >
          Clear All
        </button>
      </div>

      {/* Search */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
          <SparklesIcon className="w-4 h-4 text-purple-500" />
          Search Properties
        </h4>
        <div className="relative">
          <input
            type="text"
            placeholder="Search by name, location..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 pl-10 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
          />
          <MagnifyingGlassIcon className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
        </div>
      </div>

      {/* Property Type */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Property Type</h4>
        <div className="space-y-2">
          {propertyTypes.map(type => (
            <button
              key={type.id}
              onClick={() => handleFilterChange('propertyType', type.id)}
              className={`flex items-center justify-between w-full p-3 rounded-xl text-left transition-all group ${
                filters.propertyType === type.id
                  ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 text-blue-700 shadow-lg'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700 border border-transparent hover:border-gray-200'
              }`}
            >
              <div className="flex items-center gap-3">
                <div className={`p-2 rounded-lg ${
                  filters.propertyType === type.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-white text-gray-600'
                }`}>
                  {type.icon}
                </div>
                <span className="font-medium">{type.name}</span>
              </div>
              <span className={`text-sm px-2 py-1 rounded-full ${
                filters.propertyType === type.id
                  ? 'bg-blue-100 text-blue-700'
                  : 'bg-gray-200 text-gray-600'
              }`}>
                {type.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Price Range</h4>
        <div className="space-y-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">₹{filters.priceRange[0].toLocaleString()}</span>
            <span className="text-blue-600 font-semibold">₹{filters.priceRange[1].toLocaleString()}</span>
          </div>
          <div className="relative">
            <input
              type="range"
              min="0"
              max="10000000"
              step="100000"
              value={filters.priceRange[1]}
              onChange={(e) => handleFilterChange('priceRange', [filters.priceRange[0], parseInt(e.target.value)])}
              className="w-full h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-lg appearance-none cursor-pointer slider-thumb"
            />
          </div>
        </div>
      </div>

      {/* Location */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Location</h4>
        <select
          value={filters.location}
          onChange={(e) => handleFilterChange('location', e.target.value)}
          className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        >
          <option value="">All Locations</option>
          {locations.map(location => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>
      </div>

      {/* Bedrooms & Bathrooms */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Bedrooms</h4>
          <select
            value={filters.bedrooms}
            onChange={(e) => handleFilterChange('bedrooms', e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="1">1 Bedroom</option>
            <option value="2">2 Bedrooms</option>
            <option value="3">3 Bedrooms</option>
            <option value="4">4+ Bedrooms</option>
          </select>
        </div>
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Bathrooms</h4>
          <select
            value={filters.bathrooms}
            onChange={(e) => handleFilterChange('bathrooms', e.target.value)}
            className="w-full p-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="any">Any</option>
            <option value="1">1 Bathroom</option>
            <option value="2">2 Bathrooms</option>
            <option value="3">3+ Bathrooms</option>
          </select>
        </div>
      </div>

      {/* Amenities */}
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">Amenities</h4>
        <div className="grid grid-cols-2 gap-2">
          {amenitiesList.map(amenity => (
            <label key={amenity.name} className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
              <input
                type="checkbox"
                checked={filters.amenities.includes(amenity.name)}
                onChange={() => handleAmenityToggle(amenity.name)}
                className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
              />
              <span className="text-sm text-gray-700 flex items-center gap-1">
                <span>{amenity.icon}</span>
                {amenity.name}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Apply Filters Button */}
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
      >
        <CheckCircleIcon className="w-5 h-5" />
        Apply Filters
        {activeFilterCount > 0 && (
          <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
            {activeFilterCount}
          </span>
        )}
      </motion.button>
    </motion.div>
  );

  const PropertyCard = ({ property }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-2xl overflow-hidden shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-300 group"
    >
      <div className="relative">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Featured Badge */}
        {property.featured && (
          <div className="absolute top-3 left-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
            <SparklesIcon className="w-3 h-3" />
            Featured
          </div>
        )}
        
        {/* Favorite Button */}
        <button 
          onClick={() => toggleFavorite(property.id)}
          className="absolute top-3 right-3 bg-white/90 p-2 rounded-full hover:bg-white transition-all duration-300 hover:scale-110"
        >
          {favoriteProperties.has(property.id) ? (
            <HeartSolid className="w-5 h-5 text-red-500" />
          ) : (
            <HeartIcon className="w-5 h-5 text-gray-600" />
          )}
        </button>

        {/* Quick Info Overlay */}
        <div className="absolute bottom-3 left-3 right-3">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-3 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex justify-between text-xs text-gray-600">
              <span className="flex items-center gap-1">
                <UserGroupIcon className="w-3 h-3" />
                {property.reviews} reviews
              </span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-3 h-3" />
                {property.posted}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-4">
        {/* Price & Rating */}
        <div className="flex items-center justify-between mb-3">
          <div className="text-2xl font-black text-gray-900">
            ₹{property.price.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full">
            <StarIcon className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-gray-900">{property.rating}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-blue-600 transition-colors">
          {property.title}
        </h3>

        {/* Location */}
        <p className="text-gray-600 text-sm mb-3 flex items-center gap-1">
          <MapPinIcon className="w-4 h-4" />
          {property.location}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {property.tags.map((tag, index) => (
            <span key={index} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
              {tag}
            </span>
          ))}
        </div>

        {/* Property Details */}
        <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
          <span>{property.bedrooms} beds</span>
          <span>{property.bathrooms} baths</span>
          <span>{property.area} sq.ft</span>
        </div>

        {/* Agent & CTA */}
        <div className="flex items-center justify-between pt-3 border-t border-gray-200">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center text-white text-xs font-bold">
              {property.agent.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="text-xs text-gray-500">Agent</p>
              <p className="text-sm font-medium text-gray-900">{property.agent}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
              <PhoneIcon className="w-4 h-4 text-gray-600" />
            </button>
            <button className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl text-sm font-semibold hover:shadow-lg transition-all group">
              <EyeIcon className="w-4 h-4" />
              View
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );

  const filteredProperties = properties.filter(property => {
    if (searchQuery && !property.title.toLowerCase().includes(searchQuery.toLowerCase()) && 
        !property.location.toLowerCase().includes(searchQuery.toLowerCase())) {
      return false;
    }
    if (filters.propertyType !== 'all' && property.type !== filters.propertyType) return false;
    if (filters.location && property.location !== filters.location) return false;
    if (filters.bedrooms !== 'any' && property.bedrooms < parseInt(filters.bedrooms)) return false;
    if (filters.bathrooms !== 'any' && property.bathrooms < parseInt(filters.bathrooms)) return false;
    if (property.price > filters.priceRange[1]) return false;
    return true;
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 z-50 overflow-y-auto"
    >
      {/* Banner Section - Fixed height with isolated animations */}
      <div 
        ref={bannerContainerRef}
        className="h-1/3 min-h-96 relative overflow-hidden"
        style={{ contain: 'layout style paint' }} // Isolate layout
      >
        {/* All banners pre-rendered but hidden */}
        {banners.map((banner, index) => (
          <div
            key={banner.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={banner.image}
              alt={banner.title}
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
          </div>
        ))}

        {/* Banner Content */}
        <div className="container mx-auto px-6 h-full relative z-10 flex items-center">
          <div className="max-w-2xl">
            <AnimatePresence mode="wait">
              <motion.div
                key={`content-${currentBanner}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="text-white"
              >
                <p className="text-blue-200 font-semibold text-lg mb-2">
                  {banners[currentBanner].subtitle}
                </p>
                <h1 className="text-5xl md:text-6xl font-black mb-4 leading-tight">
                  {banners[currentBanner].title}
                </h1>
                <p className="text-xl text-blue-100 mb-6 max-w-lg">
                  {banners[currentBanner].description}
                </p>
                <div className="flex items-center gap-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center gap-3 group"
                  >
                    {banners[currentBanner].cta}
                    <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl">
                    <p className="text-sm font-semibold">{banners[currentBanner].stats}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Banner Controls */}
        <div className="absolute bottom-6 left-6 flex items-center gap-4">
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="bg-white/20 backdrop-blur-sm p-3 rounded-full hover:bg-white/30 transition-all"
          >
            {isPlaying ? (
              <PauseIcon className="w-5 h-5 text-white" />
            ) : (
              <PlayIcon className="w-5 h-5 text-white" />
            )}
          </button>

          {/* Banner Indicators */}
          <div className="flex gap-2">
            {banners.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentBanner(index);
                  setIsPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentBanner
                    ? 'bg-white scale-125'
                    : 'bg-white/50 hover:bg-white/70'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          onClick={onClose}
          className="absolute top-6 right-6 bg-white/20 backdrop-blur-sm p-3 rounded-xl hover:bg-white/30 transition-all z-20"
        >
          <XMarkIcon className="w-6 h-6 text-white" />
        </motion.button>
      </div>

      {/* Enhanced Quick Filter Bar */}
      <div className="bg-white/95 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Mobile Filters Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowMobileFilters(true)}
                className="md:hidden flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl font-medium shadow-lg"
              >
                <AdjustmentsHorizontalIcon className="w-5 h-5" />
                Filters
                {activeFilterCount > 0 && (
                  <span className="bg-white/20 px-2 py-1 rounded-full text-xs">
                    {activeFilterCount}
                  </span>
                )}
              </motion.button>
              
              {/* Quick Filter Buttons */}
              <div className="flex items-center gap-2 overflow-x-auto">
                {propertyTypes.map(type => (
                  <motion.button
                    key={type.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => handleFilterChange('propertyType', type.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium whitespace-nowrap transition-all shadow-lg ${
                      filters.propertyType === type.id
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                        : 'bg-white text-gray-700 border border-gray-200 hover:border-blue-300'
                    }`}
                  >
                    {type.icon}
                    {type.name}
                    <span className={`text-xs px-1.5 py-0.5 rounded-full ${
                      filters.propertyType === type.id ? 'bg-white/20' : 'bg-gray-100'
                    }`}>
                      {type.count}
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* View Mode & Sort */}
            <div className="flex items-center gap-4">
              {/* View Mode Toggle */}
              <div className="flex bg-gray-100 rounded-xl p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'grid' 
                      ? 'bg-white text-blue-600 shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <Squares2X2Icon className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-all ${
                    viewMode === 'list' 
                      ? 'bg-white text-blue-600 shadow-lg' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <ListBulletIcon className="w-5 h-5" />
                </button>
              </div>

              {/* Sort Options */}
              <select
                value={filters.sortBy}
                onChange={(e) => handleFilterChange('sortBy', e.target.value)}
                className="bg-white border border-gray-200 rounded-xl px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-lg"
              >
                <option value="newest">Newest First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
                <option value="featured">Featured First</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Properties Grid */}
          <div className="lg:col-span-3">
            {/* Results Header */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between mb-8"
            >
              <div>
                <h2 className="text-3xl font-black text-gray-900 mb-2">
                  {filteredProperties.length} Properties Found
                </h2>
                <p className="text-gray-600">
                  Perfect matches based on your preferences
                </p>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-500">Showing 1-{filteredProperties.length} results</div>
                <div className="text-xs text-gray-400">Sorted by {filters.sortBy.replace('-', ' ')}</div>
              </div>
            </motion.div>

            {/* Properties Grid/List */}
            <div className={`gap-6 ${
              viewMode === 'grid' 
                ? 'grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2' 
                : 'space-y-6'
            }`}>
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>

            {/* No Results */}
            {filteredProperties.length === 0 && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-16"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <SparklesIcon className="w-12 h-12 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No properties found</h3>
                <p className="text-gray-600 mb-6">Try adjusting your filters or search terms</p>
                <button
                  onClick={clearFilters}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all"
                >
                  Clear All Filters
                </button>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Enhanced Mobile Filters Overlay */}
      <AnimatePresence>
        {showMobileFilters && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 z-50 lg:hidden backdrop-blur-sm"
              onClick={() => setShowMobileFilters(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed left-0 top-0 h-full w-80 bg-white z-50 overflow-y-auto lg:hidden shadow-2xl"
            >
              <div className="p-4 h-full flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-bold">Filters & Search</h3>
                  <button
                    onClick={() => setShowMobileFilters(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <XMarkIcon className="w-5 h-5" />
                  </button>
                </div>
                <div className="flex-1 overflow-y-auto">
                  <FilterSidebar />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Floating Action Button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 right-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-full shadow-2xl z-40 lg:hidden"
        onClick={() => setShowMobileFilters(true)}
      >
        <AdjustmentsHorizontalIcon className="w-6 h-6" />
      </motion.button>
    </motion.div>
  );
};

export default FilterPage;