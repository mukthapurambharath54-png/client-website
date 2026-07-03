import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('zenex_cookies');
    if (!accepted) {
      const t = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(t);
    }
  }, []);

  const handle = (val) => {
    localStorage.setItem('zenex_cookies', val);
    setVisible(false);
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.35, ease: 'easeOut' }}
          className="fixed z-[60] bottom-4 left-4 right-4 sm:left-auto sm:right-5 sm:bottom-5 sm:w-[340px] bg-white rounded-2xl shadow-2xl border border-slate-200 p-4 sm:p-5"
          role="dialog"
          aria-label="Cookie settings"
        >
          <button
            onClick={() => handle('rejected')}
            className="absolute top-3 right-3 text-slate-400 hover:text-slate-700"
            aria-label="Close"
            type="button"
          >
            <X className="w-4 h-4" />
          </button>
          <h4 className="text-sm sm:text-base font-semibold text-slate-900 mb-1 pr-6">Cookie Settings</h4>
          <p className="text-[12px] sm:text-xs text-slate-600 leading-relaxed mb-4">
            We use cookies to enhance your experience, analyze site traffic and deliver personalized content.
          </p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => handle('rejected')}
              className="flex-1 bg-slate-100 hover:bg-slate-200 text-slate-800 text-sm font-medium py-2 rounded-lg transition-colors"
            >
              Reject
            </button>
            <button
              type="button"
              onClick={() => handle('accepted')}
              className="flex-1 bg-slate-900 hover:bg-black text-white text-sm font-medium py-2 rounded-lg transition-colors"
            >
              Accept
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieBanner;
