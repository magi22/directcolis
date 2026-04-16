import {
  Truck, Users, Warehouse, Plane, UtensilsCrossed, Car,
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
    slug: 'livraison-b2b',
    num: '01',
    tag: 'LIVRAISON',
    icon: Truck,
    image: service1,
    title: 'Livraison B2B & Dernier Kilomètre',
    shortTitle: 'Livraison B2B',
    intro:
      "Une solution complète pour collecter, acheminer et livrer vos colis avec fiabilité, rapidité et traçabilité jusqu'au destinataire final.",
    excerpt:
      "Direct Colis prend en charge chaque étape de votre chaîne de livraison, de la collecte programmée jusqu'à la preuve de remise numérique.",
    cardDesc:
      "Collecte programmée, couverture Dakar & grande banlieue, suivi en temps réel et preuve de livraison numérique pour vos envois B2B.",
    features: ['Collecte programmée', 'Couverture Dakar & grande banlieue', 'Suivi en temps réel', 'Preuve de livraison numérique'],
    detail: {
      paragraphs: [
        "La livraison B2B & Dernier Kilomètre est le cœur de métier de Direct Colis. Nous prenons en charge vos colis depuis la collecte jusqu'à la remise finale au destinataire, avec une organisation claire à chaque étape. Chaque envoi est scanné, tracé et suivi via notre plateforme logistique.",
        "Notre couverture s'étend à Dakar et sa grande banlieue, avec une flotte adaptée aux volumes et aux contraintes de terrain. Selon le poids et la nature des colis, nous mobilisons scooters, véhicules légers ou camionnettes pour garantir une livraison efficace.",
        "Au moment de la remise, le livreur enregistre une preuve de livraison numérique — code OTP, photo, signature électronique et position GPS. Ces éléments sont directement disponibles dans la plateforme et consultables à tout moment par vous ou votre service client.",
      ],
    },
    benefits: [
      'Une prise en charge complète de la chaîne logistique',
      'Une meilleure visibilité sur vos expéditions',
      'Des délais maîtrisés et fiables',
      'Une preuve de remise pour chaque livraison',
      'Moins de litiges et de contestations',
    ],
    why:
      "Nous savons que chaque livraison est un engagement envers votre client final. Chez Direct Colis, la livraison B2B est pensée comme un service complet, structuré et appuyé par notre technologie pour vous donner un niveau de traçabilité et de fiabilité que vos clients remarqueront.",
    cta: {
      title: 'Confiez-nous vos livraisons B2B',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
  {
    slug: 'mise-a-disposition',
    num: '02',
    tag: 'RESSOURCES',
    icon: Users,
    image: service2,
    title: 'Mise à Disposition',
    shortTitle: 'Mise à Disposition',
    intro:
      "Des livreurs, chauffeurs et véhicules dédiés pour renforcer vos opérations quotidiennes, selon vos besoins et vos standards.",
    excerpt:
      "Direct Colis met à votre disposition des ressources humaines et matérielles qualifiées, intégrées directement à votre organisation.",
    cardDesc:
      "Personnel qualifié, flotte dédiée, gestion carburant & maintenance incluse, avec des contrats flexibles adaptés à votre activité.",
    features: ['Personnel qualifié', 'Flotte dédiée', 'Gestion carburant & maintenance', 'Contrats flexibles'],
    detail: {
      paragraphs: [
        "La mise à disposition est une solution pensée pour les entreprises qui ont besoin de renforcer leurs capacités logistiques sans gérer en interne toute la complexité des ressources humaines et matérielles. Direct Colis vous fournit des livreurs, des chauffeurs et des véhicules dédiés, opérationnels et formés à vos standards.",
        "Nous prenons en charge la gestion du carburant, l'entretien des véhicules et le suivi des ressources mises à disposition. Vous vous concentrez sur votre cœur de métier, nous gérons la logistique humaine et matérielle associée.",
        "Les contrats sont flexibles : selon votre saisonnalité, vos pics d'activité ou vos besoins structurels, nous nous adaptons. Que ce soit pour quelques jours, quelques mois ou une collaboration durable, nous proposons une formule adaptée à votre situation.",
      ],
    },
    benefits: [
      'Des ressources disponibles rapidement',
      'Moins de charge administrative pour vos équipes',
      'Une flotte entretenue et fiable',
      'Une flexibilité adaptée à vos volumes',
      'Un coût logistique mieux maîtrisé',
    ],
    why:
      "Nous pensons que la flexibilité est une force dans la logistique. Avec notre service de mise à disposition, vous bénéficiez de ressources qualifiées et opérationnelles sans les contraintes de recrutement, de gestion ou de maintenance. Direct Colis devient une extension naturelle de votre organisation.",
    cta: {
      title: 'Besoin de ressources logistiques dédiées ?',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Parler à un conseiller', to: '/contact' },
    },
  },
  {
    slug: 'entreposage-stockage',
    num: '03',
    tag: 'STOCKAGE',
    icon: Warehouse,
    image: service3,
    title: 'Entreposage & Stockage',
    shortTitle: 'Entreposage & Stockage',
    intro:
      "Des solutions de stockage sécurisées pour mieux gérer vos marchandises, vos flux temporaires et votre préparation de commandes.",
    excerpt:
      "Direct Colis met à votre disposition des espaces d'entreposage sécurisés, avec un suivi d'inventaire et des services de picking & conditionnement.",
    cardDesc:
      "Entrepôts sécurisés, suivi d'inventaire, stockage import/export et picking & conditionnement pour vos flux logistiques.",
    features: ['Entrepôts sécurisés', "Suivi d'inventaire", 'Stockage import/export', 'Picking & conditionnement'],
    detail: {
      paragraphs: [
        "L'entreposage et le stockage sont des maillons essentiels de la chaîne logistique. Direct Colis propose des espaces d'entreposage sécurisés adaptés à vos besoins, qu'il s'agisse de stockage temporaire entre deux envois, de stock tampon pour votre activité commerciale ou de stockage lié à vos opérations import/export.",
        "Chaque entrée et sortie de marchandises est tracée dans notre système, vous donnant une visibilité permanente sur votre inventaire. Vous savez à tout moment ce qui est en stock, ce qui a été expédié et ce qui est en attente de traitement.",
        "Nous proposons également des services de picking et de conditionnement : préparation de commandes, emballage, étiquetage et mise à disposition pour expédition. Ces services vous permettent d'externaliser tout ou partie de votre chaîne de préparation pour gagner en efficacité et en réactivité.",
      ],
    },
    benefits: [
      'Un stockage sécurisé et organisé',
      'Une traçabilité permanente de votre inventaire',
      "Une réduction des ruptures et des erreurs d'expédition",
      'Un service de préparation de commandes intégré',
      'Une logistique plus fluide et mieux coordonnée',
    ],
    why:
      "Un bon entreposage, ce n'est pas seulement de l'espace. C'est une organisation qui réduit les erreurs, accélère les expéditions et améliore la satisfaction client. Chez Direct Colis, nos solutions d'entreposage sont pensées pour s'intégrer à votre flux logistique global.",
    cta: {
      title: 'Optimisez votre logistique de stockage',
      primary: { label: 'Nous contacter', to: '/contact' },
      secondary: { label: 'Demander un devis', to: '/contact' },
    },
  },
  {
    slug: 'location-vehicules',
    num: '04',
    tag: 'MOBILITÉ',
    icon: Car,
    image: service6,
    title: 'Location de Véhicules Professionnels',
    shortTitle: 'Location de Véhicules',
    intro:
      "Une flotte diversifiée pour répondre à vos besoins de transport, du pli urgent aux marchandises plus volumineuses.",
    excerpt:
      "Direct Colis met à votre disposition des véhicules entretenus et adaptés à chaque type de mission, avec ou sans chauffeur.",
    cardDesc:
      "Motos, berlines et utilitaires entretenus, disponibles avec ou sans chauffeur, à tarification dégressive selon vos volumes.",
    features: ['Avec ou sans chauffeur', 'Motos, berlines, utilitaires', 'Véhicules entretenus', 'Tarification dégressive'],
    detail: {
      paragraphs: [
        "La location de véhicules professionnels est une solution pensée pour les entreprises qui ont besoin de mobilité sans les contraintes de la gestion de flotte. Direct Colis propose une gamme complète de véhicules : motos pour les livraisons rapides en milieu urbain, berlines pour les déplacements professionnels, et utilitaires pour les charges plus volumineuses.",
        "Nos véhicules sont régulièrement entretenus et disponibles avec ou sans chauffeur selon votre besoin. Que vous ayez besoin d'un véhicule pour une mission ponctuelle, une semaine ou une durée plus longue, nous adaptons notre offre à votre planning et à votre budget.",
        "La tarification est dégressive : plus vos volumes sont importants, plus le coût unitaire diminue. Cette logique permet aux entreprises de maîtriser leurs coûts de transport tout en bénéficiant d'une flotte fiable et disponible sur demande.",
      ],
    },
    benefits: [
      'Une flotte disponible rapidement',
      'Des véhicules adaptés à chaque type de mission',
      'Pas de contraintes de gestion ou d\'entretien',
      'Un coût maîtrisé avec une tarification dégressive',
      'Flexibilité totale sur la durée et les volumes',
    ],
    why:
      "Gérer une flotte coûte cher et prend du temps. Avec la location de véhicules professionnels Direct Colis, vous accédez aux moyens dont vous avez besoin, quand vous en avez besoin, sans les charges fixes liées à la propriété d'une flotte.",
    cta: {
      title: 'Besoin d\'un véhicule pour vos opérations ?',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
  {
    slug: 'transport-aibd',
    num: '05',
    tag: 'AÉROPORT',
    icon: Plane,
    image: service4,
    title: 'Transport & Navettes AIBD',
    shortTitle: 'Transport AIBD',
    intro:
      "Un service fiable pour vos transferts vers et depuis l'AIBD, adapté aux marchandises urgentes comme aux déplacements professionnels.",
    excerpt:
      "Direct Colis assure vos navettes aéroportuaires et le transport de fret urgent entre l'AIBD et Dakar, avec fiabilité et disponibilité 24h/7j.",
    cardDesc:
      "Disponibilité 24h/7j, prise en charge du fret urgent, trajets sécurisés et transport premium pour vos liaisons avec l'AIBD.",
    features: ['Disponibilité 24h/7j', 'Prise en charge fret urgent', 'Trajets sécurisés', 'Transport premium'],
    detail: {
      paragraphs: [
        "L'Aéroport International Blaise Diagne (AIBD) est un point névralgique pour le commerce et les affaires au Sénégal. Direct Colis propose un service de navettes et de transport dédié entre l'AIBD et Dakar, pensé pour répondre aux exigences de ponctualité et de fiabilité des voyageurs d'affaires et des expéditeurs de fret.",
        "Notre service est disponible 24 heures sur 24, 7 jours sur 7, pour s'adapter aux horaires de vols parfois décalés ou aux urgences logistiques. Nous prenons en charge le transport de marchandises urgentes, les transferts professionnels et les liaisons régulières avec les zones d'activité de Dakar.",
        "Chaque transfert est assuré par des chauffeurs qualifiés, avec des véhicules adaptés à la nature du transport. Nous garantissons des trajets sécurisés, ponctuels et conformes aux exigences de nos clients professionnels.",
      ],
    },
    benefits: [
      'Une disponibilité totale, 24h/7j',
      'Une prise en charge du fret urgent',
      'Des chauffeurs qualifiés et ponctuels',
      'Un service adapté aux professionnels',
      'Une liaison fiable avec le hub aéroportuaire',
    ],
    why:
      "La liaison avec l'AIBD ne tolère pas l'improvisation. Direct Colis vous propose un service structuré, disponible à toute heure, pour que vos marchandises et vos équipes arrivent à destination dans les meilleures conditions.",
    cta: {
      title: 'Organisez vos navettes AIBD',
      primary: { label: 'Réserver un transport', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
  {
    slug: 'logistique-restauration',
    num: '06',
    tag: 'RESTAURATION',
    icon: UtensilsCrossed,
    image: service5,
    title: 'Logistique Restauration',
    shortTitle: 'Logistique Restauration',
    intro:
      "Une logistique pensée pour la restauration, avec des livraisons rapides, propres et adaptées aux exigences d'hygiène et de température.",
    excerpt:
      "Direct Colis accompagne les acteurs de la restauration avec des livraisons express, des caissons isothermes et une gestion adaptée aux pics d'activité.",
    cardDesc:
      "Caissons isothermes, livraison express, respect des standards d'hygiène et gestion des pics d'activité pour la restauration.",
    features: ['Caissons isothermes', 'Livraison express', "Standards d'hygiène", "Gestion des pics d'activité"],
    detail: {
      paragraphs: [
        "La logistique de la restauration impose des contraintes spécifiques que les services de livraison classiques ne peuvent pas toujours satisfaire : délais courts, respect de la chaîne du froid, conditions d'hygiène strictes et gestion des pics d'activité aux heures de repas. Direct Colis a développé une offre dédiée pour répondre à ces exigences.",
        "Nos livreurs sont équipés de caissons isothermes homologués pour maintenir la température des plats préparés durant tout le trajet. Les livraisons sont planifiées en tenant compte des horaires de service pour garantir des remises dans les délais attendus par les restaurateurs et leurs clients.",
        "En période de forte activité — déjeuners, soirées événementielles, commandes groupées — nous mobilisons des ressources supplémentaires pour absorber les pics sans dégrader la qualité de service. Notre équipe opérationnelle assure un suivi en temps réel des livraisons et intervient rapidement en cas d'incident.",
      ],
    },
    benefits: [
      'Un respect strict de la chaîne du froid',
      'Des livraisons express dans les délais',
      'Une hygiène irréprochable à chaque étape',
      "Une capacité à absorber les pics d'activité",
      'Un suivi en temps réel des livraisons',
    ],
    why:
      "La restauration ne pardonne pas les retards ni les approximations. Direct Colis a conçu une offre logistique taillée pour les contraintes du secteur : rapidité, hygiène, respect du froid et réactivité en toutes circonstances.",
    cta: {
      title: 'Une logistique à la hauteur de votre cuisine',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
];
