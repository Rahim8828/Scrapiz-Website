import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const intercityLocations = [
    {
        city: 'Jogeshwari',
        path: '/jogeshwari'
    },
    {
        city: 'Goregaon',
        path: '/goregaon'
    },
    {
        city: 'Kandivali',
        path: '/kandivali'
    },
    {
        city: 'Mahim',
        path: '/mahim'
    },
    {
        city: 'Bandra',
        path: '/bandra'
    },
    {
        city: 'Bandra East',
        path: '/bandra-east'
    },
    {
        city: 'Dharavi',
        path: '/dharavi'
    },
    {
        city: 'Nalasopara',
        path: '/nalasopara'
    },
    {
        city: 'Dharavi Koliwada',
        path: '/dharavi-koliwada'
    }
];

const Locations = () => {

  return (
    <>
      <Helmet>
        <title>Our Locations - Scrapiz</title>
        <meta name="description" content="Find Scrapiz service locations across India. We are currently present in Mumbai, Delhi, Bangalore, and more major cities." />
      </Helmet>
      <div className="bg-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-24 pb-16 text-center hero-pattern"
        >
          <div className="container mx-auto px-4">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl lg:text-6xl font-bold text-gray-800 mb-4"
            >
              Our <span className="text-gradient">Locations</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              We are rapidly expanding our network to serve you better. Find a Scrapiz center near you.
            </motion.p>
          </div>
        </motion.div>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {intercityLocations.map((location, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-gray-50 rounded-2xl p-8 scrapiz-hover-shadow border border-gray-100"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <MapPin className="w-8 h-8 text-green-500" />
                    <h3 className="text-2xl font-bold text-gray-800">{location.city}</h3>
                  </div>
                  <Link 
                    to={location.path}
                    className="w-full text-center py-2 px-4 bg-green-100 text-green-700 font-semibold rounded-lg hover:bg-green-200 transition-colors"
                  >
                    View Details
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        
        <section className="pb-20">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl p-8 md:p-12 text-white text-center"
            >
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4">
                Don't see your Location?
              </h3>
              <p className="text-base sm:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
                We are growing fast! Let us know where you'd like to see us next. Your feedback helps us expand our services.
              </p>
              <a 
                href="https://wa.me/918828700630?text=I'd%20like%20to%20request%20scrap%20pickup%20from%20a%20new%20location."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 font-bold text-base sm:text-lg px-6 py-3 sm:px-8 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Request a New Location
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Locations;
