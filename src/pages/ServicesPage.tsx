import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Search, Truck, FileSignature, AlertTriangle, Users, LayoutDashboard,
  QrCode, ShieldCheck, Navigation, Camera, CheckCircle, ArrowRight,
  Package, Clock, RefreshCcw, FileSpreadsheet, Printer, BarChart3
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
    icon: <Search className="h-8 w-8 text-white" />,
    title: 'Suivi de colis en temps réel',
    desc: 'Donnez à vos clients une visibilité totale sur leur livraison. Notre système de tracking permet de consulter le statut, l\'historique de chaque étape et l\'heure estimée de livraison.',
    features: ['Statut en temps réel', 'Historique complet', 'Lien de suivi public', 'Notifications automatiques'],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: <Truck className="h-8 w-8 text-white" />,
    title: 'Collecte & Acheminement',
    desc: 'De la prise en charge au dernier kilomètre, notre flotte adaptée au terrain sénégalais garantit une collecte rapide et un acheminement maîtrisé jusqu\'à destination.',
    features: ['Collecte à domicile', 'Flotte terrain adaptée', 'Couverture nationale', 'Suivi GPS en direct'],
    color: 'from-blue-800 to-blue-950',
  },
  {
    icon: <FileSignature className="h-8 w-8 text-white" />,
    title: 'Preuve de livraison',
    desc: 'Chaque remise est sécurisée et documentée. OTP, photo, signature électronique et géolocalisation réduisent les litiges et renforcent la confiance de vos clients.',
    features: ['Validation par OTP', 'Photo de livraison', 'Signature électronique', 'Géolocalisation GPS'],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: <AlertTriangle className="h-8 w-8 text-white" />,
    title: 'Gestion des échecs',
    desc: 'Chaque tentative infructueuse est traitée avec rigueur : motif détaillé, photo justificative, retour entrepôt sécurisé et reprogrammation fluide de la livraison.',
    features: ['Motif d\'échec documenté', 'Photo justificative', 'Retour entrepôt suivi', 'Reprogrammation facile'],
    color: 'from-blue-800 to-blue-950',
  },
  {
    icon: <Users className="h-8 w-8 text-white" />,
    title: 'Gestion grands comptes',
    desc: 'Pour les structures qui gèrent des volumes importants : import Excel/CSV, double identifiant, génération d\'étiquettes QR par lot et reporting complet de vos expéditions.',
    features: ['Import Excel / CSV', 'Étiquettes QR par lot', 'Double identifiant', 'Reporting et export'],
    color: 'from-red-600 to-red-700',
  },
  {
    icon: <LayoutDashboard className="h-8 w-8 text-white" />,
    title: 'Pilotage des opérations',
    desc: 'Un tableau de bord centralisé pour piloter vos équipes, suivre les missions en cours, analyser les performances et optimiser la productivité de vos livreurs.',
    features: ['Vue d\'ensemble en direct', 'Activité des livreurs', 'Statistiques détaillées', 'Alertes et notifications'],
    color: 'from-blue-800 to-blue-950',
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
  { icon: Printer, label: 'Impression étiquettes' },
  { icon: BarChart3, label: 'Reporting complet' },
  { icon: Package, label: 'Double identifiant' },
  { icon: CheckCircle, label: 'Preuve de livraison' },
  { icon: Users, label: 'Multi-utilisateurs' },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-br from-blue-950 to-blue-900 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={stagger}>
              <motion.p variants={fadeInUp} className="text-red-400 font-bold text-sm uppercase tracking-widest mb-4">
                Nos Services
              </motion.p>
              <motion.h1 variants={fadeInUp} className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
                Des solutions logistiques <span className="text-red-400">complètes</span> pour votre entreprise
              </motion.h1>
              <motion.p variants={fadeInUp} className="text-blue-100/80 text-lg max-w-2xl mx-auto leading-relaxed">
                De la collecte à la preuve de livraison, Direct Colis vous offre une plateforme tout-en-un pour piloter chaque étape de vos expéditions.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Services détaillés */}
        <section className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, i) => (
                <motion.div
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-80px' }}
                  variants={fadeInUp}
                  className={`grid md:grid-cols-2 gap-10 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
                >
                  {/* Image / Icon side */}
                  <div className={`bg-gradient-to-br ${service.color} rounded-3xl p-12 flex items-center justify-center min-h-[280px] md:[direction:ltr]`}>
                    <div className="text-center text-white">
                      <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                        {service.icon}
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>
                  </div>

                  {/* Text side */}
                  <div className="md:[direction:ltr]">
                    <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full mb-4">
                      Service {String(i + 1).padStart(2, '0')}
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-4 leading-tight">{service.title}</h2>
                    <p className="text-slate-500 leading-relaxed mb-8">{service.desc}</p>
                    <ul className="grid grid-cols-2 gap-3">
                      {service.features.map((f, j) => (
                        <li key={j} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                          <div className="w-5 h-5 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Fonctionnalités */}
        <section className="py-20 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="text-center mb-14">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-3">Toutes les fonctionnalités incluses</h2>
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
                <motion.div key={i} variants={fadeInUp} className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-center gap-3 text-center">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-blue-950" />
                  </div>
                  <span className="text-sm font-semibold text-slate-700">{label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-blue-950">
          <div className="max-w-3xl mx-auto px-4 text-center">
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl sm:text-3xl font-extrabold text-white mb-4">
              Prêt à optimiser vos livraisons ?
            </motion.h2>
            <p className="text-blue-100/70 mb-8">Contactez-nous pour une démonstration personnalisée de notre solution.</p>
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
