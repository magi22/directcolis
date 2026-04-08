# Claude Memory Helper

Objectif : stocker et structurer le contexte de la mission pour réduction de tokens et historique clair.

## Informations générales
- Projet : direct-colis-landing-page
- Date : 2026-04-08
- Contexte : Landing page pour Direct Colis, stack React + Vite + Tailwind + TypeScript

## Ce que l'utilisateur a fait
- Fourni le projet React/Vite
- Demandé un déploiement local

## Ce que l'assistant a fait
- Installé les dépendances avec `npm install`
- Lancé le serveur de développement Vite sur le port 3000
- Confirmé le bon démarrage : http://localhost:3000

## Problèmes rencontrés
- Aucun pour l'instant

## Décisions et actions en cours
- Serveur local opérationnel

## Points checkés avec succès
- `npm install` : OK
- `npm run dev` : OK (port 3000)

## Prochaines étapes recommandées
1. Développer / modifier les composants selon les besoins
2. Builder pour la production avec `npm run build`
3. Déployer sur un hébergeur (Vercel, Netlify, etc.)

## Règles de fonctionnement pour Claude
1. Toujours planifier avant de coder : poser un plan clair avant de lancer le développement.
2. Déléguer aux sous-agents dès qu'il y a une tâche complexe : l'agent principal est orchestrateur et déploie des sous-agents pour garder le contexte propre.
3. Auto-amélioration : logger chaque erreur, pour que la section suivante n'ajoute pas la même erreur.
4. Testing : prouver que ça tourne, exécuter des tests automatisés après chaque tâche pour vérifier que ce que tu as fait marche.
5. Fixer les bugs automatiquement si détecté par les logs de testing, corriger avant de passer à la suite.
