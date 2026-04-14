import React from 'react';
import { motion } from 'motion/react';
import { Calendar, ArrowRight, Tag, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero, { HeroHighlight } from '../components/PageHero';
import { blogPosts } from '../data/blogPosts';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        <PageHero
          badge="Blog & News"
          badgeIcon={BookOpen}
          title={<>Actualités & <HeroHighlight>Conseils</HeroHighlight></>}
          subtitle="Découvrez nos articles sur la logistique, la livraison et les bonnes pratiques."
        />

        {/* Blog posts */}
        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Featured post */}
            <motion.article
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-12 sm:mb-16 bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden group"
            >
              <Link to={`/blog/${featured.slug}`} className="block relative h-64 md:h-auto overflow-hidden">
                <img
                  src={featured.image}
                  alt={featured.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow">
                    {featured.category}
                  </span>
                </div>
              </Link>
              <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
                <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-sm text-slate-400 mb-4">
                  <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-500" />{featured.date}</span>
                  <span>·</span>
                  <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{featured.readTime} de lecture</span>
                </div>
                <Link to={`/blog/${featured.slug}`}>
                  <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-blue-950 mb-4 leading-tight hover:text-red-600 transition-colors cursor-pointer">
                    {featured.title}
                  </h2>
                </Link>
                <p className="text-slate-500 leading-relaxed mb-6 text-sm sm:text-base">{featured.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-slate-100 text-slate-600 text-xs font-semibold rounded-full">
                      <Tag className="w-3 h-3" />{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-slate-100 mt-auto">
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-full overflow-hidden border-2 border-red-100 bg-white p-0.5 shrink-0">
                      <img src={featured.authorImg} alt={featured.author} className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <p className="font-bold text-blue-950 text-sm">{featured.author}</p>
                      <p className="text-slate-400 text-xs">Auteur</p>
                    </div>
                  </div>
                  <Link to={`/blog/${featured.slug}`} className="flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all duration-200">
                    Lire <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.article>

            {/* Other posts */}
            <div className="grid sm:grid-cols-2 gap-6 sm:gap-8">
              {rest.map((post, i) => (
                <motion.article
                  key={post.slug}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: '-50px' }}
                  variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: i * 0.1 } } }}
                  className="group rounded-2xl bg-white border border-slate-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden"
                >
                  <Link to={`/blog/${post.slug}`} className="block relative h-56 overflow-hidden">
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
                  </Link>

                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                      <span className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5 text-red-500" />{post.date}</span>
                      <span>·</span>
                      <span>{post.readTime}</span>
                    </div>

                    <Link to={`/blog/${post.slug}`}>
                      <h3 className="text-lg font-extrabold text-blue-950 mb-3 leading-snug group-hover:text-red-600 transition-colors cursor-pointer flex-grow">
                        {post.title}
                      </h3>
                    </Link>
                    <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between pt-5 border-t border-slate-100 mt-auto">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-red-100 bg-white p-0.5 shrink-0">
                          <img src={post.authorImg} alt={post.author} className="w-full h-full object-contain" />
                        </div>
                        <p className="font-bold text-blue-950 text-sm">{post.author}</p>
                      </div>
                      <Link to={`/blog/${post.slug}`} className="w-9 h-9 rounded-full bg-red-600 group-hover:bg-blue-950 text-white flex items-center justify-center transition-colors shadow-md">
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-16 sm:py-20 bg-blue-950">
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
