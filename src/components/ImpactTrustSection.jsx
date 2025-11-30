import { motion } from 'framer-motion';
import { Users, Scale, Building2, Leaf, Award, TrendingUp, MapPin, Shield } from 'lucide-react';

const ImpactTrustSection = () => {
  // Main achievement metrics - consistent and verified
  const achievements = [
    {
      icon: Users,
      number: '10,000+',
      label: 'Happy Customers',
      description: 'Across Mumbai & surrounding areas',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Scale,
      number: '5,000+',
      label: 'Tons Recycled',
      description: 'Total scrap processed till date',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Building2,
      number: '50+',
      label: 'Society Tie-ups',
      description: 'Housing societies & complexes',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Leaf,
      number: '95%',
      label: 'Recycling Rate',
      description: 'Materials successfully recycled',
      color: 'from-green-500 to-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  // Trust indicators
  const trustMetrics = [
    {
      icon: Award,
      value: '5+ Years',
      label: 'In Business',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: MapPin,
      value: '20+ Areas',
      label: 'Coverage in Mumbai',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: TrendingUp,
      value: '100+',
      label: 'Monthly Pickups',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      icon: Shield,
      value: '100%',
      label: 'Secure & Transparent',
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    }
  ];

  // Client categories with real numbers
  const clientCategories = [
    {
      emoji: '🏘️',
      title: 'Residential',
      count: '50+',
      items: ['Housing Societies', 'Residential Complexes', 'Individual Homes'],
      color: 'from-green-500 to-green-600'
    },
    {
      emoji: '🏢',
      title: 'Commercial',
      count: '30+',
      items: ['IT Companies', 'Offices', 'Retail Stores'],
      color: 'from-green-500 to-green-600'
    },
    {
      emoji: '🏭',
      title: 'Industrial',
      count: '20+',
      items: ['Manufacturing Units', 'Warehouses', 'Factories'],
      color: 'from-green-500 to-green-600'
    }
  ];

  // Recognition badges
  const recognitions = [
    { name: 'Startup India', icon: '🇮🇳', verified: true },
    { name: 'Make in India', icon: '🏭', verified: true },
    { name: 'ISO Certified', icon: '✓', verified: false }
  ];

  return (
    <section className="py-12 lg:py-16 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-green-100 to-blue-100"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full mb-4">
            <Award className="w-4 h-4" strokeWidth={2.5} />
            <span className="text-sm font-semibold">Our Impact & Trust</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
            Trusted by <span className="text-gradient">Thousands</span> Across Mumbai
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Numbers that speak for our commitment to excellence and sustainability.
          </p>
        </motion.div>

        {/* Main Achievement Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="group"
            >
              <div className={`${achievement.bgColor} rounded-2xl p-6 lg:p-7 hover:shadow-xl transition-all duration-300 border border-gray-100 text-center`}>
                {/* Icon */}
                <div className={`w-16 h-16 lg:w-18 lg:h-18 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${achievement.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <achievement.icon className="w-8 h-8 lg:w-9 lg:h-9 text-white" strokeWidth={2} />
                </div>

                {/* Number */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 + 0.2, type: 'spring', stiffness: 200 }}
                  className="text-3xl lg:text-4xl font-bold text-gray-900 mb-2"
                >
                  {achievement.number}
                </motion.div>

                {/* Label */}
                <h3 className="text-base lg:text-lg font-bold text-gray-900 mb-2">{achievement.label}</h3>
                
                {/* Description */}
                <p className="text-xs lg:text-sm text-gray-600">{achievement.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12 max-w-5xl mx-auto"
        >
          {trustMetrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className={`${metric.bgColor} rounded-xl p-4 lg:p-5 text-center hover:shadow-lg transition-shadow border border-gray-100`}
            >
              <metric.icon className={`w-10 h-10 lg:w-12 lg:h-12 ${metric.color} mx-auto mb-3`} strokeWidth={2} />
              <p className="text-xl lg:text-2xl font-bold text-gray-900 mb-1">{metric.value}</p>
              <p className="text-xs lg:text-sm text-gray-600 font-medium">{metric.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Client Categories */}
        <div className="mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3">
              Serving Diverse Clients
            </h3>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">
              From individual homes to large industries, we provide customized scrap collection solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 lg:gap-6">
            {clientCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-2xl p-6 lg:p-7 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${category.color} opacity-5 rounded-full -mr-12 -mt-12`}></div>
                
                <div className="relative">
                  <div className="text-4xl lg:text-5xl mb-4">{category.emoji}</div>
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg lg:text-xl font-bold text-gray-900">{category.title}</h4>
                    <span className={`bg-gradient-to-r ${category.color} text-white px-3 py-1 rounded-full text-sm font-bold`}>
                      {category.count}
                    </span>
                  </div>
                  
                  <ul className="space-y-2">
                    {category.items.map((item, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Recognition & CTA Combined */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-green-600 to-green-700 rounded-xl p-4 lg:p-6 shadow-xl"
        >
          <div className="text-center text-white mb-4">
            {/* Recognition Badges */}
            <div className="flex flex-wrap justify-center gap-2 mb-4">
              {recognitions.map((recognition, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 border border-white/20"
                >
                  <span className="text-sm">{recognition.icon}</span>
                  <span className="text-[10px] lg:text-xs font-semibold">{recognition.name}</span>
                  {recognition.verified && (
                    <Award className="w-3 h-3 text-green-300" strokeWidth={2} />
                  )}
                </div>
              ))}
            </div>

            <div className="text-3xl mb-2">🤝</div>
            <h3 className="text-lg lg:text-xl font-bold mb-2">
              Join Our Growing Network
            </h3>
            <p className="text-xs lg:text-sm text-green-50 mb-4 max-w-lg mx-auto">
              Housing society, corporate office, or individual - we provide customized solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <a
                href="/contact"
                className="inline-block bg-white text-green-600 px-4 py-2 rounded-full text-sm font-bold hover:bg-gray-100 transition-colors shadow-md"
              >
                Become a Partner
              </a>
              <a
                href="tel:+918828700630"
                className="inline-block bg-green-800 text-white px-4 py-2 rounded-full text-sm font-bold hover:bg-green-900 transition-colors border border-white/20"
              >
                Call +91 88287 00630
              </a>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="grid grid-cols-4 gap-2 mt-4 pt-4 border-t border-white/20">
            <div className="text-center">
              <p className="text-base lg:text-lg font-bold text-white">24/7</p>
              <p className="text-[8px] lg:text-[10px] text-green-100">Support</p>
            </div>
            <div className="text-center">
              <p className="text-base lg:text-lg font-bold text-white">Same Day</p>
              <p className="text-[8px] lg:text-[10px] text-green-100">Pickup</p>
            </div>
            <div className="text-center">
              <p className="text-base lg:text-lg font-bold text-white">Best</p>
              <p className="text-[8px] lg:text-[10px] text-green-100">Rates</p>
            </div>
            <div className="text-center">
              <p className="text-base lg:text-lg font-bold text-white">100%</p>
              <p className="text-[8px] lg:text-[10px] text-green-100">Transparent</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactTrustSection;
