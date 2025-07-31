import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animation pour les cartes de timeline
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      // Animation du bloc de gauche (depuis la gauche)
      const leftBlock = card.querySelector('.left-block');
      if (leftBlock) {
        gsap.from(leftBlock, {
          xPercent: -100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      }
      
      // Animation du bloc de droite (depuis la droite)
      const rightBlock = card.querySelector('.right-block');
      if (rightBlock) {
        gsap.from(rightBlock, {
          xPercent: 100,
          opacity: 0,
          duration: 1.2,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
          },
        });
      }
    });

    // Animation pour les textes
    gsap.utils.toArray(".expText").forEach((text) => {
      gsap.from(text, {
        opacity: 0,
        y: 30,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: text,
          start: "top 70%",
        },
      });
    }, "<");

    // Animation pour les images
    gsap.utils.toArray(".exp-image").forEach((image) => {
      gsap.from(image, {
        scale: 0.8,
        opacity: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: image,
          start: "top 80%",
        },
      });
    });
  }, []);

  return (
    <section
      id="experience"
      className="landing-section flex-center md:mt-40 mt-20 section-padding xl:px-0 relative"
    >
      
      <div className="w-full h-full md:px-20 px-5 relative z-10">
        <div className="mt-32 relative">
          {/* Titre de la section */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6">
              La Structure de la méthode
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full mx-auto"></div>
          </div>
          
          {/* Timeline centrale moderne */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-black via-gray-800 to-gray-600 rounded-full shadow-lg"></div>
            {/* Points de connexion */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-800 rounded-full shadow-lg"></div>
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-600 rounded-full shadow-lg"></div>
          </div>
          
          {/* Conteneur pour les cartes */}
          <div className="relative z-50 space-y-24">
            {expCards.map((card, index) => {
              const isLeft = index % 2 === 0;
              
              return (
                <div 
                  key={card.title} 
                  className={`timeline-card flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-16 max-w-7xl mx-auto`}
                >
                  {/* Phase - Unique */}
                  <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'} ${isLeft ? 'left-block' : 'right-block'}`}>
                    <div className="bg-white/95 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-black/20 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="expText flex flex-col gap-6">
                        {/* En-tête avec phase */}
                        <div className="mb-6">
                          <h1 className="font-black text-3xl text-black">{card.title}</h1>
                        </div>
                        
                        {/* Date */}
                        <div className="inline-flex items-center gap-2 bg-gray-100 text-black px-4 py-2 rounded-full text-sm font-medium w-fit">
                          <span className="w-2 h-2 bg-black rounded-full"></span>
                          {card.date}
                        </div>
                        
                        {/* Témoignage avec hauteur fixe */}
                        <div className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-2xl p-6 border-l-4 border-[#d9b8b0] h-32 flex items-center">
                          <p className="text-gray-700 italic text-lg leading-relaxed">
                            "{card.review}"
                          </p>
                        </div>
                        
                        {/* Bénéfices */}
                        <div>
                          <h3 className="font-bold text-xl text-black mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm">✓</span>
                            Bénéfices concrets
                          </h3>
                          <ul className="space-y-3">
                            {card.responsibilities.map(
                              (responsibility, idx) => (
                                <li key={idx} className="text-gray-700 font-medium text-lg flex items-start gap-3">
                                  <span className="w-2 h-2 bg-gray-600 rounded-full mt-3 flex-shrink-0"></span>
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
