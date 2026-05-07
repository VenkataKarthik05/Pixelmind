// components/WhatsAppButton.jsx
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  const phoneNumber = "919876543210";
  
  const services = [
    { name: "SEO Services", emoji: "🔍", message: "I'm interested in SEO services. Can you share more details?" },
    { name: "Google Ads", emoji: "📊", message: "I need help with Google Ads campaign management." },
    { name: "Social Media Marketing", emoji: "📱", message: "Tell me about your social media marketing services." },
    { name: "PPC Campaigns", emoji: "💰", message: "I want to run PPC campaigns for my business." },
    { name: "Lead Generation", emoji: "🎯", message: "How can you help with lead generation?" },
    { name: "Website Development", emoji: "💻", message: "I want to build a website for my business." },
    { name: "Content Marketing", emoji: "📝", message: "I need content marketing services." },
    { name: "Email Marketing", emoji: "✉️", message: "Tell me about your email marketing services." },
  ];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleServiceClick = (message) => {
    const encodedMsg = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMsg}`, "_blank");
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      <style>{`
        @keyframes pulse-ring {
          0% { transform: scale(0.8); opacity: 0.6; }
          100% { transform: scale(1.4); opacity: 0; }
        }
      `}</style>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="fixed bottom-6 right-6 z-50"
            initial={{ opacity: 0, scale: 0, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0, x: 50 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-full bg-green-500 animate-[pulse-ring_2s_ease-out_infinite]" />
              <div className="absolute inset-0 rounded-full bg-green-500 animate-[pulse-ring_2s_ease-out_infinite_1s]" />
              
              <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="relative flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-500 to-green-600 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.031 1.999c-5.517 0-10 4.483-10 10 0 1.89.53 3.66 1.45 5.19l-1.36 4.77a1 1 0 0 0 1.23 1.23l4.77-1.36a9.97 9.97 0 0 0 5.19 1.45c5.517 0 10-4.483 10-10s-4.483-10-10-10zm0 18.5c-1.68 0-3.28-.47-4.66-1.35l-.3-.18-3.5 1 1-3.5-.18-.3a8.5 8.5 0 1 1 7.64 4.33z"/>
                  <path d="M16.5 13.5c-.25-.12-1.55-.76-1.8-.85-.25-.09-.45-.12-.65.12-.2.24-.75.85-.92 1.02-.17.18-.35.2-.6.08-.25-.12-1.07-.4-2.04-1.27-.75-.67-1.26-1.5-1.4-1.75-.15-.25-.02-.38.1-.5.12-.12.25-.3.38-.45.12-.15.16-.25.24-.42.08-.17.04-.3-.02-.42-.06-.12-.65-1.56-.89-2.15-.23-.57-.47-.48-.65-.48-.17 0-.35 0-.55.02-.2 0-.5.08-.75.35-.25.27-1 .98-1 2.4 0 1.42 1.05 2.8 1.2 3 .15.2 2.07 3.16 5.02 4.43.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.57-.08 1.75-.72 2-1.42.25-.7.25-1.3.18-1.42-.07-.12-.25-.2-.5-.32z"/>
                </svg>
              </motion.button>

              {/* Popup with services */}
              <AnimatePresence>
                {isOpen && (
                  <motion.div
                    className="absolute bottom-20 right-0 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden"
                    initial={{ opacity: 0, y: 20, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 20, scale: 0.9 }}
                    transition={{ type: "spring", damping: 25 }}
                  >
                    <div className="bg-gradient-to-r from-green-600 to-green-500 p-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                            <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M12.031 1.999c-5.517 0-10 4.483-10 10 0 1.89.53 3.66 1.45 5.19l-1.36 4.77a1 1 0 0 0 1.23 1.23l4.77-1.36a9.97 9.970 0 0 0 5.19 1.45c5.517 0 10-4.483 10-10s-4.483-10-10-10z"/>
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-white text-sm">WhatsApp Us</h3>
                            <p className="text-xs text-green-100">Select a service</p>
                          </div>
                        </div>
                        <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </div>
                    </div>

                    <div className="p-4 max-h-96 overflow-y-auto">
                      {services.map((service, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => handleServiceClick(service.message)}
                          className="w-full flex items-center gap-3 px-4 py-3 mb-2 bg-gray-50 border border-gray-200 rounded-xl hover:border-green-500 hover:bg-green-50 transition-all"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-2xl">{service.emoji}</span>
                          <span className="flex-1 text-left text-sm font-medium text-gray-800">{service.name}</span>
                          <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}