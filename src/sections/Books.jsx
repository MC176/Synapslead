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
      subtitle: "La méthode SynapsLead®",
      description: "Découvrez les fondements scientifiques de la transformation du leadership féminin. Un guide complet pour comprendre et appliquer les neurosciences au service de votre réussite.",
      cover: "/images/book1.jpg",
      amazonLink: "https://amazon.com/book1",
      price: "24.90€",
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
      description: "Les clés neurologiques pour optimiser votre potentiel de leadership. Apprenez à utiliser votre cerveau comme votre meilleur allié dans votre carrière.",
      cover: "/images/book2.jpg",
      amazonLink: "https://amazon.com/book2",
      price: "29.90€",
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
      description: "Reconstruire une estime solide et développer votre autorité naturelle. Transformez vos doutes en force et votre vulnérabilité en puissance.",
      cover: "/images/book3.jpg",
      amazonLink: "https://amazon.com/book3",
      price: "26.90€",
      badge: "Populaire",
      rating: 4.9,
      reviews: 156,
      pages: 240,
      format: "Broché + E-book",
      highlights: ["Méthodes éprouvées", "Exercices quotidiens", "Suivi personnalisé"]
    }
  ];

  return (
    <section id="books" className="py-24 bg-gradient-to-b from-indigo-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-indigo-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container mx-auto px-5 relative z-10">
        <TitleHeader
          title="Mes Livres sur le Leadership Féminin"
          sub="📚 Découvrez la méthode SynapsLead® en profondeur"
        />

        <div className="mt-20 max-w-7xl mx-auto">
          {/* Hero Book - Featured */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-4xl p-12 text-white relative overflow-hidden">
              <div className="absolute inset-0 bg-black/10"></div>
              <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                    Bestseller #1
                  </div>
                  <h2 className="text-4xl lg:text-5xl font-bold mb-4">Leadership Féminin</h2>
                  <h3 className="text-xl lg:text-2xl font-medium mb-6 opacity-90">La méthode SynapsLead®</h3>
                  <p className="text-lg mb-8 opacity-90 leading-relaxed">
                    Le livre qui a transformé la vie de plus de 500 femmes dirigeantes. 
                    Découvrez les secrets des neurosciences appliquées au leadership féminin.
                  </p>
                  
                  <div className="flex items-center gap-6 mb-8">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-300" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-2 font-semibold">4.9/5</span>
                    </div>
                    <span className="text-white/80">• 127 avis</span>
                    <span className="text-white/80">• 280 pages</span>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href={books[0].amazonLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-purple-600 px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-3 group"
                    >
                      <span>Acheter sur Amazon</span>
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <div className="text-center sm:text-left">
                      <div className="text-3xl font-bold">24.90€</div>
                      <div className="text-sm opacity-80">Broché + E-book inclus</div>
                    </div>
                  </div>
                </div>

                <div className="book-cover relative">
                  <div className="relative transform perspective-1000">
                    <div className="w-full h-96 bg-gradient-to-br from-purple-100 via-pink-100 to-indigo-100 rounded-2xl shadow-2xl transform rotate-y-12 hover:rotate-y-0 transition-transform duration-700">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-2xl"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-8xl mb-4">📖</div>
                          <div className="text-2xl font-bold text-gray-800">Leadership Féminin</div>
                          <div className="text-gray-600">La méthode SynapsLead®</div>
                        </div>
                      </div>
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
          <div className="grid md:grid-cols-2 gap-8">
            {books.slice(1).map((book, index) => (
              <div key={index} className="book-card group">
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  <div className="flex gap-6">
                    {/* Book Cover */}
                    <div className="book-cover flex-shrink-0">
                      <div className="w-32 h-48 bg-gradient-to-br from-purple-100 to-pink-100 rounded-xl shadow-lg transform rotate-y-6 group-hover:rotate-y-0 transition-transform duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-xl"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <div className="text-4xl mb-2">📚</div>
                            <div className="text-xs font-bold text-gray-800">SynapsLead®</div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-medium mb-3">
                          <span className="w-2 h-2 bg-white rounded-full"></span>
                          {book.badge}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-800 mb-2">{book.title}</h3>
                        <p className="text-purple-600 font-medium">{book.subtitle}</p>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {book.description}
                      </p>

                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                          <span className="ml-1 font-semibold">{book.rating}</span>
                        </div>
                        <span>• {book.reviews} avis</span>
                        <span>• {book.pages} pages</span>
                      </div>

                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <div className="text-2xl font-bold text-purple-600">{book.price}</div>
                          <div className="text-xs text-gray-500">{book.format}</div>
                        </div>
                        <a
                          href={book.amazonLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex items-center gap-2 group"
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

          {/* Call-to-action */}
          <div className="text-center mt-20">
            <div className="bg-white/90 backdrop-blur-md rounded-3xl p-12 shadow-2xl border border-white/30 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold text-gray-800 mb-4">Approfondissez vos connaissances</h3>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Ces livres vous donnent accès aux fondements théoriques et pratiques de la méthode SynapsLead®. 
                Plus de 500 femmes ont déjà bénéficié de ces ouvrages.
              </p>
              <a
                href="https://amazon.com/author/synapslead"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group"
              >
                <span>Voir tous mes livres sur Amazon</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Books; 