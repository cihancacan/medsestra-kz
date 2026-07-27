# Medsestra.kz

Starter Next.js pour Medsestra.kz.

## Images à ajouter dans `public/images/`

- `athome.jpg`
- `athome.mobile.jpg`
- `Beauty.jpg`
- `beauty.mobile.jpg`
- `Corporate.jpg`
- `Corporate.mobile.jpg`
- `family.jpg`
- `family.mobile.jpg`
- `Home.jpg`
- `home.mobile.jpg`

Respecter exactement les majuscules/minuscules.

## Lancer en local

```bash
npm install
npm run dev
```

## Build statique pour FastPanel

```bash
npm run build
```

Le dossier généré sera `out/` grâce à `output: 'export'` dans `next.config.mjs`.

## Section ambulances

Les pages ambulances disposent de vraies URL localisées :

- russe : `/ru/skoraya-pomoshch/`
- kazakh : `/kk/zhedel-zhardem/`
- anglais : `/en/ambulance/`

Le catalogue couvre les 90 villes et les 25 districts urbains officiels du
classificateur KATO, ainsi que les principaux microquartiers d'Almaty utilisés
par le site. Les variantes de mots-clés sont regroupées par intention sur une
URL canonique afin d'éviter les pages dupliquées.

Pour régénérer le fichier géographique à partir d'une nouvelle version Excel
du KATO :

```bash
python scripts/generate-ambulance-locations.py /chemin/vers/KATO.xlsx
```

## Déploiement FastPanel

Le workflow GitHub Actions fourni utilise SSH + rsync. Il faut ajouter les secrets GitHub :

- `FASTPANEL_HOST` : IP du VPS, ex. `185.22.64.51`
- `FASTPANEL_USER` : utilisateur SSH
- `FASTPANEL_SSH_KEY` : clé privée SSH
- `FASTPANEL_PATH` : dossier public du site, ex. `/var/www/medsestra.kz/data/www/medsestra.kz`
