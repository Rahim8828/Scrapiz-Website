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

const DharaviKoliwada = () => {
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
      question: "Q1: Do you provide doorstep scrap pickup in Dharavi Koliwada?",
      answer: "Yes, Scrapiz offers free doorstep scrap pickup in Dharavi Koliwada, Mumbai. Our scrap collection service in Dharavi Koliwada ensures you don’t have to travel anywhere—just call or WhatsApp us to schedule your pickup."
    },
    {
      question: "Q2: What scrap items do you buy in Dharavi Koliwada?",
      answer: "Our Scrapiz Dharavi Koliwada scrap buyers accept all types of materials including iron scrap, steel scrap, aluminum scrap, copper scrap, paper waste, plastic scrap, furniture scrap, and electronic e-waste in Dharavi Koliwada. We provide the best scrap rates in Dharavi Koliwada for all items."
    },
    {
      question: "Q3: How can I book Scrapiz scrap service in Dharavi Koliwada?",
      answer: "Booking our scrap dealer service in Dharavi Koliwada Mumbai is quick and easy. Simply call us at +91 8828009535 or use WhatsApp for instant booking. Our online scrap pickup in Dharavi Koliwada saves you time and effort."
    },
    {
      question: "Q4: Do you offer the best scrap rates in Dharavi Koliwada?",
      answer: "Yes, Scrapiz is known as the top scrap dealer in Dharavi Koliwada because we provide the most competitive and updated scrap prices in Dharavi Koliwada Mumbai. Whether you want to sell scrap online in Dharavi Koliwada or call us for doorstep pickup, we guarantee the best value."
    },
    {
      question: "Q5: Do you serve nearby areas from Dharavi Koliwada?",
      answer: "Absolutely! Along with scrap pickup in Dharavi Koliwada, we also serve Sion, Mahim, Matunga, and Bandra. Scrapiz is your trusted choice for scrap buyers in Dharavi Koliwada and nearby suburbs of Mumbai."
    }
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "RecyclingCenter",
    "name": "Scrapiz Dharavi Koliwada - Scrap Buying and Recycling Services",
    "description": "Premium scrap buying and recycling services in Dharavi Koliwada, Mumbai. We offer the best rates for all types of scrap materials.",
    "image": "/Dharavi-Koliwada.jpeg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Shop No 07, Mahim - Sion Link Rd, Naya Nagar, Navrang Compound, Dharavi",
      "addressLocality": "Mumbai",
      "addressRegion": "Maharashtra",
      "postalCode": "400017"
    },
    "telephone": "+919004826378",
    "url": "https://www.scrapiz.in/intercity/dharavi-koliwada",
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
        <title>Scrapiz Dharavi Koliwada - Scrap Buying and Recycling Services</title>
        <meta name="description" content="Premium scrap buying and recycling services in Dharavi Koliwada, Mumbai. We offer the best rates for all types of scrap materials." />
        <meta name="keywords" content="scrap buyer, Dharavi Koliwada, Mumbai, scrap recycling, best scrap rates, free pickup" />
        <link rel="canonical" href="https://www.scrapiz.in/intercity/dharavi-koliwada" />
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
              Scrapiz Dharavi Koliwada
            </motion.h1>
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-xl max-w-3xl mx-auto"
            >
              Premium scrap buying and recycling services in Dharavi Koliwada, Mumbai. We offer the best rates for all types of scrap materials.
            </motion.p>
            <div className="mt-8 flex justify-center gap-4">
              <motion.a
                href="tel:+919004826378"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-green-600 font-bold py-3 px-6 rounded-full shadow-lg"
              >
                Call Now: 9004826378
              </motion.a>
              <motion.a
                href="https://wa.me/919004826378"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-green-500 text-white font-bold py-3 px-6 rounded-full shadow-lg"
              >
                WhatsApp: 9004826378
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-12">Why Choose Scrapiz Dharavi Koliwada?</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <Award className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Best Scrap Rates</h3>
                <p className="text-gray-600">Get the highest market rates for all types of scrap materials in Dharavi Koliwada</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <Truck className="w-12 h-12 text-blue-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Free Pickup Service</h3>
                <p className="text-gray-600">Doorstep collection service for bulk scrap materials across Dharavi Koliwada</p>
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
                    <img src="/Dharavi-Koliwada.jpeg" alt="Scrapiz Dharavi Koliwada Shop" className="w-full h-auto rounded-lg" />
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
                        <p>Shop No, 13, Machchhi Gali, Baba Saheb Ambedkar Chawl, Dharavi, Mumbai, Maharashtra 400017</p>
                        </div>
                    </div>
                    <div className="flex items-center">
                        <Phone className="w-6 h-6 text-green-500 mr-4" />
                        <div>
                        <h3 className="font-bold">Phone Number</h3>
                        <p>+91 9004826378</p>
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
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57985.476447900226!2d72.77157334863281!3d19.045566400000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c929153d64bb%3A0x85a35777d177a926!2sScrapiz!5e1!3m2!1sen!2sin!4v1757275419127!5m2!1sen!2sin"
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

export default DharaviKoliwada;