import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
  const counterRef = useRef(null);
  const countersRef = useRef([]);

  useGSAP(() => {
    countersRef.current.forEach((counter, index) => {
      const numberElement = counter.querySelector(".counter-number");
      const item = counterItems[index];

      // Set initial value to 0
      gsap.set(numberElement, { innerText: "0" });

      // Create the counting animation
      gsap.to(numberElement, {
        innerText: item.value,
        duration: 2.5,
        ease: "power2.out",
        snap: { innerText: 1 }, // Ensures whole numbers
        scrollTrigger: {
          trigger: "#counter",
          start: "top center",
        },
        // Add the suffix after counting is complete
        onComplete: () => {
          numberElement.textContent = `${item.value}${item.suffix}`;
        },
      });
    }, counterRef);
  }, []);

  return (
    <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {counterItems.map((item, index) => (
          <div
            key={index}
            ref={(el) => el && (countersRef.current[index] = el)}
            className="modern-card group relative overflow-hidden"
          >
            {/* Fond avec effet glassmorphism */}
            <div className="absolute inset-0 bg-white/20 backdrop-blur-xl border border-white/30 rounded-3xl"></div>
            
            {/* Effet de brillance */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Contenu */}
            <div className="relative z-10 p-8 flex flex-col justify-center items-center text-center">
              <div className="counter-number text-black text-6xl font-bold mb-3 bg-gradient-to-r from-black to-gray-700 bg-clip-text text-transparent">
                0 {item.suffix}
              </div>
              <div className="text-black/80 text-lg font-medium tracking-wide">{item.label}</div>
            </div>
            
            {/* Bordure animée */}
            <div className="absolute inset-0 rounded-3xl p-[1px] bg-gradient-to-r from-transparent via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700">
              <div className="w-full h-full rounded-3xl bg-white/50"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCounter;
