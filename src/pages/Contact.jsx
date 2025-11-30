import React, { useState, useRef } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useFormSubmit } from '@/hooks/use-form-submit';

const Contact = () => {
  const formRef = useRef();
  const { isSubmitting, handleSubmit: handleFormSubmit } = useFormSubmit('template_contact');
  const [errors, setErrors] = useState({});

  const validateForm = (form) => {
    const newErrors = {};
    if (!form.name.value) newErrors.name = 'Name is required.';
    if (!form.email.value) {
      newErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(form.email.value)) {
      newErrors.email = 'Email is invalid.';
    }
    if (!form.phone.value) {
      newErrors.phone = 'Phone number is required.';
    } else if (!/^\d{10}$/.test(form.phone.value)) {
      newErrors.phone = 'Please enter a valid 10-digit phone number.';
    }
    if (!form.message.value) newErrors.message = 'Message is required.';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm(e.target.elements)) {
      handleFormSubmit(e.target.elements, formRef.current).then(() => {
        formRef.current.reset();
      });
    }
  };
  
  const officeAddress = "Shop No 08, A K Compound, Behram Baug Rd, near Tech Web Center, Anand Nagar, Jogeshwari West, Mumbai, Maharashtra 400102";
  const mapUrl = "https://www.google.com/maps/place/Scrapiz/@19.1478046,72.8362625,17z/data=!4m6!3m5!1s0x3be7b76fbfb1cb87:0xa21b6aa43e2b02af!8m2!3d19.1477995!4d72.8362625!16s%2Fg%2F11v60wlz8h?entry=ttu";
  const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.0838962849093!2d72.83368757373867!3d19.147804549717364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b76fbfb1cb87%3A0xa21b6aa43e2b02af!2sScrapiz!5e0!3m2!1sen!2sin";

  const schema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Scrapiz",
    "description": "Get in touch with Scrapiz for scrap collection services. Contact us for queries, support, or partnership opportunities.",
    "url": "https://www.scrapiz.in/contact",
    "mainEntity": {
      "@type": "Organization",
      "name": "Scrapiz",
      "url": "https://www.scrapiz.in",
      "logo": "https://www.scrapiz.in/logo.png",
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "telephone": "+91-8828700630",
          "contactType": "customer service",
          "areaServed": "IN",
          "availableLanguage": "en"
        }
      ]
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Scrapiz</title>
        <meta name="description" content="Get in touch with Scrapiz. Contact us for any queries, support, or partnership opportunities. We are here to help you." />
        <link rel="canonical" href="https://www.scrapiz.in/contact" />
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
      </Helmet>
      <div className="bg-white">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="pt-20 pb-10 sm:pt-24 sm:pb-12 lg:pb-16 text-center hero-pattern"
        >
          <div className="container mx-auto px-4 sm:px-6">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-800 mb-3 sm:mb-4"
            >
              Contact <span className="text-gradient">Us</span>
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4"
            >
              We're here to help! Whether you have a question about our services, pricing, or anything else, our team is ready to answer all your questions.
            </motion.p>
          </div>
        </motion.div>

        <section className="py-10 sm:py-12 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl space-y-6 sm:space-y-8"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">Get in Touch</h2>
                <div className="space-y-5 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold">Call Us</h4>
                      <p className="text-sm sm:text-base text-gray-600">Have a quick question? Give us a call.</p>
                      <a href="tel:+918828700630" className="text-green-600 font-medium hover:underline">+91 8828700630</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold">Email Us</h4>
                      <p className="text-sm sm:text-base text-gray-600">For detailed inquiries, send us an email.</p>
                      <a href="mailto:support@scrapiz.in" className="text-green-600 font-medium hover:underline">support@scrapiz.in</a>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center shrink-0">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
                    </div>
                    <div>
                      <h4 className="text-lg sm:text-xl font-semibold">Our Office</h4>
                      <a href={mapUrl} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-green-600 hover:underline">
                        {officeAddress}
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="bg-gray-50 p-6 sm:p-8 rounded-xl sm:rounded-2xl"
              >
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-5 sm:mb-6">Send us a Message</h2>
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4 sm:space-y-6" noValidate>
                  <div>
                    <Input name="name" type="text" placeholder="Your Name" required />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Input name="email" type="email" placeholder="Your Email" required />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Input name="phone" type="tel" placeholder="Your Phone Number" required />
                    {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Textarea name="message" placeholder="Your Message" required rows={5} />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>
                  <Button type="submit" className="w-full text-base sm:text-lg h-12 sm:h-14" size="lg" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {!isSubmitting && <Send className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />}
                  </Button>
                </form>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="pb-10 sm:pb-12 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-6 sm:mb-8">Find Us On Map</h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="h-[300px] sm:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-gray-200"
            >
               <iframe 
                src={mapEmbedUrl}
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
        </section>
      </div>
    </>
  );
};

export default Contact;
