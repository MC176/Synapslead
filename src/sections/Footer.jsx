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
            <div key={index} className="icon">
              <img src={socialImg.imgPath} alt="social icon" />
            </div>
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
