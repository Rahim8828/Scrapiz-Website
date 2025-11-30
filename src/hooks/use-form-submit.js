import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from '@/components/ui/use-toast';

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ Your EmailJS credentials
  const SERVICE_ID = 'service_shh3yda';
  const TEMPLATE_ID = 'template_kjmxhx3';
  const PUBLIC_KEY = 'Fj--iqarw_RiBWEcq';

  const handleSubmit = async (formData, formElement) => {
    setIsSubmitting(true);

    if (!formElement) {
        toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "Form element not found. Please try again.",
        });
        setIsSubmitting(false);
        return;
    }

    try {
        await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formElement, PUBLIC_KEY);
        toast({
            title: "Success!",
            description: "Pickup request submitted successfully!",
        });
    } catch (error) {
        console.error('EmailJS Error:', error);
        toast({
            variant: "destructive",
            title: "Submission Failed",
            description: "Something went wrong. Please try again.",
        });
    } finally {
        setIsSubmitting(false);
    }
  };

  return { isSubmitting, handleSubmit };
};
