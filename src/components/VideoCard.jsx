import { useRef, useState } from 'react';

const VideoCard = ({ techStackIcon }) => {
  const videoRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current && videoLoaded && !videoError) {
      videoRef.current.play().catch(error => {
        console.error('Erreur lors de la lecture de la vidéo:', error);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  const handleVideoLoad = () => {
    setVideoLoaded(true);
    console.log(`Vidéo chargée: ${techStackIcon.videoPath}`);
  };

  const handleVideoError = (error) => {
    setVideoError(true);
    console.error(`Erreur de chargement de la vidéo ${techStackIcon.videoPath}:`, error);
  };

  return (
    <div
      key={techStackIcon.name}
      className="card-border tech-card overflow-hidden group rounded-2xl relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="tech-card-animated-bg" />
      <div className="tech-card-content relative">
        <div className="tech-icon-wrapper">
          {/* Vidéo (affichée en permanence, en pause par défaut) */}
          <video
            ref={videoRef}
            src={techStackIcon.videoPath}
            className="w-full h-full object-cover rounded-xl"
            muted
            loop
            playsInline
            onLoadedData={handleVideoLoad}
            onError={handleVideoError}
            preload="metadata"
          />
          
          {/* Indicateur de débogage (à retirer en production) */}
          {videoError && (
            <div className="absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded">
              Erreur vidéo
            </div>
          )}
        </div>
        <div className="padding-x w-full">
          <p className="text-black font-medium text-lg">{techStackIcon.name}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoCard; 