import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PhoneCall, Menu, X, User } from 'lucide-react';
import logoPaysageCouleur from '../assets/svg/Direct colis_Plan de travail 1 copie.svg';
import { useLang } from '../i18n/LanguageContext';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const { t } = useLang();
  const { pathname } = useLocation();

  const navLinks = [
    { label: t.nav.about, path: '/a-propos' },
    { label: t.nav.services, path: '/services' },
    { label: t.nav.tracking, path: '/suivi' },
    { label: t.nav.faq, path: '/faq' },
    { label: t.nav.blog, path: '/blog' },
    { label: t.nav.contact, path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/60 shadow-[0_1px_24px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center shrink-0" aria-label="Direct Colis — Retour à l'accueil">
            <img
              src={logoPaysageCouleur}
              alt="Direct Colis"
              width="173"
              height="44"
              decoding="async"
              className="h-11 w-auto object-contain"
            />
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
            {/* Phone */}
            <a
              href="tel:+221772049283"
              aria-label="Appeler Direct Colis au +221 77 204 92 83"
              className="hidden lg:flex items-center gap-2 text-blue-950 font-bold bg-slate-50 px-3 py-2 rounded-lg border border-slate-100 hover:bg-red-50 hover:border-red-200 transition-colors"
            >
              <PhoneCall className="w-3.5 h-3.5 text-red-600 shrink-0" />
              <span className="text-xs">+221 77 204 92 83</span>
            </a>

            {/* Se connecter */}
            <a
              href="#"
              aria-label="Se connecter"
              title="Se connecter"
              className="flex items-center justify-center w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-blue-950 hover:bg-red-600 hover:text-white hover:border-red-600 transition-all duration-200"
            >
              <User className="w-4 h-4" />
            </a>

            {/* Demo CTA */}
            <Link
              to="/contact"
              className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-0.5 whitespace-nowrap"
            >
              {t.nav.demo}
            </Link>

            {/* Mobile burger */}
            <button
              type="button"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={open}
              aria-controls="mobile-nav"
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
            id="mobile-nav"
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
                {t.nav.demo}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
