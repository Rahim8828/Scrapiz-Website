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
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
};

const ACScrapPage = ({ openModal }) => {
  const pageTitle = "Sell AC Scrap in Mumbai – Free Pickup & Best Price | Scrapiz";
  const pageDescription = "Sell AC scrap in Mumbai with Scrapiz. Free doorstep pickup, instant cash/UPI payment, certified weighing. We buy window & split ACs, compressors, copper coils, condenser units and industrial AC scrap.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "AC Scrap Collection & Buying",
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
      "url": "https://www.scrapiz.in/sell-ac-scrap-mumbai"
    },
    "areaServed": { "@type": "City", "name": "Mumbai" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AC Scrap Buying Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Window AC Pickup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Split AC & Compressor Collection" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial AC Scrap Buying" } }
      ]
    },
    "name": "AC Scrap Buying Service",
    "description": "Trusted AC scrap buyer in Mumbai with free pickup, instant payment and transparent weighing."
  };

  const faqs = [
    { question: "1. Do you offer free AC scrap pickup?", answer: "Yes — free doorstep pickup for AC scrap across Mumbai." },
    { question: "2. Which AC parts do you buy?", answer: "We buy complete AC units, compressors, copper coils, condenser units, radiators and mixed AC scrap." },
    { question: "3. Do you remove/install heavy AC units?", answer: "Yes — our team handles safe dismantling and removal for an extra service charge if applicable; confirm during booking." },
    { question: "4. How is payment made?", answer: "Instant payment via Cash, UPI or Bank Transfer after weighing and inspection." },
    { question: "5. Do you recycle refrigerant gases safely?", answer: "We follow safe handling practices; refrigerant removal follows local environmental rules — inform us in advance for safe disposal." },
    { question: "6. Do you handle bulk or commercial AC scrap pickups?", answer: "Yes — we handle factory, office and project clearances with proper documentation." }
  ];

  const serviceName = "AC Scrap";

  const acTypes = [
    "Window AC units", "Split AC indoor units", "Split AC outdoor units (condensers)",
    "Compressors", "Copper coils & tubing", "Condenser fans & units",
    "AC radiators", "AC housings & frames", "Industrial AC units", "Mixed AC scrap"
  ];

  const priceTable = [
    { type: "Working Window AC (Small)", price: "₹600 – ₹1,800 per unit (condition dependent)" },
    { type: "Split AC (Indoor + Outdoor) - Working", price: "₹1,200 – ₹6,000 per unit (brand & capacity based)" },
    { type: "AC Compressor (Loose)", price: "₹350 – ₹1,200 per unit (type & condition)" },
    { type: "Copper Coil / Condenser Scrap", price: "₹140 – ₹220 per kg" },
    { type: "Mixed AC Scrap (non-functional)", price: "₹40 – ₹120 per kg" },
    { type: "Industrial AC / Rooftop Units", price: "Price on inspection / quote" }
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
        <meta name="keywords" content="sell ac scrap mumbai, ac scrap buyer mumbai, ac compressor scrap mumbai, ac pickup mumbai, sell old ac mumbai, ac dismantling mumbai" />
        <link rel="canonical" href="https://www.scrapiz.in/sell-ac-scrap-mumbai" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-teal-500 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Sell AC Scrap in Mumbai – Free Pickup & Best Price
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light">
              Scrapiz buys all types of AC scrap across Mumbai. Free doorstep pickup, instant cash/UPI payments and certified digital weighing — fast pickup across Mumbai, Thane & Navi Mumbai.
            </p>
            <div className="flex justify-center items-center flex-wrap gap-4 mb-8 text-sm">
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Truck className="w-4 h-4 mr-2 text-green-200" /> Free Doorstep Pickup</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><IndianRupee className="w-4 h-4 mr-2 text-green-200" /> Best Price Guarantee</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Clock className="w-4 h-4 mr-2 text-green-200" /> 30-45 Min Pickup</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Schedule AC scrap pickup"
                className="bg-white text-green-700 font-bold py-3 px-10 rounded-full shadow-2xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Pickup
              </button>
              <a href="tel:+918828700630" className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-green-700 transition-colors duration-300 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-2"/> +91 8828700630
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">⭐ Sell AC Scrap in Mumbai with Free Doorstep Pickup</h2>
            <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-8">
              Whether it's a single home AC or a bulk commercial clearance, Scrapiz offers reliable pickup, honest weighing and fast payment. We buy window & split ACs, compressors, copper coils and more.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5">We buy all AC scrap types:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {acTypes.map((type, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 text-center">Scrapiz ensures <strong>top AC scrap rates in Mumbai</strong>, safe removal (if needed) and transparent transactions.</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ Why Choose Scrapiz for AC Scrap?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: IndianRupee, title: "Best AC Scrap Price", desc: "We monitor rates and offer competitive prices for compressors, copper coils and whole units." },
              { icon: Truck, title: "Free Doorstep Pickup", desc: "We collect from homes, offices and sites — no transport needed." },
              { icon: CheckCircle, title: "Instant Payment (Cash / UPI / Bank)", desc: "Get paid immediately after weighing." },
              { icon: Scale, title: "Certified Digital Weighing", desc: "Accurate electronic scales for transparent transactions." },
              { icon: Recycle, title: "Safe Handling & Recycling", desc: "We follow safe disposal practices for refrigerants and parts." },
              { icon: Clock, title: "Mumbai-wide Coverage", desc: "Fast pickup across suburbs, industrial zones and central Mumbai." }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <div className="bg-green-100 text-green-600 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of AC Scrap */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ AC Scrap Types We Buy</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "🟦 Window ACs & Units", items: ["Small window ACs", "Old window units", "Housing & grills"] },
              { title: "🟦 Split AC (Indoor + Outdoor)", items: ["Indoor units", "Outdoor condensers", "Installation frames"] },
              { title: "🟦 Compressors & Motors", items: ["Compressors (working/non-working)", "Motor units", "Mounts"] },
              { title: "🟦 Copper Coils & Condensers", items: ["Copper coil scrap", "Condenser coils", "Tubing"] },
              { title: "🟦 Industrial / Rooftop ACs", items: ["Large rooftop units", "Chillers", "AHU parts"] },
              { title: "🟦 Mixed AC Parts", items: ["Fans, capacitors, control boards", "Mounting hardware"] }
            ].map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-green-600 mt-12">AC scrap in any condition — Scrapiz will buy and recycle it responsibly.</p>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">⭐ AC Scrap Rates in Mumbai (Approx.)</h2>
          <p className="text-gray-600 text-center mb-12">(Indicative prices — final price depends on model, parts & condition)</p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">AC Scrap Type</th>
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
            <p className="text-center text-gray-500 mt-4 text-sm">📌 Prices depend on refrigerant, compressor condition, copper content, size & market rate.</p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">⭐ Areas We Serve for AC Scrap Pickup</h2>
          <p className="text-gray-600 text-center mb-12">We collect AC scrap from all across Mumbai:</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(areas).map(([region, locations], index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
              >
                <h3 className="text-lg font-semibold mb-4 text-green-600 flex items-center">
                  <MapPin className="w-5 h-5 mr-2" />
                  {region}
                </h3>
                <ul className="space-y-2">
                  {locations.map((loc, idx) => (
                    <li key={idx} className="text-gray-600 text-sm">{loc}</li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-green-600 mt-12">Wherever you are → Scrapiz reaches you.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">⭐ How AC Scrap Pickup Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Quick, safe and fully transparent process for households and businesses.</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Request Pickup</h3>
              <p className="text-gray-600">Call or fill the online form with AC details and location.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Safe Dismantling & Pickup</h3>
              <p className="text-gray-600">Our team dismantles (if needed), removes refrigerant safely and loads the unit.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Instant Payment</h3>
              <p className="text-gray-600">We weigh the scrap → confirm the rate → pay instantly via your chosen method.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">⭐ Benefits of Selling AC Scrap to Scrapiz</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Best AC scrap price guaranteed",
              "Safe dismantling & handling",
              "Free doorstep collection",
              "Accurate digital weighing",
              "Professional & verified team",
              "We handle bulk loads",
              "No hidden charges",
              "Same-day service"
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className="bg-white p-4 rounded-lg shadow-sm border border-gray-100 flex items-center"
              >
                <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ FAQ – Sell AC Scrap in Mumbai</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-green-600 to-teal-500 bg-gradient-to-r text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Call Now for AC Scrap Pickup: +91 8828700630</h2>
            <p className="text-xl mb-2">🚚 Free Pickup | Best Price | Instant Payment</p>
            <p className="text-green-100 mb-8">🔥 Scrapiz – Mumbai's Trusted AC Scrap Buyer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Book ac scrap pickup now"
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

export default ACScrapPage;
