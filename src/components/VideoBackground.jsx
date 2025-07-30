import React, { useRef, useEffect } from 'react';

const VideoBackground = ({ 
  videoSrc, 
  className = "", 
  autoPlay = true, 
  loop = true, 
  muted = true,
  playsInline = true,
  style = {},
  poster = null
}) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      // Optimisation pour les performances
      video.playbackRate = 1.0;
      
      // Gestion des erreurs
      video.addEventListener('error', (e) => {
        console.warn('Erreur de lecture vidéo:', e);
      });

      // Gestion du chargement
      video.addEventListener('loadeddata', () => {
        video.style.opacity = '1';
      });
    }
  }, []);

  return (
    <div 
      className={`absolute inset-0 overflow-hidden ${className}`}
      style={style}
    >
      {/* Fallback image si la vidéo ne charge pas */}
      {poster && (
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${poster})` }}
        />
      )}
      
      <video
        ref={videoRef}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        playsInline={playsInline}
        poster={poster}
        className="w-full h-full object-cover transition-opacity duration-1000"
        style={{
          minWidth: '100%',
          minHeight: '100%',
          width: 'auto',
          height: 'auto',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          opacity: 0
        }}
      >
        <source src={videoSrc} type="video/mp4" />
        <source src={videoSrc.replace('.mp4', '.webm')} type="video/webm" />
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
      
      {/* Overlay de fallback pour améliorer la lisibilité */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
    </div>
  );
};

export default VideoBackground; 