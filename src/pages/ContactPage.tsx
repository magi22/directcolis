import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PhoneCall, Globe, MapPin, MessageSquare, Send, CheckCircle, Sparkles, Mail } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero, { HeroHighlight } from '../components/PageHero';
import { useLang } from '../i18n/LanguageContext';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export default function ContactPage() {
  const { t } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });

  const contactInfo = [
    { icon: PhoneCall, label: t.contactPage.info.phone, value: '+221 78 542 17 33', sub: t.contactPage.info.phoneHours },
    { icon: Globe, label: t.contactPage.info.email, value: 'contact@directcolis.sn', sub: t.contactPage.info.emailHours },
    { icon: MapPin, label: t.contactPage.info.address, value: 'Dakar, Sénégal', sub: t.contactPage.info.addressSub },
    { icon: MessageSquare, label: t.contactPage.info.whatsapp, value: '+221 78 542 17 33', sub: t.contactPage.info.whatsappSub },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const wa = `https://wa.me/221785421733?text=${encodeURIComponent(
      `Nom: ${form.name}\nEmail: ${form.email}\nTéléphone: ${form.phone}\nSujet: ${form.subject}\n\n${form.message}`
    )}`;
    window.open(wa, '_blank');
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        <PageHero
          badge={t.contactPage.badge}
          badgeIcon={Mail}
          title={<>{t.contactPage.titleA} <HeroHighlight>{t.contactPage.titleB}</HeroHighlight></>}
          subtitle={t.contactPage.subtitle}
        />

        {/* Contact grid */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-start">

              {/* Left: form */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <h2 className="text-2xl font-extrabold text-blue-950 mb-8">{t.contactPage.sendMessage}</h2>

                {sent ? (
                  <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center">
                    <CheckCircle className="w-14 h-14 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-bold text-green-800 mb-2">{t.contactPage.sentTitle}</h3>
                    <p className="text-green-700">{t.contactPage.sentDesc}</p>
                    <button onClick={() => setSent(false)} className="mt-6 text-sm text-green-700 underline">{t.contactPage.sendAnother}</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contactPage.labels.name} *</label>
                        <input
                          name="name" required value={form.name} onChange={handleChange}
                          placeholder={t.contactPage.labels.namePlaceholder}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-slate-50 text-slate-800 placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contactPage.labels.email} *</label>
                        <input
                          name="email" type="email" required value={form.email} onChange={handleChange}
                          placeholder={t.contactPage.labels.emailPlaceholder}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-slate-50 text-slate-800 placeholder-slate-400"
                        />
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contactPage.labels.phone}</label>
                        <input
                          name="phone" value={form.phone} onChange={handleChange}
                          placeholder={t.contactPage.labels.phonePlaceholder}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-slate-50 text-slate-800 placeholder-slate-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contactPage.labels.subject} *</label>
                        <select
                          name="subject" required value={form.subject} onChange={handleChange}
                          className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-slate-50 text-slate-800"
                        >
                          <option value="">{t.contactPage.labels.subjectChoose}</option>
                          <option>{t.contactPage.labels.subjectDemo}</option>
                          <option>{t.contactPage.labels.subjectSupport}</option>
                          <option>{t.contactPage.labels.subjectClaim}</option>
                          <option>{t.contactPage.labels.subjectPartnership}</option>
                          <option>{t.contactPage.labels.subjectOther}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-slate-700 mb-2">{t.contactPage.labels.message} *</label>
                      <textarea
                        name="message" required value={form.message} onChange={handleChange}
                        rows={5} placeholder={t.contactPage.labels.messagePlaceholder}
                        className="w-full px-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500/30 focus:border-red-400 bg-slate-50 text-slate-800 placeholder-slate-400 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-red-600/25 w-full sm:w-auto justify-center"
                    >
                      <Send className="w-5 h-5" /> {t.contactPage.sendWhatsApp}
                    </button>
                  </form>
                )}
              </motion.div>

              {/* Right: info */}
              <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={{ ...fadeInUp, visible: { ...fadeInUp.visible, transition: { ...fadeInUp.visible.transition, delay: 0.15 } } }}>
                <h2 className="text-2xl font-extrabold text-blue-950 mb-8">{t.contactPage.coordinates}</h2>
                <div className="space-y-5">
                  {contactInfo.map(({ icon: Icon, label, value, sub }, i) => (
                    <div key={i} className="flex items-start gap-4 p-5 bg-slate-50 rounded-2xl border border-slate-100">
                      <div className="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-0.5">{label}</p>
                        <p className="font-bold text-blue-950">{value}</p>
                        <p className="text-sm text-slate-400">{sub}</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/221785421733?text=Bonjour%2C%20je%20souhaite%20en%20savoir%20plus%20sur%20Direct%20Colis."
                  target="_blank" rel="noopener noreferrer"
                  className="mt-8 flex items-center justify-center gap-3 w-full px-6 py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-green-600/20"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  {t.contactPage.whatsappCta}
                </a>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
