import React from 'react';
import { Routes, Route } from 'react-router-dom';
import App from './App';
import ServicesPage from './pages/ServicesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import TrackingPage from './pages/TrackingPage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import ScrollToTop from './components/ScrollToTop';

export default function RouterApp() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/faq" element={<FAQPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/suivi" element={<TrackingPage />} />
        <Route path="/a-propos" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </>
  );
}
