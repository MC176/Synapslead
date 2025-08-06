# Vidéos pour les cartes TechStack

Ce dossier contient les vidéos qui s'affichent au survol des cartes dans la section "L'Approche SynapsLead".

## Structure des fichiers

Placez vos vidéos dans ce dossier avec les noms suivants :

- `neurosciences.mp4` - Vidéo pour la carte "Neurosciences"
- `neuronutrition.mp4` - Vidéo pour la carte "Neuronutrition"
- `psychologie.mp4` - Vidéo pour la carte "Psychologie appliquée"
- `analyse-transgenerationnelle.mp4` - Vidéo pour la carte "Analyse transgénérationnelle"
- `conseil-image.mp4` - Vidéo pour la carte "Conseil en image"

## Spécifications recommandées

- **Format** : MP4
- **Codec** : H.264
- **Résolution** : 1920x1080 ou 1280x720
- **Durée** : 3-5 secondes (boucle)
- **Taille** : < 5MB par vidéo pour un chargement rapide
- **Son** : Muet (les vidéos sont automatiquement en mode muet)

## Fonctionnement

- Au survol de la souris : la vidéo se lance et remplace l'image statique
- Quand la souris quitte la carte : la vidéo se met en pause et revient à l'image statique
- La vidéo se remet automatiquement au début à chaque nouveau survol

## Ajout de nouvelles vidéos

1. Placez votre fichier vidéo dans ce dossier
2. Modifiez le fichier `src/constants/index.js` pour ajouter le chemin de la vidéo
3. Assurez-vous que le nom du fichier correspond à celui défini dans les constantes 