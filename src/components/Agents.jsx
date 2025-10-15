import React from 'react'

const Agents = () => {
  const agents = [
    {
      name: 'Sarah Johnson',
      role: 'Senior Real Estate Agent',
      experience: '12+ years',
      phone: '+1 (555) 123-4567',
      email: 'sarah@primeproperties.com',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Michael Chen',
      role: 'Luxury Property Specialist',
      experience: '8+ years',
      phone: '+1 (555) 987-6543',
      email: 'michael@primeproperties.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Commercial Real Estate',
      experience: '10+ years',
      phone: '+1 (555) 456-7890',
      email: 'emily@primeproperties.com',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80'
    }
  ]

  return (
    <section id="agents" className="section-padding bg-light">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Meet Our Agents
          </h2>
          <p className="text-dark text-lg max-w-2xl mx-auto">
            Our experienced team of real estate professionals is dedicated to helping you find your perfect property.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {agents.map((agent, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden text-center">
              <div className="h-64 overflow-hidden">
                <img 
                  src={agent.image} 
                  alt={agent.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-primary mb-2">{agent.name}</h3>
                <p className="text-secondary font-semibold mb-2">{agent.role}</p>
                <p className="text-gray-600 mb-4">Experience: {agent.experience}</p>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>📞 {agent.phone}</p>
                  <p>✉️ {agent.email}</p>
                </div>
                <button className="btn-primary w-full mt-4">
                  Contact Agent
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Agents