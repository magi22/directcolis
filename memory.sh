#!/usr/bin/env bash
# Script de sauvegarde rapide du contexte pour un assistant AI

# 1. Archiver traces locales
tar -czf .memory_snapshot_$(date +%Y%m%d_%H%M%S).tar.gz claude.md primer.md hindsight.md obsidian.md token_optimization.md 2>/dev/null || true

# 2. Vérifier état git du dossier courant
echo "Status git:" && git status --short

echo "Remote URL:" && git remote -v

echo "Dernière commit:" && git log --oneline --max-count=3

# 3. Rappel des consignes à chaque session
cat <<'EOF'
Consignes :
- moindres tokens
- garder le contexte résumé
- lister tâches en cours
- noter décisions
EOF
