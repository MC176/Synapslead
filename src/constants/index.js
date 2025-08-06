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
    review: "J'ai retrouvé ma clarté mentale et stabilisé mon énergie. Les fondations sont maintenant solides et je me sens ancrée dans qui je suis vraiment.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "🟠 Partie 1 — Reconnecter les fondations",
    subtitle: "Stabiliser l'énergie, réorganiser le mental, retrouver sa clarté intérieure.",
    date: "Modules 1-4",
    responsibilities: [
      "Poser les fondations intérieures : Forces de caractère, croyances, zones de résistance.",
      "Cartographier ses émotions : Identifier les émotions dominantes et mieux les réguler.",
      "Nourrir le cerveau, apaiser le corps : Neuronutrition, stress, sommeil, hormones.",
      "Réactiver les bons circuits : Reprogrammer les automatismes internes.",
    ],
  },
  {
    review: "Comprendre d'où je viens m'a permis de transformer ce qui me limitait encore. J'ai déjoué mes juges intérieurs et créé une identité cohérente.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "🟡 Partie 2 — Rembobiner le fil d'Ariane",
    subtitle: "Comprendre d'où l'on vient, transformer ce qui limite encore.",
    date: "Modules 5-8",
    responsibilities: [
      "Estime de soi & racines invisibles : Déjouer les juges intérieurs, explorer les transmissions inconscientes.",
      "Croyances limitantes & spirales négatives : Débloquer les pensées-racines et adopter de nouveaux réflexes mentaux.",
      "Aligner l'intérieur à l'extérieur : Créer une identité cohérente.",
      "Communication verbale et non-verbale : Rayonner avec justesse en tant que femme dirigeante.",
    ],
  },
  {
    review: "J'incarne maintenant un leadership rayonnant et assumé. Ma marque personnelle me distingue et mon style reflète parfaitement qui je suis.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "🟣 Partie 3 — Révéler l'héroïne intérieure",
    subtitle: "Incarner un leadership rayonnant et assumé.",
    date: "Modules 9-12",
    responsibilities: [
      "Créer une marque personnelle qui vous distingue : Définir votre signature identitaire.",
      "Sublimer votre image : Morphologie, colorimétrie, symbolique des couleurs.",
      "Explorer et définir un style unique : Cohérence entre posture intérieure et image extérieure.",
      "Session stratégique B2B : Visio personnalisée pour finaliser votre carte d'alignement et affiner votre stratégie de leadership.",
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
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
