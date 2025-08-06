import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import TitleHeader from "../components/TitleHeader";

gsap.registerPlugin(ScrollTrigger);

const Tests = () => {
  useGSAP(() => {
    // Animation pour les tests
    gsap.fromTo(
      ".test-item",
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, stagger: 0.15, duration: 1, ease: "power2.out" }
    );

    // Animation pour les icônes
    gsap.fromTo(
      ".test-icon",
      { scale: 0, rotation: -180 },
      { scale: 1, rotation: 0, stagger: 0.1, duration: 0.8, ease: "back.out(1.7)" }
    );
  }, []);

  const tests = [
    {
      number: "01",
      title: "Le Grand Test SynapsLead™",
      description: "Forces, archétype, valeur, canal sensoriel",
      icon: "🧠",
      gradient: "from-rose-50 to-rose-200"
    },
    {
      number: "02", 
      title: "Cartographie émotionnelle",
      description: "Identifier et réguler vos émotions dominantes",
      icon: "🗺️",
      gradient: "from-rose-100 to-rose-300"
    },
    {
      number: "03",
      title: "Estime de soi & confiance", 
      description: "Évaluer et renforcer votre fondation intérieure",
      icon: "💎",
      gradient: "from-rose-200 to-rose-400"
    },
    {
      number: "04",
      title: "Croyances limitantes & transgénérationnelles",
      description: "Situations récurrentes et transmissions inconscientes",
      icon: "🔍",
      gradient: "from-rose-300 to-rose-500"
    },
    {
      number: "05",
      title: "Test psycho-neuro-nutritionnel",
      description: "Optimiser votre alimentation pour votre cerveau",
      icon: "🥗",
      gradient: "from-rose-400 to-rose-600"
    },
    {
      number: "06",
      title: "Test de branding personnel",
      description: "Définir votre signature identitaire unique",
      icon: "✨",
      gradient: "from-rose-500 to-rose-700"
    },
    {
      number: "07",
      title: "Test d'étude de style",
      description: "Morphologie, colorimétrie, signature visuelle",
      icon: "👗",
      gradient: "from-rose-600 to-rose-800"
    }
  ];

  return (
    <section id="tests" className="landing-section py-32 relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container mx-auto px-5 relative z-10">
        <TitleHeader
          title="7 Tests Confidentiels"
        />

        <div className="mt-24 max-w-5xl mx-auto">
          {/* Liste des tests - Design moderne */}
          <div className="space-y-6">
            {tests.map((test, index) => (
              <div 
                key={index} 
                className="test-item group relative"
              >
                <div className="bg-white/90 backdrop-blur-md rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden">
                  
                  {/* Fond dégradé subtil */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${test.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-500`}></div>
                  
                  <div className="relative z-10 flex items-center gap-8">
                    {/* Numéro et icône */}
                    <div className="flex items-center gap-6">
                      <div className="test-icon w-16 h-16 bg-gradient-to-r from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center text-2xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                        {test.icon}
                      </div>
                      <div className="text-4xl font-black text-gray-300 group-hover:text-gray-400 transition-colors duration-300">
                        {test.number}
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-[#d9b8b0] transition-colors duration-300">
                        {test.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {test.description}
                      </p>
                    </div>

                    {/* Indicateur de confidentialité */}
                    <div className="flex items-center gap-2 text-sm text-gray-400 group-hover:text-gray-500 transition-colors duration-300">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      <span className="font-medium">Confidentiel</span>
                    </div>

                    {/* Flèche */}
                    <div className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* Ligne de progression */}
                  <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-gray-200 to-gray-300 rounded-b-2xl w-full">
                    <div className={`h-full bg-gradient-to-r ${test.gradient} rounded-b-2xl transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-700`}></div>
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

export default Tests; 