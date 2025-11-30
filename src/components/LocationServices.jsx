import React from 'react';
import { motion } from 'framer-motion';
import { Recycle, Cpu, Wrench, FileText, Package, Trash2 } from 'lucide-react';

/**
 * LocationServices Component
 * Displays location-specific services with keyword integration
 * @param {Object} location - Location data object from locationData.js
 */
const LocationServices = ({ location }) => {
  if (!location) return null;

  const { name, keywords } = location;

  const services = [
    {
      icon: Recycle,
      title: 'Metal Scrap Collection',
      description: `We buy iron scrap, steel scrap, aluminum scrap, copper scrap, and brass scrap in ${name}. Get the best scrap rates for all metal materials.`,
      items: ['Iron & Steel', 'Aluminum', 'Copper', 'Brass', 'Stainless Steel']
    },
    {
      icon: Cpu,
      title: 'E-Waste Pickup',
      description: `Professional e-waste pickup in ${name} for computers, laptops, mobile phones, and all electronic items. Eco-friendly recycling guaranteed.`,
      items: ['Computers', 'Laptops', 'Mobile Phones', 'Printers', 'Electronic Boards']
    },
    {
      icon: Wrench,
      title: 'Appliance Scrap',
      description: `Sell old appliances in ${name} - refrigerators, washing machines, ACs, and microwaves. Free doorstep pickup with instant payment.`,
      items: ['Refrigerators', 'Washing Machines', 'Air Conditioners', 'Microwaves', 'Water Heaters']
    },
    {
      icon: FileText,
      title: 'Paper & Cardboard',
      description: `We collect paper waste, cardboard, newspapers, and office documents in ${name}. Secure shredding services available.`,
      items: ['Newspapers', 'Cardboard Boxes', 'Office Paper', 'Books', 'Magazines']
    },
    {
      icon: Package,
      title: 'Plastic Scrap',
      description: `Buy all types of plastic scrap in ${name} including bottles, containers, and industrial plastic waste at competitive rates.`,
      items: ['Plastic Bottles', 'Containers', 'PVC Pipes', 'Industrial Plastic', 'Packaging Material']
    },
    {
      icon: Trash2,
      title: 'Furniture & Misc',
      description: `Remove old furniture, wooden items, and miscellaneous scrap from your home or office in ${name}. Hassle-free service.`,
      items: ['Old Furniture', 'Wooden Items', 'Glass', 'Rubber', 'Mixed Scrap']
    }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Recycle className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Our Services</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Scrap Collection Services in {name}
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
            As the leading online scrap dealer in {name}, we offer comprehensive scrap collection services 
            for all types of materials. Whether you need scrap pickup in {name} for your home, office, or 
            business, our kabadiwala service ensures the best rates and instant payment.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-4 shadow-md">
                <service.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>

              <h3 className="text-lg font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">{service.description}</p>

              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <p className="text-base text-gray-600 max-w-3xl mx-auto mb-6">
            Looking for a reliable scrap dealer near you in {name}? Scrapiz offers the most convenient 
            scrap recycling service with free doorstep pickup. Our scrap collection in {name} covers all 
            areas, ensuring you get the best value for your scrap materials. Call us today for instant 
            scrap pickup and competitive rates!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationServices;
