import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote, ExternalLink, ThumbsUp } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Rajesh Kumar',
      location: 'Bandra',
      rating: 5,
      text: 'Amazing service! They picked up my old electronics within 2 hours and paid me instantly. Very professional team and transparent pricing.',
      date: '2 weeks ago',
      verified: true
    },
    {
      name: 'Priya Sharma',
      location: 'Goregaon',
      rating: 5,
      text: 'I was skeptical at first, but Scrapiz exceeded my expectations. Got the best rate for my metal scrap and the process was so smooth!',
      date: '1 month ago',
      verified: true
    },
    {
      name: 'Amit Patel',
      location: 'Churchgate',
      rating: 5,
      text: 'Been using Scrapiz for 6 months now. They are reliable, punctual, and always offer fair prices. Highly recommended for scrap selling!',
      date: '3 weeks ago',
      verified: true
    },
    {
      name: 'Sunita Desai',
      location: 'Andheri West',
      rating: 5,
      text: 'Society mein sabko recommend kiya hai. Bahut acchi service hai, time pe aate hain aur rate bhi market se better dete hain.',
      date: '1 week ago',
      verified: true
    },
    {
      name: 'Mohammed Shaikh',
      location: 'Jogeshwari',
      rating: 5,
      text: 'Old AC aur fridge ka best price mila. Digital weighing machine laate hain, koi dhoka nahi. Very trustworthy!',
      date: '5 days ago',
      verified: true
    },
    {
      name: 'Kavita Mehta',
      location: 'Kandivali',
      rating: 4,
      text: 'Good service overall. Pickup was on time and payment was instant via UPI. Will use again for sure.',
      date: '2 months ago',
      verified: true
    }
  ];

  const googleReviewStats = {
    rating: 4.8,
    totalReviews: 250,
    breakdown: [
      { stars: 5, percentage: 85 },
      { stars: 4, percentage: 10 },
      { stars: 3, percentage: 3 },
      { stars: 2, percentage: 1 },
      { stars: 1, percentage: 1 }
    ]
  };

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
            What Our <span className="text-gradient">Customers Say</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Scrapiz
          </p>
        </motion.div>

        {/* Google Reviews Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
            <div className="flex flex-col sm:flex-row items-center gap-4">
              {/* Google Logo & Rating */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-2xl font-bold text-gray-900">{googleReviewStats.rating}</span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-3 h-3 ${i < Math.floor(googleReviewStats.rating) ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-xs text-gray-600">{googleReviewStats.totalReviews}+ Reviews</p>
                </div>
              </div>

              {/* Rating Breakdown - Hidden on mobile */}
              <div className="flex-1 w-full hidden sm:block">
                {googleReviewStats.breakdown.slice(0, 3).map((item) => (
                  <div key={item.stars} className="flex items-center gap-1 text-xs">
                    <span className="w-2">{item.stars}</span>
                    <Star className="w-2 h-2 fill-yellow-400 text-yellow-400" />
                    <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                    <span className="w-6 text-gray-500 text-[10px]">{item.percentage}%</span>
                  </div>
                ))}
              </div>

              {/* Write Review Button */}
              <a
                href="https://g.page/r/scrapiz/review"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 bg-blue-600 text-white px-4 py-2 rounded-lg text-xs font-semibold hover:bg-blue-700 transition-colors"
              >
                Write Review
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl p-5 lg:p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 relative"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                {testimonial.verified && (
                  <span className="flex items-center gap-1 text-xs text-green-600 bg-green-50 px-2 py-1 rounded-full">
                    <ThumbsUp className="w-3 h-3" />
                    Verified
                  </span>
                )}
              </div>

              <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                "{testimonial.text}"
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                <div>
                  <h4 className="font-semibold text-gray-800 text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.location}</p>
                </div>
                <span className="text-xs text-gray-400">{testimonial.date}</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Reviews */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <a
            href="https://g.page/scrapiz"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-green-600 text-sm font-semibold hover:text-green-700 transition-colors"
          >
            View All Reviews
            <ExternalLink className="w-3 h-3" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;