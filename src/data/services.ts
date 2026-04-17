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
  heroTitle?: string;
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
    subtitle?: string;
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
    heroTitle: 'Confiez votre dernier kilomètre à un expert du terrain dakarois.',
    intro:
      "Une solution de distribution fluide, sécurisée et traçable pour vos colis, de la collecte dans vos locaux jusqu'à la remise finale.",
    excerpt:
      "Direct Colis prend en charge chaque étape de votre chaîne de livraison, de la collecte programmée jusqu'à la preuve de remise numérique.",
    cardDesc:
      "Collecte programmée, couverture Dakar & grande banlieue, suivi en temps réel et preuve de livraison numérique pour vos envois B2B.",
    features: ['Collecte programmée', 'Distribution Dakar & grande banlieue', 'Suivi des livraisons', 'Preuve de livraison numérique'],
    detail: {
      paragraphs: [
        "Dans un environnement urbain exigeant comme celui de Dakar, le dernier kilomètre reste l'étape la plus sensible de toute la chaîne logistique. Direct Colis intervient comme un partenaire opérationnel capable de prendre en charge vos flux sortants avec méthode, régularité et réactivité.",
        "Nous ne faisons pas que déplacer des colis d'un point A à un point B. Nous assurons une distribution maîtrisée qui protège votre image de marque auprès de vos clients, grâce à une exécution rigoureuse, une bonne connaissance du terrain et des outils de suivi qui renforcent la transparence à chaque étape.",
      ],
    },
    benefits: [
      'Une collecte régulière directement dans vos locaux',
      'Une meilleure organisation de vos flux de livraison',
      'Une distribution plus fluide sur Dakar et sa grande banlieue',
      'Une remise sécurisée avec preuve numérique',
      'Une meilleure visibilité sur vos colis jusqu\'à la livraison finale',
    ],
    why:
      "Parce qu'en logistique, l'information compte autant que la livraison elle-même. Direct Colis s'appuie sur une plateforme de suivi qui permet de mieux piloter les opérations, de sécuriser les remises et de réduire les incertitudes pour vos équipes comme pour vos clients. Vous gagnez en visibilité, en fiabilité et en qualité de service sur tout le dernier kilomètre.",
    cta: {
      title: 'Prêt à optimiser la distribution de vos colis ?',
      subtitle: 'Simplifiez vos opérations et offrez à vos clients une expérience de livraison plus fluide et plus fiable.',
      primary: { label: 'Suivre un colis', to: '/suivi' },
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
    heroTitle: 'Votre propre flotte de livraison, la gestion en moins.',
    intro:
      "Externalisez votre logistique urbaine avec des livreurs et des véhicules dédiés à votre enseigne pour une meilleure maîtrise de vos flux au quotidien.",
    excerpt:
      "Direct Colis met à votre disposition des ressources humaines et matérielles qualifiées, intégrées directement à votre organisation.",
    cardDesc:
      "Personnel qualifié, flotte dédiée, gestion carburant & maintenance incluse, avec des contrats flexibles adaptés à votre activité.",
    features: ['Personnel qualifié', 'Flotte dédiée', 'Gestion carburant & maintenance', 'Contrats flexibles'],
    detail: {
      paragraphs: [
        "La mise à disposition est une solution pensée pour les entreprises qui ont besoin de renforcer leurs capacités logistiques sans gérer en interne toute la complexité des ressources humaines et matérielles. Direct Colis vous fournit des livreurs, des chauffeurs et des véhicules dédiés, opérationnels et formés à vos standards.",
        "Nous prenons en charge la gestion du carburant, l'entretien des véhicules et le suivi des ressources mises à disposition. Vous vous concentrez sur votre cœur de métier, nous gérons la logistique humaine et matérielle associée. Les contrats restent flexibles pour s'adapter à votre saisonnalité, à vos pics d'activité ou à vos besoins structurels.",
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
      "Externaliser ne signifie pas perdre le contrôle. Avec Direct Colis, vous bénéficiez de ressources qualifiées et immédiatement opérationnelles, tout en gardant une bonne visibilité sur l'activité terrain. Notre service de mise à disposition vous permet de gagner en souplesse sans supporter les contraintes de recrutement, de gestion ou de maintenance. Direct Colis devient ainsi une extension naturelle de votre organisation.",
    cta: {
      title: 'Besoin de ressources logistiques dédiées ?',
      subtitle: 'Des livreurs et véhicules opérationnels pour simplifier votre logistique au quotidien.',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
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
    heroTitle: 'Sécurisez vos stocks et fluidifiez vos flux.',
    intro:
      "Une solution d'entreposage pensée pour protéger vos marchandises, organiser vos mouvements et simplifier vos opérations logistiques au quotidien.",
    excerpt:
      "Direct Colis met à votre disposition des espaces d'entreposage sécurisés, avec un suivi d'inventaire et des services de picking & conditionnement.",
    cardDesc:
      "Entrepôts sécurisés, suivi d'inventaire, stockage import/export et picking & conditionnement pour vos flux logistiques.",
    features: ['Entrepôts sécurisés', "Gestion d'inventaire", 'Transit import / export', 'Picking & conditionnement'],
    detail: {
      paragraphs: [
        "L'entreposage est un maillon essentiel pour les entreprises qui veulent mieux gérer leurs marchandises sans subir les contraintes d'une organisation interne trop lourde. Avec Direct Colis, vos produits sont stockés dans un environnement sécurisé, suivi et structuré pour faciliter leur réception, leur conservation et leur préparation.",
        "Nous ne faisons pas que stocker des colis. Nous vous aidons à garder une meilleure visibilité sur vos niveaux de stock, à préparer plus sereinement vos expéditions et à fluidifier la transition entre entrepôt et distribution. Cette organisation vous permet de mieux maîtriser vos flux tout en réduisant les zones d'ombre dans la gestion quotidienne.",
      ],
    },
    benefits: [
      'Une meilleure sécurité pour vos marchandises',
      'Une gestion plus claire des entrées et sorties',
      'Une visibilité renforcée sur vos niveaux de stock',
      'Une préparation plus simple de vos expéditions',
      'Une logistique plus fluide entre stockage et livraison',
    ],
    why:
      "Parce qu'un bon stockage ne se limite pas à « garder » des marchandises. Il doit aussi vous aider à mieux travailler. Avec Direct Colis, vous bénéficiez d'une solution d'entreposage qui combine sécurité, rigueur opérationnelle et meilleure visibilité sur vos flux, afin d'accompagner votre activité sans la complexifier.",
    cta: {
      title: 'Besoin d\'un stockage plus structuré pour vos marchandises ?',
      subtitle: 'Centralisez vos flux et gagnez en visibilité sur vos opérations logistiques.',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Parler à un conseiller', to: '/contact' },
    },
  },
  {
    slug: 'location-vehicules',
    num: '04',
    tag: 'MOBILITÉ',
    icon: Car,
    image: service4,
    title: 'Location de Véhicules Professionnels',
    shortTitle: 'Location de Véhicules',
    heroTitle: 'La bonne flotte, au bon moment, selon vos besoins.',
    intro:
      "Une solution flexible de location de véhicules pour vos opérations de transport, avec ou sans chauffeur, selon vos contraintes et vos volumes.",
    excerpt:
      "Direct Colis met à votre disposition des véhicules entretenus et adaptés à chaque type de mission, avec ou sans chauffeur.",
    cardDesc:
      "Motos, berlines et utilitaires entretenus, disponibles avec ou sans chauffeur, à tarification dégressive selon vos volumes.",
    features: ['Avec ou sans chauffeur', 'Motos, berlines, utilitaires', 'Véhicules entretenus', 'Tarification dégressive'],
    detail: {
      paragraphs: [
        "La location de véhicules est idéale pour les entreprises qui ont besoin de capacités de transport supplémentaires sans supporter les contraintes liées à l'achat, à l'entretien ou à la gestion complète d'un parc. Direct Colis met à votre disposition une flotte variée, adaptée à différents usages logistiques, du pli urgent aux chargements plus volumineux.",
        "Vous choisissez le format le plus adapté à votre besoin, avec la possibilité d'opter pour une mise à disposition avec ou sans chauffeur. Nous assurons la disponibilité des véhicules, leur bon état de fonctionnement et le suivi nécessaire pour vous permettre de rester concentré sur vos priorités opérationnelles.",
      ],
    },
    benefits: [
      'Une solution rapide pour renforcer vos moyens de transport',
      'Plus de souplesse sans investissement lourd',
      'Des véhicules entretenus et disponibles',
      'Une adaptation simple à vos besoins ponctuels ou récurrents',
      'Un coût de mobilité mieux maîtrisé',
    ],
    why:
      "Parce que vos besoins de transport peuvent évoluer vite. Avec Direct Colis, vous accédez à une flotte flexible et opérationnelle sans immobiliser vos ressources. Vous gagnez en capacité, en réactivité et en confort de gestion, tout en profitant d'un cadre fiable pour vos déplacements et vos opérations logistiques.",
    cta: {
      title: "Besoin d'un véhicule pour renforcer vos opérations ?",
      subtitle: 'Louez une solution adaptée à vos usages, à vos délais et à vos contraintes terrain.',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
  {
    slug: 'transport-aibd',
    num: '05',
    tag: 'AÉROPORT',
    icon: Plane,
    image: service5,
    title: 'Transport & Navettes AIBD',
    shortTitle: 'Transport AIBD',
    heroTitle: "Une liaison fiable entre Dakar et l'AIBD.",
    intro:
      "Un service pensé pour vos colis urgents, vos flux aéroportuaires et vos besoins de transfert avec ponctualité, sécurité et réactivité.",
    excerpt:
      "Direct Colis assure vos navettes aéroportuaires et le transport de fret urgent entre l'AIBD et Dakar, avec fiabilité et disponibilité 24h/7j.",
    cardDesc:
      "Disponibilité 24h/7j, prise en charge du fret urgent, trajets sécurisés et transport premium pour vos liaisons avec l'AIBD.",
    features: ['Disponibilité 24h/7j', 'Fret urgent', 'Trajets sécurisés', 'Transport premium'],
    detail: {
      paragraphs: [
        "L'axe Dakar–AIBD est stratégique pour de nombreuses entreprises. Entre les contraintes horaires, les urgences cargo et les impératifs de ponctualité, il demande une organisation rigoureuse. Direct Colis met en place un service dédié pour assurer la liaison entre la capitale et l'aéroport de manière fluide et professionnelle.",
        "Nos équipes coordonnent les prises en charge selon les horaires d'arrivée ou de départ, récupèrent les colis en zone concernée ou dans vos locaux, puis assurent leur transfert dans les meilleures conditions. L'objectif est simple : réduire les temps d'attente, sécuriser les trajets et garantir une continuité logistique fiable sur un axe critique.",
      ],
    },
    benefits: [
      'Une meilleure coordination avec vos flux aéroportuaires',
      'Une prise en charge plus rapide des colis urgents',
      'Des trajets sécurisés et réguliers',
      'Une meilleure ponctualité sur l\'axe Dakar–AIBD',
      'Plus de sérénité sur vos opérations sensibles',
    ],
    why:
      "Parce que sur un flux aéroportuaire, chaque minute compte. Avec Direct Colis, vous bénéficiez d'un partenaire capable de gérer cet axe avec méthode, disponibilité et exigence. Nous apportons la réactivité nécessaire pour vos opérations urgentes tout en gardant un haut niveau de fiabilité sur le terrain.",
    cta: {
      title: "Besoin d'une liaison fiable avec l'AIBD ?",
      subtitle: 'Sécurisez vos transferts et vos colis urgents avec un service réactif et structuré.',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Parler à un conseiller', to: '/contact' },
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
    heroTitle: "Une logistique pensée pour l'exigence de la restauration.",
    intro:
      "Des livraisons rapides, propres et maîtrisées pour préserver la qualité de vos produits et l'expérience de vos clients.",
    excerpt:
      "Direct Colis accompagne les acteurs de la restauration avec des livraisons express, des caissons isothermes et une gestion adaptée aux pics d'activité.",
    cardDesc:
      "Caissons isothermes, livraison express, respect des standards d'hygiène et gestion des pics d'activité pour la restauration.",
    features: ['Caissons isothermes', 'Livraison express', "Standards d'hygiène", "Gestion des pics"],
    detail: {
      paragraphs: [
        "La restauration impose des contraintes très spécifiques : rapidité, hygiène, respect des températures et bonne gestion des pics d'activité. Direct Colis propose un service dédié aux professionnels du secteur qui ont besoin d'une logistique fiable pour leurs plats, leurs produits ou leurs commandes sensibles.",
        "Dès la prise en charge, nos équipes interviennent avec des équipements adaptés et une organisation pensée pour réduire les délais. Les livraisons sont effectuées selon des standards stricts afin de préserver l'intégrité des produits transportés et d'offrir une meilleure continuité entre votre cuisine et votre client final.",
      ],
    },
    benefits: [
      'Une livraison plus rapide de vos commandes',
      'Un meilleur respect des conditions d\'hygiène',
      'Une meilleure maîtrise des pics d\'activité',
      'Des équipements adaptés aux contraintes de température',
      'Une expérience client plus fiable jusqu\'à la remise finale',
    ],
    why:
      "Parce que dans la restauration, une livraison réussie ne dépend pas seulement de la vitesse. Elle dépend aussi de la rigueur. Avec Direct Colis, vous bénéficiez d'une organisation adaptée à votre activité, avec les bons équipements, les bons réflexes terrain et une exécution capable de soutenir vos exigences de qualité.",
    cta: {
      title: 'Besoin d\'une logistique fiable pour votre activité de restauration ?',
      subtitle: 'Gagnez en rapidité, en régularité et en qualité de service sur vos livraisons.',
      primary: { label: 'Demander un devis', to: '/contact' },
      secondary: { label: 'Nous contacter', to: '/contact' },
    },
  },
];
