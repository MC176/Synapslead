import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";

const Books = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".book-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.3, duration: 1.2, ease: "power2.out" }
    );

    gsap.fromTo(
      ".book-cover",
      { rotationY: -15, opacity: 0 },
      { rotationY: 0, opacity: 1, stagger: 0.2, duration: 1, delay: 0.5, ease: "back.out(1.7)" }
    );
  });

  const books = [
    {
      title: "Leadership Féminin",
      subtitle: "La méthode SynapsLead",
      description: "Découvrez les fondements scientifiques de la transformation du leadership féminin. Un guide complet pour comprendre et appliquer les neurosciences au service de votre réussite.",
      cover: "/images/tome1.png",
      amazonLink: "https://amazon.com",
      price: "20.00€",
      badge: "Bestseller",
      rating: 4.9,
      reviews: 127,
      pages: 280,
      format: "Broché + E-book",
      highlights: ["Neurosciences appliquées", "Protocoles pratiques", "Témoignages exclusifs"]
    },
    {
      title: "Neurosciences & Leadership",
      subtitle: "Comprendre votre cerveau pour mieux diriger",
      description: "Ce tome vous invite à plonger dans votre histoire, déconstruire les conditionnements, et reconnecter les fils de votre vérité intérieure. Un travail en profondeur sur les émotions, les schémas récurrents et les transmissions invisibles. Pour enfin renaître de vous-même, libre, lucide… et prête à faire émerger l'héroïne oubliée.",
      cover: "/images/tome2.png",
      amazonLink: "https://amazon.com",
      price: "20.00€",
      badge: "Nouveau",
      rating: 4.8,
      reviews: 89,
      pages: 320,
      format: "Broché + E-book",
      highlights: ["Cartographie cérébrale", "Techniques avancées", "Exercices pratiques"]
    },
    {
      title: "Estime de Soi & Autorité",
      subtitle: "Les piliers du leadership authentique",
      description: "Ce tome propose un voyage d'exploration de votre communication, apparence et présence. Il affine expression verbale et non-verbale, clarifie l’intuition, et révèle votre image à travers style, couleurs et morphologie. L’objectif : créer un branding personnel puissant, aligné avec la femme que vous êtes devenue.",
      cover: "/images/tome3.jpg",
      amazonLink: "https://amazon.com",
      price: "20.00€",
      badge: "Populaire",
      rating: 4.9,
      reviews: 156,
      pages: 240,
      format: "Broché + E-book",
      highlights: ["Méthodes éprouvées", "Exercices quotidiens", "Suivi personnalisé"]
    }
  ];

  return (
         <section id="books" className="landing-section py-12 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#e7d3cb] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <TitleHeader
          title="Mes Livres sur le Leadership Féminin"
        />

        <div className="mt-10 md:mt-20 max-w-7xl mx-auto">
          {/* Hero Book - Featured */}
          <div className="mb-10 md:mb-20">
            <div className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-2xl md:rounded-4xl p-6 md:p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-6 md:gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Bestseller #1
                  </div>
                  <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4">Leadership Féminin</h2>
                  <h3 className="text-lg md:text-xl lg:text-2xl font-medium mb-4 md:mb-6 opacity-90">La méthode SynapsLead</h3>
                  <p className="text-base md:text-lg mb-6 md:mb-8 opacity-90 leading-relaxed">
                    Le SOCLE, c'est la base qu'on n'enseigne jamais aux femmes leaders.
                    Apprendre à nourrir son cerveau, à écouter son stress, à réhabiter son corps avant de vouloir convaincre le monde.
                    Une fondation intérieure essentielle pour rayonner sans s'épuiser.
                  </p>
                

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={books[0].amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-[#d9b8b0] px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 group"
                    >
                      <span>Bientôt disponible</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div className="text-center sm:text-left">
                      <div className="text-3xl font-bold">20.00€</div>
                      <div className="text-sm opacity-80">Broché + E-book inclus</div>
                    </div>
                  </div>
                </div>

                <div className="book-cover relative flex justify-center lg:justify-end">
                  <div className="relative transform perspective-1000">
                    <div className="w-48 h-72 md:w-64 md:h-96 rounded-2xl shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700 overflow-hidden">
                      <img 
                        src={books[0].cover} 
                        alt={books[0].title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">#1</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Other Books Grid */}
          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {books.slice(1).map((book, index) => (
              <div key={index} className="book-card group">
                <div className="bg-white/95 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className="flex flex-col sm:flex-row gap-4 md:gap-6">
                    {/* Book Cover */}
                    <div className="book-cover flex-shrink-0 flex justify-center sm:justify-start">
                      <div className="w-24 h-36 sm:w-32 sm:h-48 bg-gradient-to-br from-[#f5e3df] to-[#e7d3cb] rounded-xl shadow-lg transform rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500 overflow-hidden">
                        <img 
                          src={book.cover} 
                          alt={book.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-[#d9b8b0]/20 to-[#e7d3cb]/20 rounded-xl"></div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-3 md:space-y-4">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          {book.badge}
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
                        <p className="text-[#d9b8b0] font-medium text-sm md:text-base">{book.subtitle}</p>
                      </div>
                      
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                        {book.description}
                      </p>



                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4">
                        <div>
                          <div className="text-2xl font-bold text-[#d9b8b0]">{book.price}</div>
                          <div className="text-xs text-gray-500">{book.format}</div>
                        </div>
                        <a
                          href={book.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white px-4 md:px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2 group"
                        >
                          <span>Acheter</span>
                          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books; 