import React from 'react';
import { motion } from 'framer-motion';
import { Users, Scale, HeartHandshake as Handshake, Leaf } from 'lucide-react';

const AchievementsSection = () => {
  const achievements = [
    {
      icon: Users,
      number: '5000+',
      label: 'Happy Customers',
      description: 'Satisfied customers across India',
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: Scale,
      number: '1000+',
      label: 'Tons Recycled',
      description: 'Scrap materials processed monthly',
      color: 'from-green-500 to-green-600'
    },
    {
      icon: Handshake,
      number: '50+',
      label: 'Partner Dealers',
      description: 'Trusted network nationwide',
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: Leaf,
      number: '95%',
      label: 'Eco-Friendly',
      description: 'Materials successfully recycled',
      color: 'from-emerald-500 to-emerald-600'
    }
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100 to-blue-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Our <span className="text-gradient">Achievements</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and sustainability
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="stats-counter rounded-2xl p-8 scrapiz-hover-shadow">
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>

                {/* Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, type: 'spring', stiffness: 200 }}
                  className="text-4xl lg:text-5xl font-bold text-gradient mb-2"
                >
                  {achievement.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-xl font-bold text-gray-800 mb-2">{achievement.label}</h3>
                
                {/* Description */}
                <p className="text-gray-600 text-sm">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 text-white max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Growing Every Day! 🚀
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Join our mission to create a cleaner, greener India through responsible scrap recycling
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Startup India Certified</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Government Approved</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-white rounded-full"></span>
                <span>Fastest Pickup</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AchievementsSection;