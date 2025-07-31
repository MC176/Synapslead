import { ArrowRight } from "lucide-react";

const Button = ({ styles, id, text, icon, onClick }) => (
  <div className={`cta-wrapper group relative overflow-hidden rounded-2xl ${styles}`}>
    <button
      onClick={onClick || (() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }))}
      className="cta-button w-full h-full flex items-center justify-center gap-3 px-8 py-4 bg-black text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 hover:-translate-y-1 relative overflow-hidden group"
    >
      {/* Effet de brillance */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      {/* Particules décoratives */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-2 left-1/4 w-1 h-1 bg-white/30 rounded-full animate-ping"></div>
        <div className="absolute top-4 right-1/3 w-0.5 h-0.5 bg-white/40 rounded-full animate-ping" style={{animationDelay: '0.2s'}}></div>
        <div className="absolute bottom-3 left-1/3 w-0.5 h-0.5 bg-white/30 rounded-full animate-ping" style={{animationDelay: '0.4s'}}></div>
      </div>
      
      <span className="text relative z-10">{text}</span>
      {icon && (
        <div className="arrow-wrapper">
          <ArrowRight className="w-5 h-5" />
        </div>
      )}
    </button>
  </div>
);

export default Button;
