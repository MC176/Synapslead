# Organisation des images pour SynapsLead

## Images principales à ajouter

### 1. Image Hero Section - Arrière-plan complet
**Nom du fichier :** `hero-background.jpg`
**Emplacement :** `/public/images/hero-background.jpg`
**Spécifications :**
- **Résolution :** 1920x1080px minimum (format paysage)
- **Format :** JPG ou WebP
- **Style :** 
  - Photo d'arrière-plan complète pour la Hero Section
  - Ambiance moderne, féminine et professionnelle
  - Peut être une scène de bureau, une femme dirigeante, ou un environnement abstrait
  - Couleurs harmonieuses avec la palette rose/lavande/cyan
  - Assez sombre ou avec un overlay pour que le texte blanc soit lisible
- **Qualité :** Haute qualité, optimisée pour le web (< 1MB)

### 2. Images de fond pour sections (optionnel)
Si vous voulez des images de fond pour d'autres sections :

**Nom du fichier :** `section-bg-1.jpg`, `section-bg-2.jpg`, etc.
**Emplacement :** `/public/images/`
**Spécifications :**
- **Résolution :** 1920x1080px minimum
- **Format :** JPG
- **Style :** 
  - Images abstraites ou de nature
  - Couleurs douces et pastels
  - Peuvent être floues ou avec faible opacité

## Suggestions de contenu pour l'image hero-main.jpg

### Option 1 : Portrait professionnel
- Femme en tenue professionnelle moderne
- Regard confiant et déterminé
- Arrière-plan flou ou abstrait
- Éclairage doux et féminin

### Option 2 : Scène de leadership
- Femme dans un environnement de bureau moderne
- Posture de leader, en train de présenter ou diriger
- Ambiance professionnelle mais chaleureuse

### Option 3 : Image conceptuelle
- Éléments symboliques du leadership féminin
- Neurones, cerveau, ou éléments neurologiques stylisés
- Couleurs cohérentes avec la palette du site

## Palette de couleurs recommandée
- **Rose clair :** #fdf2f8
- **Lavande :** #e0e7ff  
- **Bleu ciel :** #e0f2fe
- **Cyan :** #f0f9ff
- **Violet :** #8b5cf6
- **Rose :** #ec4899

## Optimisation des images
1. **Compression :** Utilisez des outils comme TinyPNG ou ImageOptim
2. **Format WebP :** Pour une meilleure performance (avec fallback JPG)
3. **Responsive :** Assurez-vous que l'image s'affiche bien sur mobile
4. **Alt text :** Toujours ajouter un texte alternatif descriptif

## Structure des dossiers
```
public/
├── images/
│   ├── hero-background.jpg    ← Arrière-plan complet Hero Section
│   ├── section-bg-1.jpg       ← Images de fond (optionnel)
│   ├── section-bg-2.jpg       ← Images de fond (optionnel)
│   └── README.md              ← Ce fichier
└── videos/
    └── ...                    ← Vos vidéos existantes
``` 