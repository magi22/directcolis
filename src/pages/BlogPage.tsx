import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageSquare, ArrowRight, Tag, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import blog1 from '../assets/images/1.jpg';
import blog2 from '../assets/images/2.jpg';
import blog3 from '../assets/images/3.jpg';
import testimonial2 from '../assets/images/testimonial 2.jpg';
import testimonial3 from '../assets/images/testimonial 3.jpg';
import testimonial4 from '../assets/images/testimonial 4.jpg';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const posts = [
  {
    image: blog1,
    category: 'Logistique',
    date: '10 Mai 2025',
    title: 'Comment optimiser vos expéditions avec le service Cargo',
    excerpt: 'Découvrez les meilleures pratiques pour réduire vos coûts d\'expédition, améliorer les délais de livraison et offrir une expérience client irréprochable grâce aux outils de Direct Colis.',
    author: 'Amadou Diallo',
    authorImg: testimonial2,
    readTime: '5 min',
    tags: ['Cargo', 'Optimisation', 'Délais'],
  },
  {
    image: blog2,
    category: 'Chaîne d\'approvisionnement',
    date: '10 Mai 2025',
    title: 'Suivre vos marchandises à travers la meilleure chaîne d\'approvisionnement',
    excerpt: 'La traçabilité est devenue un enjeu majeur pour les entreprises sénégalaises. Comment Direct Colis vous permet de garder un œil sur chaque maillon de votre chaîne logistique.',
    author: 'Fatou Sow',
    authorImg: testimonial3,
    readTime: '4 min',
    tags: ['Traçabilité', 'Supply Chain', 'QR Code'],
  },
  {
    image: blog3,
    category: 'Performance',
    date: '10 Mai 2025',
    title: 'Comment mesurer le succès de vos livraisons ?',
    excerpt: 'Taux de livraison du premier coup, délai moyen, taux de réclamation… Voici les indicateurs clés à surveiller pour piloter efficacement votre activité de livraison.',
    author: 'Cheikh Ndiaye',
    authorImg: testimonial4,
    readTime: '6 min',
    tags: ['KPI', 'Performance', 'Dashboard'],
  },
];

export default function BlogPage() {
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
                <BookOpen className="w-4 h-4 text-red-400" />
                <span className="text-xs font-bold text-red-300 uppercase tracking-widest">Blog & News</span>
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-white mb-4 leading-[1.1]">
                Actualités & <span className="text-red-400 text-glow-red">Conseils</span>
              </h1>
              <p className="text-blue-100/80 text-base sm:text-lg">
                Découvrez nos articles sur la logistique, la livraison et les bonnes pratiques.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Blog posts */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Featured post (first post large) */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-8 mb-16 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden group"
            >
              <div className="relative h-72 md:h-auto overflow-hidden">
                <img
                  src={posts[0].image}
                  alt={posts[0].title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow">
                    {posts[0].category}
                  </span>
                </div>
              </div>
              <div className="p-8 sm:p-10 flex flex-col justify-center">
                <div className="flex items-center gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-500" />{posts[0].date}</span>
                  <span>·</span>
                  <span>{posts[0].readTime} de lecture</span>
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-4 leading-tight group-hover:text-red-600 transition-colors cursor-pointer">
                  {posts[0].title}
                </h2>
                <p className="text-slate-500 leading-relaxed mb-6">{posts[0].excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {posts[0].tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      <Tag className="w-3 h-3" />{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-red-100">
                      <img src={posts[0].authorImg} alt={posts[0].author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-950 text-sm">{posts[0].author}</p>
                      <p className="text-slate-400 text-xs">Auteur</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all duration-200">
                    Lire <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Other posts */}
            <div className="grid sm:grid-cols-2 gap-8">
              {posts.slice(1).map((post, i) => (
                <motion.article
                  key={i}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: i * 0.1 } } }}
                  className="group rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest shadow">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-red-500" />{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime} de lecture</span>
                    </div>

                    <h3 className="text-lg font-extrabold text-blue-950 mb-3 leading-snug group-hover:text-red-600 transition-colors cursor-pointer flex-grow">
                      {post.title}
                    </h3>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {post.tags.map(tag => (
                        <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 bg-slate-100 text-slate-500 text-xs font-semibold rounded-full">
                          <Tag className="w-2.5 h-2.5" />{tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-red-100">
                          <img src={post.authorImg} alt={post.author} className="w-full h-full object-cover" />
                        </div>
                        <p className="font-bold text-blue-950 text-sm">{post.author}</p>
                      </div>
                      <button className="w-9 h-9 rounded-full bg-red-600 group-hover:bg-blue-950 text-white flex items-center justify-center transition-colors shadow-md">
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-blue-950">
          <div className="max-w-2xl mx-auto px-4 text-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Restez informé</h2>
              <p className="text-blue-100/70 mb-8">Abonnez-vous pour recevoir nos derniers articles et conseils logistiques directement dans votre boîte mail.</p>
              <div className="flex flex-col sm:flex-row gap-0 rounded-xl overflow-hidden shadow-2xl max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Votre adresse email"
                  className="flex-1 px-5 py-4 bg-white text-slate-800 placeholder-slate-400 focus:outline-none text-sm"
                />
                <button className="px-6 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-sm transition-colors whitespace-nowrap">
                  S'abonner
                </button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
