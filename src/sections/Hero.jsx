import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useEffect } from "react";

const Hero = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  // Animate the hero section
  useGSAP(() => {
    // Animate the text content
    gsap.fromTo(
      ".hero-text-content",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power2.out",
        delay: 0.5,
      }
    );

    // Animate the title
    gsap.fromTo(
      ".hero-title",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.7,
      }
    );

    // Animate the subtitle
    gsap.fromTo(
      ".hero-subtitle",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 0.9,
      }
    );

    // Animate the CTA button
    gsap.fromTo(
      ".hero-cta",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 1.1,
      }
    );

    // Animate the stats
    gsap.fromTo(
      ".hero-stats",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.out",
        delay: 1.3,
      }
    );
  });

  // Video optimization
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.8; // Slow down slightly for elegance
    }
  }, []);

  return (
    <>
      {/* Hero Section - Full Screen Video */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden mt-20">
        
        {/* Full Screen Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            ref={videoRef}
            className="w-full h-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster="/images/bg.png"
          >
            <source src="/videos/video1.mp4" type="video/mp4" />
            Votre navigateur ne supporte pas la lecture de vidéos.
          </video>
          
          {/* Overlay gradient for text readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
      </div>

        {/* Content Overlay */}
        <div className="relative z-20 text-center px-5 lg:px-8">
          <div className="hero-text-content space-y-8 lg:space-y-10">
            
            {/* Main Title */}
            <h1 className="hero-title text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-white via-[#f5e3df] to-[#e7d3cb] bg-clip-text text-transparent drop-shadow-2xl">
                SynapsLead
              </span>
              </h1>

            {/* Subtitle */}
            <p className="hero-subtitle text-xl md:text-2xl lg:text-3xl text-white/90 max-w-4xl mx-auto leading-relaxed drop-shadow-lg">
              
            </p>

            {/* CTA Button */}
            <div className="hero-cta pt-4">
              <a href="#work" className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white font-semibold text-lg rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
                <span>Découvrir la méthode</span>
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-2xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 -z-10"></div>
              </a>
            </div>

            {/* Stats */}
            <div className="hero-stats flex items-center justify-center gap-8 pt-4">
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">3 ans</div>
                <div className="text-sm text-white/80">De Développement</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">15 ans</div>
                <div className="text-sm text-white/80">De Réflexion</div>
              </div>
              <div className="w-px h-12 bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
              <div className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-white">27</div>
                <div className="text-sm text-white/80">Années d'Expérience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Méthode brevetée - Version une ligne */}
      <section className="landing-section py-16 bg-white">
        <div className="container mx-auto px-5">
          {/* Titre de la section */}
          <div className="text-center mb-12">
            <h2 className="method-title text-3xl md:text-4xl font-bold text-black mb-4">
              Méthode approuvée
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Une méthode unique, fondée sur les neurosciences, la neuronutrition, l’image stratégique et la psychologie positive.
            </p>
          </div>

          {/* Cartes des statistiques - Une ligne */}
          <div className="method-cards max-w-5xl mx-auto">
            <div className="bg-white/95 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/30">
              <div className="flex items-center justify-between gap-4 md:gap-8">
                {/* Carte 1 - 3 Phases */}
                <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-gray-800 mb-1 group-hover:scale-110 transition-transform duration-300">
                      3
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Phases</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Transformation complète en 3 étapes
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>

                {/* Séparateur vertical */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                {/* Carte 2 - 12 Modules */}
                <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-font-bold text-gray-800 mb-1 group-hover:scale-110 transition-transform duration-300">
                      12
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Modules</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Apprentissage progressif et méthodique
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-[#e7d3cb] to-[#d9b8b0] rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>

                {/* Séparateur vertical */}
                <div className="w-px h-16 bg-gradient-to-b from-transparent via-gray-300 to-transparent"></div>

                {/* Carte 3 - 6 Tests */}
                <div className="flex-1 text-center group cursor-pointer hover:scale-105 transition-all duration-300">
                  <div className="mb-3">
                    <div className="text-4xl md:text-5xl font-bold text-font-bold text-black mb-1 group-hover:scale-110 transition-transform duration-300">
                      7
                    </div>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1">Tests</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Évaluation ciblée et personnalisée
                  </p>
                  <div className="mt-3 w-12 h-1 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full mx-auto group-hover:w-16 transition-all duration-300"></div>
                </div>
              </div>

              {/* Ligne de séparation horizontale */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <p className="text-gray-500 text-2xl font-medium">
                    Le Leadership ne se décrète pas, il se construit.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section Citation - Design élégant et sophistiqué */}
      <section className="landing-section py-20 bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-5">
          <div className="max-w-3xl mx-auto">
            <div className="relative">
              {/* Citation principale avec design épuré */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-xl border border-white/40 relative overflow-hidden">
                {/* Éléments décoratifs subtils */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#d9b8b0] to-transparent opacity-60"></div>
                <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-br from-[#d9b8b0]/10 to-[#e7d3cb]/10 rounded-full"></div>
                <div className="absolute bottom-6 left-6 w-8 h-8 bg-gradient-to-br from-[#e7d3cb]/10 to-[#d9b8b0]/10 rounded-full"></div>
                
                <blockquote className="relative z-10">
                  {/* Texte de la citation */}
                  <p className="text-xl md:text-2xl lg:text-3xl font-light text-slate-800 leading-relaxed mb-6 italic">
                    "Et si votre façon de diriger devenait enfin le reflet de qui vous êtes vraiment?"
                  </p>
                  
                  {/* Section auteur et signature */}
                  <div className="flex items-center justify-between gap-6 mt-8 pt-6 border-t border-slate-200/50">
                    {/* Texte d'expérience - à gauche */}
                    <div className="flex-1 max-w-md">
                      <p className="text-base text-slate-600 leading-relaxed text-justify">
                      Forte de 27 ans d’expérience et d’une méthode fondée sur la science et l’expertise de terrain, j’aide les femmes à prendre pleinement leur place et à incarner un leadership affirmé.
                      </p>
                    </div>

                    {/* Informations de l'auteur - à droite */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <img 
                          src="/images/Brigitte.png" 
                          alt="Brigitte - Fondatrice"
                          className="w-20 h-20 rounded-full object-cover shadow-lg ring-2 ring-white"
                        />
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#d9b8b0]/20 to-[#e7d3cb]/20"></div>
                      </div>
                      <div>
                        <p className="font-semibold text-slate-800 text-lg">Brigitte</p>
                        <p className="text-sm text-slate-600 font-medium">Fondatrice SynapsLead</p>
                      </div>
                    </div>
                  </div>
                </blockquote>
              </div>
              
              {/* Éléments décoratifs en arrière-plan */}
              <div className="absolute -top-2 -left-2 w-6 h-6 bg-gradient-to-br from-[#d9b8b0]/30 to-[#e7d3cb]/30 rounded-full blur-sm"></div>
              <div className="absolute -bottom-2 -right-2 w-4 h-4 bg-gradient-to-br from-[#e7d3cb]/30 to-[#d9b8b0]/30 rounded-full blur-sm"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
