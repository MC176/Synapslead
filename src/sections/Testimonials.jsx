import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import GlowCard from "../components/GlowCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="landing-section flex-center section-padding relative">

      
      <div className="w-full h-full md:px-10 px-5 relative z-10">
        <TitleHeader
          title="Ce que disent les femmes qui ont suivi SynapsLead"
        />

        {/* Statistiques de satisfaction améliorées */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-12 bg-white/90 backdrop-blur-md rounded-3xl p-10 shadow-2xl border border-white/30">
            <div className="text-center group">
              <div className="text-5xl font-bold text-[#d9b8b0] mb-2 group-hover:scale-110 transition-transform duration-300">98%</div>
              <div className="text-sm text-gray-600 font-medium">Satisfaction</div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full mx-auto mt-3"></div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-[#d9b8b0] mb-2 group-hover:scale-110 transition-transform duration-300">12</div>
              <div className="text-sm text-gray-600 font-medium">Mois de suivi</div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full mx-auto mt-3"></div>
            </div>
            <div className="w-px h-16 bg-gray-300"></div>
            <div className="text-center group">
              <div className="text-5xl font-bold text-[#d9b8b0] mb-2 group-hover:scale-110 transition-transform duration-300">500+</div>
              <div className="text-sm text-gray-600 font-medium">Femmes accompagnées</div>
              <div className="w-16 h-1 bg-gradient-to-r from-[#e7d3cb] to-[#d9b8b0] rounded-full mx-auto mt-3"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-16">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="group relative"
              style={{
                animationDelay: `${index * 0.1}s`,
                animation: 'fadeInUp 0.8s ease-out forwards'
              }}
            >
              <GlowCard card={testimonial} index={index}>
                <div className="bg-white/95 backdrop-blur-md rounded-3xl p-8 shadow-xl border border-white/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">
                  {/* En-tête avec photo et infos */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative">
                      <img 
                        src={testimonial.imgPath} 
                        alt={testimonial.name}
                        className="w-16 h-16 rounded-2xl object-cover shadow-lg group-hover:scale-110 transition-transform duration-300"
                      />
                      {/* Badge de vérification */}
                      <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center shadow-lg">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-gray-800 text-lg group-hover:text-[#d9b8b0] transition-colors duration-300">{testimonial.name}</p>
                      <p className="text-[#d9b8b0] font-medium">{testimonial.mentions}</p>
                    </div>
                  </div>
                  
                  {/* Témoignage */}
                  <div className="relative mb-6">
                    {/* Guillemets décoratifs */}
                    <div className="absolute -top-2 -left-2 text-4xl text-[#f5e3df] font-serif">"</div>
                    <p className="text-gray-700 leading-relaxed text-lg relative z-10 group-hover:text-gray-800 transition-colors duration-300">
                      {testimonial.review}
                    </p>
                    <div className="absolute -bottom-2 -right-2 text-4xl text-[#f5e3df] font-serif">"</div>
                  </div>
                  
                  {/* Note avec étoiles */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="text-gray-600 font-semibold">5.0/5</span>
                  </div>
                  
                  {/* Indicateur de transformation */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-center justify-between text-sm mb-3">
                      <span className="text-gray-600 font-medium">Transformation</span>
                      <span className="text-[#d9b8b0] font-bold">100%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] h-2 rounded-full transition-all duration-1000 ease-out group-hover:w-full"
                        style={{ width: '100%' }}
                      ></div>
                    </div>
                    <div className="text-xs text-gray-500 mt-2 text-center">
                      Résultats obtenus en 6 mois
                    </div>
                  </div>
                </div>
              </GlowCard>
            </div>
          ))}
        </div>
        
        {/* Mention d'anonymisation */}
        <div className="text-center mt-12">
          <p className="text-gray-500 text-sm italic">
            * Les noms et photos ont été anonymisés pour préserver la confidentialité
          </p>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
