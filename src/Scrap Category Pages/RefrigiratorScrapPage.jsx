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
        <ChevronDown
          className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
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

const RefrigeratorScrapPage = ({ openModal }) => {
  const pageTitle = "Sell Refrigerator Scrap in Mumbai – Free Pickup & Best Price | Scrapiz";
  const pageDescription = "Sell refrigerator scrap in Mumbai with Scrapiz. Free doorstep pickup, instant cash/UPI payment, certified weighing. We buy old refrigerators, compressors, copper coils, condenser units, and parts from residential and commercial units.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Refrigerator Scrap Collection & Buying",
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
      "url": "https://www.scrapiz.in/sell-refrigerator-scrap-mumbai"
    },
    "areaServed": { "@type": "City", "name": "Mumbai" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Refrigerator Scrap Buying Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Household Refrigerator Pickup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Commercial Refrigerator & Chiller Buying" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Compressor & Copper Coil Collection" } }
      ]
    },
    "name": "Refrigerator Scrap Buying Service",
    "description": "Trusted refrigerator scrap buyer in Mumbai with free pickup, instant payment and transparent weighing."
  };

  const faqs = [
    { question: "1. Do you pick up old refrigerators from homes?", answer: "Yes — we offer free doorstep pickup for household refrigerators across Mumbai." },
    { question: "2. Do you remove refrigerant gas safely?", answer: "Our team follows safe handling procedures for refrigerant removal and disposal; inform us during booking for safe removal." },
    { question: "3. What refrigerator parts do you buy?", answer: "We buy compressors, condenser coils, evaporators, insulation, metal cabinets and mixed refrigerator scrap." },
    { question: "4. How do you pay?", answer: "Instant payment via Cash, UPI or Bank Transfer immediately after weighing." },
    { question: "5. Do you handle commercial chillers and walk-in coolers?", answer: "Yes — we handle commercial units and large chillers; price usually quoted after inspection." },
    { question: "6. Is pickup free for all locations in Mumbai?", answer: "Pickup is free across Mumbai for most residential and commercial locations; very large jobs may have logistics charges which we'll confirm beforehand." }
  ];

  const serviceName = "Refrigerator Scrap";

  const fridgeTypes = [
    "Domestic refrigerators", "Double-door refrigerators", "Single-door refrigerators",
    "Commercial chillers & display coolers", "Freezers & deep freezers",
    "Refrigerator compressors", "Condenser & evaporator coils",
    "Insulated cabinets & doors", "Refrigerator panels & frames", "Mixed refrigerator scrap"
  ];

  const priceTable = [
    { type: "Working Domestic Refrigerator (Small)", price: "₹600 – ₹1,800 per unit (brand & condition)" },
    { type: "Double Door / Large Refrigerator", price: "₹1,200 – ₹4,500 per unit (brand & condition)" },
    { type: "Compressor (Loose)", price: "₹350 – ₹1,200 per unit" },
    { type: "Copper Coil / Condenser Scrap", price: "₹140 – ₹220 per kg" },
    { type: "Mixed Refrigerator Scrap (non-functional)", price: "₹30 – ₹120 per kg" },
    { type: "Commercial Chiller / Walk-in Cooler", price: "Price on inspection / quote" }
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
        <meta name="keywords" content="sell refrigerator scrap mumbai, refrigerator scrap buyer mumbai, fridge pickup mumbai, sell old refrigerator mumbai, compressor scrap mumbai" />
        <link rel="canonical" href="https://www.scrapiz.in/sell-refrigerator-scrap-mumbai" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero */}
      <section className="relative bg-gradient-to-r from-green-600 to-blue-600 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Sell Refrigerator Scrap in Mumbai – Free Pickup & Best Price
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light">
              Get the best price for old refrigerators in Mumbai — free doorstep pickup, instant cash/UPI payment and certified digital weighing. We buy domestic & commercial refrigerators and all major parts.
            </p>

            <div className="flex justify-center items-center flex-wrap gap-4 mb-8 text-sm">
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Truck className="w-4 h-4 mr-2 text-green-200" /> Free Doorstep Pickup</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><IndianRupee className="w-4 h-4 mr-2 text-green-200" /> Best Price Guarantee</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Clock className="w-4 h-4 mr-2 text-green-200" /> 30-45 Min Pickup</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Book refrigerator scrap pickup"
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
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 26 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">⭐ Sell Refrigerator Scrap in Mumbai with Free Doorstep Pickup</h2>
            <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-8">
              Scrapiz buys refrigerators and related parts from homes, restaurants, shops and factories. We ensure safe handling of refrigerants, honest weighing and instant payment for every pickup.
            </p>

            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5">We buy all refrigerator types & parts:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {fridgeTypes.map((t, i) => (
                  <div key={i} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{t}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 text-center">
                Scrapiz guarantees <strong>best refrigerator scrap rates in Mumbai</strong>, safe removal and transparent transactions.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ Why Choose Scrapiz for Refrigerator Scrap?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: IndianRupee, title: "Best Refrigerator Prices", desc: "We monitor market rates and offer competitive prices for compressors, coils and whole units." },
              { icon: Truck, title: "Free Doorstep Pickup", desc: "Our team collects from homes, shops and commercial sites — no transport hassle." },
              { icon: CheckCircle, title: "Instant Payment (Cash / UPI / Bank)", desc: "Receive payment immediately after weighing." },
              { icon: Scale, title: "Certified Digital Weighing", desc: "We use verified scales to ensure transparent transactions." },
              { icon: Recycle, title: "Safe Refrigerant Handling", desc: "We follow safe refrigerant removal and disposal practices (inform us during booking)." },
              { icon: Clock, title: "Mumbai-wide Coverage", desc: "Fast pickup across all suburbs, industrial areas and central Mumbai." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-green-100 text-green-700 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ Refrigerator Types & Parts We Buy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "🟦 Domestic Refrigerators", items: ["Single-door", "Double-door", "Mini fridges"] },
              { title: "🟦 Commercial & Display Coolers", items: ["Display coolers", "Commercial chillers", "Bakery/display fridges"] },
              { title: "🟦 Compressors & Motors", items: ["Working compressors", "Damaged compressors", "Mounts & motors"] },
              { title: "🟦 Coils & Condensers", items: ["Condenser coils", "Evaporator coils", "Copper tubing"] },
              { title: "🟦 Freezers & Deep Freezers", items: ["Domestic freezers", "Commercial freezers"] },
              { title: "🟦 Mixed Refrigerator Parts", items: ["Doors, cabinets, insulation, panels"] }
            ].map((category, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((it, i) => (
                    <li key={i} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {it}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-green-600 mt-12">Refrigerators and parts in any condition — Scrapiz will buy and recycle responsibly.</p>
        </div>
      </section>

      {/* Price Table */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">⭐ Refrigerator Scrap Rates in Mumbai (Approx.)</h2>
          <p className="text-gray-600 text-center mb-12">(Indicative prices — final price depends on model, parts & condition)</p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">Refrigerator Type / Part</th>
                    <th className="py-4 px-6 text-right font-semibold">Price (Approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 text-gray-800">{item.type}</td>
                      <td className="py-4 px-6 text-right text-green-600 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            {/* Rate Disclaimer */}
            <div className="mt-6 bg-gradient-to-r from-amber-50 to-orange-50 border-l-4 border-amber-500 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="flex-shrink-0">
                  <svg className="w-5 h-5 text-amber-600 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="flex-1">
                  <p className="text-sm font-semibold text-amber-800 mb-1">Important Note About Rates</p>
                  <p className="text-xs text-amber-700 leading-relaxed">
                    <strong>These are tentative rates</strong> and may vary based on market conditions, material quality, quantity, and current metal prices. 
                    Rates are updated regularly but can fluctuate daily. For the most accurate and current pricing, please call us at 
                    <a href="tel:+918828700630" className="font-bold text-amber-900 hover:underline ml-1">+91 8828700630</a>.
                  </p>
                </div>
              </div>
            </div>

            <p className="text-center text-gray-500 mt-4 text-sm">📌 Prices depend on refrigerant, compressor condition, copper content, size & market rate.</p>
          </div>
        </div>
      </section>

      {/* Areas */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">⭐ Areas We Serve for Refrigerator Scrap Pickup</h2>
          <p className="text-gray-600 text-center mb-12">We collect refrigerator scrap from all across Mumbai:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(areas).map(([region, locations], idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-4 text-green-600 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {region}
                </h3>
                <ul className="space-y-2">
                  {locations.map((loc, i) => <li key={i} className="text-gray-600 text-sm">{loc}</li>)}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-green-600 mt-12">Wherever you are → Scrapiz reaches you.</p>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">⭐ How Refrigerator Scrap Pickup Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Quick, safe and fully transparent process for households and businesses.</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Request Pickup</h3>
              <p className="text-gray-600">Share refrigerator details and location via call or form.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Safe Dismantling & Pickup</h3>
              <p className="text-gray-600">If needed, we remove refrigerant safely, dismantle and load the unit.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Instant Payment</h3>
              <p className="text-gray-600">We weigh the scrap → confirm the rate → pay instantly via Cash / UPI / Bank.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">⭐ Benefits of Selling Refrigerator Scrap to Scrapiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Best refrigerator price guaranteed",
              "Safe refrigerant handling",
              "Free doorstep collection",
              "Certified digital weighing",
              "Professional & verified team",
              "We handle bulk & commercial jobs",
              "No hidden charges",
              "Same-day service"
            ].map((b, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: i * 0.04 }} className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center">
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ FAQ – Sell Refrigerator Scrap in Mumbai</h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => <AccordionItem key={i} question={faq.question} answer={faq.answer} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="from-green-600 to-blue-600 bg-gradient-to-r text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Call Now for Refrigerator Scrap Pickup: +91 8828700630</h2>
            <p className="text-xl mb-2">🚚 Free Pickup | Best Price | Instant Payment</p>
            <p className="text-green-100 mb-8">🔥 Scrapiz – Mumbai's Trusted Refrigerator Scrap Buyer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Book refrigerator scrap pickup now"
                className="bg-white text-green-700 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Pickup Now
              </button>
              <a href="tel:+918828700630" aria-label="Call Scrapiz" className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-3"/> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RefrigeratorScrapPage;
