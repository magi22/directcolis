# Token optimization (compression context)

Objectif : utiliser moins de tokens dans les prompts successifs.

1. Réutiliser un résumé existant plutôt que tout ressaisir.
2. Prioriser les actions et décisions (pas le texte circonstanciel).
3. Mettre à jour un fichier d'état court (ex: `hindsight.md`) à chaque étape.
4. Préférer listes bullet points.
5. Suppression de détails redondants.

## Exemple de format court
- `task`: développement landing page Direct Colis
- `status`: serveur local opérationnel
- `next`: modifications composants / build production
