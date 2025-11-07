import React from 'react';
import { MessageCircle, Phone } from 'lucide-react';

const FloatingButtons = () => {
  return (
    <>
      {/* WhatsApp Button - Left Side */}
      <a
        href="https://wa.me/919205222170"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-6 bottom-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Chat on WhatsApp"
        data-testid="whatsapp-floating-button"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute left-full ml-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Chat with us
        </span>
      </a>

      {/* Call Button - Right Side */}
      <a
        href="tel:+919205222170"
        className="fixed right-6 bottom-6 z-50 bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 group"
        aria-label="Call us"
        data-testid="call-floating-button"
      >
        <Phone className="h-6 w-6" />
        <span className="absolute right-full mr-3 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Call us now
        </span>
      </a>
    </>
  );
};

export default FloatingButtons;