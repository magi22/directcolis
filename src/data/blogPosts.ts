import blog1 from '../assets/images/blog 1.png';
import blog2 from '../assets/images/blog 2.png';
import blog3 from '../assets/images/blog 3.png';
import logoComprimerCouleur from '../assets/svg/Direct colis-02.svg';

export type BlogSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type BlogPost = {
  slug: string;
  image: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
  author: string;
  authorImg: string;
  readTime: string;
  tags: string[];
  intro: string;
  sections: BlogSection[];
  cta: {
    title: string;
    button: string;
  };
};

const AUTHOR = 'Équipe Direct Colis';

export const blogPosts: BlogPost[] = [
  {
    slug: 'optimiser-livraisons-b2b-dakar',
    image: blog1,
    category: 'Livraison B2B',
    date: '12 février 2026',
    title: 'Comment optimiser vos livraisons B2B et dernier kilomètre à Dakar',
    excerpt:
      "Collecte, acheminement, traçabilité, preuve de remise : les clés pour structurer une logistique B2B fiable et efficace dans la région de Dakar.",
    author: AUTHOR,
    authorImg: logoComprimerCouleur,
    readTime: '6 min',
    tags: ['Livraison B2B', 'Dernier kilomètre', 'Dakar'],
    intro:
      "La livraison B2B en milieu urbain dense comme Dakar pose des défis concrets : trafic imprévisible, adresses difficiles à localiser, clients exigeants sur les délais et la traçabilité. Pourtant, avec une organisation solide et les bons outils, il est possible de transformer cette contrainte en avantage compétitif.",
    sections: [
      {
        heading: "Planifier la collecte pour gagner du temps dès le départ",
        paragraphs: [
          "L'optimisation d'une tournée de livraison commence bien avant que le livreur monte sur son véhicule. Une collecte bien planifiée, avec des créneaux définis et des colis déjà prêts à l'enlèvement, permet de gagner un temps précieux et de réduire les allers-retours inutiles.",
          "Chez Direct Colis, nous travaillons avec nos clients B2B pour définir des fenêtres de collecte adaptées à leurs rythmes de production ou d'expédition. Cette coordination en amont est souvent ce qui fait la différence entre une journée fluide et une journée chaotique.",
        ],
      },
      {
        heading: "Adapter les véhicules aux typologies de colis",
        paragraphs: [
          "À Dakar, un scooter peut être plus efficace qu'un camion pour naviguer en centre-ville — mais il ne peut pas transporter tous les types de colis. La clé est d'affecter le bon véhicule au bon envoi dès l'assignation.",
          "Notre système applique automatiquement des règles métier : en dessous d'un certain poids, les envois sont assignés à des deux-roues ; au-delà, des véhicules adaptés prennent le relais. Cela élimine les erreurs d'attribution et garantit que chaque colis arrive en bon état.",
        ],
      },
      {
        heading: "Le suivi en temps réel comme outil de relation client",
        paragraphs: [
          "Vos clients B2B ne veulent pas appeler votre service client pour savoir où est leur livraison. Ils veulent une visibilité immédiate, sans effort. Un système de suivi en temps réel, avec notifications aux étapes clés, répond exactement à ce besoin.",
          "Direct Colis active le suivi GPS au moment où le colis part pour le dernier kilomètre. Le client peut voir l'avancement en temps réel et anticiper la réception. Ce niveau de transparence renforce la confiance et réduit considérablement les appels entrants.",
        ],
      },
      {
        heading: "La preuve de livraison : clôturer chaque mission proprement",
        paragraphs: [
          "Une livraison sans preuve est une livraison qui peut être contestée. OTP, photo, signature électronique et position GPS : ces quatre éléments combinés créent un dossier de remise incontestable pour chaque colis.",
          "Pour les entreprises qui gèrent des volumes importants, cette documentation systématique devient vite un outil de gestion à part entière : moins de litiges, un service client plus rapide et une image professionnelle renforcée.",
        ],
      },
      {
        heading: "Ce que ça change pour vos opérations",
        paragraphs: [
          "Optimiser votre logistique B2B ne demande pas forcément de tout réinventer. Souvent, c'est une meilleure organisation des collectes, une meilleure affectation des véhicules et un meilleur suivi des livraisons qui font la différence. Direct Colis vous accompagne sur ces trois axes pour vous aider à livrer mieux, plus vite et avec plus de sérénité.",
        ],
      },
    ],
    cta: {
      title: 'Améliorez vos livraisons B2B dès aujourd\'hui',
      button: 'Demander un devis',
    },
  },
  {
    slug: 'externaliser-logistique-mise-a-disposition',
    image: blog2,
    category: 'Externalisation',
    date: '3 mars 2026',
    title: 'Pourquoi externaliser sa logistique avec un service de mise à disposition',
    excerpt:
      "Livreurs dédiés, flotte gérée, contrats flexibles : découvrez pourquoi de plus en plus d'entreprises choisissent la mise à disposition pour gagner en agilité logistique.",
    author: AUTHOR,
    authorImg: logoComprimerCouleur,
    readTime: '5 min',
    tags: ['Mise à disposition', 'Externalisation', 'Flotte dédiée'],
    intro:
      "Gérer une équipe de livreurs, entretenir une flotte de véhicules, gérer le carburant, les assurances, les remplacements en cas d'absence... La logistique interne est souvent plus complexe qu'elle n'y paraît. De plus en plus d'entreprises choisissent d'externaliser tout ou partie de cette charge avec un service de mise à disposition.",
    sections: [
      {
        heading: "Ce que recouvre vraiment la mise à disposition",
        paragraphs: [
          "Un service de mise à disposition, ce n'est pas simplement louer un véhicule ou recruter un livreur temporaire. C'est confier à un prestataire la gestion complète d'une ressource — humaine ou matérielle — qui opère selon vos standards et vos processus.",
          "Chez Direct Colis, la mise à disposition inclut le recrutement et la formation des livreurs et chauffeurs, la fourniture et l'entretien des véhicules, la gestion du carburant et le suivi opérationnel au quotidien. Vous bénéficiez d'une ressource dédiée sans en porter la gestion.",
        ],
      },
      {
        heading: "Les avantages concrets pour votre entreprise",
        bullets: [
          "Réduction des coûts fixes liés à la gestion RH et à l'entretien de la flotte",
          "Flexibilité pour adapter les ressources à votre saisonnalité",
          "Moins de temps perdu sur des tâches administratives non productives",
          "Des ressources qualifiées, formées à vos exigences spécifiques",
          "Un interlocuteur unique pour toutes les questions logistiques",
        ],
      },
      {
        heading: "Quand la mise à disposition fait vraiment sens",
        paragraphs: [
          "Ce service est particulièrement pertinent pour les entreprises qui ont une activité logistique régulière mais ne souhaitent pas créer un service transport interne complet. C'est aussi une réponse efficace aux pics saisonniers : Ramadan, fêtes de fin d'année, lancements de produits — des périodes où vous avez besoin de plus de ressources sans vous engager sur la durée.",
          "Elle est aussi adaptée aux structures en croissance rapide qui ont besoin de déployer des capacités logistiques vite, sans passer des mois à recruter et à équiper une équipe.",
        ],
      },
      {
        heading: "Le modèle contractuel : flexibilité sans rigidité",
        paragraphs: [
          "L'un des avantages majeurs de la mise à disposition est la souplesse contractuelle. Contrairement à un recrutement ou à un achat de flotte, les contrats peuvent être adaptés à votre besoin réel : durée, volume, type de ressource. Vous ne payez que ce que vous utilisez, et vous pouvez ajuster au fil du temps.",
        ],
      },
      {
        heading: "Ce que Direct Colis apporte en plus",
        paragraphs: [
          "Au-delà des ressources mises à disposition, nos clients bénéficient de notre plateforme logistique pour suivre les missions, tracer les livraisons et accéder aux rapports d'activité. La mise à disposition devient ainsi une solution logistique complète, appuyée par la technologie.",
        ],
      },
    ],
    cta: {
      title: 'Externalisez votre logistique avec Direct Colis',
      button: 'Nous contacter',
    },
  },
  {
    slug: 'services-logistiques-stockage-aibd-restauration',
    image: blog3,
    category: 'Logistique',
    date: '21 mars 2026',
    title: 'Entreposage, navettes AIBD, restauration : des solutions logistiques pour chaque activité',
    excerpt:
      "Stockage sécurisé, liaisons aéroportuaires 24h/7j, livraisons isothermes : Direct Colis adapte ses services aux réalités de chaque secteur.",
    author: AUTHOR,
    authorImg: logoComprimerCouleur,
    readTime: '6 min',
    tags: ['Entreposage', 'AIBD', 'Restauration', 'Logistique spécialisée'],
    intro:
      "La logistique n'est pas un service uniforme. Un restaurateur n'a pas les mêmes contraintes qu'un importateur, qui n'a pas les mêmes besoins qu'une entreprise qui expédie des marchandises depuis et vers l'aéroport. Direct Colis a développé des solutions adaptées à ces différentes réalités.",
    sections: [
      {
        heading: "Entreposage & Stockage : maîtriser ses flux physiques",
        paragraphs: [
          "Avoir un bon prestataire de livraison ne suffit pas si votre organisation du stockage est défaillante. Un entrepôt mal géré génère des erreurs d'expédition, des ruptures de stock et des délais allongés. Direct Colis propose des solutions d'entreposage sécurisé avec un suivi d'inventaire en temps réel.",
          "Chaque entrée et sortie de marchandises est tracée, et nos services de picking et conditionnement permettent d'externaliser la préparation de commandes directement dans nos entrepôts. Pour les entreprises qui importent ou exportent régulièrement, nous proposons également des solutions adaptées au stockage temporaire entre deux expéditions.",
        ],
      },
      {
        heading: "Transport & Navettes AIBD : fiabilité autour du hub aéroportuaire",
        paragraphs: [
          "L'Aéroport International Blaise Diagne est un point de passage obligé pour de nombreuses entreprises sénégalaises. Fret urgent, transferts professionnels, liaisons régulières : les besoins autour de l'AIBD sont multiples et ne tolèrent pas l'improvisation.",
          "Notre service de navettes AIBD est disponible 24 heures sur 24, 7 jours sur 7, pour s'adapter aux horaires de vols et aux urgences. Nos chauffeurs qualifiés assurent des trajets sécurisés et ponctuels, que ce soit pour du transport de personnes en déplacement professionnel ou pour du fret urgent à acheminer rapidement.",
        ],
      },
      {
        heading: "Logistique Restauration : des livraisons qui respectent vos standards",
        paragraphs: [
          "Le secteur de la restauration impose des contraintes que les services de livraison classiques ne peuvent pas toujours honorer : températures à maintenir, délais très courts, hygiène irréprochable et gestion des pics d'activité aux heures de repas.",
          "Direct Colis a développé une offre dédiée avec des caissons isothermes homologués, des livreurs formés aux exigences d'hygiène et une organisation pensée pour les créneaux de rush. Résultat : vos plats arrivent chauds, dans les délais et dans des conditions conformes aux attentes de vos clients.",
        ],
      },
      {
        heading: "Une logistique pensée pour chaque métier",
        paragraphs: [
          "Ce qui distingue Direct Colis, c'est la capacité à adapter notre organisation aux réalités concrètes de chaque secteur. Nous ne proposons pas une solution générique : nous travaillons avec vous pour comprendre vos contraintes, vos volumes et vos exigences, puis nous déployons les ressources et les processus qui correspondent.",
          "Qu'il s'agisse de stocker des marchandises, d'assurer des navettes aéroportuaires ou de livrer des repas, notre engagement reste le même : fiabilité, traçabilité et qualité de service.",
        ],
      },
    ],
    cta: {
      title: 'Trouvez la solution logistique adaptée à votre activité',
      button: 'Découvrir nos services',
    },
  },
];
