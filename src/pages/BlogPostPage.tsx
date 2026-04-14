import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, ChevronRight } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { blogPosts } from '../data/blogPosts';
import { useLang } from '../i18n/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function BlogPostPage() {
  const { t } = useLang();
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) return <Navigate to="/blog" replace />;

  const otherPosts = blogPosts.filter(p => p.slug !== slug);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero with post cover */}
        <section className="relative py-10 sm:py-16 bg-[#0a1128] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,58,138,0.35),_transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-xs sm:text-sm text-blue-200/60 mb-6 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">{t.common.home}</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/blog" className="hover:text-white transition-colors">{t.common.blog}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-red-300 truncate">{post.category}</span>
            </motion.nav>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
              <span className="inline-flex items-center gap-1.5 bg-red-600 text-white px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow mb-5">
                <span className="w-1.5 h-1.5 rounded-full bg-white/80" />
                {post.category}
              </span>
              <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-5 leading-[1.15]">
                {post.title}
              </h1>
              <div className="flex flex-wrap items-center gap-3 sm:gap-5 text-sm text-blue-200/70">
                <span className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-red-500/30 bg-white p-0.5">
                    <img src={post.authorImg} alt={post.author} loading="lazy" className="w-full h-full object-contain" />
                  </div>
                  <span className="font-semibold text-white">{post.author}</span>
                </span>
                <span className="flex items-center gap-1.5"><Calendar className="w-4 h-4 text-red-400" />{post.date}</span>
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4" />{post.readTime} {t.common.readTime}</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Cover image */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-4 sm:-mt-8 relative z-10">
          <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/9] bg-slate-100">
            <img src={post.image} alt={post.title} loading="lazy" className="w-full h-full object-cover" />
          </div>
        </div>

        {/* Article body */}
        <section className="py-12 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_280px] gap-10 lg:gap-16">
              {/* Main content */}
              <article className="min-w-0">
                <p className="text-lg sm:text-xl text-slate-700 leading-relaxed mb-8 font-medium">
                  {post.intro}
                </p>

                {post.sections.map((section, i) => (
                  <div key={i} className="mb-10">
                    <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mb-4">{section.heading}</h2>
                    {section.paragraphs?.map((p, j) => (
                      <p key={j} className="text-slate-600 leading-relaxed mb-4">{p}</p>
                    ))}
                    {section.bullets && (
                      <ul className="space-y-2.5 mb-4">
                        {section.bullets.map((b, j) => (
                          <li key={j} className="flex items-start gap-3 text-slate-600">
                            <div className="w-1.5 h-1.5 rounded-full bg-red-600 mt-2.5 shrink-0" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-8 border-t border-slate-100">
                  <span className="text-sm text-slate-400 font-semibold mr-2">Tags:</span>
                  {post.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-1 px-3 py-1 bg-red-50 text-red-600 text-xs font-semibold rounded-full border border-red-100">
                      <Tag className="w-3 h-3" />{tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="mt-10 bg-gradient-to-br from-blue-950 to-blue-900 rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-red-600/20 rounded-full blur-3xl" />
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-4">{post.cta.title}</h3>
                    <div className="flex flex-wrap justify-center gap-3">
                      <Link
                        to="/suivi"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/30"
                      >
                        {post.cta.button} <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-all duration-300"
                      >
                        {t.common.contactUs}
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Back */}
                <div className="mt-10">
                  <Link to="/blog" className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all">
                    <ArrowLeft className="w-4 h-4" /> {t.blogPage.backToBlog}
                  </Link>
                </div>
              </article>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="bg-slate-50 rounded-2xl p-6 border border-slate-100 sticky top-28">
                  <h3 className="text-sm font-extrabold text-blue-950 uppercase tracking-widest mb-4">{t.blogPage.otherArticles}</h3>
                  <div className="space-y-4">
                    {otherPosts.map(other => (
                      <Link key={other.slug} to={`/blog/${other.slug}`} className="block group">
                        <div className="flex gap-3">
                          <img src={other.image} alt={other.title} loading="lazy" className="w-16 h-16 rounded-lg object-cover shrink-0" />
                          <div className="min-w-0">
                            <p className="text-xs text-red-600 font-bold uppercase tracking-wide mb-1">{other.category}</p>
                            <p className="text-sm font-bold text-blue-950 leading-tight group-hover:text-red-600 transition-colors line-clamp-2">
                              {other.title}
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
