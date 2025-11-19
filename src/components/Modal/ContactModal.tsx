'use client';

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import ContactForm from '../Form/ContactForm';

const ContactModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasBeenClosed, setHasBeenClosed] = useState(false);

  useEffect(() => {
    const hasSubmitted = localStorage.getItem('hasSubmittedContactForm') === 'true';
    if (hasSubmitted) {
      return;
    }

    const timer = setTimeout(() => {
      if (!hasBeenClosed) {
        setIsOpen(true);
      }
    }, 30000);

    return () => clearTimeout(timer);
  }, [hasBeenClosed]);

  const closeModal = () => {
    setIsOpen(false);
    setHasBeenClosed(true);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-white/30 backdrop-blur-md z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative bg-transparent rounded-3xl w-full max-w-4xl mx-auto"
            onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
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
