import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, Search, MessageSquare, Sparkles, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

type FAQItem = { q: string; a: string };
type FAQCategory = { label: string; items: FAQItem[] };

const faqData: FAQCategory[] = [
  {
    label: 'Suivi de colis',
    items: [
      { q: 'Comment suivre mon colis ?', a: 'Rendez-vous sur la page Suivi et entrez votre numéro de colis (ex: DC-84729) ou votre référence client. Vous verrez en temps réel l\'état de votre livraison.' },
      { q: 'Combien de temps le suivi reste-t-il disponible ?', a: 'L\'historique de suivi reste accessible pendant 90 jours après la livraison. Au-delà, contactez notre service client.' },
      { q: 'Puis-je partager le lien de suivi avec mon client ?', a: 'Oui. Chaque colis dispose d\'un lien de suivi public que vous pouvez envoyer directement à votre destinataire.' },
      { q: 'Je ne trouve pas mon colis avec le numéro fourni, que faire ?', a: 'Vérifiez que le numéro est correct (ex: DC-84729). Si le problème persiste, contactez notre support avec votre preuve d\'envoi.' },
    ],
  },
  {
    label: 'Livraison',
    items: [
      { q: 'Quelles zones géographiques sont couvertes ?', a: 'Direct Colis couvre les principales villes du Sénégal : Dakar, Thiès, Mbour, Kaolack, Saint-Louis, Ziguinchor et bien d\'autres axes en expansion continue.' },
      { q: 'Quel est le délai moyen de livraison ?', a: 'Le délai varie selon la destination : J+1 pour Dakar et sa banlieue, J+2 à J+3 pour les régions. Des délais express sont disponibles sur demande.' },
      { q: 'Que se passe-t-il si le destinataire est absent ?', a: 'Le livreur documente la tentative avec motif, photo et géolocalisation. Une nouvelle tentative est programmée. Après deux échecs, le colis est retourné en entrepôt.' },
      { q: 'Comment est confirmée la livraison ?', a: 'La remise est validée par un code OTP envoyé au destinataire, accompagné d\'une photo, d\'une signature électronique et d\'une géolocalisation.' },
      { q: 'Puis-je choisir un créneau horaire de livraison ?', a: 'Oui, sous réserve de disponibilité dans votre zone. Contactez-nous pour organiser une livraison sur créneau spécifique.' },
    ],
  },
  {
    label: 'Compte & Facturation',
    items: [
      { q: 'Comment créer un compte entreprise ?', a: 'Contactez notre équipe commerciale via le formulaire de contact ou appelez le +221 78 542 17 33. Votre compte sera configuré sous 24h ouvrées.' },
      { q: 'Comment importer mes colis en masse ?', a: 'Une fois votre compte actif, accédez à l\'onglet Import et chargez votre fichier Excel ou CSV au format fourni. Les colis sont créés et assignés automatiquement.' },
      { q: 'Comment obtenir mes factures ?', a: 'Vos factures sont générées automatiquement à la fin de chaque période de facturation et disponibles dans votre espace client sous l\'onglet Facturation.' },
      { q: 'Puis-je avoir plusieurs utilisateurs sur mon compte ?', a: 'Oui. Les comptes entreprise permettent de gérer plusieurs rôles : administrateur, opérateur, livreur. Contactez-nous pour configurer votre équipe.' },
    ],
  },
  {
    label: 'Technique & Intégrations',
    items: [
      { q: 'Disposez-vous d\'une API ?', a: 'Oui, notre API REST permet d\'intégrer Direct Colis à votre système e-commerce, ERP ou WMS. La documentation est disponible sur demande.' },
      { q: 'Comment générer des étiquettes QR ?', a: 'Les étiquettes QR sont générées automatiquement à la création de chaque colis. Vous pouvez les imprimer individuellement ou par lot.' },
      { q: 'Vos données sont-elles sécurisées ?', a: 'Toutes les données sont chiffrées en transit (TLS) et au repos. Nous appliquons des contrôles d\'accès stricts et des sauvegardes quotidiennes.' },
      { q: 'Quel navigateur est recommandé pour utiliser la plateforme ?', a: 'La plateforme est compatible avec Chrome, Firefox, Edge et Safari dans leurs versions récentes. Une application mobile est en développement.' },
    ],
  },
];

function AccordionItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className={`border rounded-2xl transition-all duration-300 overflow-hidden ${open ? 'border-red-200 shadow-md shadow-red-600/5' : 'border-slate-100 hover:border-slate-200'}`}>
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 text-left gap-4"
      >
        <span className={`text-sm sm:text-base font-semibold ${open ? 'text-red-600' : 'text-blue-950'} transition-colors`}>{q}</span>
        <ChevronDown className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${open ? 'rotate-180 text-red-500' : ''}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="px-5 pb-5 text-sm text-slate-500 leading-relaxed">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState('');

  const filtered = query.trim()
    ? faqData.flatMap(cat => cat.items).filter(item =>
        item.q.toLowerCase().includes(query.toLowerCase()) ||
        item.a.toLowerCase().includes(query.toLowerCase())
      )
    : faqData[activeCategory].items;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section className="py-20 sm:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 border-b border-slate-100 relative overflow-hidden">
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -30, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-10 left-10 w-72 h-72 bg-red-600/20 rounded-full blur-3xl pointer-events-none"
          />
          <motion.div
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl pointer-events-none"
          />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-3xl mx-auto px-4 text-center relative z-10">
            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <HelpCircle className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-widest">FAQ</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-[1.1]">Questions <span className="text-red-400 text-glow-red">fréquentes</span></h1>
              <p className="text-blue-100/80 text-base sm:text-lg mb-8">Trouvez rapidement une réponse à vos questions sur Direct Colis.</p>

              {/* Search bar */}
              <div className="relative max-w-xl mx-auto">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
                <input
                  type="text"
                  value={query}
                  onChange={e => { setQuery(e.target.value); setOpenIndex(null); }}
                  placeholder="Rechercher une question..."
                  className="w-full pl-12 pr-4 py-4 bg-white/95 backdrop-blur border border-white/20 rounded-xl text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-red-500/50 focus:border-red-400 shadow-2xl"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6">

            {/* Category tabs */}
            {!query && (
              <div className="flex flex-wrap gap-2 mb-10 justify-center">
                {faqData.map((cat, i) => (
                  <button
                    key={i}
                    onClick={() => { setActiveCategory(i); setOpenIndex(null); }}
                    className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
                      activeCategory === i
                        ? 'bg-red-600 text-white shadow-md shadow-red-600/20'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            )}

            {/* Items */}
            <motion.div
              key={activeCategory + query}
              initial="hidden"
              animate="visible"
              variants={{ visible: { transition: { staggerChildren: 0.06 } } }}
              className="space-y-3"
            >
              {filtered.length > 0 ? (
                filtered.map((item, i) => (
                  <motion.div key={i} variants={fadeInUp}>
                    <AccordionItem
                      q={item.q}
                      a={item.a}
                      open={openIndex === i}
                      onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    />
                  </motion.div>
                ))
              ) : (
                <p className="text-center text-slate-400 py-12">Aucun résultat pour « {query} »</p>
              )}
            </motion.div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="py-16 bg-slate-50 border-t border-slate-100">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <MessageSquare className="w-10 h-10 text-red-600 mx-auto mb-4" />
            <h2 className="text-xl font-bold text-blue-950 mb-3">Vous n'avez pas trouvé votre réponse ?</h2>
            <p className="text-slate-500 mb-6">Notre équipe est disponible pour vous répondre rapidement.</p>
            <Link to="/contact" className="inline-flex items-center gap-2 px-7 py-3.5 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/25">
              Contacter le support
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
