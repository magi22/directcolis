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
    desc: 'Donnez à vos clients une visibilité totale sur leur livraison. Notre système de tracking permet de consulter le statut, l\'historique de chaque étape et l\'heure estimée de livraison.',
    features: ['Statut en temps réel', 'Historique complet', 'Lien de suivi public', 'Notifications auto'],
    gradient: 'from-red-600 via-red-500 to-orange-500',
  },
  {
    icon: Truck,
    title: 'Collecte & Acheminement',
    desc: 'De la prise en charge au dernier kilomètre, notre flotte adaptée au terrain sénégalais garantit une collecte rapide et un acheminement maîtrisé jusqu\'à destination.',
    features: ['Collecte à domicile', 'Flotte terrain', 'Couverture nationale', 'Suivi GPS en direct'],
    gradient: 'from-blue-700 via-blue-800 to-blue-950',
  },
  {
    icon: FileSignature,
    title: 'Preuve de livraison',
    desc: 'Chaque remise est sécurisée et documentée. OTP, photo, signature électronique et géolocalisation réduisent les litiges et renforcent la confiance de vos clients.',
    features: ['Validation par OTP', 'Photo de livraison', 'Signature électronique', 'Géolocalisation GPS'],
    gradient: 'from-red-600 via-pink-600 to-red-700',
  },
  {
    icon: AlertTriangle,
    title: 'Gestion des échecs',
    desc: 'Chaque tentative infructueuse est traitée avec rigueur : motif détaillé, photo justificative, retour entrepôt sécurisé et reprogrammation fluide de la livraison.',
    features: ['Motif documenté', 'Photo justificative', 'Retour entrepôt suivi', 'Reprogrammation facile'],
    gradient: 'from-orange-600 via-red-600 to-red-800',
  },
  {
    icon: Users,
    title: 'Gestion grands comptes',
    desc: 'Pour les structures qui gèrent des volumes importants : import Excel/CSV, double identifiant, génération d\'étiquettes QR par lot et reporting complet de vos expéditions.',
    features: ['Import Excel / CSV', 'Étiquettes QR par lot', 'Double identifiant', 'Reporting détaillé'],
    gradient: 'from-blue-800 via-indigo-800 to-blue-950',
  },
  {
    icon: LayoutDashboard,
    title: 'Pilotage des opérations',
    desc: 'Un tableau de bord centralisé pour piloter vos équipes, suivre les missions en cours, analyser les performances et optimiser la productivité de vos livreurs.',
    features: ['Vue d\'ensemble directe', 'Activité livreurs', 'Statistiques détaillées', 'Alertes temps réel'],
    gradient: 'from-red-700 via-red-600 to-orange-600',
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
        <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden">
          {/* Animated orbs */}
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-10 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <Sparkles className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-widest">Nos Services</span>
              </motion.div>
              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.1]">
                Des solutions <span className="text-red-400 text-glow-red">complètes</span>
                <br className="hidden sm:block" /> pour votre logistique
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-blue-100/80 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
                De la collecte à la preuve de livraison, Direct Colis vous offre une plateforme tout-en-un pour piloter chaque étape de vos expéditions.
              </motion.p>
              <motion.div variants={fadeInUp} className="flex flex-wrap items-center justify-center gap-3">
                {['Traçabilité', 'Sécurité', 'Rapidité', 'Fiabilité'].map((tag, i) => (
                  <span key={i} className="px-4 py-1.5 bg-white/10 border border-white/20 rounded-full text-white text-sm font-semibold backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Services detail */}
        <section className="py-20 bg-white relative">
          <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-blue-950/5 to-transparent pointer-events-none" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="space-y-20 sm:space-y-28">
              {services.map((service, i) => {
                const Icon = service.icon;
                const reversed = i % 2 === 1;
                return (
                  <motion.div
                    key={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-80px' }}
                    variants={fadeInUp}
                    className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
                  >
                    {/* Visual card */}
                    <motion.div
                      whileHover={{ scale: 1.02, rotate: reversed ? -1 : 1 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`bg-gradient-to-br ${service.gradient} rounded-[2rem] p-10 sm:p-14 flex items-center justify-center min-h-[300px] sm:min-h-[360px] relative overflow-hidden shadow-2xl ${
                        reversed ? 'md:order-2' : 'md:order-1'
                      }`}
                    >
                      {/* Decorative orbs */}
                      <div className="absolute -top-20 -right-20 w-56 h-56 bg-white/15 rounded-full blur-3xl" />
                      <div className="absolute -bottom-20 -left-20 w-56 h-56 bg-white/10 rounded-full blur-3xl" />
                      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

                      {/* Floating icon */}
                      <div className="text-center text-white relative z-10">
                        <motion.div
                          animate={{ y: [-6, 6, -6] }}
                          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                          className="w-24 h-24 bg-white/20 backdrop-blur-md rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl border border-white/30"
                        >
                          <Icon className="h-12 w-12 text-white" />
                        </motion.div>
                        <h3 className="text-2xl sm:text-3xl font-extrabold leading-tight drop-shadow-lg">{service.title}</h3>
                      </div>

                      {/* Corner glow */}
                      <div className="absolute top-6 right-6 w-2 h-2 rounded-full bg-white/70 animate-pulse" />
                      <div className="absolute bottom-6 left-6 w-2 h-2 rounded-full bg-white/50 animate-pulse" />
                    </motion.div>

                    {/* Text side */}
                    <div className={reversed ? 'md:order-1' : 'md:order-2'}>
                      <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4 border border-red-100">
                        <Zap className="w-3 h-3" />
                        Service {String(i + 1).padStart(2, '0')}
                      </div>
                      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 mb-4 leading-tight">{service.title}</h2>
                      <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>

                      {/* Features list - now properly showing all bullets */}
                      <ul className="space-y-3 mb-6">
                        {service.features.map((f, j) => (
                          <motion.li
                            key={j}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: j * 0.1 }}
                            className="flex items-center gap-3 text-sm sm:text-base text-slate-700 font-medium"
                          >
                            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center shrink-0 shadow-md shadow-red-600/20">
                              <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                            <span>{f}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <Link to="/contact" className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all duration-200 group">
                        En savoir plus <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Fonctionnalités grid */}
        <section className="py-20 bg-gradient-to-b from-slate-50 to-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#dc2626 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
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
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
            >
              {fonctionnalites.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-xl hover:border-red-200 transition-all duration-300 flex flex-col items-center gap-3 text-center group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-50 to-red-50 group-hover:from-red-500 group-hover:to-red-700 flex items-center justify-center transition-all duration-300">
                    <Icon className="w-6 h-6 text-blue-950 group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700 group-hover:text-red-600 transition-colors">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-blue-950 via-blue-900 to-red-900 relative overflow-hidden">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/5 rounded-full"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-red-500/10 rounded-full"
          />
          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4">
              Prêt à <span className="text-red-400">booster</span> vos livraisons ?
            </motion.h2>
            <p className="text-blue-100/70 mb-8 text-lg">Contactez-nous pour une démonstration personnalisée de notre solution.</p>
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
