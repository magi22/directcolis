import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, Menu, X } from 'lucide-react';
import logoPaysageCouleur from '../assets/images/logo-paysage-couleur.png';

type Lang = 'fr' | 'en';

const navLinks = [
  { label: 'À propos', path: '/a-propos' },
  { label: 'Services', path: '/services' },
  { label: 'Suivi', path: '/suivi' },
  { label: 'FAQ', path: '/faq' },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact', path: '/contact' },
];

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState<Lang>(() => {
    if (typeof window === 'undefined') return 'fr';
    return (localStorage.getItem('lang') as Lang) || 'fr';
  });
  const { pathname } = useLocation();

  const handleLang = (l: Lang) => {
    setLang(l);
    localStorage.setItem('lang', l);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/60 shadow-[0_1px_24px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0">
            <img src={logoPaysageCouleur} alt="Direct Colis" className="h-11 w-auto object-contain" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-7">
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`text-sm font-medium transition-colors relative group py-2 whitespace-nowrap ${
                    active ? 'text-red-600' : 'text-slate-600 hover:text-blue-950'
                  }`}
                >
                  {link.label}
                  <span className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-red-600 transition-all duration-300 rounded-full ${
                    active ? 'w-full' : 'w-0 group-hover:w-full'
                  }`} />
                </Link>
              );
            })}
          </nav>

          {/* Right */}
          <div className="flex items-center gap-3">
            {/* Phone - large screens only */}
            <div className="hidden lg:flex items-center gap-2 text-blue-950 font-bold bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
              <PhoneCall className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span className="text-xs">+221 78 542 17 33</span>
            </div>

            {/* Lang switcher */}
            <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
              {(['fr', 'en'] as Lang[]).map((l) => (
                <button
                  key={l}
                  onClick={() => handleLang(l)}
                  className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 uppercase tracking-wide ${
                    lang === l ? 'bg-blue-950 text-white shadow-sm' : 'text-slate-500 hover:text-slate-800'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Demo CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-0.5 whitespace-nowrap"
            >
              Demander une démo
            </Link>

            {/* Mobile burger */}
            <button
              className="md:hidden p-2 text-slate-600 hover:text-blue-950 transition-colors"
              onClick={() => setOpen(!open)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-4 space-y-1 shadow-xl overflow-hidden"
          >
            {navLinks.map((link) => {
              const active = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`flex items-center gap-3 text-base font-medium px-3 py-2.5 rounded-xl transition-colors ${
                    active ? 'text-red-600 bg-red-50' : 'text-slate-800 hover:bg-slate-50'
                  }`}
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 border-t border-slate-100 mt-2">
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="flex items-center justify-center w-full px-5 py-3 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors"
              >
                Demander une démo
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
