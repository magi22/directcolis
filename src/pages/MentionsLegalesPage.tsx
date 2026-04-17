import React from 'react';
import { FileText } from 'lucide-react';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import PageHero, { HeroHighlight } from '../components/PageHero';
import { useLang } from '../i18n/LanguageContext';
import { useSEO } from '../hooks/useSEO';

export default function MentionsLegalesPage() {
  const { t } = useLang();
  useSEO({ title: 'Mentions légales — Direct Colis', canonical: '/mentions-legales' });
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

              {/* ── 1. Éditeur ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">1. Éditeur du site</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le présent site internet, accessible à l'adresse <strong className="text-blue-950">directcolis.sn</strong>, est édité par la société <strong className="text-blue-950">Direct Colis</strong>, entreprise spécialisée dans les services logistiques et de livraison au Sénégal.
              </p>
              <ul className="text-slate-600 leading-relaxed space-y-1 mb-6 list-disc pl-6">
                <li><strong>Dénomination sociale :</strong> Direct Colis</li>
                <li><strong>Forme juridique :</strong> Société à Responsabilité Limitée (SARL)</li>
                <li><strong>Siège social :</strong> Médina rue 43x30, Dakar, Sénégal</li>
                <li><strong>NINEA :</strong> [en cours d'enregistrement]</li>
                <li><strong>RCCM :</strong> [en cours d'enregistrement]</li>
                <li><strong>Téléphone :</strong> +221 77 204 92 83</li>
                <li><strong>Email :</strong> groupefayassine@gmail.com</li>
                <li><strong>Directeur de la publication :</strong> Amadou Fall, Fondateur &amp; CEO</li>
              </ul>

              {/* ── 2. Hébergement ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">2. Hébergement</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site directcolis.sn est hébergé par <strong className="text-blue-950">Vercel Inc.</strong>, dont le siège social est situé au 340 S Lemon Ave #4133, Walnut, Californie 91789, États-Unis. L'hébergeur peut être contacté via son site officiel : vercel.com.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les serveurs d'hébergement sont localisés dans des datacenters certifiés ISO 27001. Vercel assure la disponibilité, la sécurité physique des infrastructures et la résilience des serveurs. Toute réclamation relative à l'hébergement peut être adressée directement à Vercel Inc. via leur formulaire de contact officiel.
              </p>

              {/* ── 3. Propriété intellectuelle ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">3. Propriété intellectuelle</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'ensemble du contenu présent sur le site directcolis.sn — incluant notamment les textes, les images, les illustrations, les logos, les icônes, les photographies, les vidéos, les graphismes, la structure, l'arborescence et l'organisation des pages — est la propriété exclusive de Direct Colis ou de ses partenaires, et est protégé par les lois sénégalaises et internationales relatives à la propriété intellectuelle.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Toute reproduction, représentation, modification, publication, adaptation ou exploitation, totale ou partielle, des éléments du site, quel que soit le moyen ou le procédé utilisé, est strictement interdite sans l'autorisation écrite préalable de Direct Colis. Toute exploitation non autorisée du site ou de l'un quelconque de ses éléments sera considérée comme constitutive d'une contrefaçon et pourra faire l'objet de poursuites judiciaires conformément aux dispositions de la loi sénégalaise n° 2008-09 sur la propriété intellectuelle.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les marques et logos figurant sur le site sont des marques déposées par Direct Colis ou ses partenaires. Toute reproduction partielle ou totale de ces marques sans autorisation expresse est interdite.
              </p>

              {/* ── 4. Conditions d'utilisation ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">4. Conditions d'utilisation</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisation du site directcolis.sn implique l'acceptation pleine et entière des présentes conditions générales d'utilisation. Ces conditions peuvent être modifiées ou complétées à tout moment, sans préavis. Les utilisateurs sont donc invités à les consulter régulièrement.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis s'efforce de fournir sur le site des informations aussi précises que possible. Toutefois, l'entreprise ne saurait être tenue responsable des omissions, des inexactitudes ou des carences dans la mise à jour, qu'elles soient de son fait ou du fait de tiers partenaires qui lui fournissent ces informations.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisateur s'engage à ne pas utiliser le site à des fins illicites, notamment à ne pas diffuser de contenus portant atteinte aux droits de tiers, à ne pas tenter de pirater ou de déstabiliser les systèmes informatiques, et à ne pas collecter des données personnelles d'autres utilisateurs sans leur consentement.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis se réserve le droit de suspendre ou d'interrompre l'accès au site à tout moment, sans préavis, notamment pour des opérations de maintenance, de mise à jour ou de sécurité.
              </p>

              {/* ── 5. Données personnelles ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">5. Données personnelles</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Conformément à la loi n° 2008-12 du 25 janvier 2008 portant sur la protection des données à caractère personnel au Sénégal et aux recommandations de la Commission de Protection des Données Personnelles (CDP), l'utilisateur dispose d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles le concernant.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les données collectées via les formulaires du site (formulaire de contact, demande de devis, suivi de colis) sont utilisées exclusivement dans le cadre des services proposés par Direct Colis. Elles ne sont en aucun cas transmises à des tiers à des fins commerciales sans le consentement explicite de l'utilisateur.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les données collectées sont conservées pour une durée n'excédant pas celle nécessaire aux finalités pour lesquelles elles ont été collectées. Les données de navigation (logs) sont conservées pendant une durée maximale de 12 mois conformément aux exigences légales applicables.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour exercer vos droits ou pour toute question relative à l'utilisation de vos données personnelles, vous pouvez nous contacter à l'adresse : <strong>groupefayassine@gmail.com</strong> ou par courrier à l'adresse du siège social.
              </p>

              {/* ── 6. Sécurité des données ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">6. Sécurité des données</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis met en œuvre des mesures techniques et organisationnelles appropriées pour garantir la sécurité des données personnelles contre toute destruction accidentelle ou illicite, perte accidentelle, altération, diffusion ou accès non autorisés.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les échanges de données entre votre navigateur et nos serveurs sont chiffrés via le protocole HTTPS (TLS 1.2 minimum). Les mots de passe et informations sensibles sont stockés sous forme hachée. Des sauvegardes quotidiennes sont effectuées sur des serveurs redondants.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                En cas de violation de données susceptible d'engendrer un risque pour vos droits et libertés, Direct Colis s'engage à notifier les autorités compétentes et, le cas échéant, les personnes concernées, dans les meilleurs délais.
              </p>

              {/* ── 7. Cookies ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">7. Cookies</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site directcolis.sn peut être amené à utiliser des cookies pour améliorer l'expérience utilisateur, mesurer l'audience du site et faciliter la navigation. Un cookie est un petit fichier texte enregistré sur votre appareil lors de votre visite.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Nous utilisons uniquement des cookies strictement nécessaires au fonctionnement du site (préférences de langue, session utilisateur) et des cookies analytiques anonymisés pour mesurer l'audience. Aucun cookie publicitaire ou de tracking tiers n'est déposé sans votre consentement explicite.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisateur peut configurer son navigateur pour être averti en cas de réception de cookies, pour les accepter ou les refuser au cas par cas, ou encore pour les refuser systématiquement. Toutefois, le refus de certains cookies peut limiter l'accès à certaines fonctionnalités du site.
              </p>

              {/* ── 8. Liens hypertextes ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">8. Liens hypertextes</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Le site directcolis.sn peut contenir des liens hypertextes vers d'autres sites internet. Direct Colis n'exerce aucun contrôle sur ces sites et n'assume aucune responsabilité quant à leur contenu, leur politique de confidentialité ou leur fonctionnement. La présence d'un lien vers un site tiers ne constitue pas une approbation de son contenu.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tout site souhaitant établir un lien vers directcolis.sn doit obtenir l'autorisation préalable de Direct Colis. Les liens en profondeur (deep links) vers des pages internes du site sont strictement interdits sans accord écrit.
              </p>

              {/* ── 9. Limitation de responsabilité ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">9. Limitation de responsabilité</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis met tout en œuvre pour offrir aux utilisateurs des informations et des outils disponibles et vérifiés. Cependant, l'entreprise ne saurait être tenue responsable des erreurs, d'une absence de disponibilité des informations ou de la présence de virus sur le site.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis ne peut être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site, notamment des dommages liés à une interruption de service, une perte de données, une intrusion informatique, ou une impossibilité d'accès au site.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les informations contenues sur le site sont à titre indicatif et ne sauraient engager la responsabilité de Direct Colis. L'utilisation des informations et contenus du site se fait sous l'entière et seule responsabilité de l'utilisateur.
              </p>

              {/* ── 10. Service de livraison ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">10. Service de livraison et suivi de colis</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Les services de suivi, de livraison et de gestion des colis proposés par Direct Colis sont encadrés par des conditions générales de vente (CGV) spécifiques, communiquées aux clients professionnels lors de la contractualisation. Ces CGV définissent notamment les délais de livraison, les zones desservies, les responsabilités respectives des parties, les procédures en cas de litige et les modalités de facturation.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                L'utilisation de l'outil public de suivi de colis disponible sur le site est soumise aux présentes mentions légales ainsi qu'aux conditions particulières acceptées par l'expéditeur lors du dépôt de l'envoi.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                En cas de perte, détérioration ou retard dans la livraison d'un colis, les réclamations doivent être adressées à Direct Colis par email à <strong>groupefayassine@gmail.com</strong> dans un délai de 7 jours ouvrés suivant la date de livraison prévue, accompagnées de tout justificatif utile (numéro de suivi, preuve d'envoi, photos le cas échéant).
              </p>

              {/* ── 11. Accessibilité ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">11. Accessibilité</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Direct Colis s'engage à rendre son site internet accessible au plus grand nombre, en conformité avec les bonnes pratiques d'accessibilité numérique (WCAG 2.1, niveau AA). Des efforts continus sont réalisés pour améliorer l'expérience des utilisateurs en situation de handicap, notamment via la compatibilité avec les lecteurs d'écran, le respect des contrastes de couleurs et la navigation au clavier.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                Si vous rencontrez des difficultés d'accès à certains contenus, nous vous invitons à nous contacter afin que nous puissions vous proposer une alternative adaptée.
              </p>

              {/* ── 12. Droit applicable ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">12. Droit applicable et juridiction compétente</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Tout litige en relation avec l'utilisation du site directcolis.sn est soumis au droit sénégalais, notamment à la loi n° 2008-08 sur les transactions électroniques et à la loi n° 2008-12 sur la protection des données personnelles.
              </p>
              <p className="text-slate-600 leading-relaxed mb-4">
                En cas de différend, les parties s'engagent à rechercher une solution amiable avant tout recours judiciaire. En l'absence de résolution à l'amiable dans un délai de 30 jours, compétence exclusive est attribuée aux tribunaux compétents de Dakar, nonobstant pluralité de défendeurs ou appel en garantie.
              </p>

              {/* ── 13. Contact ── */}
              <h2 className="text-2xl font-extrabold text-blue-950 mt-10 mb-4">13. Contact et réclamations</h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                Pour toute question relative aux présentes mentions légales, pour signaler un problème rencontré sur le site, pour exercer vos droits relatifs à vos données personnelles, ou pour adresser une réclamation, vous pouvez contacter Direct Colis aux coordonnées suivantes :
              </p>
              <ul className="text-slate-600 leading-relaxed space-y-1 mb-6 list-disc pl-6">
                <li><strong>Email :</strong> groupefayassine@gmail.com</li>
                <li><strong>Téléphone :</strong> +221 78 542 17 33 (du lundi au samedi, 8h–18h)</li>
                <li><strong>Adresse :</strong> Médina rue 43x30, Dakar, Sénégal</li>
                <li><strong>WhatsApp :</strong> +221 78 542 17 33</li>
              </ul>
              <p className="text-slate-600 leading-relaxed mb-4">
                Toute réclamation fera l'objet d'un accusé de réception dans les 48 heures ouvrées et d'une réponse motivée dans un délai maximum de 15 jours ouvrés.
              </p>

              <p className="text-slate-500 text-sm italic mt-12 pt-6 border-t border-slate-100">
                Les présentes mentions légales constituent un document évolutif. Direct Colis se réserve le droit de les modifier à tout moment pour les adapter à l'évolution du site, de la législation ou de la jurisprudence applicable au Sénégal. Les utilisateurs sont invités à les consulter régulièrement. La version en vigueur est celle accessible en ligne à la date de consultation.
              </p>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
