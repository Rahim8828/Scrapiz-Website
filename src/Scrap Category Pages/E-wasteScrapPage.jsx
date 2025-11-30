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
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="text-gray-600">{answer}</p>
      </motion.div>
    </div>
  );
};

const EWastePage = ({ openModal }) => {
  const pageTitle = "Sell E-Waste in Mumbai – Free Pickup & Instant Cash | Scrapiz";
  const pageDescription = "Sell e-waste in Mumbai with Scrapiz. Free doorstep pickup, instant cash/UPI payment, certified e-waste disposal and secure data wiping. We buy computers, laptops, servers, printers, mobile phones, UPS, batteries and more.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "E-waste Collection & Recycling",
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
      "url": "https://www.scrapiz.in/sell-e-waste-mumbai"
    },
    "areaServed": { "@type": "City", "name": "Mumbai" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "E-waste Collection Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Computer & Laptop Pickup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Mobile & Phone Recycling" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "UPS & Battery Collection" } }
      ]
    },
    "name": "E-waste Collection Service",
    "description": "Certified e-waste pickup and recycling in Mumbai with free doorstep collection, secure data wiping and instant cash payment."
  };

  const faqs = [
    { question: "1. Do you collect e-waste from homes and offices?", answer: "Yes — Scrapiz collects e-waste from households, offices, shops, warehouses and factories across Mumbai." },
    { question: "2. Do you provide secure data wiping for devices?", answer: "Yes — we offer secure data wiping for hard drives and storage devices before recycling or resale." },
    { question: "3. Is pickup free for e-waste?", answer: "Yes, we offer free doorstep pickup for e-waste across Mumbai." },
    { question: "4. How do you pay for e-waste?", answer: "Instant payment via Cash, UPI or Bank Transfer immediately after weighing and inspection." },
    { question: "5. Do you handle large corporate e-waste projects?", answer: "Yes — we manage bulk e-waste clearance, asset decommissioning and provide documentation for disposal." },
    { question: "6. Are you R2/BIS/Renewable-compliant?", answer: "We follow safe e-waste handling practices and can share our disposal process; contact us for certification details." }
  ];

  const serviceName = "E-Waste";

  const eWasteTypes = [
    "Desktop Computers", "Laptops & Notebooks", "Servers & Racks", "Monitors & Displays",
    "Printers & Scanners", "Copiers & Fax Machines", "Mobile Phones & Tablets",
    "UPS & Inverters", "Lead-acid Batteries", "Circuit Boards & Components",
    "Cables, Adapters & Chargers", "Networking Equipment (Routers, Switches)"
  ];

  const priceTable = [
    { type: "Desktop / Old PC (Bulk)", price: "₹25 – ₹180 per kg (varies by parts & value)" },
    { type: "Laptop / Notebook (Working)", price: "₹200 – ₹1500 per unit (brand & condition based)" },
    { type: "Mobile Phone (Working)", price: "₹200 – ₹8000 per unit (model & condition based)" },
    { type: "Server / Networking Equipment", price: "Price on inspection / quote" },
    { type: "UPS & Inverter Batteries", price: "₹25 – ₹110 per kg (battery type dependent)" },
    { type: "PCB / Circuit Boards", price: "₹60 – ₹300 per kg (depends on components)" }
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
        <meta name="keywords" content="sell e-waste mumbai, e-waste buyer mumbai, ewaste pickup mumbai, sell old computers mumbai, mobile recycling mumbai, ups battery disposal mumbai" />
        <link rel="canonical" href="https://www.scrapiz.in/sell-e-waste-mumbai" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-600 to-emerald-500 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Sell E-Waste in Mumbai – Free Pickup & Instant Cash
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light">
              Recycle your e-waste responsibly with Scrapiz. Free doorstep collection, secure data wiping, certified disposal and instant cash/UPI payment across Mumbai, Thane & Navi Mumbai.
            </p>
            <div className="flex justify-center items-center flex-wrap gap-4 mb-8 text-sm">
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Truck className="w-4 h-4 mr-2 text-green-200" /> Free Doorstep Pickup</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><IndianRupee className="w-4 h-4 mr-2 text-green-200" /> Instant Cash Payment</span>
              <span className="flex items-center bg-white/20 backdrop-blur-sm rounded-full px-3 py-1"><Scale className="w-4 h-4 mr-2 text-green-200" /> Secure Data Wiping</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Schedule e-waste pickup"
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
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
              ⭐ Sell Your E-Waste in Mumbai — Safe, Fast & Responsible
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-8">
              Scrapiz handles every step of e-waste collection and recycling — from secure on-site pickup and data destruction to certified disposal and highest market payout.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5">We accept all common e-waste types:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {eWasteTypes.map((type, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 text-center">
                Scrapiz provides secure handling, certified recycling and transparent pricing for all e-waste.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            ⭐ Why Choose Scrapiz for E-Waste?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: IndianRupee, title: "Instant Cash Payment", desc: "Get paid immediately after inspection and weighing — Cash / UPI / Bank." },
              { icon: Truck, title: "Free Doorstep Pickup", desc: "No transport arrangement needed — we collect from homes, offices and sites." },
              { icon: Scale, title: "Secure Data Wiping", desc: "We offer certified data destruction for drives and storage devices." },
              { icon: Recycle, title: "Certified Disposal Process", desc: "We follow safe e-waste recycling and downstream material recovery practices." },
              { icon: CheckCircle, title: "Bulk & Corporate Clearance", desc: "Large IT asset decommissioning and corporate e-waste projects handled." },
              { icon: Clock, title: "Fast Mumbai Coverage", desc: "Pickup within 30–45 minutes depending on location." }
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

      {/* Types of E-Waste */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            ⭐ E-Waste Types We Collect
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "🟩 Computers & IT", items: ["Desktops", "Laptops", "Servers", "Monitors"] },
              { title: "🟩 Mobile & Small Devices", items: ["Mobiles", "Tablets", "Accessories", "Chargers"] },
              { title: "🟩 Peripherals & Office", items: ["Printers", "Scanners", "Copiers", "UPS"] },
              { title: "🟩 Batteries & Power", items: ["Lead-acid batteries", "Lithium batteries", "Inverters"] },
              { title: "🟩 Networking Gear", items: ["Routers", "Switches", "Modems", "Cables"] },
              { title: "🟩 PCBs & Components", items: ["Circuit boards", "Transformers", "Mixed electronic parts"] }
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
          <p className="text-center text-xl font-semibold text-green-600 mt-12">E-waste in any condition — Scrapiz will collect and recycle it responsibly.</p>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            ⭐ E-Waste Prices in Mumbai (Approx.)
          </h2>
          <p className="text-gray-600 text-center mb-12">(Indicative prices — final price depends on condition & parts)</p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full">
                <thead className="bg-green-600 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">E-Waste Type</th>
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
            <p className="text-center text-gray-500 mt-4 text-sm">📌 Prices vary by model, condition, and component value.</p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            ⭐ Areas We Serve for E-Waste Pickup
          </h2>
          <p className="text-gray-600 text-center mb-12">We collect e-waste from all across Mumbai:</p>
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
          <p className="text-center text-xl font-semibold text-green-600 mt-12">Responsible e-waste pickup — wherever you are in Mumbai.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">⭐ How E-Waste Pickup Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Quick, safe and fully documented process for households and businesses.</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-600 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Request Pickup</h3>
              <p className="text-gray-600">Share device details and location via call or form.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-600 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Secure On-site Checks</h3>
              <p className="text-gray-600">We inspect, wipe data if needed and weigh the devices.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-green-100 text-green-600 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Instant Cash & Certificate</h3>
              <p className="text-gray-600">Get paid instantly and receive a disposal/collection certificate for corporate jobs.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ⭐ Benefits of Selling E-Waste to Scrapiz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Instant cash payment",
              "Secure data wiping",
              "Certified disposal process",
              "Free doorstep pickup",
              "Bulk corporate pickups",
              "Transparent pricing & weighing",
              "Environmentally responsible",
              "Disposal certificates for businesses"
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
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ FAQ – Sell E-Waste in Mumbai</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-green-600 to-emerald-500 bg-gradient-to-r text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Call Now for E-Waste Pickup: +91 8828700630</h2>
            <p className="text-xl mb-2">🚚 Free Pickup | Instant Cash | Secure Data Wiping</p>
            <p className="text-green-100 mb-8">🔥 Scrapiz – Mumbai's Responsible E-Waste Buyer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Book e-waste pickup now"
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

export default EWastePage;
