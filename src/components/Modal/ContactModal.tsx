'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from '../Form/ContactForm';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Check if user has submitted the form (persistent across visits)
    const hasSubmitted = localStorage.getItem('hasSubmittedContactForm') === 'true';
    if (hasSubmitted) {
      return;
    }

    // Check if modal was already closed in this session (only for current visit)
    const hasClosedThisSession = sessionStorage.getItem('hasClosedContactModal') === 'true';
    if (hasClosedThisSession) {
      return;
    }

    // Show modal after 30 seconds
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 30000);

    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    // Mark modal as closed for this session only
    sessionStorage.setItem('hasClosedContactModal', 'true');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/30 backdrop-blur-md z-[999] flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-transparent rounded-3xl w-full mt-16 max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <ContactForm onSuccess={closeModal} />
            <button
              onClick={closeModal}
              className="absolute -top-2 -right-2 bg-white rounded-full p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-all shadow-lg"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;