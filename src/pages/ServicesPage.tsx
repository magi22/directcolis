import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  ShieldCheck, Navigation, CheckCircle, ArrowRight,
  Clock, RefreshCcw, FileSpreadsheet, BarChart3, Sparkles, Zap, Users,
  Eye, MapPin, Lock, Truck, Package, Globe
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero, { HeroHighlight } from '../components/PageHero';
import { services } from '../data/services';
import { useLang } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const fonctionnalites = [
  { icon: Navigation, label: 'Suivi des livraisons' },
  { icon: CheckCircle, label: 'Preuve de livraison numérique' },
  { icon: ShieldCheck, label: 'Validation OTP' },
  { icon: Clock, label: 'Historique des étapes' },
  { icon: Package, label: 'Traçabilité des missions' },
  { icon: RefreshCcw, label: 'Gestion des retours' },
  { icon: FileSpreadsheet, label: 'Commandes en lot' },
  { icon: BarChart3, label: 'Bilan des tournées' },
  { icon: Users, label: 'Coordination d\'équipes' },
  { icon: Eye, label: 'Visibilité client' },
  { icon: MapPin, label: 'Suivi terrain' },
  { icon: Lock, label: 'Remise sécurisée' },
];

const pourquoi = [
  {
    icon: Truck,
    title: 'Une logistique pensée pour le terrain',
    desc: 'Nos services sont conçus pour répondre aux réalités opérationnelles des entreprises, avec une exécution claire et structurée.',
  },
  {
    icon: Users,
    title: 'Des équipes et moyens adaptés',
    desc: 'Livreurs, chauffeurs, flotte, stockage et coordination : nous mettons à disposition les ressources nécessaires selon vos besoins.',
  },
  {
    icon: Eye,
    title: 'Plus de visibilité sur vos opérations',
    desc: 'Suivi, preuve de livraison et traçabilité viennent renforcer la qualité du service et la confiance à chaque étape.',
  },
  {
    icon: Globe,
    title: 'Une offre flexible selon votre activité',
    desc: 'Livraison, stockage, mise à disposition, mobilité, aéroportuaire ou restauration : chaque besoin trouve une réponse adaptée.',
  },
];

export default function ServicesPage() {
  const { t } = useLang();
  useSEO({ title: 'Nos services logistiques — Direct Colis', canonical: '/services' });
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        <PageHero
          badge={t.nav.services}
          title={<>{t.servicesSection.pageTitle.split(' ').slice(0, -1).join(' ')} <HeroHighlight>{t.servicesSection.pageTitle.split(' ').slice(-1)[0]}</HeroHighlight></>}
          subtitle={t.servicesSection.pageSubtitle}
        >
          {/* Tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-6">
            {[
              { label: 'Traçabilité', icon: Navigation },
              { label: 'Sécurité', icon: ShieldCheck },
              { label: 'Rapidité', icon: Zap },
              { label: 'Fiabilité', icon: CheckCircle },
            ].map((tag, i) => {
              const Icon = tag.icon;
              return (
                <motion.span
                  key={i}
                  whileHover={{ scale: 1.05, y: -2 }}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-full text-white text-xs sm:text-sm font-semibold backdrop-blur-md hover:bg-red-600/30 hover:border-red-400/50 transition-colors cursor-default"
                >
                  <Icon className="w-3.5 h-3.5 text-red-400" />
                  {tag.label}
                </motion.span>
              );
            })}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/40 hover:shadow-red-600/60"
            >
              {t.common.requestDemo} <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href="#services-grid"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold text-sm rounded-xl transition-all duration-300 backdrop-blur-md"
            >
              {t.common.viewAll}
            </a>
          </div>
        </PageHero>

        {/* Intro text before grid */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {t.servicesSection.pageIntro}
            </p>
          </div>
        </section>

        {/* Services grid */}
        <section id="services-grid" className="pb-16 sm:pb-24 bg-white relative scroll-mt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-3">
                {t.servicesSection.gridTitle} <span className="text-red-600">{t.servicesSection.gridTitleHighlight}</span>
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                {t.servicesSection.gridSubtitle}
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              {services.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.slug}
                    variants={fadeInUp}
                    className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] transition-all duration-500 flex flex-col"
                  >
                    {/* Image cover */}
                    <Link to={`/services/${service.slug}`} className="block relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

                      {/* Red tag */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                          {service.tag}
                        </span>
                      </div>

                      {/* Floating icon badge */}
                      <div className="absolute bottom-4 right-4">
                        <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-xl group-hover:bg-red-600 transition-colors duration-300">
                          <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                        </div>
                      </div>

                      {/* Service number */}
                      <div className="absolute bottom-4 left-4 text-white">
                        <span className="text-5xl font-black leading-none opacity-30 group-hover:opacity-60 transition-opacity">
                          {service.num}
                        </span>
                      </div>
                    </Link>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <Link to={`/services/${service.slug}`}>
                        <h3 className="text-xl font-extrabold text-blue-950 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                          {service.title}
                        </h3>
                      </Link>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
                        {service.cardDesc}
                      </p>

                      <ul className="space-y-2 mb-6">
                        {service.features.map((f, j) => (
                          <li key={j} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <div className="w-4 h-4 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                              <CheckCircle className="w-2.5 h-2.5 text-red-600" />
                            </div>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <Link
                        to={`/services/${service.slug}`}
                        className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all duration-200 group/cta mt-auto"
                      >
                        {t.common.learnMore}
                        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-red-600 to-red-500 group-hover:w-full transition-all duration-500" />
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Fonctionnalités grid */}
        <section className="py-16 sm:py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10 sm:mb-14">
              <div className="inline-flex items-center gap-2 bg-red-50 border border-red-100 px-4 py-2 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-red-600" />
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">{t.servicesSection.allFeaturesBadge}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-3">{t.servicesSection.allFeaturesTitle}</h2>
              <p className="text-slate-500">{t.servicesSection.allFeaturesSubtitle}</p>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4"
            >
              {fonctionnalites.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-100 shadow-sm hover:shadow-md hover:border-red-200 hover:-translate-y-0.5 transition-all duration-300 flex flex-col items-center gap-3 text-center group"
                >
                  <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-red-50 group-hover:bg-red-600 flex items-center justify-center transition-colors duration-300">
                    <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <span className="text-xs sm:text-sm font-semibold text-slate-700 group-hover:text-red-600 transition-colors">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Pourquoi section */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-10 sm:mb-14">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-3">
                Pourquoi choisir <span className="text-red-600">Direct Colis ?</span>
              </h2>
            </motion.div>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              {pourquoi.map(({ icon: Icon, title, desc }, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:border-red-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-red-50 group-hover:bg-red-600 flex items-center justify-center mb-4 transition-colors duration-300">
                    <Icon className="w-6 h-6 text-red-600 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-base font-extrabold text-blue-950 mb-2 leading-tight">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-red-950 animated-gradient relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none hidden sm:block"
          />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              {t.servicesSection.ctaTitle} <span className="text-red-400">{t.servicesSection.ctaTitleHighlight}</span> {t.servicesSection.ctaTitleEnd}
            </motion.h2>
            <p className="text-blue-100/70 mb-8 text-base sm:text-lg">{t.servicesSection.ctaSubtitle}</p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-2xl shadow-red-600/40">
                Demander un devis <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/contact" className="inline-flex items-center gap-2 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-bold rounded-xl transition-all duration-300 backdrop-blur-md">
                Nous contacter
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
