import VideoBackground from "../../VideoBackground";

const ContactExperience = () => {
  return (
    <div className="w-full h-full relative">
      <VideoBackground 
        videoSrc="/public/videos/video0.mp4"
        className="rounded-2xl overflow-hidden"
        style={{
          borderRadius: '1rem',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
        }}
      />
    </div>
  );
};

export default ContactExperience;
