# Caly Nails — site vitrine

Site vitrine du salon Caly Nails (Genève), construit avec Next.js (App Router), React 19 et Tailwind CSS v4.

## Démarrer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Structure

- `app/fr/` — layout + page racine, servis sur `/` (français, langue par défaut)
- `app/en/` — layout + page, servis sur `/en` (anglais)
- `middleware.ts` — réécrit discrètement `/` vers `/fr` en interne (l'URL affichée reste `/`)
- `app/components/` — composants partagés par les deux langues, chacun reçoit le texte via une prop `dict`
- `app/lib/dictionaries/fr.ts` et `en.ts` — tout le texte du site, dans les deux langues
- `app/lib/constants.ts` — URLs et coordonnées du salon (à modifier ici, pas dans les composants)
- `app/lib/seo.ts` — génère les métadonnées et le schema.org, partagé par les deux layouts
- `public/` — images (`.webp`) et vidéo (`.mp4`) optimisées

Pour ajouter/corriger du texte, modifier les fichiers dans `app/lib/dictionaries/`, jamais directement dans les composants.

## À vérifier avant mise en production

- `app/lib/constants.ts` : `SITE_URL` est un placeholder (`https://caly-nails.ch`) — à remplacer par le vrai domaine une fois acheté.
- `app/layout.tsx` : les horaires du schema.org (`openingHoursSpecification`) sont une estimation à corriger avec les vrais horaires du salon.
- Une image Open Graph dédiée (1200×630) donnerait un meilleur rendu au partage que le recadrage automatique du portrait hero.

## Déploiement

Déployable tel quel sur [Vercel](https://vercel.com/new).
