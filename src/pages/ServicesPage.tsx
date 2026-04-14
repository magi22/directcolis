import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Search, Truck, FileSignature, AlertTriangle, Users, LayoutDashboard,
  QrCode, ShieldCheck, Navigation, Camera, CheckCircle, ArrowRight,
  Package, Clock, RefreshCcw, FileSpreadsheet, Printer, BarChart3, Sparkles, Zap
} from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import service1 from '../assets/images/service 1.png';
import service2 from '../assets/images/service 2.png';
import service3 from '../assets/images/service 3.png';
import service4 from '../assets/images/service 4.png';
import service5 from '../assets/images/service 5.png';
import service6 from '../assets/images/service 6.jpg';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};
const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const services = [
  {
    icon: Search,
    title: 'Suivi de colis en temps réel',
    desc: "Donnez à vos clients une visibilité totale sur leur livraison. Notre système de tracking permet de consulter le statut, l'historique de chaque étape et l'heure estimée de livraison.",
    features: ['Statut en temps réel', 'Historique complet', 'Lien de suivi public', 'Notifications auto'],
    image: service1,
    tag: 'TRACKING',
  },
  {
    icon: Truck,
    title: 'Collecte & Acheminement',
    desc: "De la prise en charge au dernier kilomètre, notre flotte adaptée au terrain sénégalais garantit une collecte rapide et un acheminement maîtrisé jusqu'à destination.",
    features: ['Collecte à domicile', 'Flotte terrain', 'Couverture nationale', 'Suivi GPS en direct'],
    image: service2,
    tag: 'LOGISTIQUE',
  },
  {
    icon: FileSignature,
    title: 'Preuve de livraison',
    desc: "Chaque remise est sécurisée et documentée. OTP, photo, signature électronique et géolocalisation réduisent les litiges et renforcent la confiance de vos clients.",
    features: ['Validation par OTP', 'Photo de livraison', 'Signature électronique', 'Géolocalisation GPS'],
    image: service3,
    tag: 'SÉCURITÉ',
  },
  {
    icon: AlertTriangle,
    title: 'Gestion des échecs',
    desc: "Chaque tentative infructueuse est traitée avec rigueur : motif détaillé, photo justificative, retour entrepôt sécurisé et reprogrammation fluide de la livraison.",
    features: ['Motif documenté', 'Photo justificative', 'Retour entrepôt suivi', 'Reprogrammation facile'],
    image: service4,
    tag: 'GESTION',
  },
  {
    icon: Users,
    title: 'Gestion grands comptes',
    desc: "Pour les structures qui gèrent des volumes importants : import Excel/CSV, double identifiant, génération d'étiquettes QR par lot et reporting complet de vos expéditions.",
    features: ['Import Excel / CSV', 'Étiquettes QR par lot', 'Double identifiant', 'Reporting détaillé'],
    image: service5,
    tag: 'B2B',
  },
  {
    icon: LayoutDashboard,
    title: 'Pilotage des opérations',
    desc: "Un tableau de bord centralisé pour piloter vos équipes, suivre les missions en cours, analyser les performances et optimiser la productivité de vos livreurs.",
    features: ["Vue d'ensemble directe", 'Activité livreurs', 'Statistiques détaillées', 'Alertes temps réel'],
    image: service6,
    tag: 'DASHBOARD',
  },
];

const fonctionnalites = [
  { icon: QrCode, label: 'QR Code unique' },
  { icon: ShieldCheck, label: 'OTP de validation' },
  { icon: Navigation, label: 'Suivi GPS' },
  { icon: Camera, label: 'Preuve visuelle' },
  { icon: Clock, label: 'Historique étapes' },
  { icon: RefreshCcw, label: 'Retour entrepôt' },
  { icon: FileSpreadsheet, label: 'Import CSV/Excel' },
  { icon: Printer, label: 'Étiquettes auto' },
  { icon: BarChart3, label: 'Reporting complet' },
  { icon: Package, label: 'Double identifiant' },
  { icon: CheckCircle, label: 'Preuve livraison' },
  { icon: Users, label: 'Multi-utilisateurs' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none hidden sm:block"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-red-500/15 rounded-full blur-3xl pointer-events-none hidden sm:block"
          />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-widest">Nos Services</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                Des solutions <span className="text-red-400">complètes</span>
                <br className="hidden sm:block" /> pour votre logistique
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                De la collecte à la preuve de livraison, Direct Colis vous offre une plateforme tout-en-un pour piloter chaque étape de vos expéditions.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
                {['Traçabilité', 'Sécurité', 'Rapidité', 'Fiabilité'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-xs sm:text-sm font-semibold backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services grid — modern card with real image */}
        <section className="py-16 sm:py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="text-center mb-12 sm:mb-16"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-3">
                Découvrez nos <span className="text-red-600">6 services</span>
              </h2>
              <p className="text-slate-500">Une offre complète et adaptée à chaque étape de votre chaîne logistique.</p>
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
                    key={i}
                    variants={fadeInUp}
                    className="group relative bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_50px_rgba(220,38,38,0.15)] transition-all duration-500 flex flex-col"
                  >
                    {/* Image cover */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.title}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      {/* Gradient overlay always visible */}
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
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="text-xl font-extrabold text-blue-950 mb-3 group-hover:text-red-600 transition-colors duration-300 leading-tight">
                        {service.title}
                      </h3>
                      <p className="text-slate-500 text-sm leading-relaxed mb-5 flex-grow">
                        {service.desc}
                      </p>

                      {/* Features */}
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

                      {/* CTA */}
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all duration-200 group/cta mt-auto"
                      >
                        En savoir plus
                        <ArrowRight className="w-4 h-4 group-hover/cta:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Red accent bar bottom */}
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
                <span className="text-xs font-bold text-red-600 uppercase tracking-widest">Tout inclus</span>
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-blue-950 mb-3">Toutes les fonctionnalités incluses</h2>
              <p className="text-slate-500">Un accès complet à l'ensemble de nos outils, sans supplément.</p>
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

        {/* CTA */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-red-950 relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full pointer-events-none hidden sm:block"
          />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Prêt à <span className="text-red-400">booster</span> vos livraisons ?
            </motion.h2>
            <p className="text-blue-100/70 mb-8 text-base sm:text-lg">Contactez-nous pour une démonstration personnalisée de notre solution.</p>
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
