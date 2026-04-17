import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Search, Package, Truck, CheckCircle, MapPin, QrCode, PhoneCall, Clock, Sparkles, Navigation } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero, { HeroHighlight } from '../components/PageHero';
import { useLang } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const stepIcons = [Package, QrCode, Truck, CheckCircle];

export default function TrackingPage() {
  const { t } = useLang();
  useSEO({ title: 'Suivre mon colis — Direct Colis', canonical: '/suivi' });
  const [trackingId, setTrackingId] = useState('');
  const [searched, setSearched] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingId.trim()) setSearched(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        <PageHero
          badge={t.trackingPage.badge}
          badgeIcon={Navigation}
          title={<>{t.trackingPage.titleA} <HeroHighlight>{t.trackingPage.titleB}</HeroHighlight>{t.trackingPage.titleSuffix}</>}
          subtitle={t.trackingPage.subtitle}
        >
          <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-0 w-full max-w-xl mx-auto rounded-2xl overflow-hidden shadow-2xl shadow-black/30 border border-white/10">
            <div className="relative flex-1">
              <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input
                type="text"
                value={trackingId}
                onChange={e => { setTrackingId(e.target.value); setSearched(false); }}
                placeholder={t.trackingPage.searchPlaceholder}
                className="w-full pl-14 pr-4 py-5 bg-white text-slate-900 placeholder-slate-400 focus:outline-none text-base font-medium"
              />
            </div>
            <button
              type="submit"
              className="flex items-center justify-center gap-2 px-8 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-base transition-all duration-300 whitespace-nowrap"
            >
              <Search className="w-5 h-5" /> {t.trackingPage.searchButton}
            </button>
          </form>
          <p className="text-blue-200/50 text-sm mt-3">{t.trackingPage.searchHint}</p>
        </PageHero>

        {/* Result zone */}
        {searched && (
          <section className="py-10 bg-slate-50 border-b border-slate-100">
            <div className="max-w-3xl mx-auto px-4">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white rounded-2xl border border-slate-200 shadow-lg p-6 sm:p-8">
                <div className="flex items-start justify-between mb-6 flex-wrap gap-4">
                  <div>
                    <p className="text-sm text-slate-400 mb-1">{t.trackingPage.resultTrackingNumber}</p>
                    <h2 className="text-xl font-extrabold text-blue-950">{trackingId.toUpperCase()}</h2>
                  </div>
                  <span className="inline-flex items-center gap-2 px-4 py-2 bg-orange-50 text-orange-600 text-sm font-bold rounded-full border border-orange-200">
                    <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
                    {t.trackingPage.resultStatus}
                  </span>
                </div>

                {/* Steps */}
                <div className="relative pl-8">
                  {t.trackingPage.steps.map((step, i, arr) => {
                    const done = i < 2;
                    const active = i === 2;
                    return (
                      <div key={i} className="relative pb-8 last:pb-0">
                        {i < arr.length - 1 && (
                          <div className={`absolute left-[-1.55rem] top-4 w-0.5 h-full ${done ? 'bg-red-600' : 'bg-slate-200'}`} />
                        )}
                        <div className={`absolute -left-9 top-0 w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                          done ? 'bg-red-600 border-red-600' : active ? 'bg-white border-red-600' : 'bg-white border-slate-200'
                        }`}>
                          {done && <CheckCircle className="w-3 h-3 text-white" />}
                          {active && <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />}
                        </div>
                        <p className={`font-semibold ${done || active ? 'text-blue-950' : 'text-slate-400'}`}>{step.label}</p>
                        <p className={`text-sm ${done || active ? 'text-slate-500' : 'text-slate-300'}`}>{step.date}</p>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100 flex items-center gap-3 text-sm text-slate-500">
                  <MapPin className="w-4 h-4 text-red-600 shrink-0" />
                  {t.trackingPage.geolocLabel} — Moussa D. · +221 78 542 17 33
                </div>
              </motion.div>
            </div>
          </section>
        )}

        {/* How it works */}
        <section className="py-20 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-3">{t.trackingPage.howItWorksTitle}</h2>
              <p className="text-slate-500">{t.trackingPage.howItWorksSubtitle}</p>
            </motion.div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
              {t.trackingPage.processSteps.map(({ label, desc }, i) => {
                const Icon = stepIcons[i];
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: i * 0.1 } } }}
                    className="text-center p-6 bg-slate-50 rounded-2xl border border-slate-100"
                  >
                    <div className="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg shadow-red-600/20">
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">{t.trackingPage.stepLabel} {i + 1}</div>
                    <h3 className="font-bold text-blue-950 mb-2">{label}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Support block */}
        <section className="py-16 bg-blue-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <Clock className="w-10 h-10 text-red-400 mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-white mb-3">{t.trackingPage.needHelp}</h2>
            <p className="text-blue-100/70 mb-8">{t.trackingPage.needHelpDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+221772049283" className="flex items-center justify-center gap-2 px-7 py-3.5 bg-white text-blue-950 font-bold rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow">
                <PhoneCall className="w-5 h-5 text-red-600" /> +221 77 204 92 83
              </a>
              <Link to="/contact" className="flex items-center justify-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl hover:-translate-y-0.5 transition-all duration-300 shadow-lg shadow-red-600/30">
                {t.faqSection.contactSupport}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
