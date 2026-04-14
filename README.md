# Direct Colis — Landing Page

Landing page officielle de **Direct Colis**, solution logistique moderne pour le suivi, la gestion et la livraison sécurisée de colis au Sénégal.

## Stack technique

- **React 19** + **TypeScript**
- **Vite 6** (build & dev server)
- **Tailwind CSS 4** (styles)
- **React Router 7** (routing multi-pages)
- **Motion** (animations)
- **Lucide React** (icônes)

## Développement local

**Prérequis:** Node.js 18+

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

Le site est disponible sur [http://localhost:3000](http://localhost:3000).

## Build de production

```bash
npm run build
```

Les fichiers optimisés sont générés dans `dist/`.

## Déploiement

Le projet est configuré pour être déployé sur **Vercel** (voir `vercel.json`). Les routes SPA sont réécrites vers `index.html` pour que React Router gère le client-side routing.

## Structure des pages

- `/` — Accueil
- `/a-propos` — À propos (onglets + témoignages carrousel)
- `/services` — Services détaillés
- `/suivi` — Suivi de colis
- `/faq` — Questions fréquentes
- `/blog` — Blog & actualités
- `/contact` — Formulaire de contact

---

Développé par [Wiicode](https://wiicode.dev).
