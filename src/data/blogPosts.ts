import blog1 from '../assets/images/1.jpg';
import blog2 from '../assets/images/2.jpg';
import blog3 from '../assets/images/3.jpg';
import logoComprimerCouleur from '../assets/images/logo-comprimer-couleur.png';

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
    slug: 'comment-direct-colis-suit-un-colis',
    image: blog1,
    category: 'Workflow',
    date: '12 février 2026',
    title: 'Comment Direct Colis suit un colis de la création à la livraison finale',
    excerpt:
      "Création, assignation, collecte, entrepôt, sortie, livraison, preuve : découvrez comment chaque colis traverse la plateforme Direct Colis, étape par étape.",
    author: AUTHOR,
    authorImg: logoComprimerCouleur,
    readTime: '6 min',
    tags: ['Workflow', 'Tracking', 'QR Code'],
    intro:
      "Chez Direct Colis, chaque colis suit un parcours clair et structuré, conçu pour laisser le moins de place possible à l'improvisation. De la création de l'envoi jusqu'à la preuve de livraison, chaque étape est tracée, horodatée et intégrée dans un workflow cohérent. Voici comment ça fonctionne concrètement.",
    sections: [
      {
        heading: "Étape 1 — Création et assignation du colis",
        paragraphs: [
          "Tout démarre par la création du colis dans la plateforme. Un colis peut être créé manuellement par le client, ou importé en masse via un fichier Excel ou CSV pour les grands comptes. À ce moment-là, chaque colis reçoit un identifiant unique et un QR code associé.",
          "L'assignation au livreur prend en compte la disponibilité, la zone géographique et la capacité du véhicule. Une règle métier bloque même automatiquement un envoi si le poids n'est pas compatible avec le type de véhicule (par exemple, un colis de plus de 5 kg ne peut pas partir en scooter).",
        ],
      },
      {
        heading: "Étape 2 — Collecte et scan d'entrée",
        paragraphs: [
          "Lors de la collecte, le livreur scanne le QR code du colis. Ce scan fait passer le colis au statut « collecté » et crée une trace horodatée dans l'historique. Plus besoin de se baser sur des déclarations orales : chaque prise en charge est confirmée techniquement.",
        ],
      },
      {
        heading: "Étape 3 — Entrée en entrepôt et tri",
        paragraphs: [
          "Le colis est ensuite scanné à son arrivée en entrepôt. Il peut être trié, regroupé avec d'autres envois de la même zone, puis préparé pour la sortie. L'équipe opérationnelle a à tout moment une vue claire des colis en attente de livraison, triés par priorité ou par destination.",
        ],
      },
      {
        heading: "Étape 4 — Sortie pour le dernier kilomètre",
        paragraphs: [
          "Au moment où le colis part pour la livraison finale, il passe au statut « En livraison ». C'est à ce moment précis que le suivi GPS s'active, avec une mise à jour de la position toutes les 30 secondes. Le client peut alors voir que son colis est en cours de remise, sans que le GPS tourne inutilement pendant toute la journée.",
        ],
      },
      {
        heading: "Étape 5 — Remise au destinataire avec preuve",
        paragraphs: [
          "À la remise, le livreur enregistre la preuve de livraison : OTP, photo, signature, et position GPS du lieu de remise. Ces éléments sont directement rattachés au colis et consultables dans la plateforme. C'est cette étape qui transforme une livraison en un dossier documenté.",
          "Une fois le colis marqué comme livré, le suivi GPS se désactive automatiquement et l'historique lié à la mission reste conservé pendant 30 jours.",
        ],
      },
      {
        heading: "Pourquoi ce workflow fait la différence",
        paragraphs: [
          "La force du système, ce n'est pas un seul outil isolé, mais l'enchaînement de toutes ces étapes. Chaque scan, chaque statut, chaque preuve s'empile pour constituer un dossier logistique complet. Résultat : moins de zones d'ombre, moins de litiges, et beaucoup plus de clarté pour les équipes comme pour les clients.",
        ],
      },
    ],
    cta: {
      title: 'Voir le workflow en action',
      button: 'Suivre un colis',
    },
  },
  {
    slug: 'pourquoi-preuve-livraison-indispensable',
    image: blog2,
    category: 'Sécurité',
    date: '3 mars 2026',
    title: 'Pourquoi la preuve de livraison est devenue indispensable',
    excerpt:
      "OTP, photo, signature, géolocalisation : quatre éléments simples qui transforment une remise en un dossier documenté et réduisent drastiquement les litiges.",
    author: AUTHOR,
    authorImg: logoComprimerCouleur,
    readTime: '5 min',
    tags: ['Preuve', 'Sécurité', 'Litiges'],
    intro:
      "Dans la livraison, un mot revient souvent : « contestation ». Un colis marqué comme livré que le destinataire dit ne pas avoir reçu. Une remise que personne ne peut confirmer. Un service client qui navigue à l'aveugle. La preuve de livraison a été pensée pour résoudre exactement ce problème.",
    sections: [
      {
        heading: "Ce qu'est concrètement une preuve de livraison chez Direct Colis",
        paragraphs: [
          "Au moment où le livreur remet le colis, la plateforme enregistre plusieurs éléments rattachés à cette remise : un code OTP saisi par le destinataire, une photo de la remise ou du colis sur place, une signature électronique si elle est demandée, et la position GPS exacte de la livraison.",
          "Tous ces éléments sont attachés au colis dans la base de données. Quand un client ou un responsable ouvre le dossier du colis, il retrouve immédiatement ces preuves.",
        ],
      },
      {
        heading: "Pourquoi ces quatre éléments suffisent",
        paragraphs: [
          "Pris séparément, aucun de ces éléments n'est parfait. L'OTP peut être partagé, une photo peut être floue, une signature peut être illisible. Mais ensemble, ils forment un faisceau de preuves extrêmement difficile à contester.",
        ],
        bullets: [
          "OTP : prouve que le destinataire (ou son représentant) était joignable au moment de la livraison",
          "Photo : prouve l'état du colis et le contexte de la remise",
          "Signature : prouve l'acceptation formelle",
          "GPS : prouve que la remise a eu lieu à la bonne adresse",
        ],
      },
      {
        heading: "Ce que ça change pour le service client",
        paragraphs: [
          "Avant, un litige pouvait durer des jours : aller-retours avec le livreur, recherche dans les historiques, demande de confirmation au client final. Avec la preuve de livraison, un responsable ouvre le dossier et tranche en quelques secondes.",
          "Pour un client grand compte qui gère plusieurs centaines d'envois par jour, ce gain de temps représente un vrai retour sur investissement : moins d'appels entrants, moins de remboursements injustifiés, et une relation client plus apaisée.",
        ],
      },
      {
        heading: "Un signal de sérieux pour vos clients",
        paragraphs: [
          "La preuve de livraison n'est pas qu'un outil défensif contre les litiges. C'est aussi un signal fort envoyé à vos clients : « nous savons exactement où, quand et comment votre colis a été remis ». Ce type de transparence devient vite un argument commercial.",
        ],
      },
      {
        heading: "En résumé",
        paragraphs: [
          "La preuve de livraison ne remplace pas une bonne organisation logistique, mais elle en est le point final. Elle sécurise ce qui a été fait, documente ce qui a été remis, et clôt chaque mission de manière nette. Chez Direct Colis, c'est un élément non négociable de chaque livraison.",
        ],
      },
    ],
    cta: {
      title: 'Sécurisez chaque remise',
      button: 'Découvrir le service',
    },
  },
  {
    slug: 'grands-comptes-outils-direct-colis',
    image: blog3,
    category: 'Grands comptes',
    date: '21 mars 2026',
    title: "Comment Direct Colis accompagne les clients grands comptes",
    excerpt:
      "Import Excel/CSV, double identifiant, reporting, export, cloisonnement des données : ce que gagne une entreprise qui gère des volumes importants avec Direct Colis.",
    author: AUTHOR,
    authorImg: logoComprimerCouleur,
    readTime: '6 min',
    tags: ['B2B', 'Import CSV', 'Reporting'],
    intro:
      "Quand une entreprise passe de 10 à 500 colis par jour, elle ne peut plus se permettre de créer chaque envoi manuellement, ni de chercher un numéro de suivi dans un tableur partagé. Direct Colis a été pensé pour absorber ce changement d'échelle, avec des outils adaptés aux grands volumes.",
    sections: [
      {
        heading: "Import Excel / CSV : créer des colis en masse",
        paragraphs: [
          "Au lieu de créer chaque envoi un par un, les grands comptes peuvent importer une liste complète de colis via un fichier Excel ou CSV. La plateforme lit le fichier, valide les adresses, crée les colis avec leurs identifiants et génère les QR codes en lot.",
          "Résultat : ce qui prenait plusieurs heures le matin prend quelques minutes. Les équipes peuvent se concentrer sur les cas particuliers plutôt que sur la saisie.",
        ],
      },
      {
        heading: "Double identifiant : vos références à vous",
        paragraphs: [
          "Un colis dans Direct Colis a toujours un identifiant système (le numéro de suivi Direct Colis). Mais les grands comptes peuvent aussi associer leur propre référence interne — celle qui existe dans leur ERP, leur boutique en ligne ou leur système de gestion.",
          "Ce double identifiant permet de chercher un colis avec n'importe laquelle des deux références. Le service client n'a plus à demander « vous avez le numéro Direct Colis ? » : il peut chercher directement avec la référence de commande du client.",
        ],
      },
      {
        heading: "Cloisonnement des données : chacun voit ce qui lui appartient",
        paragraphs: [
          "Chaque client grand compte ne voit que ses propres colis, ses propres statistiques et ses propres historiques. Pas de fuite, pas de confusion entre clients. Cette séparation est appliquée au niveau du dashboard, des exports et des recherches.",
        ],
      },
      {
        heading: "Reporting et export : piloter au lieu de subir",
        paragraphs: [
          "La plateforme propose des tableaux de bord détaillés avec les volumes expédiés, les taux de succès, les délais moyens, les motifs d'échec. Ces données peuvent être exportées en Excel pour être intégrées dans les reporting internes de l'entreprise.",
          "Pour les directions financières, le suivi du paiement à la livraison (COD) est également centralisé : encaissements, historiques, clôture caisse par livreur avec validation responsable.",
        ],
      },
      {
        heading: "Étiquettes QR par lot",
        paragraphs: [
          "Une fois les colis créés, la plateforme génère toutes les étiquettes d'un coup, prêtes à imprimer. Plus besoin de relancer l'impression colis par colis : un PDF, une impression, et l'équipe d'expédition peut coller les étiquettes à la chaîne.",
        ],
      },
      {
        heading: "Ce que ça change au quotidien",
        paragraphs: [
          "L'ensemble de ces outils transforme la manière dont une entreprise gère sa logistique. Moins de temps perdu en saisie, moins d'erreurs, un meilleur reporting, et surtout une capacité à grandir sans que l'équipe opérationnelle soit noyée sous le travail administratif.",
          "C'est pour ça que Direct Colis n'est pas seulement un service de livraison, mais une vraie plateforme logistique pensée pour les structures qui expédient sérieusement.",
        ],
      },
    ],
    cta: {
      title: 'Vous gérez un volume important ?',
      button: 'Demander un devis',
    },
  },
];
