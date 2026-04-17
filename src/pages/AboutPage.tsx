import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck, CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight,
  Sparkles, Users, Truck, Award, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/le3.jpg';
import blog2 from '../assets/images/2.jpg';
import blog3 from '../assets/images/3.jpg';
import logoComprimerBlanc from '../assets/svg/Direct colis-06.svg';
import service1 from '../assets/images/service 1.png';
import service2 from '../assets/images/service 2.png';
import service3 from '../assets/images/service 3.png';
import service4 from '../assets/images/service 4.png';
import service5 from '../assets/images/service 5.png';
import service6 from '../assets/images/service 6.jpg';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero, { HeroHighlight } from '../components/PageHero';
import { useLang } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const tabIds = ['qui', 'pourquoi', 'comment'] as const;
const tabIcons = { qui: Users, pourquoi: Award, comment: Target };

type TabContent = {
  title: string;
  text: string;
  bullets: string[];
  image: string;
  badge: string;
};

const tabContent: Record<string, TabContent> = {
  qui: {
    title: 'Direct Colis, votre partenaire logistique au Sénégal',
    text: "Direct Colis est une solution logistique moderne conçue pour répondre aux réalités du terrain sénégalais. Fondée à Dakar, notre entreprise accompagne les professionnels dans la gestion, le suivi et la livraison sécurisée de leurs colis à travers tout le pays.",
    bullets: [
      "Plus de 10 ans d'expérience dans la logistique",
      "Plus d'1 million de colis traités",
      'Présence dans plus de 50 villes',
      'Taux de satisfaction client à 98%',
    ],
    image: aboutImg,
    badge: 'Certifié & sécurisé',
  },
  pourquoi: {
    title: 'Une logistique fiable, tracée et sécurisée',
    text: "Choisir Direct Colis, c'est opter pour une solution qui place la traçabilité et la sécurité au cœur de chaque livraison. Notre technologie et notre expertise terrain nous permettent d'offrir un service inégalé sur le marché sénégalais.",
    bullets: [
      'Suivi en temps réel à chaque étape',
      'Validation par OTP, photo et GPS',
      'Support client 7j/7',
      'Couverture nationale étendue',
    ],
    image: blog2,
    badge: 'Technologie avancée',
  },
  comment: {
    title: 'Un processus simple, de la commande à la livraison',
    text: "Notre système a été pensé pour être simple d'utilisation tout en garantissant une traçabilité maximale. En quatre étapes clés, vos colis sont collectés, acheminés et livrés avec preuve à l'appui.",
    bullets: [
      '1. Création et assignation du colis',
      '2. Collecte et scan QR code',
      '3. Transit et passage en hub',
      '4. Livraison et preuve de remise',
    ],
    image: blog3,
    badge: 'Processus éprouvé',
  },
};

const testimonials = [
  {
    name: 'Ibrahima Sarr',
    role: 'Directeur e-commerce, Dakar',
    text: "Direct Colis a complètement transformé notre gestion des livraisons. Le suivi en temps réel et la preuve de livraison ont éliminé tous nos litiges clients. Je recommande sans hésitation.",
  },
  {
    name: 'Fatou Ndiaye',
    role: 'Responsable logistique, Thiès',
    text: "Un service fiable, rapide et professionnel. Nos clients apprécient de pouvoir suivre leur colis en direct. L'équipe Direct Colis est toujours disponible pour répondre à nos besoins.",
  },
  {
    name: 'Cheikh Diop',
    role: 'Gérant boutique, Mbour',
    text: 'Depuis que nous utilisons Direct Colis, notre taux de réclamations a baissé de 80%. Le système OTP et les photos de livraison nous protègent et rassurent nos clients.',
  },
  {
    name: 'Aïssatou Bâ',
    role: 'Entrepreneur, Saint-Louis',
    text: "L'import CSV est un gain de temps énorme pour nous. En quelques clics, 500 colis sont créés et les étiquettes générées automatiquement. La plateforme est intuitive et puissante.",
  },
  {
    name: 'Oumar Fall',
    role: 'Responsable supply chain',
    text: 'Le tableau de bord de pilotage nous donne une visibilité totale sur nos opérations. Nous gérons des centaines de livraisons par jour avec la même facilité qu\'une seule.',
  },
];

const statIcons = [Truck, Target, Award, Sparkles];
const statValues = ['6', '24h', 'Dakar', '100%'];

const serviceCards = [
  {
    num: '01',
    image: service1,
    title: 'Livraison B2B',
    fullTitle: 'Livraison B2B & Dernier Kilomètre',
    desc: 'Une solution complète pour collecter, acheminer et livrer vos colis avec fiabilité et traçabilité jusqu\'au destinataire final.',
    points: ['Collecte programmée', 'Couverture Dakar & grande banlieue', 'Suivi en temps réel', 'Preuve de livraison numérique'],
    slug: 'livraison-b2b',
  },
  {
    num: '02',
    image: service2,
    title: 'Mise à Disposition',
    fullTitle: 'Mise à Disposition',
    desc: 'Des livreurs, chauffeurs et véhicules dédiés pour renforcer vos opérations selon vos besoins et vos standards.',
    points: ['Personnel qualifié', 'Flotte dédiée', 'Gestion opérationnelle', 'Contrats flexibles'],
    slug: 'mise-a-disposition',
  },
  {
    num: '03',
    image: service3,
    title: 'Entreposage',
    fullTitle: 'Entreposage & Stockage',
    desc: 'Des solutions de stockage sécurisées pour mieux gérer vos marchandises, vos flux temporaires et vos préparations de commandes.',
    points: ['Entrepôts sécurisés', 'Suivi d\'inventaire', 'Transit import / export', 'Picking & conditionnement'],
    slug: 'entreposage-stockage',
  },
  {
    num: '04',
    image: service4,
    title: 'Location Véhicules',
    fullTitle: 'Location de Véhicules Professionnels',
    desc: 'Une flotte diversifiée pour répondre à vos besoins de transport, du pli urgent aux marchandises plus volumineuses.',
    points: ['Avec ou sans chauffeur', 'Motos, berlines, utilitaires', 'Véhicules entretenus', 'Tarification dégressive'],
    slug: 'location-vehicules',
  },
  {
    num: '05',
    image: service5,
    title: 'Transport AIBD',
    fullTitle: 'Transport & Navettes AIBD',
    desc: 'Une liaison fiable avec l\'Aéroport International Blaise Diagne pour vos colis critiques et vos déplacements professionnels.',
    points: ['Disponibilité 24h/7j', 'Fret urgent', 'Trajets sécurisés', 'Transport premium'],
    slug: 'transport-aibd',
  },
  {
    num: '06',
    image: service6,
    title: 'Restauration',
    fullTitle: 'Logistique Restauration',
    desc: 'Un service spécialisé pour les restaurateurs avec des livraisons rapides, propres et adaptées aux exigences d\'hygiène et de température.',
    points: ['Caissons isothermes', 'Livraison express', 'Standards d\'hygiène', 'Gestion des pics'],
    slug: 'logistique-restauration',
  },
];

function ServiceCards() {
  const [hovered, setHovered] = useState<number | null>(null);
  const activeW = 46;
  const restW = (100 - activeW) / (serviceCards.length - 1);

  return (
    <section className="relative overflow-hidden">
      <div
        className="flex w-full"
        style={{ height: 'clamp(340px, 52vw, 580px)' }}
        onMouseLeave={() => setHovered(null)}
      >
        {serviceCards.map((card, i) => {
          const isActive = hovered === i;
          const width = hovered === null
            ? `${100 / serviceCards.length}%`
            : isActive ? `${activeW}%` : `${restW}%`;

          return (
            <div
              key={card.slug}
              onMouseEnter={() => setHovered(i)}
              style={{
                flexBasis: width,
                flexShrink: 0,
                transition: 'flex-basis 0.38s cubic-bezier(0.16,1,0.3,1)',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
              }}
            >
              {/* Background image */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundImage: `url(${card.image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  filter: isActive ? 'grayscale(0)' : 'grayscale(1)',
                  transition: 'filter 0.38s ease',
                  transform: isActive ? 'scale(1.04)' : 'scale(1)',
                  transitionProperty: 'filter, transform',
                  transitionDuration: '0.38s',
                }}
              />

              {/* Dark overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: isActive
                    ? 'linear-gradient(to top, rgba(5,14,40,0.92) 0%, rgba(5,14,40,0.4) 55%, transparent 100%)'
                    : 'linear-gradient(to top, rgba(5,14,40,0.65) 0%, rgba(5,14,40,0.2) 60%, transparent 100%)',
                  transition: 'background 0.38s ease',
                }}
              />

              {/* Badge numéro */}
              <div
                style={{
                  position: 'absolute',
                  top: 18,
                  left: 18,
                  zIndex: 10,
                  background: '#dc2626',
                  color: 'white',
                  borderRadius: '50%',
                  width: 36,
                  height: 36,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 12,
                  fontWeight: 700,
                  boxShadow: '0 4px 14px rgba(220,38,38,0.5)',
                }}
              >
                {card.num}
              </div>

              {/* Titre vertical (repos) */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 28,
                  right: 18,
                  zIndex: 10,
                  writingMode: 'vertical-rl',
                  transform: 'rotate(180deg)',
                  color: 'white',
                  fontSize: 'clamp(18px, 1.8vw, 26px)',
                  fontWeight: 800,
                  whiteSpace: 'nowrap',
                  opacity: isActive ? 0 : 1,
                  transition: 'opacity 0.2s ease',
                  textShadow: '0 2px 8px rgba(0,0,0,0.5)',
                  letterSpacing: '0.02em',
                }}
              >
                {card.title}
              </div>

              {/* Contenu révélé au hover */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  zIndex: 10,
                  padding: 'clamp(20px, 2.5vw, 40px)',
                  color: 'white',
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? 'translateY(0)' : 'translateY(16px)',
                  transition: 'opacity 0.32s ease, transform 0.32s ease',
                  transitionDelay: isActive ? '0.1s' : '0s',
                }}
              >
                <h3 style={{ fontSize: 'clamp(16px, 1.5vw, 22px)', fontWeight: 800, marginBottom: 10, lineHeight: 1.2 }}>
                  {card.fullTitle}
                </h3>
                <p style={{ fontSize: 'clamp(12px, 1vw, 14px)', lineHeight: 1.6, marginBottom: 14, color: 'rgba(255,255,255,0.82)', maxWidth: 380 }}>
                  {card.desc}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px 0' }}>
                  {card.points.map((pt, j) => (
                    <li key={j} style={{ fontSize: 'clamp(11px, 0.9vw, 13px)', color: 'rgba(255,255,255,0.8)', paddingLeft: 16, position: 'relative', marginBottom: 5 }}>
                      <span style={{ position: 'absolute', left: 0, color: '#f87171' }}>•</span>
                      {pt}
                    </li>
                  ))}
                </ul>
                <Link
                  to={`/services/${card.slug}`}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 8,
                    background: '#dc2626',
                    color: 'white',
                    padding: '9px 22px',
                    borderRadius: 8,
                    fontSize: 13,
                    fontWeight: 700,
                    textDecoration: 'none',
                  }}
                >
                  En savoir plus <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default function AboutPage() {
  const { t } = useLang();
  useSEO({ title: 'À propos — Direct Colis', canonical: '/a-propos' });
  const [activeTab, setActiveTab] = useState('qui');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const content = tabContent[activeTab];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        <PageHero
          badge={t.aboutPage.badge}
          title={<>{t.aboutPage.titleA} <HeroHighlight>{t.aboutPage.titleB}</HeroHighlight></>}
          subtitle={t.aboutPage.subtitle}
        />

        {/* Stats bar */}
        <section className="bg-white border-b border-slate-100 -mt-12 relative z-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 overflow-hidden">
              {statValues.map((value, i) => {
                const Icon = statIcons[i];
                const label = [t.aboutPage.stats.delivered, t.aboutPage.stats.success, t.aboutPage.stats.cities, t.aboutPage.stats.years][i];
                return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="py-8 px-4 text-center group hover:bg-red-50/50 transition-colors"
                >
                  <Icon className="w-6 h-6 text-red-600 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-600 mb-1">{value}</div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">{label}</div>
                </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 justify-center">
              {tabIds.map(id => {
                const Icon = tabIcons[id];
                const active = activeTab === id;
                const label = id === 'qui' ? t.aboutPage.tabs.who : id === 'pourquoi' ? t.aboutPage.tabs.why : t.aboutPage.tabs.how;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveTab(id)}
                    className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                      active
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl shadow-red-600/30 scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {label}
                  </button>
                );
              })}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
              >
                {/* Images side — deux fenêtres sur UNE MÊME image (effet de découpe continue) */}
                <div className="relative w-full aspect-[4/5] sm:aspect-[5/6] lg:aspect-[5/6] max-w-lg mx-auto lg:max-w-none">
                  {/* FENÊTRE 1 — bloc principal top-left, 82% x 75% */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute top-0 left-0 w-[82%] h-[75%] rounded-[2rem] overflow-hidden shadow-2xl z-10"
                  >
                    <div
                      className="absolute top-0 left-0"
                      style={{ width: 'calc(100% / 0.82)', height: 'calc(100% / 0.75)' }}
                    >
                      <img src={content.image} alt={content.title} loading="lazy" className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/25 via-transparent to-transparent pointer-events-none" />
                  </motion.div>

                  {/* FENÊTRE 2 — bloc secondaire bottom-right, 58% x 48% (suite continue de l'image) */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="absolute bottom-0 right-0 w-[58%] h-[48%] rounded-[2rem] overflow-hidden shadow-2xl z-20"
                    style={{ boxShadow: '0 0 0 6px #fff, 0 20px 60px rgba(0,0,0,0.25)' }}
                  >
                    <div
                      className="absolute bottom-0 right-0"
                      style={{ width: 'calc(100% / 0.58)', height: 'calc(100% / 0.48)' }}
                    >
                      <img src={content.image} alt="" role="presentation" loading="lazy" className="w-full h-full object-cover" />
                    </div>
                  </motion.div>

                  {/* Floating red badge */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="absolute top-6 -right-2 md:-right-6 bg-gradient-to-br from-red-600 to-red-700 text-white rounded-2xl px-5 py-3 shadow-2xl shadow-red-600/40 z-30 hidden sm:flex items-center gap-2"
                  >
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-sm font-bold whitespace-nowrap">{content.badge}</span>
                  </motion.div>

                  {/* Rotating badge — logo Direct Colis */}
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 z-30 hidden md:flex items-center justify-center">
                    {/* Anneau pointillé rotatif */}
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                      className="absolute inset-0 rounded-full border-2 border-dashed border-red-600/40"
                    />
                    {/* Centre fixe avec logo */}
                    <div className="w-16 h-16 rounded-full bg-blue-950 flex items-center justify-center shadow-xl">
                      <img src={logoComprimerBlanc} alt="Direct Colis" className="w-10 h-10 object-contain" />
                    </div>
                  </div>
                </div>

                {/* Text side */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                    <Zap className="w-3 h-3" />
                    {activeTab === 'qui' ? t.aboutPage.tabs.who : activeTab === 'pourquoi' ? t.aboutPage.tabs.why : t.aboutPage.tabs.how}
                  </div>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 mb-5 leading-tight">{content.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-8 text-base sm:text-lg">{content.text}</p>
                  <ul className="space-y-3 mb-8">
                    {content.bullets.map((b, i) => (
                      <motion.li
                        key={i}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08 }}
                        className="flex items-start gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-red-600/20">
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{b}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-bold pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/30 group"
                  >
                    En savoir plus
                    <div className="w-9 h-9 bg-blue-950 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Services intro header */}
        <section className="py-16 sm:py-20 bg-slate-50/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-0"
            >
              {/* Gauche — badge + titre */}
              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-5"
              >
                <span className="inline-flex items-center self-start bg-red-600 text-white text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-md">
                  Nos Services
                </span>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 leading-tight">
                  Des solutions logistiques<br />
                  <span className="text-red-600">pour chaque besoin</span>
                </h2>
              </motion.div>

              {/* Centre — ligne rouge avec flèche */}
              <motion.div
                variants={fadeInUp}
                className="hidden md:flex flex-col items-center mx-12"
              >
                <div className="w-px flex-1 bg-red-600" style={{ height: 120 }} />
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mt-1">
                  <path d="M10 0 L10 16 M4 10 L10 16 L16 10" stroke="#dc2626" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </motion.div>

              {/* Droite — sous-titre + description */}
              <motion.div variants={fadeInUp} className="flex flex-col gap-4">
                <p className="text-blue-950 font-bold text-lg sm:text-xl leading-snug">
                  Choisissez la solution adaptée à votre activité, vos volumes et vos contraintes terrain.
                </p>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed">
                  Direct Colis accompagne les entreprises avec une offre logistique concrète — de la livraison du dernier kilomètre à la mise à disposition de ressources, en passant par l'entreposage, la location de véhicules, les navettes aéroportuaires et la logistique restauration.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services accordion cards */}
        <ServiceCards />

        {/* Testimonial carousel */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4 text-red-600 fill-red-600" />
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{t.aboutPage.testimonialsBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950">{t.aboutPage.testimonialsTitle}</h2>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl shadow-2xl p-8 sm:p-12 border border-slate-100 relative overflow-hidden"
                >
                  {/* Decorative quote mark */}
                  <div className="absolute top-4 left-4 text-red-100 text-9xl font-serif leading-none pointer-events-none select-none">"</div>

                  <div className="relative z-10">
                    {/* Stars */}
                    <div className="flex text-yellow-400 mb-6 justify-center">
                      {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                    </div>

                    {/* Quote */}
                    <p className="text-slate-600 text-lg sm:text-xl leading-relaxed text-center mb-8 max-w-2xl mx-auto italic">
                      « {testimonials[testimonialIdx].text} »
                    </p>

                    {/* Name */}
                    <div className="text-center">
                      <p className="font-extrabold text-blue-950 text-lg">{testimonials[testimonialIdx].name}</p>
                      <p className="text-sm text-slate-400 mt-1">{testimonials[testimonialIdx].role}</p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all duration-200 group"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-500 group-hover:text-white" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === testimonialIdx ? 'w-8 h-2.5 bg-red-600' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                  className="w-11 h-11 rounded-full bg-white border border-slate-200 shadow-md hover:bg-red-600 hover:border-red-600 flex items-center justify-center transition-all duration-200 group"
                >
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 animated-gradient relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"
          />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              {t.aboutPage.ctaTitleA} <span className="text-red-400">{t.aboutPage.ctaTitleB}</span>
            </h2>
            <p className="text-blue-100/70 mb-8 text-lg">{t.aboutPage.ctaSubtitle}</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-2xl shadow-red-600/40">
              {t.common.requestDemo} <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
