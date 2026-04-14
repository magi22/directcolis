import React from 'react';
import { FileText } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero, { HeroHighlight } from '../components/PageHero';
import { useLang } from '../i18n/LanguageContext';

export default function MentionsLegalesPage() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      <SiteHeader />

      <main className="pt-20">
        <PageHero
          badge={t.legal.badge}
          badgeIcon={FileText}
          title={<>{t.legal.titleA} <HeroHighlight>{t.legal.titleB}</HeroHighlight></>}
          subtitle={t.legal.subtitle}
        />

        <section className="py-16 sm:py-20 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-slate max-w-none">

              <p className="text-sm text-slate-400 mb-8">{t.legal.lastUpdate}</p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">1. Éditeur du site</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le présent site internet, accessible à l'adresse directcolis.sn, est édité par la société <strong className="text-blue-950">Direct Colis</strong>, entreprise spécialisée dans les services logistiques et de livraison au Sénégal.
              </p>
              <ul className="text-slate-600 leading-relaxed space-y-1 mb-6 list-disc pl-6">
                <li><strong>Dénomination :</strong> Direct Colis</li>
                <li><strong>Siège social :</strong> Dakar, Sénégal</li>
                <li><strong>Téléphone :</strong> +221 78 542 17 33</li>
                <li><strong>Email :</strong> contact@directcolis.sn</li>
                <li><strong>Directeur de la publication :</strong> Amadou Fall, Fondateur & CEO</li>
              </ul>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">2. Hébergement</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site directcolis.sn est hébergé par <strong className="text-blue-950">Vercel Inc.</strong>, dont le siège social est situé au 340 S Lemon Ave #4133, Walnut, Californie 91789, États-Unis. L'hébergeur peut être contacté via son site officiel : vercel.com.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'ensemble du contenu présent sur le site directcolis.sn — incluant notamment les textes, les images, les illustrations, les logos, les icônes, les photographies, les vidéos, les graphismes, la structure, l'arborescence et l'organisation des pages — est la propriété exclusive de Direct Colis ou de ses partenaires, et est protégé par les lois sénégalaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l'autorisation écrite préalable de Direct Colis. Toute exploitation non autorisée du site ou de l'un quelconque de ses éléments sera considérée comme constitutive d'une contrefaçon et pourra faire l'objet de poursuites judiciaires.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">4. Conditions d'utilisation</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisation du site directcolis.sn implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. Ces conditions peuvent être modifiées ou complétées à tout moment, sans préavis. Les utilisateurs sont donc invités à les consulter régulièrement.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, l'entreprise ne saurait être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisateur s'engage à accéder au site en utilisant un matériel récent, ne contenant pas de virus, et avec un navigateur de dernière génération mis à jour. Direct Colis ne pourra être tenue responsable des dommages directs ou indirects causés au matériel de l'utilisateur lors de l'accès au site.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">5. Données personnelles</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conformément à la loi n° 2008-12 du 25 janvier 2008 portant sur la protection des données à caractère personnel au Sénégal, l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles le concernant.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les données collectées via les formulaires du site (formulaire de contact, demande de devis, suivi de colis) sont utilisées exclusivement dans le cadre des services proposés par Direct Colis. Elles ne sont en aucun cas transmises à des tiers à des fins commerciales sans le consentement explicite de l'utilisateur.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour exercer vos droits ou pour toute question relative à l'utilisation de vos données personnelles, vous pouvez nous contacter à l'adresse : contact@directcolis.sn.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">6. Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site directcolis.sn peut être amené à utiliser des cookies pour améliorer l'expérience utilisateur, mesurer l'audience du site et faciliter la navigation. Un cookie est un petit fichier texte enregistré sur votre appareil lors de votre visite.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisateur peut configurer son navigateur pour être averti en cas de réception de cookies, pour les accepter ou les refuser au cas par cas, ou encore pour les refuser systématiquement. Toutefois, le refus de certains cookies peut limiter l'accès à certaines fonctionnalités du site.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">7. Liens hypertextes</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site directcolis.sn peut contenir des liens hypertextes vers d'autres sites internet. Direct Colis n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu, leur politique de confidentialité ou leur fonctionnement. La présence d'un lien vers un site tiers ne constitue pas une approbation de son contenu.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">8. Limitation de responsabilité</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis met tout en œuvre pour offrir aux utilisateurs des informations et des outils disponibles et vérifiés. Cependant, l'entreprise ne saurait être tenue responsable des erreurs, d'une absence de disponibilité des informations ou de la présence de virus sur le site.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les informations contenues sur le site sont à titre indicatif et ne sauraient engager la responsabilité de Direct Colis. L'utilisation des informations et contenus du site se fait sous l'entière et seule responsabilité de l'utilisateur.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">9. Service de livraison et suivi de colis</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les services de suivi, de livraison et de gestion des colis proposés par Direct Colis sont encadrés par des conditions générales de vente (CGV) spécifiques, communiquées aux clients professionnels lors de la contractualisation. Ces CGV définissent notamment les délais de livraison, les zones desservies, les responsabilités respectives des parties, les procédures en cas de litige et les modalités de facturation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisation de l'outil public de suivi de colis disponible sur le site est soumise aux présentes mentions légales ainsi qu'aux conditions particulières acceptées par l'expéditeur lors du dépôt de l'envoi.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">10. Droit applicable</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tout litige en relation avec l'utilisation du site directcolis.sn est soumis au droit sénégalais. En cas de différend, et après une tentative de recherche d'une solution amiable, compétence exclusive est attribuée aux tribunaux compétents de Dakar.
              </p>

              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">11. Contact</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour toute question relative aux présentes mentions légales ou pour signaler un problème rencontré sur le site, vous pouvez contacter Direct Colis aux coordonnées suivantes :
              </p>
              <ul className="text-slate-600 leading-relaxed space-y-1 mb-6 list-disc pl-6">
                <li><strong>Email :</strong> contact@directcolis.sn</li>
                <li><strong>Téléphone :</strong> +221 78 542 17 33</li>
                <li><strong>Adresse :</strong> Dakar, Sénégal</li>
              </ul>

              <p className="text-slate-500 text-sm italic mt-12 pt-6 border-t border-slate-100">
                Les présentes mentions légales constituent un document évolutif. Direct Colis se réserve le droit de les modifier à tout moment pour les adapter à l'évolution du site, de la législation ou de la jurisprudence. Les utilisateurs sont invités à les consulter régulièrement.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
