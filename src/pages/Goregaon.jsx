import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Award, Truck, ShieldCheck, ChevronDown } from 'lucide-react';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '1rem' : '0rem' }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600 pl-2">{answer}</p>
      </motion.div>
    </div>
  );
};

const Goregaon = () => {
  const businessHours = [
    { day: 'Monday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Tuesday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Wednesday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Thursday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Friday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Saturday', hours: '9:00 AM - 10:00 PM' },
    { day: 'Sunday', hours: '9:00 AM - 10:00 PM' },
  ];

  const faqs = [
    {
      question: "Q1: Do you provide doorstep scrap pickup in Goregaon, and is there a minimum quantity required for pickup?",
      answer: "Yes, Scrapiz offers free doorstep scrap pickup in Goregaon, Mumbai. There is no strict minimum quantity — most normal household scrap (20–30 kg) is picked up for free. For very small quantities, a nominal ₹60 convenience fee may apply."
    },
    {
      question: "Q2: What scrap items do you buy in Goregaon?",
      answer: "Our Scrapiz Goregaon scrap buyers accept all types of materials including iron scrap, steel scrap, aluminum scrap, copper scrap, paper waste, plastic scrap, furniture scrap, and electronic e-waste in Goregaon. We provide the best scrap rates in Goregaon for all items."
    },
    {
      question: "Q3: How can I book Scrapiz scrap service in Goregaon?",
      answer: "Booking our scrap dealer service in Goregaon Mumbai is quick and easy. Simply call us at +91 8828671305 or use WhatsApp for instant booking. Our online scrap pickup in Goregaon saves you time and effort."
    },
    {
      question: "Q4: Do you offer the best scrap rates in Goregaon?",
      answer: "Yes, Scrapiz is known as the top scrap dealer in Goregaon because we provide the most competitive and updated scrap prices in Goregaon Mumbai. Whether you want to sell scrap online in Goregaon West or call us for doorstep pickup, we guarantee the best value."
    },
    {
      question: "Q5: Do you serve nearby areas from Goregaon?",
      answer: "Absolutely! Along with scrap pickup in Goregaon, we also serve Andheri, Malad, Jogeshwari, and Kandivali. Scrapiz is your trusted choice for scrap buyers in Goregaon and nearby suburbs of Mumbai."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    "name": "Scrapiz Goregaon - Scrap Buyers & Scrap Dealers in Mumbai",
    "description": "Sell your scrap in Goregaon with Scrapiz – reliable scrap buyers in Mumbai. We provide free pickup, digital weighing, and eco-friendly recycling",
    "image": "https://www.scrapiz.in/Scrapiz-Goregaon.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 04, Motilal Nagar No. 1, behind Fire Brigade, Goregaon West",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400104"
    },
    "telephone": "+918828671305",
    "url": "https://www.scrapiz.in/goregaon",
    "mainEntity": {
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    }
  };

  return (
    <>
      <Helmet>
        <title>Scrapiz Goregaon - Scrap Buying and Recycling Services</title>
        <meta name="description" content="Sell your scrap in Goregaon with Scrapiz – reliable scrap buyers in Mumbai. We provide free pickup, digital weighing, and eco-friendly recycling" />
        <meta name="keywords" content="scrap buyer, Goregaon, Mumbai, scrap recycling, best scrap rates, free pickup, Online kabadiwala, scrap dealer near me, scrap dealer in goregaon" />
        <link rel="canonical" href="https://www.scrapiz.in/goregaon" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>

      <div className="bg-white text-gray-800">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-24 pb-16 text-center bg-green-600 text-white"
        >
          <div className="container mx-auto px-4">
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-5xl lg:text-6xl font-bold mb-4"
            >
            Scrap buyers in Goregaon
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl max-w-3xl mx-auto"
            >
             Looking to sell scrap in Goregaon? Scrapiz makes it easy with doorstep pickup, instant payment, and best scrap rates.Whether you’re in Goregaon West or Goregaon East. our team reaches you the same day.
            </motion.p>
            <div className="mt-8 flex justify-center gap-4">
              <motion.a
                href="tel:+918828671305"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 font-bold py-3 px-6 rounded-full shadow-lg"
              >
                Call Now: 8828671305
              </motion.a>
              <motion.a
                href="https://wa.me/918828671305"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg"
              >
                WhatsApp: 8828671305
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Scrapiz Goregaon?</h2>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-green-50 border border-green-200 p-8 rounded-2xl shadow-sm mb-16 max-w-5xl mx-auto"
            >
                <p className="text-lg text-gray-800 text-left leading-relaxed">
                    Scrapiz is the most trusted <strong>scrap dealer in Goregaon</strong>, offering free doorstep scrap pickup, instant payment, and the best scrap rates. We proudly serve <strong>Goregaon West</strong>, covering areas like Oshiwara, Motilal Nagar, and Bangur Nagar.
                    <br/><br/>
                    Whether you want to <strong>sell scrap in Goregaon</strong> from your home, office, or shop, our team makes the process fast and hassle-free. From iron, steel, aluminum, and copper to plastic, paper, e-waste, and old furniture, we buy all types of scrap at the highest prices.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Best Scrap Rates</h3>
                <p className="text-gray-600">Get the highest market rates for all types of scrap materials in Goregaon</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <Truck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Free Pickup Service</h3>
                <p className="text-gray-600">Doorstep collection service for bulk scrap materials across Goregaon</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <ShieldCheck className="w-12 h-12 text-purple-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Trusted & Licensed</h3>
                <p className="text-gray-600">Authorized scrap dealer with proper licensing and eco-friendly recycling</p>
              </div>
            </div>
          </div>
        </section>

        {/* Main Content Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Left Column */}
              <div>
                <div className="rounded-xl flex items-center justify-center mb-8 overflow-hidden">
                    <img src="/Scrapiz-Goregaon.jpeg" alt="Scrapiz Goregaon Shop" className="w-full h-auto rounded-lg" />
                </div>
                <h2 className="text-3xl font-bold mb-8">Business Hours</h2>
                <div className="space-y-3">
                    {businessHours.map((item, index) => (
                    <div key={index} className="flex justify-between border-b pb-2">
                        <span>{item.day}</span>
                        <span className="font-semibold text-green-600">{item.hours}</span>
                    </div>
                    ))}
                </div>
              </div>

              {/* Right Column */}
              <div>
                <h2 className="text-3xl font-bold mb-8">Contact Information</h2>
                <div className="space-y-6 mb-8">
                    <div className="flex items-start">
                        <MapPin className="w-8 h-8 text-green-500 mt-1 mr-4" />
                        <div>
                        <h3 className="font-bold">Our Address</h3>
                        <p>Shop No 04, Motilal Nagar No. 1, behind Fire Brigade, Goregaon West, Mumbai, Maharashtra 400104</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-6 h-6 text-green-500 mr-4" />
                        <div>
                        <h3 className="font-bold">Phone Number</h3>
                        <p>+91 8828671305</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Mail className="w-6 h-6 text-green-500 mr-4" />
                        <div>
                        <h3 className="font-bold">Email</h3>
                        <p>Contact@scrapiz.in</p>
                        </div>
                    </div>
                  <h2 className="text-4xl font-bold text-start text-gray-800 mb-8">
                    Find Us On Map
                  </h2>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="h-[350px] rounded-2xl overflow-hidden shadow-lg border border-gray-200"
                  >
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57947.63762767882!2d72.78687398187212!3d19.1535765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7dea0834aaf%3A0xffbd0210bacc024c!2sScrapiz!5e1!3m2!1sen!2sin!4v1757270779121!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map of Scrapiz Location"
                    ></iframe>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4 max-w-4xl">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} question={faq.question} answer={faq.answer} />
                    ))}
                </div>
            </div>
        </section>
      </div>
    </>
  );
};

export default Goregaon;