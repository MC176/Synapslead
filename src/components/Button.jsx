/**
 * A reusable CTA button component.
 * When clicked, it scrolls smoothly to the section with ID "counter",
 * with a small offset from the top for better visual placement.
 */

const Button = ({ text, className, id }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault(); // Stop the link from jumping instantly

        const target = document.getElementById(id || "counter"); // Find the section with ID

        // Only scroll if we found the section and an ID is passed in
        // that prevents the contact button from scrolling to the top
        if (target && id) {
          const offset = window.innerHeight * 0.15; // Leave a bit of space at the top

          // Calculate how far down the page we need to scroll
          const top =
            target.getBoundingClientRect().top + window.pageYOffset - offset;

          // Scroll smoothly to that position
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper group relative overflow-hidden rounded-2xl`} // Add base + extra class names
    >
      <div className="cta-button group relative">
        {/* Effet de brillance au hover */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
        
        {/* Cercle de fond animé */}
        <div className="bg-circle" />
        
        {/* Texte */}
        <p className="text relative z-10">{text}</p>
        
        {/* Flèche */}
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="arrow" className="transition-transform duration-300 group-hover:translate-y-1" />
        </div>
        
        {/* Effet de particules */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping"></div>
          <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-white/60 rounded-full animate-ping delay-300"></div>
        </div>
      </div>
    </a>
  );
};

export default Button;
