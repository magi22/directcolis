import React, { useState, useEffect, useRef } from 'react';
import logoPaysageCouleur from './assets/images/logo-paysage-couleur.png';
import logoPaysageBlanc from './assets/images/logo-paysage-blanc.png';
import aboutImg from './assets/images/le3.jpg';
import testimonial1 from './assets/images/testimonial 1.jpg';
import testimonial2 from './assets/images/testimonial 2.jpg';
import testimonial3 from './assets/images/testimonial 3.jpg';
import testimonial4 from './assets/images/testimonial 4.jpg';
import blog1 from './assets/images/1.jpg';
import blog2 from './assets/images/2.jpg';
import blog3 from './assets/images/3.jpg';
import numeroImg from './assets/images/numero.png';
import Chatbot from './components/Chatbot';
import { 
  Package, MapPin, CheckCircle, ShieldCheck, Smartphone, 
  BarChart3, Users, QrCode, Camera, FileSignature, 
  Clock, Truck, ArrowRight, Search, Menu, X, 
  ChevronDown, Box, FileSpreadsheet, Printer, Database,
  Check, Navigation, AlertTriangle, RefreshCcw, LayoutDashboard,
  ChevronUp, Play, Star, Globe, Headset, CheckCircle2, Plane,
  PhoneCall, PackageOpen, Calendar, MessageSquare, Bike, Car
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// ─── Translations ─────────────────────────────────────────────
const translations = {
  fr: {
    nav: ['À propos', 'Services', 'Suivi', 'FAQ', 'Contact'],
    navHrefs: ['a-propos', 'services', 'suivi', 'faq', 'contact'],
    demo: 'Demander une démo',
    trackTitle: 'Suivre ma commande',
    trackPlaceholder: 'Entrez votre numéro de suivi (ex: DC-84729)',
    trackBtn: 'Suivre',
    trackHint: 'Recherche par numéro de colis ou référence client.',
    heroBadge: 'Suivi en temps réel · Sénégal',
    heroH1a: 'Suivez, gérez et livrez vos colis avec une',
    heroH1b: 'traçabilité complète.',
    heroP: "Direct Colis vous permet de piloter chaque étape de vos expéditions grâce à un suivi structuré, un système de scan QR code, une livraison sécurisée et une preuve fiable à l'arrivée.",
    heroCta1: 'Suivre un colis',
    heroCta2: 'Demander une démo',
    statsLabels: ['Colis livrés', 'Taux succès', 'Villes couvertes'],
  },
  en: {
    nav: ['About', 'Services', 'Tracking', 'FAQ', 'Contact'],
    navHrefs: ['a-propos', 'services', 'suivi', 'faq', 'contact'],
    demo: 'Request a demo',
    trackTitle: 'Track my order',
    trackPlaceholder: 'Enter your tracking number (e.g. DC-84729)',
    trackBtn: 'Track',
    trackHint: 'Search by parcel number or client reference.',
    heroBadge: 'Real-time tracking · Senegal',
    heroH1a: 'Track, manage and deliver your parcels with full',
    heroH1b: 'traceability.',
    heroP: 'Direct Colis lets you control every step of your shipments through structured tracking, QR code scanning, secured delivery and reliable proof of receipt.',
    heroCta1: 'Track a parcel',
    heroCta2: 'Request a demo',
    statsLabels: ['Parcels delivered', 'Success rate', 'Cities covered'],
  },
} as const;
type Lang = keyof typeof translations;

// Elegant, smooth easing curve (similar to Apple's spring/ease-out)
const customEase = [0.16, 1, 0.3, 1];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 }
  }
};

// ─── Animated counter hook ───────────────────────────────────
function useCounter(target: number, duration = 2000, start = false) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [start, target, duration]);
  return count;
}

// ─── Stats counter card ───────────────────────────────────────
function StatCard({ value, suffix, label, delay }: { value: number; suffix: string; label: string; delay: number }) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCounter(value, 2000, visible);
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={visible ? { opacity: 1, y: 0 } : {}}
      transition={{ delay, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="text-center px-6 py-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
    >
      <p className="text-3xl font-black text-blue-950 tabular-nums">
        {count.toLocaleString('fr-FR')}{suffix}
      </p>
      <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">{label}</p>
    </motion.div>
  );
}

// ─── Floating particles background ───────────────────────────
function Particles() {
  const particles = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 8 + 6,
    delay: Math.random() * 4,
  }));
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-red-600/20"
          style={{ left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size }}
          animate={{ y: [0, -30, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState<Lang>('fr');
  const t = translations[lang];
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [openFaqIndex2, setOpenFaqIndex2] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const toggleFaq2 = (index: number) => {
    setOpenFaqIndex2(openFaqIndex2 === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900 overflow-x-hidden">
      {/* Scan line futuriste (subtil) */}
      <div className="scan-line" aria-hidden="true" />

      {/* Chatbot flottant */}
      <Chatbot />

      {/* 1. Header — fixed */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100/60 shadow-[0_1px_24px_rgba(0,0,0,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">

            {/* Logo */}
            <a href="#accueil" className="flex items-center shrink-0">
              <img src={logoPaysageCouleur} alt="Direct Colis" className="h-11 w-auto object-contain" />
            </a>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-7">
              {t.nav.map((item, i) => (
                <a
                  key={item}
                  href={`#${t.navHrefs[i]}`}
                  className="text-sm font-medium text-slate-600 hover:text-blue-950 transition-colors relative group py-2 whitespace-nowrap"
                >
                  {item}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-red-600 transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              ))}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Phone — large screens only */}
              <div className="hidden lg:flex items-center gap-2 text-blue-950 font-bold bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                <PhoneCall className="w-3.5 h-3.5 text-red-600 shrink-0" />
                <span className="text-xs">+221 78 542 17 33</span>
              </div>

              {/* Lang switcher */}
              <div className="flex items-center bg-slate-100 rounded-lg p-0.5 gap-0.5">
                {(['fr', 'en'] as Lang[]).map((l) => (
                  <button
                    key={l}
                    onClick={() => setLang(l)}
                    className={`px-2.5 py-1 text-xs font-bold rounded-md transition-all duration-200 uppercase tracking-wide ${
                      lang === l
                        ? 'bg-blue-950 text-white shadow-sm'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    {l}
                  </button>
                ))}
              </div>

              {/* Demo CTA */}
              <button className="hidden md:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-red-600/20 hover:-translate-y-0.5 whitespace-nowrap">
                {t.demo}
              </button>

              {/* Mobile burger */}
              <button
                className="md:hidden p-2 text-slate-600 hover:text-blue-950 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: customEase }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 px-4 py-4 space-y-1 shadow-xl overflow-hidden"
            >
              {t.nav.map((item, i) => (
                <a
                  key={item}
                  href={`#${t.navHrefs[i]}`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center gap-3 text-base font-medium text-slate-800 px-3 py-2.5 hover:bg-slate-50 rounded-xl transition-colors"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-red-600 shrink-0" />
                  {item}
                </a>
              ))}
              <div className="pt-3 border-t border-slate-100 mt-2 flex gap-2">
                <button className="flex-1 px-5 py-3 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-xl transition-colors">
                  {t.demo}
                </button>
                <div className="flex items-center bg-slate-100 rounded-xl p-0.5 gap-0.5">
                  {(['fr', 'en'] as Lang[]).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-2 text-xs font-bold rounded-lg transition-all uppercase ${
                        lang === l ? 'bg-blue-950 text-white' : 'text-slate-500'
                      }`}
                    >
                      {l}
                    </button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main className="pt-20">
        {/* 2. Hero */}
        <section id="accueil" className="relative pt-20 pb-24 lg:pt-32 lg:pb-32 overflow-hidden bg-gradient-to-b from-slate-50/50 to-white bg-grid">
          <Particles />
          {/* Background orbs */}
          <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[800px] h-[800px] bg-blue-50/60 rounded-full blur-3xl -z-10"></div>
          <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-red-50/40 rounded-full blur-3xl -z-10"></div>
          {/* Futuristic corner accent */}
          <div className="absolute top-0 left-0 w-48 h-48 border-l-2 border-t-2 border-red-600/10 rounded-tl-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-48 h-48 border-r-2 border-b-2 border-blue-950/10 rounded-br-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
                className="max-w-2xl"
              >
                {/* Badge live */}
                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-6">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                  </span>
                  <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{t.heroBadge}</span>
                </motion.div>

                <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl lg:text-6xl font-bold text-blue-950 leading-[1.15] tracking-tight mb-6">
                  {t.heroH1a} <span className="text-red-600 text-glow-red">{t.heroH1b}</span>
                </motion.h1>
                <motion.p variants={fadeInUp} className="text-lg sm:text-xl text-slate-600 mb-8 leading-relaxed font-light">
                  {t.heroP}
                </motion.p>

                <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/40 hover:-translate-y-0.5 glow-red gradient-border">
                    {t.heroCta1}
                  </button>
                  <button className="inline-flex items-center justify-center px-7 py-3.5 text-base font-medium text-blue-950 bg-white border border-slate-200 hover:border-blue-950 hover:bg-slate-50 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    {t.heroCta2}
                  </button>
                </motion.div>

                <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-slate-500 mb-10">
                  {['QR Code', 'Tracking', 'OTP', 'Photo', 'GPS'].map((item) => (
                    <div key={item} className="flex items-center gap-1.5">
                      <CheckCircle className="h-4 w-4 text-red-600" /> {item}
                    </div>
                  ))}
                </motion.div>

                {/* Stat counters */}
                <motion.div variants={fadeInUp} className="grid grid-cols-3 gap-3">
                  <StatCard value={1000000} suffix="+" label={t.statsLabels[0]} delay={0} />
                  <StatCard value={98} suffix="%" label={t.statsLabels[1]} delay={0.1} />
                  <StatCard value={50} suffix="+" label={t.statsLabels[2]} delay={0.2} />
                </motion.div>
              </motion.div>

              {/* Hero Visual / Mockup - Elegant Version */}
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: customEase, delay: 0.2 }}
                className="relative mx-auto w-full max-w-lg lg:max-w-none"
              >
                {/* Decorative offset background */}
                <div className="absolute inset-0 bg-blue-950/5 rounded-3xl transform rotate-3 scale-105 -z-10 transition-transform duration-700 hover:rotate-6"></div>
                
                <motion.div 
                  animate={{ y: [-8, 8, -8] }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                  className="bg-white border border-slate-100 rounded-2xl shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] p-8 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between mb-6 pb-5 border-b border-slate-100">
                    <div>
                      <p className="text-sm text-slate-500 font-medium mb-1">Colis #DC-84729</p>
                      <h3 className="text-xl font-bold text-blue-950">En cours de livraison</h3>
                    </div>
                    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                      </span>
                      Suivi en direct
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-6 mb-2">
                    {/* Tracking Steps */}
                    <div className="flex flex-col justify-center">
                      <div className="relative pl-8 pb-8 border-l-2 border-red-600 ml-3">
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-red-600 border-4 border-white shadow-sm"></div>
                        <p className="text-sm font-bold text-blue-950">Aujourd'hui, 09:45</p>
                        <p className="text-sm text-slate-600 mt-0.5">Pris en charge par le livreur</p>
                      </div>
                      <div className="relative pl-8 pb-8 border-l-2 border-slate-100 ml-3">
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-200 border-4 border-white"></div>
                        <p className="text-sm font-bold text-slate-400">Livraison estimée</p>
                        <p className="text-sm text-slate-400 mt-0.5">Entre 14:00 et 16:00</p>
                      </div>
                      <div className="relative pl-8 ml-3">
                        <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full bg-slate-200 border-4 border-white"></div>
                        <p className="text-sm font-bold text-slate-400">Remise au destinataire</p>
                        <p className="text-sm text-slate-400 mt-0.5">Validation par OTP requise</p>
                      </div>
                    </div>

                    {/* QR Code / Barcode Scanner */}
                    <div className="w-full h-full p-4 bg-slate-50 rounded-xl border border-slate-100 flex flex-col justify-center items-center relative overflow-hidden group">
                      {/* 4 Scanning Lasers */}
                      <motion.div animate={{ top: ['-10%', '110%'] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)] z-20" />
                      <motion.div animate={{ bottom: ['-10%', '110%'] }} transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }} className="absolute left-0 right-0 h-0.5 bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)] z-20" />
                      <motion.div animate={{ left: ['-10%', '110%'] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-0.5 bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)] z-20" />
                      <motion.div animate={{ right: ['-10%', '110%'] }} transition={{ duration: 2.2, repeat: Infinity, ease: "linear" }} className="absolute top-0 bottom-0 w-0.5 bg-red-500 shadow-[0_0_10px_2px_rgba(239,68,68,0.5)] z-20" />
                      
                      <div className="absolute inset-0 bg-blue-950/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <QrCode className="h-24 w-24 text-blue-950 opacity-80 mb-4" />
                      <div className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500 bg-white px-3 py-1.5 rounded shadow-sm border border-slate-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                        SCAN
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-5 bg-slate-50 rounded-xl flex items-center gap-4 border border-slate-100/50">
                    <div className="h-12 w-12 rounded-full bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                      <Truck className="h-5 w-5 text-blue-950" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-blue-950">Livreur : Moussa D.</p>
                      <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1">
                        <Navigation className="h-3 w-3 text-red-500" /> Véhicule géolocalisé
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 3. Barre de suivi pleine largeur */}
        <section id="suivi" className="bg-white py-10 border-b border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: customEase }}
            >
              <p className="text-slate-500 text-sm font-semibold uppercase tracking-widest text-center mb-3">
                {t.trackTitle}
              </p>
              <form onSubmit={(e) => e.preventDefault()} className="flex flex-col sm:flex-row gap-0 w-full rounded-2xl overflow-hidden shadow-[0_4px_30px_rgba(0,0,0,0.08)] border border-slate-200">
                <div className="relative flex-1 group">
                  <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                    <Search className="h-5 w-5 text-slate-400 group-focus-within:text-blue-950 transition-colors" />
                  </div>
                  <input
                    type="text"
                    className="block w-full pl-14 pr-5 py-5 bg-slate-50 text-slate-900 placeholder-slate-400 focus:outline-none focus:bg-white focus:ring-0 transition-all text-base font-medium border-0"
                    placeholder={t.trackPlaceholder}
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 px-10 py-5 bg-red-600 hover:bg-red-700 text-white font-bold text-base transition-all duration-300 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] whitespace-nowrap shrink-0"
                >
                  <Search className="w-4 h-4" />
                  {t.trackBtn}
                </button>
              </form>
              <p className="text-slate-400 text-xs text-center mt-3">{t.trackHint}</p>
            </motion.div>
          </div>
        </section>

        {/* 2.5 About Us / Expertise — redesigned */}
        <section id="a-propos" className="py-28 bg-white overflow-hidden relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">

              {/* ── COLONNE GAUCHE ── */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.9, ease: customEase }}
                className="relative min-h-[520px]"
              >
                {/* Image principale */}
                <div className="w-[75%] h-[420px] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
                  <img
                    src={aboutImg}
                    alt="Livraison Sénégal"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-blue-950/10" />
                </div>

                {/* Image secondaire */}
                <div className="absolute bottom-0 right-0 w-[60%] h-[260px] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl z-20">
                  <img
                    src={aboutImg}
                    alt="Livraison Direct Colis"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Carte flottante rouge — stats */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.85, y: 20 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.7, ease: customEase }}
                  viewport={{ once: true }}
                  className="absolute top-8 -right-4 md:-right-10 bg-red-600 rounded-[1.75rem] p-6 text-white shadow-[0_20px_60px_rgba(220,38,38,0.35)] w-60 z-30"
                >
                  {/* Avatars */}
                  <div className="flex -space-x-3 mb-3">
                    {[testimonial1, testimonial2, testimonial3, testimonial4].map((src, i) => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-red-600 object-cover" src={src} alt="Client" />
                    ))}
                  </div>
                  {/* Stars */}
                  <div className="flex text-yellow-300 mb-1">
                    {[...Array(5)].map((_,i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                  </div>
                  <p className="text-xs font-semibold mb-4 opacity-90">Clients 4.8 (3 567 avis)</p>
                  {/* Big stat */}
                  <div className="flex items-center gap-3 mb-5">
                    <span className="text-5xl font-black tracking-tight leading-none">10+</span>
                    <span className="text-xs leading-snug font-medium opacity-90">Ans<br/>d'Expérience</span>
                  </div>
                  {/* Play */}
                  <button className="flex items-center gap-3 text-sm font-bold hover:opacity-80 transition-opacity group">
                    <div className="w-10 h-10 bg-white text-red-600 rounded-full flex items-center justify-center shadow group-hover:scale-110 transition-transform">
                      <Play className="w-4 h-4 ml-0.5 fill-current" />
                    </div>
                    Voir la vidéo
                  </button>
                </motion.div>

                {/* Badge circulaire rotatif */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5, duration: 0.7, ease: customEase }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 -left-6 w-36 h-36 z-30 hidden sm:block"
                >
                  <div className="w-full h-full relative flex items-center justify-center">
                    {/* Outer dashed ring */}
                    <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/40 animate-[spin_20s_linear_infinite]" />
                    {/* Rotating text */}
                    <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-red-600 animate-[spin_20s_linear_infinite]">
                      <path id="aboutCirclePath" d="M 50,50 m -37,0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                      <text fontSize="8.5" fontWeight="bold" fill="currentColor" letterSpacing="1.5">
                        <textPath href="#aboutCirclePath">DIRECT COLIS • LIVRAISON • SÉNÉGAL •</textPath>
                      </text>
                    </svg>
                    {/* Center */}
                    <div className="w-16 h-16 bg-blue-950 rounded-full flex items-center justify-center text-white shadow-xl z-10">
                      <Truck className="h-7 w-7" />
                    </div>
                  </div>
                </motion.div>

                {/* Avion décoratif + trajectoire pointillée */}
                <svg className="absolute -left-8 top-1/3 w-28 h-28 text-red-600/25 -z-10 hidden md:block" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="5 4">
                  <path d="M10 90 Q30 50 90 10" />
                </svg>
                <motion.div
                  animate={{ x: [0, 12, 0], y: [0, -8, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute left-10 top-1/3 -z-10 hidden md:block text-red-600 opacity-40"
                >
                  <Plane className="w-5 h-5 -rotate-45" />
                </motion.div>

                {/* Ligne pointillée décorative droite */}
                <svg className="absolute -right-6 top-0 bottom-0 h-full w-6 text-red-600/20 hidden lg:block" viewBox="0 0 20 400" fill="none" stroke="currentColor" strokeWidth="1.5" strokeDasharray="6 5">
                  <path d="M10 0 Q20 100 10 200 Q0 300 10 400" />
                </svg>
              </motion.div>

              {/* ── COLONNE DROITE ── */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-100px' }}
                variants={staggerContainer}
                className="lg:pl-6"
              >
                {/* Label "À PROPOS DE NOUS" avec flèches */}
                <motion.div variants={fadeInUp} className="flex items-center gap-3 mb-5">
                  <div className="flex items-center gap-1 text-red-600">
                    <ArrowRight className="w-3.5 h-3.5 rotate-180" />
                    <div className="w-10 h-px bg-red-600" />
                    <div className="w-4 h-px bg-red-600/50" />
                  </div>
                  <span className="text-red-600 font-bold text-xs uppercase tracking-[0.2em]">À PROPOS DE NOUS</span>
                  <div className="flex items-center gap-1 text-red-600">
                    <div className="w-4 h-px bg-red-600/50" />
                    <div className="w-10 h-px bg-red-600" />
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </motion.div>

                {/* Titre */}
                <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-extrabold text-blue-950 mb-5 leading-[1.12]">
                  Notre expertise au service de vos{' '}
                  <span className="text-red-600">Livraisons au Sénégal</span>
                </motion.h2>

                {/* Description */}
                <motion.p variants={fadeInUp} className="text-slate-500 mb-8 leading-relaxed text-base max-w-xl">
                  Direct Colis joue un rôle central dans la chaîne d'approvisionnement en gérant efficacement le mouvement des marchandises, de l'origine à la destination finale. Nous offrons une solution complète adaptée aux réalités du terrain sénégalais.
                </motion.p>

                {/* Feature cards — 2 colonnes */}
                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-6 mb-8">
                  {[
                    { icon: <Globe className="w-6 h-6 text-white" />, title: 'Couverture Nationale', desc: 'Présence sur tous les axes majeurs du Sénégal.' },
                    { icon: <Headset className="w-6 h-6 text-white" />, title: 'Support 7j/7', desc: 'Une équipe dédiée disponible pour chaque requête.' },
                  ].map((f, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-full bg-red-600 flex items-center justify-center shrink-0 shadow-lg shadow-red-600/25">
                        {f.icon}
                      </div>
                      <div>
                        <h4 className="font-bold text-blue-950 text-base mb-1">{f.title}</h4>
                        <p className="text-sm text-slate-500 leading-relaxed">{f.desc}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>

                {/* Checklist 2×2 */}
                <motion.div variants={fadeInUp} className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-10">
                  {[
                    'Traçabilité 100% garantie',
                    'Satisfaction client assurée',
                    'Flotte adaptée au terrain',
                    'Livraison dans les délais',
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-white" strokeWidth={3} />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{item}</span>
                    </div>
                  ))}
                </motion.div>

                {/* Bas : CTA + fondateur */}
                <motion.div variants={fadeInUp} className="flex items-center gap-6 pt-6 border-t border-slate-100 flex-wrap">
                  {/* Bouton pill */}
                  <button className="flex items-center gap-0 bg-red-600 text-white pl-7 pr-1.5 py-1.5 rounded-full font-bold hover:bg-red-700 transition-all duration-300 shadow-lg shadow-red-600/25 hover:-translate-y-0.5 group shrink-0">
                    En savoir plus
                    <div className="w-9 h-9 ml-4 bg-blue-950 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </button>

                  <div className="h-10 w-px bg-slate-200 hidden sm:block" />

                  {/* Fondateur avec bordure pointillée animée */}
                  <div className="flex items-center gap-3">
                    <div className="relative w-14 h-14 shrink-0">
                      <div className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/50 animate-[spin_8s_linear_infinite]" />
                      <img
                        src={testimonial1}
                        alt="Amadou Fall"
                        className="w-full h-full rounded-full object-cover border-2 border-white shadow"
                      />
                    </div>
                    <div>
                      <p className="font-bold text-blue-950 text-sm">Amadou Fall</p>
                      <p className="text-xs text-slate-500 mt-0.5">Fondateur & CEO</p>
                    </div>
                    {/* Signature SVG cursive */}
                    <svg className="h-8 w-24 text-blue-950/60 ml-2 hidden sm:block" viewBox="0 0 120 40" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 30 C15 10, 25 35, 35 20 S50 5, 60 22 S75 38, 88 18 S105 8, 115 25" />
                      <path d="M20 34 L95 34" strokeWidth="0.8" opacity="0.4" />
                    </svg>
                  </div>
                </motion.div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* 5. Section services */}
        <section id="services" className="py-24 bg-slate-50/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-24"
            >
              <div className="flex items-center justify-center gap-4 text-red-600 font-bold text-sm uppercase tracking-wider mb-6">
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-8 h-px bg-red-600"></div>
                </div>
                NOS SERVICES
                <div className="flex items-center gap-1">
                  <div className="w-8 h-px bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                </div>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2 leading-tight">
                Des services logistiques efficaces
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight">
                pour votre entreprise
              </h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
            >
              {[
                {
                  icon: <Search className="h-8 w-8 text-white" />,
                  title: "Suivi de colis",
                  desc: "Un accès simple au statut, à l'historique et aux informations de livraison en temps réel pour vous et vos clients."
                },
                {
                  icon: <Truck className="h-8 w-8 text-white" />,
                  title: "Collecte & Acheminement",
                  desc: "Une gestion claire du colis, de la prise en charge jusqu'au dernier kilomètre avec une flotte adaptée au terrain."
                },
                {
                  icon: <FileSignature className="h-8 w-8 text-white" />,
                  title: "Preuve de livraison",
                  desc: "Validation par OTP, photo, signature et géolocalisation pour sécuriser chaque remise au destinataire."
                },
                {
                  icon: <AlertTriangle className="h-8 w-8 text-white" />,
                  title: "Gestion des échecs",
                  desc: "Motif détaillé, photo justificative, retour entrepôt sécurisé et reprogrammation fluide des tentatives."
                },
                {
                  icon: <Users className="h-8 w-8 text-white" />,
                  title: "Gestion grands comptes",
                  desc: "Import Excel/CSV, double identifiant, génération d'étiquettes QR et reporting complet pour les volumes importants."
                },
                {
                  icon: <LayoutDashboard className="h-8 w-8 text-white" />,
                  title: "Pilotage des opérations",
                  desc: "Visibilité totale sur les missions en cours, l'activité des livreurs et les performances globales de livraison."
                }
              ].map((service, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgb(0,0,0,0.1)] transition-shadow duration-300 px-8 pb-10 pt-14 relative text-center flex flex-col items-center group gradient-border"
                  style={{ transformStyle: 'preserve-3d', perspective: 800 }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 bg-red-600 rounded-full flex items-center justify-center border-[6px] border-white shadow-lg group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] transition-all duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-blue-950 mb-4">{service.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light mb-8 flex-grow">{service.desc}</p>
                  <a href="#" className="inline-flex items-center gap-2 text-blue-950 font-bold text-sm hover:text-red-600 transition-colors">
                    En savoir plus <ArrowRight className="w-4 h-4" />
                  </a>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 6. Section "Comment ça marche" */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          {/* Subtle dot pattern background */}
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#000 2px, transparent 2px)', backgroundSize: '30px 30px' }}></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-20"
            >
              <div className="flex items-center justify-center gap-3 text-red-600 font-bold text-sm uppercase tracking-wider mb-6">
                <Box className="w-4 h-4" />
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-4 h-px bg-red-600"></div>
                </div>
                <Bike className="w-5 h-5" />
                <div className="flex items-center gap-1">
                  <div className="w-4 h-px bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                </div>
                PROCESSUS DE TRAVAIL
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-4 h-px bg-red-600"></div>
                </div>
                <Car className="w-5 h-5" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-2 leading-tight">
                Un processus optimisé pour
              </h2>
              <h2 className="text-4xl md:text-5xl font-bold text-red-600 leading-tight">
                vos livraisons
              </h2>
            </motion.div>

            <div className="relative mt-16">
              <motion.div 
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 relative z-10"
              >
                {[
                  { 
                    num: "01", 
                    title: "Création & Assignation", 
                    desc: "Ce processus est dédié à l'enregistrement et l'attribution efficace des colis.",
                    icon: <PhoneCall className="w-8 h-8" />
                  },
                  { 
                    num: "02", 
                    title: "Collecte & Scan", 
                    desc: "Ce processus garantit la prise en charge et la traçabilité dès le premier kilomètre.",
                    icon: <Box className="w-8 h-8" />
                  },
                  { 
                    num: "03", 
                    title: "Transit & Hub", 
                    desc: "Ce processus assure le suivi et le contrôle lors des passages en entrepôt.",
                    icon: <PackageOpen className="w-8 h-8" />
                  },
                  { 
                    num: "04", 
                    title: "Livraison & Preuve", 
                    desc: "Ce processus sécurise la remise finale avec une validation fiable et géolocalisée.",
                    icon: <Truck className="w-8 h-8" />
                  }
                ].map((step, i) => (
                  <motion.div 
                    key={i} 
                    variants={fadeInUp}
                    className="relative flex flex-col items-center text-center group"
                  >
                    {/* Arrow for Desktop */}
                    {i < 3 && (
                      <div className="hidden lg:block absolute top-12 left-[calc(50%+4rem)] right-[calc(-50%+4rem)] h-0.5 bg-red-600 z-0">
                        <div className="absolute right-0 -top-[5px] w-0 h-0 border-t-[6px] border-t-transparent border-l-[8px] border-l-red-600 border-b-[6px] border-b-transparent"></div>
                      </div>
                    )}

                    {/* Icon Circle */}
                    <div className="relative mb-8 z-10">
                      <div className="w-24 h-24 rounded-full bg-red-50 shadow-lg shadow-red-600/30 group-hover:scale-110 transition-transform duration-300 border-4 border-white ring-8 ring-red-50 flex items-center justify-center">
                        <span className="text-3xl font-black text-red-600">{step.num}</span>
                      </div>
                      {/* Number Badge */}
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-950 rounded-full flex items-center justify-center text-white text-xs font-bold border-2 border-white shadow-sm">
                        {step.num}
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-blue-950 mb-4">{step.title}</h3>
                    <p className="text-slate-500 text-sm leading-relaxed font-light px-2">{step.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Bottom Banner */}
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="mt-24 bg-blue-950 rounded-[2rem] overflow-hidden relative flex flex-col md:flex-row items-center shadow-2xl"
            >
              {/* Background Map Pattern */}
              <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/world-map.png")' }}></div>
              
              {/* Left Content */}
              <div className="p-10 md:p-16 md:w-3/5 relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  Reconnu comme l'un des leaders de la <span className="text-red-500">Logistique !</span>
                </h3>
                <p className="text-slate-300 mb-8 font-light leading-relaxed max-w-md">
                  Direct Colis joue un rôle central dans l'écosystème de la chaîne d'approvisionnement en gérant efficacement le mouvement des marchandises.
                </p>
                <button className="flex items-center gap-4 bg-red-600 text-white pl-6 pr-2 py-2 rounded-full font-bold hover:bg-red-700 transition-all duration-300 group">
                  En savoir plus
                  <div className="w-10 h-10 bg-blue-950 rounded-full flex items-center justify-center group-hover:scale-105 transition-transform">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </button>
              </div>

              {/* Right Content */}
              <div className="md:w-2/5 relative h-80 md:h-auto md:absolute md:right-0 md:top-0 md:bottom-0 w-full">
                <div className="absolute inset-0 bg-red-600 md:rounded-l-[120px] overflow-hidden flex items-center justify-center">
                  <img
                    src={numeroImg}
                    alt="Numérotation Direct Colis"
                    className="relative z-10 w-full h-full object-contain p-6"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* 7. Section "Pourquoi choisir Direct Colis" */}
        <section className="py-24 bg-blue-950 text-white relative overflow-hidden bg-grid-dark">
          {/* Elegant subtle gradient overlay */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-900/40 via-blue-950 to-blue-950"></div>
          {/* Neon corner accents */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="max-w-3xl mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">Plus de visibilité. Plus de contrôle. Moins d'incertitude.</h2>
              <div className="h-1 w-20 bg-red-600 rounded-full"></div>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12"
            >
              {[
                {
                  icon: <QrCode className="h-7 w-7 text-red-500" />,
                  title: "Chaque étape est tracée",
                  desc: "Le scan QR code structure le suivi du colis tout au long du parcours."
                },
                {
                  icon: <ShieldCheck className="h-7 w-7 text-red-500" />,
                  title: "La remise est sécurisée",
                  desc: "OTP, photo, signature et géolocalisation réduisent les litiges."
                },
                {
                  icon: <Users className="h-7 w-7 text-red-500" />,
                  title: "Les équipes gagnent en clarté",
                  desc: "Les responsables ont une meilleure lecture des missions et du flux."
                },
                {
                  icon: <Smartphone className="h-7 w-7 text-red-500" />,
                  title: "Le client reste informé",
                  desc: "Le destinataire reçoit les bonnes informations au bon moment."
                },
                {
                  icon: <Box className="h-7 w-7 text-red-500" />,
                  title: "La solution s'adapte au volume",
                  desc: "Direct Colis est pensé pour les entreprises qui gèrent beaucoup d'expéditions."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="flex flex-col group"
                >
                  <div className="mb-5 h-12 w-12 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 group-hover:bg-red-600/10 group-hover:border-red-600/20 transition-colors duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-blue-100/70 leading-relaxed font-light">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 8. Section fonctionnalités clés */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 tracking-tight">Les fonctionnalités qui renforcent vos livraisons</h2>
            </motion.div>

            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {[
                { title: "Tracking public", icon: Globe, desc: "Lien de suivi en temps réel pour rassurer vos clients." },
                { title: "Historique des étapes", icon: Clock, desc: "Traçabilité complète de la prise en charge à la livraison." },
                { title: "QR code unique", icon: QrCode, desc: "Scan rapide pour chaque colis, évitant les erreurs." },
                { title: "Suivi GPS", icon: Navigation, desc: "Localisation précise des livreurs pendant leurs tournées." },
                { title: "OTP de validation", icon: ShieldCheck, desc: "Code de sécurité requis pour la remise du colis." },
                { title: "Preuve visuelle", icon: Camera, desc: "Photo ou signature électronique à la livraison." },
                { title: "Gestion des échecs", icon: AlertTriangle, desc: "Processus clair en cas d'absence ou de refus." },
                { title: "Retour entrepôt", icon: RefreshCcw, desc: "Suivi rigoureux des colis non livrés jusqu'au retour." },
                { title: "Import Excel / CSV", icon: FileSpreadsheet, desc: "Création de colis en masse simplifiée." },
                { title: "Impression", icon: Printer, desc: "Génération automatique des étiquettes d'expédition." },
                { title: "Double identifiant", icon: Package, desc: "Recherche par ID système ou référence client." },
                { title: "Reporting", icon: BarChart3, desc: "Tableaux de bord et export complet des données." }
              ].map((feature, i) => (
                <motion.div 
                  key={i} 
                  variants={fadeInUp}
                  className="group relative p-6 bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10">
                    <div className="h-12 w-12 rounded-xl bg-blue-50 text-blue-950 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-red-50 group-hover:text-red-600 transition-all duration-300">
                      <feature.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-bold text-blue-950 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* 9. Section grands comptes / entreprises */}
        <section className="py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                variants={staggerContainer}
              >
                <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 leading-tight tracking-tight">
                  Pensé pour les entreprises qui veulent mieux piloter leurs expéditions
                </motion.h2>
                <motion.p variants={fadeInUp} className="text-lg text-slate-600 mb-10 leading-relaxed font-light">
                  Direct Colis aide les structures qui gèrent des volumes réguliers à mieux organiser leurs flux, suivre leurs colis, accéder à leurs preuves de livraison et exploiter leurs données en toute sécurité.
                </motion.p>
                
                <ul className="space-y-5">
                  {[
                    "Import en masse",
                    "Étiquettes QR par lot",
                    "Suivi par ID système ou référence client",
                    "Données cloisonnées par client",
                    "Statistiques et export Excel",
                    "Reporting opérationnel"
                  ].map((point, i) => (
                    <motion.li key={i} variants={fadeInUp} className="flex items-start gap-3">
                      <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600 shrink-0"></div>
                      <span className="text-slate-700 font-medium">{point}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: customEase }}
                className="relative"
              >
                <div className="absolute inset-0 bg-blue-950/5 rounded-2xl transform translate-x-4 translate-y-4"></div>
                
                <div className="bg-white border border-slate-100 rounded-2xl shadow-xl p-8 relative z-10">
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-lg font-bold text-blue-950">Vue d'ensemble</h3>
                    <select className="bg-slate-50 border border-slate-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-blue-950/20">
                      <option>Ce mois-ci</option>
                    </select>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-8">
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-sm text-slate-500 font-medium mb-2">Total expéditions</p>
                      <p className="text-3xl font-bold text-blue-950">1,248</p>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-100">
                      <p className="text-sm text-slate-500 font-medium mb-2">Taux de succès</p>
                      <p className="text-3xl font-bold text-green-600">98.4%</p>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <FileSpreadsheet className="h-5 w-5 text-blue-950" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Import_Commandes_Oct.csv</span>
                      </div>
                      <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-md border border-green-100">Succès (450)</span>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-white border border-slate-100 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-blue-50 rounded-lg">
                          <Printer className="h-5 w-5 text-blue-950" />
                        </div>
                        <span className="text-sm font-medium text-slate-700">Génération étiquettes</span>
                      </div>
                      <span className="text-xs font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100">Terminé</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* 10. FAQ */}
        <section id="faq" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-blue-950 mb-6 tracking-tight">Questions fréquentes</h2>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-x-10 gap-y-0 items-start">
              {/* Colonne 1 */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-3"
              >
                {[
                  {
                    q: "Comment suivre un colis ?",
                    a: "Entrez simplement le numéro de suivi dans l'espace dédié pour consulter son statut et son historique."
                  },
                  {
                    q: "Quelles informations puis-je voir ?",
                    a: "Le suivi peut afficher le statut du colis, les étapes validées et certaines informations liées à la livraison."
                  },
                  {
                    q: "Comment la livraison est-elle confirmée ?",
                    a: "La confirmation peut inclure un OTP, une photo, une signature et une géolocalisation."
                  },
                  {
                    q: "Que se passe-t-il en cas d'échec de livraison ?",
                    a: "Le livreur enregistre un motif, ajoute une photo, puis le colis peut être reprogrammé ou retourné."
                  },
                  {
                    q: "Direct Colis est-il adapté aux grands volumes ?",
                    a: "Oui, la solution est pensée pour les entreprises ayant un besoin régulier et structuré."
                  },
                  {
                    q: "Peut-on importer plusieurs colis à la fois ?",
                    a: "Oui, l'import en masse via Excel ou CSV fait partie des usages prévus."
                  }
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-950/20 transition-colors duration-300"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      onClick={() => toggleFaq(i)}
                    >
                      <span className="text-base font-bold text-blue-950">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaqIndex === i ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: customEase }}
                      >
                        <ChevronDown className={`h-5 w-5 shrink-0 ml-4 ${openFaqIndex === i ? 'text-red-600' : 'text-slate-400'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaqIndex === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: customEase }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-slate-600 leading-relaxed font-light">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>

              {/* Colonne 2 */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
                className="space-y-3"
              >
                {[
                  {
                    q: "Quelles zones sont couvertes par Direct Colis ?",
                    a: "Direct Colis couvre les principaux axes du Sénégal : Dakar, Thiès, Mbour, Saint-Louis et d'autres régions en expansion."
                  },
                  {
                    q: "Comment contacter le support client ?",
                    a: "Notre équipe est joignable par téléphone au +221 78 542 17 33 ou par email à contact@directcolis.sn."
                  },
                  {
                    q: "Puis-je intégrer Direct Colis à mon système ?",
                    a: "Oui, une API est disponible pour connecter Direct Colis à votre système de gestion ou e-commerce."
                  },
                  {
                    q: "Quel type de colis puis-je expédier ?",
                    a: "Direct Colis gère tous types de colis standards. Contactez-nous pour les envois hors gabarit ou les marchandises sensibles."
                  },
                  {
                    q: "Comment générer des étiquettes QR ?",
                    a: "Les étiquettes sont générées automatiquement lors de la création de colis, en unitaire ou en lot depuis un import Excel/CSV."
                  },
                  {
                    q: "Les données de mes clients sont-elles sécurisées ?",
                    a: "Oui, les données sont cloisonnées par compte client et stockées de façon sécurisée avec accès restreint."
                  }
                ].map((faq, i) => (
                  <motion.div
                    key={i}
                    variants={fadeInUp}
                    className="border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-blue-950/20 transition-colors duration-300"
                  >
                    <button
                      className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                      onClick={() => toggleFaq2(i)}
                    >
                      <span className="text-base font-bold text-blue-950">{faq.q}</span>
                      <motion.div
                        animate={{ rotate: openFaqIndex2 === i ? 180 : 0 }}
                        transition={{ duration: 0.3, ease: customEase }}
                      >
                        <ChevronDown className={`h-5 w-5 shrink-0 ml-4 ${openFaqIndex2 === i ? 'text-red-600' : 'text-slate-400'}`} />
                      </motion.div>
                    </button>
                    <AnimatePresence>
                      {openFaqIndex2 === i && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: customEase }}
                        >
                          <div className="px-6 pb-6">
                            <p className="text-slate-600 leading-relaxed font-light">{faq.a}</p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* 10.5 Blog & News Section */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={fadeInUp}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="flex items-center justify-center gap-3 text-red-600 font-bold text-sm uppercase tracking-wider mb-6">
                <Box className="w-4 h-4" />
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-4 h-px bg-red-600"></div>
                </div>
                <Bike className="w-5 h-5" />
                <div className="flex items-center gap-1">
                  <div className="w-4 h-px bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                </div>
                BLOG & NEWS
                <div className="flex items-center gap-1">
                  <div className="w-1 h-1 rounded-full bg-red-600"></div>
                  <div className="w-2 h-1 rounded-full bg-red-600"></div>
                  <div className="w-4 h-px bg-red-600"></div>
                </div>
                <Car className="w-5 h-5" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-950 mb-6 tracking-tight">
                Dernières <span className="text-red-600">Actualités</span> de Direct Colis
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  image: blog1,
                  category: "Logistique",
                  date: "10 Mai, 2025",
                  comments: "Commentaire",
                  title: "Comment optimiser vos expéditions avec le service Cargo",
                  author: "Amadou Diallo",
                  authorImg: testimonial2
                },
                {
                  image: blog2,
                  category: "Logistique",
                  date: "10 Mai, 2025",
                  comments: "Commentaire",
                  title: "Suivre vos marchandises à travers la meilleure chaîne d'approvisionnement",
                  author: "Fatou Sow",
                  authorImg: testimonial3
                },
                {
                  image: blog3,
                  category: "Logistique",
                  date: "10 Mai, 2025",
                  comments: "Commentaire",
                  title: "Comment mesurer le succès de vos livraisons ?",
                  author: "Cheikh Ndiaye",
                  authorImg: testimonial4
                }
              ].map((post, i) => (
                <motion.div 
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-50px" }}
                  variants={fadeInUp}
                  className="group rounded-2xl bg-white border border-slate-100 shadow-lg shadow-slate-200/50 hover:shadow-xl hover:shadow-slate-200/80 transition-all duration-300 flex flex-col h-full"
                >
                  {/* Image Container */}
                  <div className="relative h-64 rounded-t-2xl overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {/* Category Badge - top left */}
                    <div className="absolute top-4 left-4 z-10">
                      <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
                        <span className="w-1.5 h-1.5 rounded-full bg-white/80 inline-block"></span>
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-8 pt-6 flex flex-col flex-grow">
                    {/* Category label text */}
                    <p className="text-red-600 text-xs font-bold uppercase tracking-widest mb-3">{post.category}</p>
                    {/* Meta Info */}
                    <div className="flex items-center gap-6 text-sm text-slate-500 mb-4 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-red-600" />
                        {post.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="w-4 h-4 text-red-600" />
                        {post.comments}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-blue-950 mb-6 group-hover:text-red-600 transition-colors cursor-pointer leading-snug flex-grow">
                      {post.title}
                    </h3>

                    {/* Footer / Author */}
                    <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-red-100 p-0.5">
                          <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover rounded-full" />
                        </div>
                        <div>
                          <p className="font-bold text-blue-950 text-sm">{post.author}</p>
                          <p className="text-slate-500 text-xs">{post.date}</p>
                        </div>
                      </div>
                      <button className="w-10 h-10 rounded-full bg-red-600 text-white flex items-center justify-center group-hover:bg-blue-950 transition-colors shadow-md">
                        <ArrowRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* 10.8 Live ticker */}
        <div className="bg-blue-950 py-3 overflow-hidden relative border-y border-white/5">
          <motion.div
            animate={{ x: ['0%', '-50%'] }}
            transition={{ duration: 28, repeat: Infinity, ease: 'linear' }}
            className="flex items-center gap-12 whitespace-nowrap"
          >
            {[...Array(2)].map((_, rep) => (
              <React.Fragment key={rep}>
                {[
                  { city: 'Dakar', name: 'Ibrahima S.', status: 'Livré ✓' },
                  { city: 'Thiès', name: 'Fatou N.', status: 'En route →' },
                  { city: 'Mbour', name: 'Cheikh D.', status: 'Livré ✓' },
                  { city: 'Saint-Louis', name: 'Aïssatou B.', status: 'En route →' },
                  { city: 'Kaolack', name: 'Oumar F.', status: 'Livré ✓' },
                  { city: 'Ziguinchor', name: 'Mariama C.', status: 'En route →' },
                  { city: 'Dakar', name: 'Abdou T.', status: 'Livré ✓' },
                ].map((item, i) => (
                  <span key={i} className="inline-flex items-center gap-3 text-sm text-blue-200/70">
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
          </motion.div>
        </div>

        {/* 11. CTA final */}
        <section className="py-24 bg-blue-950 relative overflow-hidden bg-grid-dark">
          {/* Elegant subtle background */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/50 via-blue-950 to-blue-950"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-red-600/5 rounded-full blur-3xl pointer-events-none"></div>
          
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight tracking-tight">
              Besoin d'une logistique plus claire et mieux suivie ?
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-xl text-blue-100/80 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
              Découvrez comment Direct Colis peut vous aider à mieux organiser vos livraisons, renforcer votre traçabilité et sécuriser vos preuves de remise.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-red-600 hover:bg-red-700 rounded-xl transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 hover:-translate-y-0.5">
                Demander une démo
              </button>
              <button className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-white/5 border border-white/20 hover:bg-white/10 hover:border-white/40 rounded-xl transition-all duration-300 hover:-translate-y-0.5">
                Nous contacter
              </button>
            </motion.div>
          </motion.div>
        </section>
      </main>

      {/* 12. Footer */}
      <footer id="contact" className="bg-blue-950 border-t border-white/10 pt-16 pb-8 relative z-10 bg-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="md:col-span-1">
              <div className="mb-6">
                <img src={logoPaysageBlanc} alt="Direct Colis" className="h-12 w-auto object-contain" />
              </div>
              <p className="text-blue-200/60 text-sm leading-relaxed font-light">
                Solution logistique moderne pour le suivi, la gestion et la livraison sécurisée de vos expéditions.
              </p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-5">Solution</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">Suivi de colis</a></li>
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">Preuve de livraison</a></li>
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">Gestion grands comptes</a></li>
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">API & Intégrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">Entreprise</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">À propos</a></li>
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">Contact</a></li>
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">Mentions légales</a></li>
                <li><a href="#" className="text-blue-200/60 hover:text-white text-sm transition-colors">Confidentialité</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-5">Contact</h4>
              <ul className="space-y-3">
                <li className="text-blue-200/60 text-sm flex items-center gap-2">
                  <PhoneCall className="w-4 h-4" /> +221 78 542 17 33
                </li>
                <li className="text-blue-200/60 text-sm flex items-center gap-2">
                  <Globe className="w-4 h-4" /> contact@directcolis.sn
                </li>
                <li className="text-blue-200/60 text-sm mt-5">
                  <button className="text-red-400 hover:text-red-300 font-medium transition-colors flex items-center gap-1 group">
                    Support client <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </li>
              </ul>
            </div>
          </div>

          <div className="neon-divider mb-8"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-blue-200/40 text-sm font-light">
              &copy; {new Date().getFullYear()} Direct Colis. Tous droits réservés.
            </p>
            <div className="flex gap-4">
              <div className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"></div>
              <div className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"></div>
              <div className="h-8 w-8 rounded-full bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"></div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
