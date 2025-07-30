import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { expCards } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(() => {
    // Animation pour les cartes de timeline
    gsap.utils.toArray(".timeline-card").forEach((card) => {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: "left left",
        duration: 1.2,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
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
      className="flex-center md:mt-40 mt-20 section-padding xl:px-0 relative"
    >
      {/* Background avec gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-50/30 via-transparent to-pink-50/30"></div>
      
      <div className="w-full h-full md:px-20 px-5 relative z-10">
        <TitleHeader
          title="Les Bénéfices Concrets de SynapsLead®"
        />
        
        <div className="mt-32 relative">
          {/* Timeline centrale moderne */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full">
            <div className="w-full h-full bg-gradient-to-b from-purple-500 via-pink-500 to-indigo-500 rounded-full shadow-lg"></div>
            {/* Points de connexion */}
            <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-lg"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-pink-500 rounded-full shadow-lg"></div>
            <div className="absolute top-3/4 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-indigo-500 rounded-full shadow-lg"></div>
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
                  {/* Phase */}
                  <div className={`w-1/2 ${isLeft ? 'pr-8' : 'pl-8'}`}>
                    <div className="bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                      <div className="expText flex flex-col gap-6">
                        {/* En-tête avec logo et phase */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <img src={card.logoPath} alt="logo" className="w-10 h-10 filter brightness-0 invert" />
                          </div>
                          <div>
                            <div className="text-sm font-medium text-purple-600 mb-1">Phase {index + 1}</div>
                            <h1 className="font-bold text-3xl text-gray-800">{card.title}</h1>
                          </div>
                        </div>
                        
                        {/* Date */}
                        <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 px-4 py-2 rounded-full text-sm font-medium w-fit">
                          <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                          {card.date}
                        </div>
                        
                        {/* Témoignage */}
                        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border-l-4 border-purple-500">
                          <p className="text-gray-700 italic text-lg leading-relaxed">
                            "{card.review}"
                          </p>
                        </div>
                        
                        {/* Bénéfices */}
                        <div>
                          <h3 className="font-bold text-xl text-gray-800 mb-4 flex items-center gap-2">
                            <span className="w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
                            Bénéfices concrets
                          </h3>
                          <ul className="space-y-3">
                            {card.responsibilities.map(
                              (responsibility, idx) => (
                                <li key={idx} className="text-gray-700 font-medium text-lg flex items-start gap-3">
                                  <span className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0"></span>
                                  {responsibility}
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Image */}
                  <div className="w-1/2">
                    <div className="exp-image relative group">
                      <GlowCard card={card}>
                        <div className="relative overflow-hidden rounded-3xl">
                          <img src={card.imgPath} alt="exp-img" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
                          {/* Overlay avec effet glassmorphism */}
                          <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </GlowCard>
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
