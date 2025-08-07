import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";

const Accompagnement = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".formule-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
    );
  });

  const formules = [
    {
      type: "Classique",
      description: "Pour débuter votre transformation de leadership",
      price: "1200€",
      features: [
        "12 modules complets (accès à vie)",
        "3 RDV visio B2B",
        "1 atelier Mental Boost",
        "1 podcast personnalisé",
        "Cours imprimables",
        "Accompagnement par chat (shopping, image, retours en visio)"
      ],
      popular: false
    },
    {
      type: "VIP",
      description: "Pour un accompagnement personnalisé",
      price: "2400€",
      features: [
        "12 modules complets",
        "6 RDV visio B2B",
        "2 ateliers Mental Boost",
        "2 podcasts personnalisés",
        "Accompagnement visio en shopping",
        "Cours imprimables",
        "Chat privé & feedbacks"
      ],
      popular: true
    },
    {
      type: "VIP+ Sur-mesure",
      description: "Pour une transformation complète et sur-mesure",
      price: "4280€",
      features: [
        "12 modules complets",
        "14 RDV visio B2B",
        "4 ateliers Mental Boost",
        "3 podcasts personnalisés",
        "3 caméras embarquées",
        "Cours imprimables",
        "Livres offerts & cours imprimables",
      ],
      popular: false
    }
  ];

  return (
    <section id="accompagnement" className="landing-section py-24 relative overflow-hidden">
      <div className="container mx-auto px-5 relative z-10">
        <TitleHeader
          title="Formules d'Accompagnement"
          subtitle="Choisissez la formule qui correspond à vos besoins"
        />

        <div className="mt-20 max-w-7xl mx-auto">
          {/* Formules Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {formules.map((formule, index) => (
              <div key={index} className="formule-card group relative">
                {/* Popular Badge - Positionné au-dessus de la carte */}
                {formule.popular && (
                  <div className="absolute -top-8 left-1/3 transform -translate-x-1/2 z-10">
                    <div className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white px-4 py-2 rounded-none text-xs font-bold shadow-lg">
                      82% CHOISISSENT CE PLAN
                    </div>
                  </div>
                )}
                
                <div className={`bg-white rounded-none p-8 shadow-lg border-2 transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
                  formule.popular 
                    ? 'border-[#d9b8b0] shadow-[#d9b8b0]/20' 
                    : 'border-gray-200 hover:border-gray-300'
                }`}>
                  {/* Header */}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">
                      {formule.type}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">
                      {formule.description}
                    </p>
                    <div className="text-4xl font-bold text-gray-800 mb-2">
                      {formule.price}
                    </div>
                    <div className="text-sm text-gray-500">
                      Accompagnement complet
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-4 mb-8">
                    {formule.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center mt-0.5">
                          <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700 text-sm leading-relaxed">{feature}</p>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <a 
                    href="#contact"
                    className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 hover:-translate-y-1 group block ${
                      formule.popular
                        ? 'bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white hover:from-[#e7d3cb] hover:to-[#d9b8b0]'
                        : 'bg-white text-gray-800 border-2 border-gray-300 hover:border-gray-400'
                    }`}>
                    <span className="flex items-center justify-center gap-2">
                      Commencer maintenant
                      <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Accompagnement; 