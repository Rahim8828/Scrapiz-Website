import React, { useState, useRef, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';

/**
 * FAQSection
 * - Responsive: Tailwind layout that adapts for mobile and desktop
 * - Accessibility: aria attributes + keyboard toggling (Enter/Space)
 * - Smooth animation: measured scrollHeight used for maxHeight transitions
 * - JSON-LD: builds FAQ schema text by extracting plain text from React nodes
 */

const FAQSection = () => {
  const faqs = [
    {
      question: 'What types of scrap do you buy?',
      answer:
        'We buy almost every type of scrap material, including iron, steel, aluminum, copper, brass, e-waste (TVs, ACs, computers, appliances), and old furniture. Whether it’s household scrap or bulk scrap from businesses, Scrapiz gives you the best market rates.',
    },
    {
      question: 'How do I schedule a scrap pickup?',
      answer: (
        <>
          Scheduling a pickup with Scrapiz is simple:
          <br />
          <br />
          • Call or WhatsApp us at <strong>+91 8828700630</strong>
          <br />
          • Share photos or details of your scrap items
          <br />
          • Get an instant price quote
          <br />
          • Confirm a convenient time for collection
          <br />
          <br />
          Our team will reach your doorstep for free scrap pickup in Mumbai.
        </>
      ),
    },
    {
      question:
        'Do you provide doorstep scrap pickup in Mumbai, and is there a minimum quantity required for pickup?',
      answer:
        'Yes, Scrapiz offers free doorstep scrap pickup in Bandra, Mumbai. There is no strict minimum quantity — most normal household scrap (20–30 kg) is picked up for free. For very small quantities, a nominal ₹60 convenience fee may apply.',
    },
    {
      question: 'How are scrap rates decided?',
      answer:
        'Scrap rates depend on the current market value of the material. At Scrapiz, we ensure transparent and fair pricing using digital weighing so you always get the highest value for your scrap.',
    },
    {
      question: 'How quickly can you collect scrap?',
      answer:
        'In most cases, we provide same-day pickup service. For bulk scrap or large items, we schedule a pickup slot that fits your convenience.',
    },
    {
      question: 'What happens to the scrap after you collect it?',
      answer:
        'All collected scrap is sent for eco-friendly recycling and reuse. We are a licensed scrap buyer in Mumbai, and our goal is to reduce waste, recycle responsibly, and support a greener city.',
    },
    {
      question: 'Which areas do you serve in Mumbai?',
      answer:
        'We cover the entire Mumbai region, including Jogeshwari, Andheri, Goregaon, Malad, Bandra, Borivali, and nearby suburbs. Each area is served with free doorstep pickup and instant payment.',
    },
  ];

  // Utility: extract plain text from string or React node (children)
  const extractText = (node) => {
    if (node == null) return '';
    if (typeof node === 'string' || typeof node === 'number') return String(node);
    if (Array.isArray(node)) return node.map(extractText).join(' ');
    if (typeof node === 'object') {
      // React element with props.children
      const children = node.props?.children;
      if (!children) return '';
      // Use React.Children-like traversal
      const flat = [];
      const walk = (child) => {
        if (child == null) return;
        if (typeof child === 'string' || typeof child === 'number') flat.push(String(child));
        else if (Array.isArray(child)) child.forEach(walk);
        else if (typeof child === 'object' && child.props) walk(child.props.children);
      };
      walk(children);
      return flat.join(' ');
    }
    return '';
  };

  // Build JSON-LD FAQ Schema - ensure answers are plain text
  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: typeof faq.question === 'string' ? faq.question : extractText(faq.question),
      acceptedAnswer: {
        '@type': 'Answer',
        text:
          typeof faq.answer === 'string'
            ? faq.answer
            : extractText(faq.answer) || 'Answer available on Scrapiz website.',
      },
    })),
  };

  const [openIndex, setOpenIndex] = useState(null);
  const contentRefs = useRef([]);

  useEffect(() => {
    // keep ref array in sync
    contentRefs.current = contentRefs.current.slice(0, faqs.length);
  }, [faqs.length]);

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // keyboard handler for accessibility
  const handleKey = (e, index) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggle(index);
    }
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
      </Helmet>

      <section className="py-8 lg:py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-xl lg:text-2xl font-bold text-center mb-6 text-gray-800">
            Frequently Asked Questions
          </h2>

          {/* Card wrapper adapts for mobile and desktop */}
          <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md overflow-hidden">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div key={index} className="border-b border-gray-200">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    onClick={() => toggle(index)}
                    onKeyDown={(e) => handleKey(e, index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-sm lg:text-base font-semibold text-gray-800 focus:outline-none hover:bg-gray-50"
                  >
                    <span className="flex-1">{faq.question}</span>

                    <span
                      className={`ml-3 transform transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                      aria-hidden="true"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>

                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    aria-labelledby={`faq-button-${index}`}
                    ref={(el) => (contentRefs.current[index] = el)}
                    style={{
                      // measured maxHeight for smooth transitions
                      maxHeight: isOpen ? `${contentRefs.current[index]?.scrollHeight ?? 320}px` : '0px',
                      transition: 'max-height 0.36s ease',
                      overflow: 'hidden',
                    }}
                    className="px-4"
                  >
                    <div className="py-4 md:py-5 text-sm md:text-base text-gray-600 leading-relaxed">
                      {/* render answer (string or React node) */}
                      {typeof faq.answer === 'string' ? <p>{faq.answer}</p> : <div>{faq.answer}</div>}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-6 md:mt-8 text-sm text-gray-500">
            <p>
              Still have questions? Call or WhatsApp <strong>+91 8828700630</strong> — we’re happy to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQSection;
