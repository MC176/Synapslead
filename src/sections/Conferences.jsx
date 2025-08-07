import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";

const Conferences = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".conference-card",
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2, duration: 1, ease: "power2.out" }
    );
  });

  const conferences = [
    {
      title: "Leadership & Neurosciences",
      date: "15-16 Mars 2024",
      location: "Cannes, France",
      description: "Conférence internationale sur l'application des neurosciences au leadership féminin",
      audience: "Dirigeantes, entrepreneures, managers",
      image: "/images/conference1.png",
      link: "#"
    },
    {
      title: "SynapsLead Masterclass",
      date: "22-23 Avril 2024",
      location: "Monaco",
      description: "Masterclass intensive de 2 jours pour transformer votre leadership",
      audience: "Femmes dirigeantes confirmées",
      image: "/images/conference2.png",
      link: "#"
    },
    {
      title: "Estime de Soi & Autorité",
      date: "10-11 Mai 2024",
      location: "Lyon, France",
      description: "Workshop pratique sur la reconstruction de l'estime de soi",
      audience: "Toutes les femmes en position de leadership",
      image: "/images/conference3.png",
      link: "#"
    }
  ];

  return (
    <section id="conferences" className="landing-section py-20">
      <div className="container mx-auto px-5">
        <TitleHeader
          title="Conférences & Événements"
        />

        <div className="mt-16 max-w-6xl mx-auto">
          {/* Section Conférences */}
          <div className="mb-20">
            <h3 className="text-3xl font-bold text-gray-800 text-center mb-12">
              Prochaines Conférences
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              {conferences.map((conference, index) => (
                <div key={index} className="conference-card group">
                  <div className="bg-white/90 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                    {/* Image de la conférence */}
                    <div className="w-full h-48 bg-gradient-to-br from-[#f5e3df] to-[#e7d3cb] rounded-2xl flex items-center justify-center shadow-lg mb-6 overflow-hidden">
                      <img 
                        src={conference.image} 
                        alt={conference.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Contenu */}
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-800 mb-2">{conference.title}</h4>
                        <div className="flex items-center gap-2 text-[#d9b8b0] font-medium text-sm mb-2">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                          </svg>
                          {conference.date}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600 text-sm">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                          {conference.location}
                        </div>
                      </div>
                      
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {conference.description}
                      </p>

                      <div className="pt-4">
                        <span className="inline-block bg-[#f5e3df] text-[#d9b8b0] px-3 py-1 rounded-full text-xs font-medium">
                          {conference.audience}
                        </span>
                      </div>

                      <a
                        href={conference.link}
                        className="inline-flex items-center gap-2 text-[#d9b8b0] font-semibold hover:text-[#e7d3cb] transition-colors duration-300"
                      >
                        <span>En savoir plus</span>
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section Monaco Image Consulting */}
          <div className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-3xl p-12 text-white">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-4xl font-bold mb-6">Monaco Image Consulting</h3>
                <p className="text-xl mb-8 opacity-90 leading-relaxed">
                Mon espace dédié à l’accompagnement stratégique des femmes dirigeantes.
                C’est ici que la méthode SynapsLead prend vie, dans des parcours sur mesure qui allient transformation intérieure et affirmation extérieure.
                Accompagnement individuel, interventions en entreprise, programmes personnalisés à haute valeur ajoutée.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Accompagnement individuel personnalisé</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Formation en entreprise</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Accompagnement sur mesure</span>
                  </div>
                </div>

                <a
                  href="https://monacoimageconsulting.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-[#d9b8b0] px-8 py-4 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <span>Découvrir Monaco Image Consulting</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              </div>

              <div className="text-center">
                <img 
                  src="/images/Brigitte.png" 
                  alt="Brigitte - Monaco Image Consulting"
                  className="w-96 h-auto rounded-2xl object-contain mx-auto shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Conferences; 