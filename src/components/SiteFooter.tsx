import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { PhoneCall, Globe, ArrowRight, Instagram, Twitter } from 'lucide-react';
import logoPaysageBlanc from '../assets/svg/Direct colis_Plan de travail 1.svg';
import { useLang } from '../i18n/LanguageContext';

const ticker = [
  { city: 'Dakar', name: 'Ibrahima S.', status: 'Livré ✓' },
  { city: 'Thiès', name: 'Fatou N.', status: 'En route →' },
  { city: 'Mbour', name: 'Cheikh D.', status: 'Livré ✓' },
  { city: 'Saint-Louis', name: 'Aïssatou B.', status: 'En route →' },
  { city: 'Kaolack', name: 'Oumar F.', status: 'Livré ✓' },
  { city: 'Ziguinchor', name: 'Mariama C.', status: 'En route →' },
  { city: 'Dakar', name: 'Abdou T.', status: 'Livré ✓' },
];

export default function SiteFooter() {
  const { t } = useLang();

  return (
    <>
      {/* Live ticker — direction inversée */}
      <div className="hidden md:block bg-blue-950 py-3 overflow-hidden relative border-y border-white/5">
        <div className="ticker-track-reverse flex items-center whitespace-nowrap">
          {[...Array(2)].map((_, rep) => (
            <React.Fragment key={rep}>
              {ticker.map((item, i) => (
                <span key={i} className="inline-flex items-center gap-3 text-sm text-blue-200/70 mx-6">
                  <span className={`font-bold ${item.status.includes('✓') ? 'text-green-400' : 'text-red-400'}`}>
                    {item.status}
                  </span>
                  <span className="text-white/40">·</span>
                  <span>{item.name}</span>
                  <span className="text-white/40">·</span>
                  <span className="text-blue-300/60">{item.city}</span>
                  <span className="text-white/20 mx-2">|</span>
                </span>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-950 border-t border-white/10 pt-16 pb-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="sm:col-span-2 md:col-span-1">
              <div className="mb-6">
                <img
                  src={logoPaysageBlanc}
                  alt="Direct Colis"
                  width="192"
                  height="48"
                  loading="lazy"
                  decoding="async"
                  className="h-12 w-auto object-contain"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    const fallback = e.currentTarget.nextElementSibling as HTMLElement | null;
                    if (fallback) fallback.style.display = 'block';
                  }}
                />
                <span className="hidden text-white font-extrabold text-xl tracking-tight">Direct Colis</span>
              </div>
              <p className="text-blue-200/60 text-sm leading-relaxed font-light">
                {t.footer.tagline}
              </p>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">{t.footer.solution}</h4>
              <ul className="space-y-3">
                <li><Link to="/services/livraison-b2b" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.tracking}</Link></li>
                <li><Link to="/services/mise-a-disposition" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.proof}</Link></li>
                <li><Link to="/services/entreposage-stockage" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.enterprise}</Link></li>
                <li><Link to="/services/transport-aibd" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.api}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">{t.footer.enterprise}</h4>
              <ul className="space-y-3">
                <li><Link to="/a-propos" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.about}</Link></li>
                <li><Link to="/blog" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.blog}</Link></li>
                <li><Link to="/contact" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.contact}</Link></li>
                <li><Link to="/mentions-legales" className="text-blue-200/60 hover:text-white text-sm transition-colors">{t.footer.links.legal}</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">{t.footer.contactCol}</h4>
              <ul className="space-y-3">
                <li>
                  <a href="tel:+221772049283" className="text-blue-200/60 hover:text-white text-sm flex items-center gap-2 transition-colors">
                    <PhoneCall className="w-4 h-4 shrink-0" /> +221 77 204 92 83
                  </a>
                </li>
                <li>
                  <a href="mailto:groupefayassine@gmail.com" className="text-blue-200/60 hover:text-white text-sm flex items-center gap-2 transition-colors">
                    <Globe className="w-4 h-4 shrink-0" /> groupefayassine@gmail.com
                  </a>
                </li>
                <li className="text-blue-200/60 text-sm mt-5">
                  <Link to="/contact" className="text-red-400 hover:text-red-300 font-medium transition-colors flex items-center gap-1 group">
                    {t.footer.supportClient} <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex flex-col items-center sm:items-start gap-1">
                <p className="text-blue-200/40 text-sm font-light">
                  &copy; {new Date().getFullYear()} Direct Colis. {t.footer.rights}
                </p>
                <p className="text-blue-200/30 text-xs">
                  par{' '}
                  <a href="http://wiicode.org/" target="_blank" rel="noopener noreferrer" className="text-red-400/80 hover:text-red-400 transition-colors font-bold tracking-wide">
                    WIICODE
                  </a>
                </p>
              </div>
              <div className="flex gap-3">
                <a href="#" aria-label="Instagram" className="h-9 w-9 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group">
                  <Instagram className="h-4 w-4 text-blue-200/60 group-hover:text-white transition-colors" />
                </a>
                <a href="#" aria-label="Twitter" className="h-9 w-9 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group">
                  <Twitter className="h-4 w-4 text-blue-200/60 group-hover:text-white transition-colors" />
                </a>
                <a href="#" aria-label="TikTok" className="h-9 w-9 rounded-full bg-white/5 hover:bg-red-600 flex items-center justify-center transition-all duration-300 group">
                  <svg className="h-4 w-4 fill-current text-blue-200/60 group-hover:text-white transition-colors" viewBox="0 0 24 24">
                    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.78 1.52V6.78a4.85 4.85 0 01-1.01-.09z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
