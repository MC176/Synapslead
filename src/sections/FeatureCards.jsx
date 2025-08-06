import { abilities } from "../constants";
import TitleHeader from "../components/TitleHeader";

const FeatureCards = () => (
  <section className="landing-section w-full padding-x-lg py-20">
    <TitleHeader
      title="Les Fondamentaux de SynapsLead"
    />
    
    <div className="mx-auto grid-3-cols mt-16">
      {abilities.map(({ imgPath, title, desc }, index) => (
        <div
          key={title}
          className="group relative overflow-hidden rounded-3xl p-8 flex flex-col gap-6 bg-white/95 backdrop-blur-md border border-black/20 shadow-lg hover:shadow-2xl transition-all duration-700 hover:-translate-y-2"
          style={{
            animationDelay: `${index * 0.2}s`,
            animation: 'fadeInUp 0.8s ease-out forwards'
          }}
        >
          {/* Gradient de fond animé */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/5 via-gray-800/5 to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
          
          {/* Bordure animée */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-black via-gray-800 to-black opacity-0 group-hover:opacity-10 transition-opacity duration-700"></div>
          
          <div className="relative z-10">
            {/* Icône avec effet moderne */}
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-black shadow-lg group-hover:shadow-xl transition-all duration-500 group-hover:scale-110">
              <img src={imgPath} alt={title} className="w-8 h-8 filter brightness-0 invert" />
            </div>
          </div>
          
          <div className="relative z-10 flex-1">
            <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-gray-800 transition-colors duration-500">
              {title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-500">
              {desc}
            </p>
          </div>
          
          {/* Indicateur de progression */}
          <div className="relative z-10">
            <div className="w-full h-1 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-black to-gray-800 rounded-full transition-all duration-1000 ease-out"
                style={{ width: '0%' }}
                onMouseEnter={(e) => {
                  e.target.style.width = '100%';
                }}
                onMouseLeave={(e) => {
                  e.target.style.width = '0%';
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
    
    {/* Call-to-action */}
    <div className="text-center mt-16">
      <p className="text-gray-600 text-lg mb-6 max-w-2xl mx-auto">
        Chaque fondamental s'appuie sur des fondements scientifiques solides et des protocoles éprouvés.
      </p>
      <button className="px-8 py-4 bg-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
        Découvrir la méthode
      </button>
    </div>
  </section>
);

export default FeatureCards;