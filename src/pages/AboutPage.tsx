import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Users, ShieldCheck, Globe, Headset, CheckCircle, ArrowRight,
  QrCode, Truck, Package, Star, ChevronLeft, ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import aboutImg from '../assets/images/le3.jpg';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const tabs = [
  { id: 'qui', label: 'Qui sommes-nous' },
  { id: 'pourquoi', label: 'Pourquoi nous choisir' },
  { id: 'comment', label: 'Comment ça marche' },
];

const tabContent: Record<string, { title: string; text: string; bullets: string[]; image: string }> = {
  qui: {
    title: 'Direct Colis, votre partenaire logistique au Sénégal',
    text: 'Direct Colis est une solution logistique moderne conçue pour répondre aux réalités du terrain sénégalais. Fondée à Dakar, notre entreprise accompagne les professionnels dans la gestion, le suivi et la livraison sécurisée de leurs colis à travers tout le pays.',
    bullets: [
      'Plus de 10 ans d\'expérience dans la logistique',
      'Plus d\'1 million de colis traités',
      'Présence dans plus de 50 villes',
      'Taux de satisfaction client à 98%',
    ],
    image: aboutImg,
  },
  pourquoi: {
    title: 'Une logistique fiable, tracée et sécurisée',
    text: 'Choisir Direct Colis, c\'est opter pour une solution qui place la traçabilité et la sécurité au cœur de chaque livraison. Notre technologie et notre expertise terrain nous permettent d\'offrir un service inégalé sur le marché sénégalais.',
    bullets: [
      'Suivi en temps réel à chaque étape',
      'Validation par OTP, photo et GPS',
      'Support client 7j/7',
      'Couverture nationale étendue',
    ],
    image: aboutImg,
  },
  comment: {
    title: 'Un processus simple, de la commande à la livraison',
    text: 'Notre système a été pensé pour être simple d\'utilisation tout en garantissant une traçabilité maximale. En quatre étapes clés, vos colis sont collectés, acheminés et livrés avec preuve à l\'appui.',
    bullets: [
      '1. Création et assignation du colis',
      '2. Collecte et scan QR code',
      '3. Transit et passage en hub',
      '4. Livraison et preuve de remise',
    ],
    image: aboutImg,
  },
};

const testimonials = [
  {
    name: 'Ibrahima Sarr',
    role: 'Directeur e-commerce, Dakar',
    text: 'Direct Colis a complètement transformé notre gestion des livraisons. Le suivi en temps réel et la preuve de livraison ont éliminé tous nos litiges clients. Je recommande sans hésitation.',
  },
  {
    name: 'Fatou Ndiaye',
    role: 'Responsable logistique, Thiès',
    text: 'Un service fiable, rapide et professionnel. Nos clients apprécient de pouvoir suivre leur colis en direct. L\'équipe Direct Colis est toujours disponible pour répondre à nos besoins.',
  },
  {
    name: 'Cheikh Diop',
    role: 'Gérant boutique, Mbour',
    text: 'Depuis que nous utilisons Direct Colis, notre taux de réclamations a baissé de 80%. Le système OTP et les photos de livraison nous protègent et rassurent nos clients.',
  },
  {
    name: 'Aïssatou Bâ',
    role: 'Entrepreneur, Saint-Louis',
    text: 'L\'import CSV est un gain de temps énorme pour nous. En quelques clics, 500 colis sont créés et les étiquettes générées automatiquement. La plateforme est intuitive et puissante.',
  },
  {
    name: 'Oumar Fall',
    role: 'Responsable supply chain',
    text: 'Le tableau de bord de pilotage nous donne une visibilité totale sur nos opérations. Nous gérons des centaines de livraisons par jour avec la même facilité qu\'une seule.',
  },
];

const stats = [
  { value: '1M+', label: 'Colis livrés' },
  { value: '98%', label: 'Taux de succès' },
  { value: '50+', label: 'Villes couvertes' },
  { value: '10+', label: 'Ans d\'expérience' },
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('qui');
  const [testimonialIdx, setTestimonialIdx] = useState(0);

  // Auto-advance carousel
  useEffect(() => {
    const id = setInterval(() => setTestimonialIdx(i => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(id);
  }, []);

  const content = tabContent[activeTab];

  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <p className="text-red-400 font-bold text-sm uppercase tracking-widest mb-3">À propos</p>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4">
                Découvrez <span className="text-red-400">Direct Colis</span>
              </h1>
              <p className="text-blue-100/70 text-lg">
                La solution logistique de référence pour le suivi et la livraison de colis au Sénégal.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats bar */}
        <section className="bg-white border-b border-slate-100">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-slate-100">
              {stats.map(({ value, label }, i) => (
                <div key={i} className="py-8 text-center">
                  <div className="text-3xl font-extrabold text-red-600 mb-1">{value}</div>
                  <div className="text-sm text-slate-500 font-medium">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tabs */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Tab buttons */}
            <div className="flex flex-wrap gap-2 mb-12 justify-center">
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-blue-950 text-white shadow-lg'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="grid md:grid-cols-2 gap-12 items-center"
              >
                {/* Image */}
                <div className="relative">
                  <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
                    <img src={content.image} alt={content.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-blue-950/10" />
                  </div>
                  {/* Floating badge */}
                  <div className="absolute -bottom-4 -right-4 bg-red-600 text-white rounded-2xl px-5 py-3 shadow-xl hidden sm:block">
                    <div className="flex items-center gap-2">
                      <ShieldCheck className="w-5 h-5" />
                      <span className="text-sm font-bold">Certifié & sécurisé</span>
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-5 leading-tight">{content.title}</h2>
                  <p className="text-slate-500 leading-relaxed mb-8">{content.text}</p>
                  <ul className="space-y-3 mb-8">
                    {content.bullets.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5">
                          <CheckCircle className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-3 bg-red-600 hover:bg-red-700 text-white font-bold pl-6 pr-2 py-2 rounded-full transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/25 group"
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
        <section className="py-20 bg-slate-50 border-t border-slate-100">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-12">
              <p className="text-red-600 font-bold text-sm uppercase tracking-widest mb-3">Témoignages</p>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950">Ce que disent nos clients</h2>
            </motion.div>

            <div className="relative">
              <AnimatePresence mode="wait">
                <motion.div
                  key={testimonialIdx}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-3xl shadow-xl p-8 sm:p-10 border border-slate-100"
                >
                  {/* Stars */}
                  <div className="flex text-yellow-400 mb-6 justify-center">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                  </div>

                  {/* Quote */}
                  <p className="text-slate-600 text-lg leading-relaxed text-center mb-8 max-w-2xl mx-auto italic">
                    « {testimonials[testimonialIdx].text} »
                  </p>

                  {/* Name */}
                  <div className="text-center">
                    <p className="font-extrabold text-blue-950 text-lg">{testimonials[testimonialIdx].name}</p>
                    <p className="text-sm text-slate-400 mt-1">{testimonials[testimonialIdx].role}</p>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mt-8">
                <button
                  onClick={() => setTestimonialIdx(i => (i - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-red-600 hover:border-red-600 hover:text-white flex items-center justify-center transition-all duration-200 group"
                >
                  <ChevronLeft className="w-5 h-5 text-slate-500 group-hover:text-white" />
                </button>

                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setTestimonialIdx(i)}
                      className={`rounded-full transition-all duration-300 ${
                        i === testimonialIdx ? 'w-6 h-2.5 bg-red-600' : 'w-2.5 h-2.5 bg-slate-200 hover:bg-slate-300'
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={() => setTestimonialIdx(i => (i + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full bg-white border border-slate-200 shadow-sm hover:bg-red-600 hover:border-red-600 hover:text-white flex items-center justify-center transition-all duration-200 group"
                >
                  <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-blue-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Rejoignez des centaines d'entreprises qui nous font confiance</h2>
            <p className="text-blue-100/70 mb-8">Découvrez comment Direct Colis peut transformer votre logistique.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/30">
              Demander une démo <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
