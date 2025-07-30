import VideoBackground from "../../VideoBackground";

const TechIconCardExperience = ({ model }) => {
  return (
    <div className="w-full h-full relative">
      <VideoBackground 
        videoSrc="/images/screen.mp4"
        className="rounded-xl overflow-hidden"
        style={{
          borderRadius: '0.75rem',
          boxShadow: '0 10px 25px rgba(0,0,0,0.15)'
        }}
      />
    </div>
  );
};

export default TechIconCardExperience;
