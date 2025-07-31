import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import TitleHeader from "../components/TitleHeader";
import VideoCard from "../components/VideoCard";
import { techStackImgs } from "../constants";

const TechStack = () => {
  // Animate the tech cards in the skills section
  useGSAP(() => {
    // This animation is triggered when the user scrolls to the #skills wrapper
    // The animation starts when the top of the wrapper is at the center of the screen
    // The animation is staggered, meaning each card will animate in sequence
    // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
    gsap.fromTo(
      ".tech-card",
      {
        // Initial values
        y: 50, // Move the cards down by 50px
        opacity: 0, // Set the opacity to 0
      },
      {
        // Final values
        y: 0, // Move the cards back to the top
        opacity: 1, // Set the opacity to 1
        duration: 1, // Duration of the animation
        ease: "power2.inOut", // Ease of the animation
        stagger: 0.2, // Stagger the animation by 0.2 seconds
        scrollTrigger: {
          trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
          start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
        },
      }
    );
  });

  return (
    <div id="skills" className="landing-section flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="L'Approche SynapsLead®"
        />
        <div className="tech-grid">
          {/* Cartes avec vidéos au survol */}
          {techStackImgs.map((techStackIcon) => (
            <VideoCard key={techStackIcon.name} techStackIcon={techStackIcon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
