
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, MapPin, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';

const scrapTypes = [
  { value: "scrap-collection", label: "Scrap Collection" },
  { value: "demolition-service", label: "Demolition Service" },
  { value: "dismantling", label: "Dismantling" },
  { value: "paper-shredding", label: "Paper Shredding" },
  { value: "society-tie-up", label: "Society Tie-Up" },
  { value: "junk-removal", label: "Junk Removal Service" },
];

const BookingModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    service: '',
    address: '',
  });
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = 'Name is required.';
    if (!formData.mobile) {
      newErrors.mobile = 'Mobile number is required.';
    } else if (!/^\d{10}$/.test(formData.mobile)) {
      newErrors.mobile = 'Please enter a valid 10-digit mobile number.';
    }
    if (!formData.service) newErrors.service = 'Please select a service.';
    if (!formData.address) newErrors.address = 'Address is required.';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const { name, mobile, service, address } = formData;
      const message = `New Booking Request:\n\n*Name:* ${name}\n*Mobile:* ${mobile}\n*Service:* ${service}\n*Address:* ${address}`;
      const whatsappUrl = `https://wa.me/918828700630?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      onClose();
      setFormData({ name: '', mobile: '', service: '', address: '' }); // Reset form
    }
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-auto"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6 relative">
              <button onClick={onClose} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors">
                <X size={24} />
              </button>
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-gray-800">Schedule a Pickup</h2>
                <p className="text-gray-500">Fill in the details to book your pickup.</p>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input type="text" name="name" placeholder="Full Name" className="pl-10" value={formData.name} onChange={handleChange} />
                  {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                </div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input type="tel" name="mobile" placeholder="Mobile Number" className="pl-10" value={formData.mobile} onChange={handleChange} />
                  {errors.mobile && <p className="text-red-500 text-xs mt-1">{errors.mobile}</p>}
                </div>
                <div className="relative">
                  <Wrench className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Select name="service" className="pl-10" value={formData.service} onChange={handleChange}>
                    <option value="">Select Service</option>
                    {scrapTypes.map(type => <option key={type.value} value={type.label}>{type.label}</option>)}
                  </Select>
                  {errors.service && <p className="text-red-500 text-xs mt-1">{errors.service}</p>}
                </div>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input type="text" name="address" placeholder="Pickup Address" className="pl-10" value={formData.address} onChange={handleChange} />
                  {errors.address && <p className="text-red-500 text-xs mt-1">{errors.address}</p>}
                </div>
                <Button type="submit" size="lg" className="w-full">
                  Book on WhatsApp
                </Button>
              </form>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
