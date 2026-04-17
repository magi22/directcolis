import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { CheckCircle, ArrowRight, ChevronRight, PhoneCall, Mail, FileText } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import { services } from '../data/services';
import { useLang } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ServiceDetailPage() {
  const { t } = useLang();
  const { slug } = useParams();
  const service = services.find(s => s.slug === slug);
  if (!service) return <Navigate to="/services" replace />;

  // eslint-disable-next-line react-hooks/rules-of-hooks
  useSEO({ title: `${service.shortTitle} — Direct Colis`, canonical: `/services/${service.slug}` });

  const others = services.filter(s => s.slug !== slug);
  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        {/* Hero */}
        <section className="relative py-10 sm:py-16 bg-[#0a1128] overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_rgba(220,38,38,0.25),_transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(30,58,138,0.35),_transparent_55%)]" />
          <div className="absolute inset-0 opacity-[0.04]" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '30px 30px' }} />

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            {/* Breadcrumb */}
            <motion.nav initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-2 text-xs sm:text-sm text-blue-200/60 mb-6 flex-wrap">
              <Link to="/" className="hover:text-white transition-colors">{t.common.home}</Link>
              <ChevronRight className="w-3 h-3" />
              <Link to="/services" className="hover:text-white transition-colors">{t.common.services}</Link>
              <ChevronRight className="w-3 h-3" />
              <span className="text-red-300">{service.shortTitle}</span>
            </motion.nav>

            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="grid md:grid-cols-[auto_1fr] gap-6 items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-red-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-red-600/40">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
              </div>
              <div>
                <span className="inline-flex items-center gap-1.5 bg-red-600/20 border border-red-500/40 text-red-300 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3">
                  Service {service.num} · {service.tag}
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-white mb-3 leading-[1.15]">
                  {service.heroTitle ?? service.title}
                </h1>
                <p className="text-blue-100/80 text-base sm:text-lg leading-relaxed max-w-2xl">{service.intro}</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content + sidebar */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-[1fr_320px] gap-10 lg:gap-12">

              {/* Main content */}
              <article className="min-w-0">
                {/* Cover image */}
                <div className="rounded-3xl overflow-hidden shadow-xl aspect-[16/9] bg-slate-100 mb-10">
                  <img src={service.image} alt={service.title} loading="lazy" className="w-full h-full object-cover" />
                </div>

                {/* Detail paragraphs */}
                <div className="mb-10">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mb-5">{t.servicesSection.howItWorks}</h2>
                  {service.detail.paragraphs.map((p, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed mb-4 text-base sm:text-lg">{p}</p>
                  ))}
                </div>

                {/* Benefits */}
                <div className="mb-10 bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-100">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mb-5">{t.servicesSection.benefitsTitle}</h2>
                  <ul className="space-y-3">
                    {service.benefits.map((b, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center shrink-0 mt-0.5 shadow-md shadow-red-600/20">
                          <CheckCircle className="w-3.5 h-3.5 text-white" />
                        </div>
                        <span className="text-slate-700 font-medium">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Features */}
                <div className="mb-10">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mb-5">{t.servicesSection.featuresTitle}</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {service.features.map((f, i) => (
                      <div key={i} className="flex items-center gap-3 p-4 bg-white rounded-xl border border-slate-100 hover:border-red-200 hover:shadow-md transition-all">
                        <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                          <CheckCircle className="w-5 h-5 text-red-600" />
                        </div>
                        <span className="text-sm font-semibold text-slate-700">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Why choose */}
                <div className="mb-10">
                  <h2 className="text-xl sm:text-2xl font-extrabold text-blue-950 mb-4">{t.servicesSection.whyTitle}</h2>
                  <p className="text-slate-600 leading-relaxed text-base sm:text-lg">{service.why}</p>
                </div>

                {/* CTA */}
                <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-red-950 animated-gradient rounded-3xl p-8 sm:p-10 text-center relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-red-600/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-red-500/15 rounded-full blur-3xl" />
                  <div className="relative">
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white mb-3">{service.cta.title}</h3>
                    {service.cta.subtitle && (
                      <p className="text-blue-100/70 text-sm sm:text-base mb-6 max-w-xl mx-auto">{service.cta.subtitle}</p>
                    )}
                    <div className="flex flex-wrap justify-center gap-3">
                      <Link
                        to={service.cta.primary.to}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/40"
                      >
                        {service.cta.primary.label} <ArrowRight className="w-4 h-4" />
                      </Link>
                      <Link
                        to={service.cta.secondary.to}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-xl transition-all duration-300"
                      >
                        {service.cta.secondary.label}
                      </Link>
                    </div>
                  </div>
                </div>
              </article>

              {/* Sidebar */}
              <aside>
                <div className="lg:sticky lg:top-28 space-y-6">
                  {/* Autres services */}
                  <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
                    <div className="p-5 bg-slate-50 border-b border-slate-100">
                      <h3 className="text-sm font-extrabold text-blue-950 uppercase tracking-widest">{t.servicesSection.sidebarOtherTitle}</h3>
                    </div>
                    <nav className="p-3">
                      {others.map(other => {
                        const OtherIcon = other.icon;
                        return (
                          <Link
                            key={other.slug}
                            to={`/services/${other.slug}`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-red-50 group transition-colors"
                          >
                            <div className="w-10 h-10 rounded-xl bg-red-50 group-hover:bg-red-600 flex items-center justify-center shrink-0 transition-colors">
                              <OtherIcon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="text-sm font-bold text-blue-950 group-hover:text-red-600 transition-colors truncate">{other.shortTitle}</p>
                            </div>
                            <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-red-600 shrink-0 transition-colors" />
                          </Link>
                        );
                      })}
                    </nav>
                  </div>

                  {/* Contact block */}
                  <div className="bg-gradient-to-br from-blue-950 via-blue-900 to-red-950 animated-gradient text-white rounded-2xl p-6 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/20 rounded-full blur-2xl" />
                    <div className="relative">
                      <h3 className="font-extrabold text-lg mb-2">{t.servicesSection.sidebarContactTitle}</h3>
                      <p className="text-blue-100/70 text-sm mb-5 leading-relaxed">
                        {t.servicesSection.sidebarContactDesc}
                      </p>
                      <div className="space-y-2">
                        <Link
                          to="/contact"
                          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-red-600 hover:bg-red-700 text-white font-bold text-sm rounded-lg transition-colors"
                        >
                          <Mail className="w-4 h-4" /> {t.common.contactUs}
                        </Link>
                        <a
                          href="tel:+221772049283"
                          className="flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-sm rounded-lg transition-colors"
                        >
                          <PhoneCall className="w-4 h-4" /> +221 77 204 92 83
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quote block */}
                  <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
                    <FileText className="w-6 h-6 text-red-600 mb-3" />
                    <h3 className="font-extrabold text-blue-950 mb-1">{t.servicesSection.sidebarQuoteTitle}</h3>
                    <p className="text-slate-600 text-sm mb-4">
                      {t.servicesSection.sidebarQuoteDesc}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-red-600 font-bold text-sm hover:gap-3 transition-all"
                    >
                      {t.servicesSection.sidebarQuoteCta} <ArrowRight className="w-4 h-4" />
                    </Link>
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
