import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import VideoBackground from "../components/VideoBackground";

const Hero = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".hero-title",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".hero-subtitle",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.5, ease: "power2.out" }
    );

    gsap.fromTo(
      ".method-title",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 0.8, ease: "power2.out" }
    );

    gsap.fromTo(
      ".method-cards",
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: "power2.out" }
    );
  });

  return (
    <>
      <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center">
        {/* Vidéo en arrière-plan */}
        <VideoBackground
          videoSrc="/images/screen.mp4"
          className="absolute inset-0 z-0"
        />

        {/* Overlay simple pour la lisibilité */}
        <div className="absolute inset-0 bg-black/40 z-10"></div>

        {/* Contenu centré minimaliste */}
        <div className="relative z-20 text-center px-5">
          <h1 className="hero-title text-7xl md:text-9xl lg:text-[12rem] font-bold text-white drop-shadow-2xl mb-6">
            SynapsLead®
          </h1>
          <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-white/90 font-medium drop-shadow-lg max-w-2xl mx-auto">
            Pour les femmes qui réussissent
          </p>
        </div>
      </section>

      {/* Section Méthode brevetée - Version une ligne */}
      <section className="py-16 bg-gradient-to-b from-purple-50 via-pink-50 to-indigo-50">
        <div className="container mx-auto px-5">
          {/* Titre de la section */}
          <div className="text-center mb-12">
            <h2 className="method-title text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
              Méthode brevetée
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une approche scientifique et structurée pour transformer votre leadership féminin
            </p>
          </div>

          {/* Cartes des statistiques - Une ligne */}
          <div className="method-cards max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/30">
              <div className="flex items-center justify-between gap-4 md:gap-8">
                {/* Carte 1 - 3 Phases */}
                <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-purple-600 group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Phases</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Transformation complète en 3 étapes structurées
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>

                {/* Séparateur vertical */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                {/* Carte 2 - 12 Modules */}
                <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-pink-600 group-hover:scale-110 transition-transform duration-300">
                      12
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Modules</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Apprentissage progressif et méthodique
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-pink-500 to-indigo-500 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>

                {/* Séparateur vertical */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                {/* Carte 3 - 6 Tests */}
                <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-indigo-600 group-hover:scale-110 transition-transform duration-300">
                      6
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Tests</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Évaluation ciblée et personnalisée
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>

              {/* Ligne de séparation horizontale */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-gray-500 text-sm font-medium">
                    Méthode validée par plus de 500 femmes dirigeantes
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
