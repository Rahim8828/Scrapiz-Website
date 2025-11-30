import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Hammer, Cog, ShieldCheck, Home, Truck, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const ServicesSection = () => {
  const services = [
    {
      icon: Recycle,
      title: 'Scrap Collection',
      description: 'Efficient and timely collection of all types of scrap materials from your doorstep.',
      color: 'from-green-500 to-green-600',
      path: '/services/scrap-collection'
    },
    {
      icon: Hammer,
      title: 'Demolition Service',
      description: 'Safe and professional demolition services for buildings and industrial sites.',
      color: 'from-green-500 to-green-600',
      path: '/services/demolition-service'
    },
    {
      icon: Cog,
      title: 'Dismantling',
      description: 'Expert dismantling of machinery, industrial equipment, and large structures.',
      color: 'from-green-500 to-green-600',
      path: '/services/dismantling'
    },
    {
      icon: ShieldCheck,
      title: 'Paper Shredding',
      description: 'Secure and confidential paper shredding services for businesses and individuals.',
      color: 'from-green-500 to-green-600',
      path: '/services/paper-shredding'
    },
    {
      icon: Home,
      title: 'Society Tie-Up',
      description: 'Exclusive scrap collection programs for residential societies and communities.',
      color: 'from-green-500 to-green-600',
      path: '/services/society-tie-up'
    },
    {
      icon: Truck,
      title: 'Vehicle Scrapping',
      description: 'RTO-certified scrapping for old cars, bikes, and commercial vehicles.',
      color: 'from-green-500 to-green-600',
      path: '/services/vehicle-scrapping'
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-3">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions for all your scrap management needs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`bg-white rounded-xl p-6 text-center border border-gray-100 flex flex-col ${index === 0 ? 'shadow-lg' : 'shadow-md'}`}>
              <div className={`w-14 h-14 lg:w-16 lg:h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                <service.icon className="w-7 h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <h3 className="text-base lg:text-lg font-bold text-gray-800 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed flex-grow">{service.description}</p>
              <Button asChild variant="outline" className="mt-5">
                <Link to={service.path}>
                  Learn More <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Button asChild size="lg">
            <Link to="/services">View All Services</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
