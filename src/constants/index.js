const navLinks = [
  {
    name: "Méthode",
    link: "#work",
  },
  {
    name: "Bénéfices",
    link: "#experience",
  },
  {
    name: "Livres",
    link: "#books",
  },
  {
    name: "Conférences",
    link: "#conferences",
  },
  {
    name: "Témoignages",
    link: "#testimonials",
  },
];

const words = [
  { text: "Neurosciences", imgPath: "/images/ideas.svg" },
  { text: "Neuronutrition", imgPath: "/images/concepts.svg" },
  { text: "Psychologie", imgPath: "/images/designs.svg" },
  { text: "Leadership", imgPath: "/images/code.svg" },
  { text: "Neurosciences", imgPath: "/images/ideas.svg" },
  { text: "Neuronutrition", imgPath: "/images/concepts.svg" },
  { text: "Psychologie", imgPath: "/images/designs.svg" },
  { text: "Leadership", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: " phases", label: "Transformation complète" },
  { value: 12, suffix: " modules", label: "Apprentissage structuré" },
  { value: 6, suffix: " tests", label: "Évaluation ciblée" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Neurophysiologie et Clarté mentale",
    desc: "Optimisez les ressources de votre cerveau et de votre corps pour retrouver une énergie stable et une prise de décision plus fluide.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Estime de soi & Autorité intérieure",
    desc: "Ancrez une estime de soi juste et profonde qui ne vacille plus face aux doutes ou aux injonctions extérieures.",
  },
  {
    imgPath: "/images/time.png",
    title: "Image, Style & Leadership incarné",
    desc: "Révélez une image alignée avec votre posture intérieure grâce à une approche fondée sur le langage non-verbla, la colorimétrie et l'intelligence du style.",
  },
];

const techStackImgs = [
  {
    name: "Neurosciences",
    imgPath: "/images/logos/react.png",
    videoPath: "/videos/neuroscience.mp4",
  },
  {
    name: "Psychologie appliquée",
    imgPath: "/images/logos/node.png",
    videoPath: "/videos/psychologie.mp4",
  },
  {
    name: "Analyse transgénérationnelle",
    imgPath: "/images/logos/three.png",
    videoPath: "/videos/analyse-transgenerationnelle.mp4",
  },
];

const techStackIcons = [
  {
    name: "Neurosciences",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1.0, // ← AJOUTEZ une valeur ici
    rotation: [0, 0, 0],
  },
  {
    name: "Neuronutrition",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Psychologie appliquée", 
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Analyse transgénérationnelle",
    modelPath: "/models/three.js-transformed.glb", 
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Conseil en image",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review: "SynapsLead m'a permis de comprendre mon fonctionnement neurologique et d'identifier mes zones de stress chronique. J'ai retrouvé ma clarté mentale.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Phase 1 : Diagnostic & Fondations",
    date: "Modules 1-4",
    responsibilities: [
      "Comprendre votre fonctionnement neurologique et vos canaux sensoriels dominants.",
      "Identifier vos forces naturelles et vos zones de stress chronique.",
      "Activer les leviers physiologiques de la stabilité émotionnelle.",
    ],
  },
  {
    review: "La distinction entre confiance en soi et estime de soi a été révélatrice. J'ai reconstruit une estime solide et stable, même dans l'adversité.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Phase 2 : Transformation & Alignement",
    date: "Modules 5-8",
    responsibilities: [
      "Faire la différence entre confiance en soi et estime de soi.",
      "Identifier les situations où vous vous trahissez malgré vous.",
      "Mettre en place des protocoles de gestion du stress et de recentrage.",
    ],
  },
  {
    review: "Découvrir mon archétype de leadership a été libérateur. J'ai arrêté de forcer un rôle qui ne m'appartenait pas et j'ai retrouvé mon autorité intérieure.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "Phase 3 : Incarnation & Puissance",
    date: "Modules 9-12",
    responsibilities: [
      "Découvrir votre archétype de leadership parmi 8 possibilités.",
      "Réajuster votre image extérieure pour qu'elle incarne la femme que vous êtes devenue.",
      "Reprendre la main sur votre trajectoire et cesser d'être l'otage de vos conditionnements.",
    ],
  },
  {
    review: "Grâce à SynapsLead, j'ai découvert mes patterns de stress et appris à les gérer efficacement. Ma productivité a augmenté de 40%.",
    imgPath: "/images/exp4.png",
    logoPath: "/images/logo4.png",
    title: "Phase 4 : Optimisation & Performance",
    date: "Modules 13-16",
    responsibilities: [
      "Optimiser vos performances cognitives et votre productivité.",
      "Développer des stratégies de gestion du stress avancées.",
      "Créer des routines quotidiennes qui soutiennent votre bien-être.",
    ],
  },
  {
    review: "La méthode m'a aidée à développer une communication authentique et impactante. Mes équipes me suivent maintenant naturellement.",
    imgPath: "/images/exp5.png",
    logoPath: "/images/logo5.png",
    title: "Phase 5 : Communication & Influence",
    date: "Modules 17-20",
    responsibilities: [
      "Maîtriser l'art de la communication authentique et impactante.",
      "Développer votre charisme naturel et votre influence.",
      "Créer des connexions profondes avec vos équipes et collaborateurs.",
    ],
  },
  {
    review: "Je me sens maintenant alignée avec qui je suis vraiment. J'ai trouvé ma voix et j'ose prendre ma place dans le monde professionnel.",
    imgPath: "/images/exp6.png",
    logoPath: "/images/logo6.png",
    title: "Phase 6 : Alignement & Impact",
    date: "Modules 21-24",
    responsibilities: [
      "Trouver votre voix authentique et votre mission personnelle.",
      "Créer un impact durable dans votre domaine d'expertise.",
      "Devenir un modèle inspirant pour d'autres femmes leaders.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Marie Dubois",
    mentions: "Dirigeante Tech",
    review:
      "SynapsLead a transformé ma façon de diriger. J'ai retrouvé ma clarté mentale et mon énergie durable. Plus de fatigue mentale, plus de surcharge invisible. Je me reconnais enfin dans mes réactions.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Sophie Martin",
    mentions: "Entrepreneure",
    review:
      "Grâce à SynapsLead, j'ai compris la différence entre confiance en soi et estime de soi. J'ai reconstruit une estime solide et stable, même dans l'adversité. Je n'ai plus à prouver ma place, je l'occupe naturellement.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Claire Bernard",
    mentions: "Manager Senior",
    review:
      "Découvrir mon archétype de leadership a été libérateur. J'ai arrêté de forcer un rôle qui ne m'appartenait pas. J'ai retrouvé mon élan, ma clarté et ma justesse relationnelle. SynapsLead m'a permis de reprendre la main sur ma trajectoire.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Anne Moreau",
    mentions: "Consultante",
    review:
      "Les protocoles de gestion du stress et de recentrage m'ont sauvée. Cohérence cardiaque, routines neuroactives, MentalBoost... J'ai des outils concrets pour rester alignée, posée et stratégique.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Julie Leroy",
    mentions: "Directrice Marketing",
    review:
      "SynapsLead agit en profondeur, là où les approches classiques échouent. J'ai réorganisé mon système de pensée, mes schémas émotionnels et ma posture identitaire. Le résultat ? Une puissance visible et naturelle.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Isabelle Petit",
    mentions: "Chef de projet",
    review:
      "L'analyse transgénérationnelle m'a permis de comprendre mes conditionnements passés. J'ai cessé d'en être l'otage. Maintenant, je réajuste mon image extérieure pour qu'elle incarne avec justesse la femme que je suis devenue.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
