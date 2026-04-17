import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Chatbot from './components/Chatbot';
import { AnimatePresence, motion } from 'motion/react';
import App from './App';
import ServicesPage from './pages/ServicesPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import TrackingPage from './pages/TrackingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import BlogPostPage from './pages/BlogPostPage';
import MentionsLegalesPage from './pages/MentionsLegalesPage';
import ScrollToTop from './components/ScrollToTop';

const variants = {
  initial: { opacity: 0, x: 50 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.32, ease: [0.16, 1, 0.3, 1] } },
  exit:    { opacity: 0, x: -50, transition: { duration: 0.2, ease: [0.7, 0, 1, 0.4] } },
};

export default function RouterApp() {
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Chatbot />
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          style={{ willChange: 'opacity, transform' }}
        >
          <Routes location={location}>
            <Route path="/" element={<App />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/suivi" element={<TrackingPage />} />
            <Route path="/a-propos" element={<AboutPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/mentions-legales" element={<MentionsLegalesPage />} />
          </Routes>
        </motion.div>
      </AnimatePresence>
    </>
  );
}
