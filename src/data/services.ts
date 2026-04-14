import {
  Search, Truck, FileSignature, AlertTriangle, Users, LayoutDashboard,
  LucideIcon
} from 'lucide-react';
import service1 from '../assets/images/service 1.png';
import service2 from '../assets/images/service 2.png';
import service3 from '../assets/images/service 3.png';
import service4 from '../assets/images/service 4.png';
import service5 from '../assets/images/service 5.png';
import service6 from '../assets/images/service 6.jpg';

export type Service = {
  slug: string;
  num: string;
  tag: string;
  icon: LucideIcon;
  image: string;
  title: string;
  shortTitle: string;
  intro: string;
  excerpt: string;
  cardDesc: string;
  features: string[];
  detail: {
    paragraphs: string[];
  };
  benefits: string[];
  why: string;
  cta: {
    title: string;
    primary: { label: string; to: string };
    secondary: { label: string; to: string };
  };
};

export const services: Service[] = [
  {
    slug: 'suivi-livraison',
    num: '01',
    tag: 'TRACKING',
    icon: Search,
    image: service1,
    title: 'Suivi de livraison',
    shortTitle: 'Suivi de livraison',
    intro:
      "Suivez l'état d'un colis et consultez les principales étapes de son parcours en toute simplicité.",
    excerpt:
      "Offrez à vos clients une visibilité immédiate sur leurs livraisons grâce à un système de suivi simple, clair et accessible.",
    cardDesc:
      "Un accès simple au statut, à l'historique et aux principales étapes de livraison pour vous et vos clients.",
    features: ['Statut du colis', 'Historique des étapes', 'Lien de suivi public', 'GPS en phase livraison'],
    detail: {
      paragraphs: [
        "Le suivi proposé par Direct Colis permet de donner de la visibilité sur l'avancement d'une expédition, depuis sa création jusqu'à sa remise finale. Sur le site vitrine, un champ de tracking permet au client de saisir un numéro de suivi pour consulter le statut du colis, l'historique des étapes et la preuve de livraison lorsque celle-ci est disponible.",
        "Le suivi GPS en direct, lui, n'est pas actif en permanence. Il s'active uniquement lorsque le colis passe en statut « En livraison », avec une mise à jour de position toutes les 30 secondes, puis s'arrête automatiquement une fois le colis marqué comme livré. L'historique lié à la mission est conservé pendant 30 jours.",
        "Cette approche évite les suivis spectaculaires mais inutiles : le GPS est activé au bon moment, quand il apporte vraiment de l'information, et pas toute la journée pour rien.",
      ],
    },
    benefits: [
      'Une meilleure visibilité sur les expéditions',
      'Une relation client plus rassurante',
      'Moins de demandes de support',
      'Une traçabilité claire des étapes',
      'Une image de marque plus professionnelle',
    ],
    why:
      "Direct Colis met la transparence au cœur de la livraison. Notre système de suivi permet aux entreprises comme aux clients finaux d'accéder à une information claire, utile et actualisée, pour suivre chaque expédition avec plus de sérénité.",
    cta: {
      title: "Besoin d'un suivi fiable pour vos colis ?",
      primary: { label: 'Suivre un colis', to: '/suivi' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
  {
    slug: 'collecte-acheminement',
    num: '02',
    tag: 'LOGISTIQUE',
    icon: Truck,
    image: service2,
    title: 'Collecte & Acheminement',
    shortTitle: 'Collecte & Acheminement',
    intro:
      "Une prise en charge structurée du colis, depuis sa collecte jusqu'à son acheminement vers la bonne destination.",
    excerpt:
      "De la prise en charge au dernier kilomètre, Direct Colis assure une collecte rapide et un acheminement maîtrisé.",
    cardDesc:
      "Une gestion claire du colis, de la prise en charge jusqu'au dernier kilomètre avec une flotte adaptée au terrain.",
    features: ['Création / Import', 'Assignation automatique', 'Scan QR à chaque étape', 'Compatibilité véhicule'],
    detail: {
      paragraphs: [
        "Le service de collecte et d'acheminement couvre les premières grandes étapes du workflow logistique : création de l'envoi, assignation, collecte, entrée en entrepôt, sortie pour le dernier kilomètre, puis livraison finale. Chaque colis suit un circuit clair, appuyé par des scans QR et des changements de statut qui permettent de garder une trace précise du parcours logistique.",
        "Les missions peuvent être créées manuellement ou importées en masse via Excel/CSV. L'attribution tient compte de la disponibilité du livreur, de la zone géographique et de la capacité du véhicule.",
        "Une règle métier permet aussi de filtrer le type de véhicule selon le poids du colis : en dessous de 5 kg, scooter ; au-dessus de 5 kg, véhicule adapté, avec blocage automatique en cas d'incompatibilité. Cela évite les erreurs d'attribution dès le départ.",
      ],
    },
    benefits: [
      'Une prise en charge claire et rapide',
      'Une logistique mieux organisée',
      'Une meilleure maîtrise des délais',
      'Une circulation plus fluide des colis',
      'Une couverture adaptée au terrain',
    ],
    why:
      "Nous savons que la qualité d'une livraison dépend d'abord de la qualité de son organisation. Avec Direct Colis, la collecte et l'acheminement sont pensés comme un processus structuré, fiable et adapté aux réalités opérationnelles.",
    cta: {
      title: 'Confiez-nous la prise en charge de vos expéditions',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
  {
    slug: 'preuve-livraison',
    num: '03',
    tag: 'SÉCURITÉ',
    icon: FileSignature,
    image: service3,
    title: 'Preuve de livraison',
    shortTitle: 'Preuve de livraison',
    intro:
      "Chaque remise peut être confirmée, documentée et rattachée au colis livré.",
    excerpt:
      "Sécurisez chaque remise grâce à des éléments de validation clairs, traçables et consultables.",
    cardDesc:
      "Validation par OTP, photo, signature et géolocalisation pour sécuriser chaque remise au destinataire.",
    features: ['Validation par OTP', 'Photo de livraison', 'Signature électronique', 'Position GPS'],
    detail: {
      paragraphs: [
        "La preuve de livraison est un élément central de la plateforme Direct Colis. Au moment de la remise finale, le système peut enregistrer une validation par OTP, une photo ou une signature, avec la position GPS associée à la livraison. Cette logique permet de renforcer la fiabilité de la remise et de disposer d'un justificatif directement lié au colis concerné.",
        "Ces preuves sont ensuite consultables dans le système afin d'aider les équipes internes, les clients et le service client à retrouver rapidement les éléments de validation en cas de besoin. Cela permet aussi de réduire les contestations et d'apporter plus de clarté en fin de mission.",
        "Pour les activités qui gèrent des envois sensibles, fréquents ou à forte valeur, ce service devient vite un indispensable : il transforme chaque livraison en dossier documenté.",
      ],
    },
    benefits: [
      'Une meilleure sécurisation des remises',
      'Moins de contestations',
      'Plus de traçabilité',
      'Une relation client plus rassurante',
      'Une validation claire de chaque livraison',
    ],
    why:
      "Nous considérons la preuve de livraison comme un élément clé de la qualité de service. Grâce à des validations simples et fiables, Direct Colis vous aide à documenter chaque remise et à renforcer la confiance autour de vos expéditions.",
    cta: {
      title: 'Sécurisez chaque livraison avec une preuve fiable',
      primary: { label: 'Parler à un conseiller', to: '/contact' },
      secondary: { label: 'Demander un devis', to: '/contact' },
    },
  },
  {
    slug: 'gestion-echecs',
    num: '04',
    tag: 'GESTION',
    icon: AlertTriangle,
    image: service4,
    title: 'Gestion des échecs de livraison',
    shortTitle: 'Gestion des échecs',
    intro:
      "Lorsqu'une livraison ne peut pas être finalisée, le système permet de documenter l'échec et de relancer le bon traitement.",
    excerpt:
      "Chaque tentative infructueuse est traitée avec méthode pour éviter les pertes et les blocages.",
    cardDesc:
      "Motif détaillé, photo justificative, retour entrepôt sécurisé et reprogrammation fluide des tentatives.",
    features: ['Motif obligatoire', 'Photo justificative', 'Retour entrepôt tracé', 'Reprogrammation'],
    detail: {
      paragraphs: [
        "Direct Colis prévoit une gestion structurée des échecs de livraison. Si le livreur ne peut pas remettre le colis, il doit sélectionner un motif d'échec — par exemple destinataire absent, adresse incorrecte ou refus — puis joindre une photo obligatoire. Le colis est ensuite scanné à son retour en entrepôt et passe dans un statut d'échec ou de retour selon le traitement choisi.",
        "Une fois le colis revenu, le dispatcheur ou le responsable opérationnel peut décider de reprogrammer une nouvelle tentative ou de lancer un retour à l'expéditeur. Cette organisation évite les zones floues et permet de garder un historique clair des incidents.",
        "Chaque tentative infructueuse devient ainsi une action maîtrisée, pas un point d'échec opaque. Les équipes gagnent en clarté et les clients conservent la confiance dans le service.",
      ],
    },
    benefits: [
      'Une meilleure gestion des incidents',
      "Une réduction des zones d'ombre",
      'Une reprise rapide des colis non livrés',
      'Une communication client plus claire',
      'Une reprogrammation plus simple',
    ],
    why:
      "Direct Colis vous aide à garder le contrôle, même quand une livraison ne se déroule pas comme prévu. Nous mettons en place une gestion claire des échecs pour éviter les blocages et améliorer la continuité du service.",
    cta: {
      title: 'Gardez le contrôle, même en cas d\'échec',
      primary: { label: 'Nous contacter', to: '/contact' },
      secondary: { label: 'Découvrir nos services', to: '/services' },
    },
  },
  {
    slug: 'gestion-grands-comptes',
    num: '05',
    tag: 'B2B',
    icon: Users,
    image: service5,
    title: 'Gestion grands comptes',
    shortTitle: 'Grands comptes',
    intro:
      "Une organisation pensée pour les clients qui gèrent des volumes importants et ont besoin d'outils adaptés.",
    excerpt:
      "Une solution pensée pour les structures qui gèrent des volumes importants et veulent un traitement logistique structuré.",
    cardDesc:
      "Import Excel/CSV, double identifiant, génération d'étiquettes QR et reporting complet pour les volumes importants.",
    features: ['Import Excel / CSV', 'Étiquettes QR en lot', 'Double identifiant', 'Cloisonnement données'],
    detail: {
      paragraphs: [
        "Le module grands comptes permet aux clients professionnels de créer des colis, d'importer des listes via Excel ou CSV, de suivre leurs expéditions, de récupérer les preuves de livraison et d'exporter leurs données. Il est conçu pour absorber des volumes importants, avec une logique de performance compatible avec des clients pouvant gérer plusieurs centaines de colis par jour.",
        "Le système prend également en charge la recherche par double identifiant — identifiant interne ou référence client — ainsi que la génération d'étiquettes avec QR code en lot. Un cloisonnement des données permet à chaque client de ne voir que ses propres colis, ses propres statistiques et ses propres historiques.",
        "L'ensemble est pensé pour gagner du temps dans le traitement quotidien et donner aux responsables une vue plus claire de leurs flux logistiques.",
      ],
    },
    benefits: [
      'Une gestion plus fluide des gros volumes',
      'Un meilleur suivi des lots',
      'Une meilleure organisation des données',
      'Un gain de temps au quotidien',
      'Une vision plus claire de vos expéditions',
    ],
    why:
      "Direct Colis accompagne les structures qui ont besoin d'une logistique mieux cadrée, plus industrialisée et plus lisible. Notre approche permet de mieux absorber les volumes importants tout en gardant un bon niveau de contrôle.",
    cta: {
      title: 'Vous gérez un volume important ?',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Parler à un conseiller', to: '/contact' },
    },
  },
  {
    slug: 'pilotage-operations',
    num: '06',
    tag: 'DASHBOARD',
    icon: LayoutDashboard,
    image: service6,
    title: 'Pilotage des opérations',
    shortTitle: 'Pilotage des opérations',
    intro:
      "Une vision plus claire de l'activité pour mieux suivre les équipes, les colis et les performances.",
    excerpt:
      "Centralisez vos informations, suivez vos équipes et pilotez vos missions avec une vision claire de l'activité.",
    cardDesc:
      "Visibilité totale sur les missions en cours, l'activité des livreurs et les performances globales de livraison.",
    features: ['Dashboard par rôle', 'Suivi des missions', 'Reporting KPI', 'Clôture caisse COD'],
    detail: {
      paragraphs: [
        "Direct Colis repose sur une logique de dashboard par profil. La Direction Générale peut suivre les volumes globaux, le chiffre d'affaires, le taux de réussite et les délais moyens. Les équipes opérationnelles disposent d'outils pour suivre les missions, gérer les stocks en entrepôt, visualiser les livreurs et traiter les incidents ou les reprogrammations.",
        "Les clients accèdent quant à eux à leurs statistiques, à leurs historiques et à leurs exports. Chaque rôle a accès exactement à ce dont il a besoin, pas plus, pas moins.",
        "La plateforme intègre également des éléments de supervision financière comme le suivi du paiement à la livraison (COD), les historiques d'encaissement, les crédits, la facturation grands comptes et la clôture caisse par livreur avec validation responsable. Cela fait du pilotage un vrai outil de gestion, pas seulement un tableau d'affichage.",
      ],
    },
    benefits: [
      "Une vue globale de l'activité",
      'Une meilleure supervision des équipes',
      'Une analyse plus simple des performances',
      'Des alertes utiles en temps réel',
      'Une meilleure capacité de décision',
    ],
    why:
      "Direct Colis vous aide à passer d'une gestion subie à une gestion pilotée. Avec une meilleure visibilité sur vos opérations, vous gagnez en réactivité, en organisation et en efficacité.",
    cta: {
      title: 'Pilotez vos opérations avec plus de visibilité',
      primary: { label: 'Nous contacter', to: '/contact' },
      secondary: { label: 'Demander une démo', to: '/contact' },
    },
  },
];
