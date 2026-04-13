import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ShieldCheck, CheckCircle, ArrowRight, Star, ChevronLeft, ChevronRight,
  Sparkles, Users, Truck, Award, Target, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/le3.jpg';
import blog1 from '../assets/images/1.jpg';
import blog2 from '../assets/images/2.jpg';
import blog3 from '../assets/images/3.jpg';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const tabs = [
  { id: 'qui', label: 'Qui sommes-nous', icon: Users },
  { id: 'pourquoi', label: 'Pourquoi nous choisir', icon: Award },
  { id: 'comment', label: 'Comment ça marche', icon: Target },
];

type TabContent = {
  title: string;
  text: string;
  bullets: string[];
  image1: string;
  image2: string;
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
    image1: aboutImg,
    image2: blog1,
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
    image1: blog2,
    image2: aboutImg,
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
    image1: blog3,
    image2: blog1,
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

const stats = [
  { value: '1M+', label: 'Colis livrés', icon: Truck },
  { value: '98%', label: 'Taux de succès', icon: Target },
  { value: '50+', label: 'Villes couvertes', icon: Award },
  { value: '10+', label: "Ans d'expérience", icon: Sparkles },
];

export default function AboutPage() {
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
        {/* Hero */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 relative overflow-hidden">
          <motion.div
            animate={{ x: [0, 60, 0], y: [0, -40, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-10 w-80 h-80 bg-red-600/25 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -50, 0], y: [0, 30, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-widest">À Propos</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                Découvrez <span className="text-red-400 text-glow-red">Direct Colis</span>
              </h1>
              <p className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto">
                La solution logistique de référence pour le suivi et la livraison de colis au Sénégal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-white border-b border-slate-100 -mt-12 relative z-20">
          <div className="max-w-5xl mx-auto px-4">
            <div className="bg-white rounded-3xl shadow-2xl border border-slate-100 grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100 overflow-hidden">
              {stats.map(({ value, label, icon: Icon }, i) => (
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
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 sm:gap-3 mb-12 justify-center">
              {tabs.map(tab => {
                const Icon = tab.icon;
                const active = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-5 sm:px-7 py-3 rounded-full text-sm sm:text-base font-bold transition-all duration-300 ${
                      active
                        ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-xl shadow-red-600/30 scale-105'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:scale-105'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    {tab.label}
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
                {/* Images side — main + secondary overlap */}
                <div className="relative min-h-[340px] sm:min-h-[440px] lg:min-h-[520px]">
                  {/* Main image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="w-full lg:w-[78%] h-[260px] sm:h-[340px] lg:h-[420px] rounded-[2rem] overflow-hidden shadow-2xl relative z-10"
                  >
                    <img src={content.image1} alt={content.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-950/30 to-transparent" />
                  </motion.div>

                  {/* Secondary image - overlapping bottom-right */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="hidden sm:block absolute bottom-0 right-0 w-[58%] h-[200px] lg:h-[260px] rounded-[2rem] overflow-hidden border-[6px] border-white shadow-2xl z-20"
                  >
                    <img src={content.image2} alt="" className="w-full h-full object-cover" />
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

                  {/* Rotating badge */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                    className="absolute -bottom-4 -left-4 w-24 h-24 rounded-full border-2 border-dashed border-red-600/40 z-30 hidden md:flex items-center justify-center bg-white shadow-xl"
                  >
                    <div className="w-14 h-14 rounded-full bg-blue-950 flex items-center justify-center">
                      <Truck className="w-6 h-6 text-white" />
                    </div>
                  </motion.div>
                </div>

                {/* Text side */}
                <div>
                  <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 text-red-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                    <Zap className="w-3 h-3" />
                    {tabs.find(t => t.id === activeTab)?.label}
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

        {/* Testimonial carousel */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-4">
                <Star className="w-4 h-4 text-red-600 fill-red-600" />
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Témoignages</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950">Ce que disent nos clients</h2>
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
        <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] border border-white/5 rounded-full"
          />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Rejoignez des centaines d'entreprises qui nous <span className="text-red-400">font confiance</span>
            </h2>
            <p className="text-blue-100/70 mb-8 text-lg">Découvrez comment Direct Colis peut transformer votre logistique.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-2xl shadow-red-600/40">
              Demander une démo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
