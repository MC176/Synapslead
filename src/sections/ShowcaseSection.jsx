import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const AppShowcase = () => {
  const sectionRef = useRef(null);
  const neuroscienceRef = useRef(null);
  const psychologieRef = useRef(null);
  const analyseRef = useRef(null);

  useGSAP(() => {
    // Animation for the main section
    gsap.fromTo(
      sectionRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 }
    );

    // Animations for each video showcase
    const cards = [neuroscienceRef.current, psychologieRef.current, analyseRef.current];

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          delay: 0.3 * (index + 1),
          scrollTrigger: {
            trigger: card,
            start: "top bottom-=100",
          },
        }
      );
    });
  }, []);

  // Fonction pour gérer la lecture automatique des vidéos
  useEffect(() => {
    const observerOptions = {
      threshold: 0.5, // Déclenche quand 50% de la vidéo est visible
      rootMargin: '0px 0px -10% 0px'
    };

    const videoObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const video = entry.target;
        if (entry.isIntersecting) {
          video.play().catch(error => {
            console.log('Erreur de lecture automatique:', error);
          });
        } else {
          video.pause();
        }
      });
    }, observerOptions);

    // Observer toutes les vidéos
    const videos = document.querySelectorAll('.auto-play-video');
    videos.forEach(video => videoObserver.observe(video));

    return () => {
      videos.forEach(video => videoObserver.unobserve(video));
    };
  }, []);

  return (
    <div id="work" ref={sectionRef} className="app-showcase">
      <div className="w-full">
        {/* Titre de la section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-black mb-4">
            Les Fondamentaux de SynapsLead
          </h2>
        </div>
        
        <div className="showcaselayout">
          {/* Première vidéo - Neurosciences */}
          <div ref={neuroscienceRef} className="video-showcase-item">
            <div className="video-container">
              <video
                className="auto-play-video w-full h-full object-cover rounded-xl"
                src="/videos/neuroscience.mp4"
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="video-text-content">
              <h2 className="text-black font-semibold text-xl mb-2">
                Neurophysiologie et Clarté mentale
              </h2>
              <p className="text-black text-base leading-relaxed">
                Optimisez les ressources de votre cerveau et de votre corps pour retrouver une énergie stable et une prise de décision plus fluide.
              </p>
            </div>
          </div>

          {/* Deuxième vidéo - Psychologie appliquée */}
          <div ref={psychologieRef} className="video-showcase-item">
            <div className="video-container">
              <video
                className="auto-play-video w-full h-full object-cover rounded-xl"
                src="/videos/psychologie.mp4"
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="video-text-content">
              <h2 className="text-black font-semibold text-xl mb-2">
                Estime de soi & Autorité intérieure
              </h2>
              <p className="text-black text-base leading-relaxed">
                Ancrez une estime de soi juste et profonde qui ne vacille plus face aux doutes ou aux injonctions extérieures.
              </p>
            </div>
          </div>

          {/* Troisième vidéo - Analyse transgénérationnelle */}
          <div ref={analyseRef} className="video-showcase-item">
            <div className="video-container">
              <video
                className="auto-play-video w-full h-full object-cover rounded-xl"
                src="/videos/analyse-transgenerationnelle.mp4"
                muted
                loop
                playsInline
                preload="metadata"
              />
            </div>
            <div className="video-text-content">
              <h2 className="text-black font-semibold text-xl mb-2">
                Image, Style & Leadership incarné
              </h2>
              <p className="text-black text-base leading-relaxed">
                Révélez une image alignée avec votre posture intérieure grâce à une approche fondée sur le langage non-verbal, la colorimétrie et l'intelligence du style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppShowcase;
