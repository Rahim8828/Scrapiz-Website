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

const StainlessSteelScrapPage = ({ openModal }) => {
  const pageTitle = "Sell Stainless Steel Scrap in Mumbai – Free Pickup & Instant Cash | Scrapiz";
  const pageDescription = "Sell stainless steel scrap in Mumbai with Scrapiz. Free doorstep pickup, instant cash/UPI payment, certified weighing. We buy SS sheets, utensils, kitchenware, industrial SS scrap, and more at best market rates.";

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Stainless Steel Scrap Buying",
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
      "url": "https://www.scrapiz.in/sell-stainless-steel-scrap-mumbai"
    },
    "areaServed": { "@type": "City", "name": "Mumbai" },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Stainless Steel Scrap Buying Services",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SS Sheet & Utensil Pickup" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Industrial SS Scrap Buying" } },
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "SS Kitchen & Fabrication Scrap Collection" } }
      ]
    },
    "name": "Stainless Steel Scrap Buying Service",
    "description": "Trusted stainless steel scrap buyer in Mumbai with free pickup, instant cash payment and transparent weighing."
  };

  const faqs = [
    { question: "1. Do you offer free stainless steel scrap pickup?", answer: "Yes — free doorstep pickup is available across Mumbai." },
    { question: "2. What stainless steel items do you accept?", answer: "We accept SS sheets, utensils, kitchen equipment, SS pipes, flanges, tanks, industrial fabrication scrap and more." },
    { question: "3. How quickly can you arrive for pickup?", answer: "Typically within 30–45 minutes depending on location and traffic." },
    { question: "4. How do you pay for scrap?", answer: "Instant cash, UPI or Bank Transfer immediately after weighing." },
    { question: "5. Do you accept mixed metal loads with stainless steel?", answer: "Yes — we evaluate mixed loads and provide the best price based on composition." },
    { question: "6. Do you handle bulk factory and project clearances?", answer: "Yes — we manage large industrial pickups, factory clearances and dismantling projects with necessary documentation." }
  ];

  const serviceName = "Stainless Steel Scrap";

  const ssTypes = [
    "SS sheets & plates", "SS utensils & kitchenware", "SS pipes & tubes",
    "SS tanks & vessels", "SS wire & rods", "SS fabrication waste",
    "SS flanges & fittings", "SS furniture parts", "Industrial SS scrap",
    "Mixed stainless steel scrap"
  ];

  const priceTable = [
    { type: "Grade 304 / 316 Stainless Steel (Clean)", price: "₹120 – ₹220 per kg" },
    { type: "SS Mixed / Alloy Scrap", price: "₹80 – ₹150 per kg" },
    { type: "SS Utensils & Kitchenware", price: "₹70 – ₹140 per kg" },
    { type: "SS Pipes & Tubes", price: "₹90 – ₹160 per kg" },
    { type: "SS Fabrication / Turnings", price: "₹60 – ₹130 per kg" },
    { type: "Rusty / Low Grade SS Scrap", price: "₹40 – ₹90 per kg" }
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
        <meta name="keywords" content="sell stainless steel scrap mumbai, stainless steel scrap buyer mumbai, ss scrap price mumbai, sell ss sheets mumbai, ss utensils scrap mumbai" />
        <link rel="canonical" href="https://www.scrapiz.in/sell-stainless-steel-scrap-mumbai" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-slate-700 to-slate-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 relative">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4">
              Sell Stainless Steel Scrap in Mumbai – Free Pickup & Instant Cash
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 font-light">
              Get top stainless steel scrap prices in Mumbai with free doorstep pickup and instant cash/UPI payment. We buy SS sheets, kitchenware, pipes, fabrication waste & industrial stainless steel scrap.
            </p>
            <div className="flex justify-center items-center flex-wrap gap-4 mb-8 text-sm">
              <span className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"><Truck className="w-4 h-4 mr-2 text-slate-300" /> Free Doorstep Pickup</span>
              <span className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"><IndianRupee className="w-4 h-4 mr-2 text-slate-300" /> Instant Cash Payment</span>
              <span className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-3 py-1"><Clock className="w-4 h-4 mr-2 text-slate-300" /> 30-45 Min Pickup</span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Schedule stainless steel scrap pickup"
                className="bg-white text-slate-900 font-bold py-3 px-10 rounded-full shadow-2xl hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-slate-500 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Pickup
              </button>
              <a href="tel:+918828700630" className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-slate-900 transition-colors duration-300 inline-flex items-center justify-center">
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
              ⭐ Sell Stainless Steel Scrap in Mumbai with Free Doorstep Pickup
            </h2>
            <p className="text-gray-600 text-lg text-center max-w-4xl mx-auto mb-8">
              Scrapiz purchases stainless steel scrap from households, kitchens, workshops and industries across Mumbai. We ensure fast pickup, instant cash payment and transparent weighing for every customer.
            </p>
            <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
              <h3 className="text-2xl font-semibold text-gray-800 mb-5">We buy all types of stainless steel scrap:</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
                {ssTypes.map((type, index) => (
                  <div key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="w-5 h-5 text-slate-500 mr-2 flex-shrink-0" />
                    <span className="text-sm">{type}</span>
                  </div>
                ))}
              </div>
              <p className="text-gray-600 mt-6 text-center">
                Scrapiz guarantees <strong>best stainless steel scrap rates in Mumbai</strong>, honest weighing and same-day pickup.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            ⭐ Why Choose Scrapiz for Stainless Steel Scrap?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: IndianRupee, title: "Best Stainless Steel Rates", desc: "We track market prices and offer competitive rates for clean and industrial SS scrap." },
              { icon: Truck, title: "Free Doorstep Pickup", desc: "Our team collects stainless steel scrap from your location — no transport hassle." },
              { icon: CheckCircle, title: "Instant Cash (Cash / UPI / Bank)", desc: "Receive instant cash or easy digital payment on the spot after weighing." },
              { icon: Scale, title: "Certified Digital Weighing", desc: "We use verified scales to ensure transparent transactions." },
              { icon: Recycle, title: "We Buy All SS Types", desc: "From utensils and sheets to fabrication waste and industrial scrap." },
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
                <div className="bg-slate-100 text-slate-700 w-14 h-14 rounded-full flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Types of SS Scrap */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
            ⭐ Types of Stainless Steel Scrap We Buy
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "🟦 SS Sheets & Plates", items: ["Thin & thick sheets", "Cut-offs", "Decor plates"] },
              { title: "🟦 SS Utensils & Kitchenware", items: ["Pots, pans, trays", "Commercial kitchen equipment"] },
              { title: "🟦 SS Pipes & Tubes", items: ["Seamless pipes", "Welded tubes", "Plumbing SS scrap"] },
              { title: "🟦 SS Tanks & Vessels", items: ["Storage tanks", "Pressure vessels"] },
              { title: "🟦 Industrial SS Scrap", items: ["Fabrication turnings", "Machine parts", "Coils"] },
              { title: "🟦 Household & Commercial SS", items: ["Furniture parts", "Handrails", "Decor items"] }
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
                      <CheckCircle className="w-4 h-4 text-slate-500 mr-2 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-xl font-semibold text-slate-700 mt-12">Stainless steel in any condition — Scrapiz will buy it.</p>
        </div>
      </section>

      {/* Price Table Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            ⭐ Stainless Steel Scrap Rates in Mumbai (Approx.)
          </h2>
          <p className="text-gray-600 text-center mb-12">(Daily market-based pricing — can change)</p>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
              <table className="w-full">
                <thead className="bg-slate-800 text-white">
                  <tr>
                    <th className="py-4 px-6 text-left font-semibold">Type of Stainless Steel Scrap</th>
                    <th className="py-4 px-6 text-right font-semibold">Price (Approx.)</th>
                  </tr>
                </thead>
                <tbody>
                  {priceTable.map((item, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                      <td className="py-4 px-6 text-gray-800">{item.type}</td>
                      <td className="py-4 px-6 text-right text-slate-700 font-semibold">{item.price}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-center text-gray-500 mt-4 text-sm">📌 Prices depend on grade, purity, weight & market rate.</p>
          </div>
        </div>
      </section>

      {/* Areas Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-6">
            ⭐ Areas We Serve for Stainless Steel Scrap Pickup
          </h2>
          <p className="text-gray-600 text-center mb-12">We provide stainless steel scrap pickup all across Mumbai:</p>
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
                <h3 className="text-lg font-semibold mb-4 text-slate-700 flex items-center">
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
          <p className="text-center text-xl font-semibold text-slate-700 mt-12">Wherever you are → Scrapiz reaches you.</p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">⭐ How Stainless Steel Scrap Pickup Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-16">Fast, simple, and fully transparent.</p>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-slate-100 text-slate-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Request Pickup</h3>
              <p className="text-gray-600">Call or fill the online form with details.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-slate-100 text-slate-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Pickup Team Arrives</h3>
              <p className="text-gray-600">Our team reaches with weighing machine and verifies the scrap.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.5 }} className="bg-white p-6 rounded-xl shadow-md">
              <div className="bg-slate-100 text-slate-700 w-16 h-16 mx-auto mb-6 rounded-full flex items-center justify-center text-3xl font-bold">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Instant Cash</h3>
              <p className="text-gray-600">We weigh the stainless steel scrap → confirm the rate → pay instantly in cash or via digital payment.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            ⭐ Benefits of Selling Stainless Steel Scrap to Scrapiz
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              "Best SS price guaranteed",
              "Quick Mumbai-wide service",
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
                <CheckCircle className="w-5 h-5 text-slate-500 mr-3 flex-shrink-0" />
                <span className="text-gray-700">{benefit}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">⭐ FAQ – Sell Stainless Steel Scrap in Mumbai</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="from-slate-700 to-slate-900 bg-gradient-to-r text-white">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">📞 Call Now for Stainless Steel Scrap Pickup: +91 8828700630</h2>
            <p className="text-xl mb-2">🚚 Free Pickup | Instant Cash | Honest Weighing</p>
            <p className="text-slate-200 mb-8">🔥 Scrapiz – Mumbai's Trusted Stainless Steel Scrap Buyer</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(serviceName)}
                aria-label="Book stainless steel scrap pickup now"
                className="bg-white text-slate-900 font-bold py-3 px-10 rounded-full shadow-lg hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-slate-500 transition-all duration-300 transform hover:scale-105"
              >
                Book Free Pickup Now
              </button>
              <a href="tel:+918828700630" aria-label="Call Scrapiz" className="bg-transparent border-2 border-white text-white font-bold py-3 px-10 rounded-full hover:bg-white hover:text-slate-900 transition-colors duration-300 inline-flex items-center justify-center">
                <Phone className="w-5 h-5 mr-3"/> Call Us Now
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StainlessSteelScrapPage;
