import { socialImgs } from "../constants";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="flex flex-col justify-center">
          <a 
            href="#terms-conditions" 
            className="text-black hover:text-[#d9b8b0] transition-colors duration-300 cursor-pointer"
          >
            Conditions Générales
          </a>
        </div>
        <div className="socials">
          {socialImgs.map((socialImg, index) => (
            <a 
              key={index} 
              href={socialImg.link}
              target="_blank"
              rel="noopener noreferrer"
              className="icon hover:scale-110 transition-transform duration-300"
            >
              <img src={socialImg.imgPath} alt={`${socialImg.name} icon`} />
            </a>
          ))}
        </div>
        <div className="flex flex-col justify-center">
          <p className="text-center md:text-end text-black">
            © {new Date().getFullYear()} SynapsLead. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
