import { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { ChevronDown, Phone, IndianRupee, Clock, Truck, Scale, CheckCircle, MapPin, Recycle, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const AccordionItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-gray-800 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{question}</span>
        <ChevronDown className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0, marginTop: isOpen ? '1rem' : '0rem' }}
        transition={{ duration: 0.28, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
};

const MicrowaveScrapPage = ({ openModal }) => {
  const pageTitle = "Sell Microwave Scrap in Mumbai – Free Pickup & Instant Cash | Scrapiz";
  const pageDescription = "Sell microwave oven scrap in Mumbai with Scrapiz. Free doorstep pickup, instant cash/UPI payment and certified weighing. We buy working & non-working microwaves, magnetrons, transformers, control boards, motors and mixed microwave scrap.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Microwave Scrap Collection & Buying",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Scrapiz",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Mumbai",
        "addressLocality": "Mumbai",
        "addressRegion": "MH",
        "postalCode": "400001",
        "addressCountry": "IN"
      },
      "telephone": "+91-8828700630",
      "image": "https://www.scrapiz.in/logo.png",
      "url": "https://www.scrapiz.in/sell-microwave-scrap-mumbai"
    },
    "areaServed": { "@type": "City", "name": "Mumbai" },
    "name": "Microwave Scrap Buying Service",
    "description": "Free pickup and instant cash for microwave ovens and parts across Mumbai. Secure handling and transparent weighing."
  };

  const faqs = [
    { question: "1. Do you pick up old or broken microwaves?", answer: "Yes — we offer free doorstep pickup for both working and non-working microwaves across Mumbai." },
    { question: "2. What microwave parts do you accept?", answer: "We accept magnetrons, high-voltage transformers, control boards, turntables, motors, door assemblies and mixed metal/plastic parts." },
    { question: "3. Do you handle commercial kitchen microwave scrap?", answer: "Yes — we handle commercial and industrial microwave units; large jobs may be quoted after inspection." },
    { question: "4. How do you pay?", answer: "Instant payment via Cash, UPI or Bank Transfer immediately after weighing." },
    { question: "5. Is pickup free everywhere in Mumbai?", answer: "Pickup is free for most residential and commercial areas in Mumbai — very large or difficult-to-access jobs may have logistics charges which we'll inform you about." },
    { question: "6. Do you recycle electronic components safely?", answer: "Yes — Scrapiz follows safe e-waste handling and recycling practices for electronic components." }
  ];

  const serviceName = "Microwave Scrap";

  const microwaveTypes = [
    "Domestic microwave ovens (working/non-working)",
    "Commercial microwave ovens",
    "Magnetrons",
    "High-voltage transformers",
    "Control boards & electronics",
    "Turntable motors & trays",
    "Door assemblies & hinges",
    "Stainless / metal casing",
    "Mixed microwave scrap"
  ];

  const priceTable = [
    { type: "Working Domestic Microwave (Small)", price: "₹300 – ₹1,200 per unit (brand & condition)" },
    { type: "Non-functional / Scrap Microwave", price: "₹40 – ₹140 per kg (depends on metal & components)" },
    { type: "Magnetron (Good)", price: "₹200 – ₹800 per unit" },
    { type: "High-voltage Transformer", price: "₹150 – ₹600 per unit" },
    { type: "Control Boards / Electronics", price: "₹100 – ₹600 per unit (depends on salvageable parts)" },
    { type: "Mixed Microwave Parts (Bulk)", price: "Price on inspection / quote" }
  ];

  const areas = {
    "Western Suburbs": ["Andheri", "Bandra", "Jogeshwari", "Goregaon", "Malad", "Kandivali", "Borivali", "Dahisar"],
    "Central Mumbai": ["Dadar", "Sion", "Kurla", "Ghatkopar", "Vidyavihar", "Chembur"],
    "Harbour & South Mumbai": ["Wadala", "Byculla", "Parel", "Worli", "Lower Parel", "CST", "Fort"],
    "Extended Mumbai": ["Thane", "Mira Road", "Vasai–Virar", "Navi Mumbai (Vashi, Nerul, Airoli, Panvel)"]
  };

  return (
    <div className="bg-white text-gray-800 font-sans">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content="sell microwave scrap mumbai, microwave scrap buyer mumbai, sell old microwave mumbai, microwave pickup mumbai, magnetron scrap mumbai" />
        <link rel="canonical" href="https://www.scrapiz.in/sell-microwave-scrap-mumbai" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-20 md:py-28">
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.55 }} className="text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-4">
              Sell Microwave Scrap in Mumbai – Free Pickup & Instant Cash
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-6 font-light">
              Scrapiz buys microwaves and microwave parts across Mumbai. Free doorstep pickup, instant cash/UPI payment and certified weighing — quick service across Mumbai, Thane & Navi Mumbai.
            </p>
            <div className="flex justify-center items-center flex-wrap gap-3 mb-6 text-sm">
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Truck className="w-4 h-4 mr-2 text-green-200" /> Free Doorstep Pickup</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><IndianRupee className="w-4 h-4 mr-2 text-green-200" /> Instant Cash Payment</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Scale className="w-4 h-4 mr-2 text-green-200" /> Certified Weighing</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Book microwave pickup"
                className="bg-white text-green-700 font-bold py-3 px-10 rounded-full shadow-2xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Pickup
              </button>
              <a href="tel:+918828700630" className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2" /> +91 8828700630
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 text-center">⭐ Sell Your Microwave Scrap — Safe, Fast & Fair</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto mb-6">
              We collect microwaves from homes, restaurants and commercial kitchens. Scrapiz ensures safe handling of electronic parts, honest weighing and instant payment on pickup.
            </p>

            <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 max-w-3xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Microwave parts we buy:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {microwaveTypes.map((t, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">⭐ Microwave Scrap Prices in Mumbai (Approx.)</h2>
          <p className="text-gray-600 text-center mb-6">(Indicative prices — final price depends on parts & condition)</p>
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-3 px-4 text-left font-semibold">Item / Part</th>
                    <th className="py-3 px-4 text-right font-semibold">Price (Approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((item, idx) => (
                    <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-3 px-4 text-gray-800">{item.type}</td>
                      <td className="py-3 px-4 text-right text-green-700 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 mt-3 text-sm">📌 Prices depend on magnetron condition, metal content and salvageable electronics.</p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">⭐ Areas We Serve for Microwave Pickup</h2>
          <p className="text-gray-600 text-center mb-6">We provide microwave pickup across all of Mumbai:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {Object.entries(areas).map(([region, locations], idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: idx * 0.06 }} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-lg font-semibold mb-3 text-green-700 flex items-center"><MapPin className="w-5 h-5 mr-2" />{region}</h3>
                <ul className="space-y-2 text-gray-600 text-sm">
                  {locations.map((loc, i) => <li key={i}>{loc}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">⭐ How Microwave Pickup Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6">Fast, safe and transparent — from booking to instant payment.</p>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.08 }} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 text-green-700 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold">1️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Request Pickup</h3>
              <p className="text-gray-600">Call or fill the online form with microwave details and location.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.18 }} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 text-green-700 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold">2️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Inspection & Weighing</h3>
              <p className="text-gray-600">Our team inspects parts, salvages reusable components and weighs the scrap on certified scales.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.28 }} className="bg-white p-6 rounded-xl shadow-sm">
              <div className="bg-green-100 text-green-700 w-14 h-14 mx-auto mb-4 rounded-full flex items-center justify-center text-2xl font-bold">3️⃣</div>
              <h3 className="text-lg font-semibold mb-2">Instant Payment</h3>
              <p className="text-gray-600">Confirm the rate and receive instant payment via Cash / UPI / Bank transfer.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 text-center">⭐ FAQ – Sell Microwave Scrap in Mumbai</h2>
          <div className="space-y-4">
            {faqs.map((faq, idx) => <AccordionItem key={idx} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="from-green-600 to-blue-600 bg-gradient-to-r text-white">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="text-center">
            <h2 className="text-xl md:text-2xl font-bold mb-2">📞 Call Now for Microwave Pickup: +91 8828700630</h2>
            <p className="text-lg mb-2">🚚 Free Pickup | Instant Cash | Certified Weighing</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Book microwave pickup now"
                className="bg-white text-green-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Pickup Now
              </button>
              <a href="tel:+918828700630" className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2"/> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MicrowaveScrapPage;
