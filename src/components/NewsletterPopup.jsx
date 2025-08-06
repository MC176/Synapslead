import { useState, useEffect, useRef } from 'react';
import emailjs from "@emailjs/browser";

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(null);
  
  const formRef = useRef(null);

  // Initialiser EmailJS
  useEffect(() => {
    emailjs.init('2rvX7TiM_sBqKr5r9');
  }, []);

  useEffect(() => {
    // Afficher le pop-up après un court délai au chargement de la page
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  const validateForm = () => {
    if (!firstName.trim() || firstName.length < 2) return 'Prénom requis (min. 2 caractères)';
    if (!lastName.trim() || lastName.length < 2) return 'Nom requis (min. 2 caractères)';
    if (!email.trim() || !email.includes('@')) return 'Email valide requis';
    if (!isChecked) return 'Veuillez accepter les conditions';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setErrorSubmit(validationError);
      return;
    }

    setLoading(true);
    setErrorSubmit(null);

    try {
      await emailjs.sendForm(
        'service_30ev33j',
        'template_32xjsax',
        formRef.current,
        '2rvX7TiM_sBqKr5r9'
      );

      setIsSubmitted(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setIsChecked(false);
    } catch (error) {
      setErrorSubmit('Erreur lors de l\'envoi. Veuillez réessayer.');
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style={{ paddingTop: '80px' }}>
        <div className="bg-white rounded-lg shadow-2xl max-w-md w-full p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-2">Inscription réussie !</h3>
          <p className="text-gray-600 mb-6">
            Merci de vous être inscrit à notre newsletter. Vous recevrez bientôt nos actualités.
          </p>
          <button
            onClick={() => {
              setIsSubmitted(false);
              setIsVisible(false);
            }}
            className="bg-[#d9b8b0] text-white px-6 py-2 rounded-md hover:bg-[#e7d3cb] transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    );
  }

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4" style={{ paddingTop: '80px' }}>
      <div className="bg-white rounded-lg shadow-2xl max-w-3xl w-full max-h-[500px] overflow-hidden relative">
        {/* Bouton fermer - déplacé en haut à droite du pop-up */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-10 text-gray-600 hover:text-gray-800 transition-colors bg-white rounded-full p-2 shadow-md"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex">
          {/* Section gauche - Image */}
          <div className="w-1/2 bg-gray-100 relative">
            <img
              src="/images/newsletter-popup.jpg"
              alt="Portrait"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Section droite - Contenu */}
          <div className="w-1/2 p-6 flex flex-col justify-start pt-8">
            {/* Titre principal */}
            <h2 className="text-2xl font-bold text-black mb-2">
              CONFERENCE DU <br /> 18 SEPTEMBRE 2025
            </h2>

            {/* Sous-titre */}
            <p className="text-gray-700 mb-6 text-sm">
              Inscrivez-vous pour faire partie de la première conférence Synaps Lead.
            </p>

            {/* Formulaire */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-3">
              {/* Champs cachés pour EmailJS */}
              <input type="hidden" name="firstName" value={firstName} />
              <input type="hidden" name="lastName" value={lastName} />
              <input type="hidden" name="email" value={email} />
              <input type="hidden" name="message" value="Inscription newsletter - Conférence du 18 septembre 2025" />
              <input type="hidden" name="phone" value="Non renseigné" />
              {/* Champs nom et prénom sur la même ligne */}
              <div className="flex space-x-3">
                <div className="flex-1">
                  <input
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    placeholder="Prénom"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
                <div className="flex-1">
                  <input
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    placeholder="Nom"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                    required
                  />
                </div>
              </div>

              {/* Champ email */}
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre email ici"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  required
                />
              </div>

              {/* Checkbox et politique de confidentialité */}
              <div className="flex items-start space-x-3">
                <input
                  type="checkbox"
                  id="marketing"
                  checked={isChecked}
                  onChange={(e) => setIsChecked(e.target.checked)}
                  className="mt-1 w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                  required
                />
                <label htmlFor="marketing" className="text-xs text-gray-700">
                  Oui, inscrivez-moi aux emails marketing de Synaps Lead.{' '}
                </label>
              </div>

              {/* Affichage des erreurs */}
              {errorSubmit && (
                <div className="text-red-500 text-sm bg-red-50 p-3 rounded-md border border-red-200">
                  {errorSubmit}
                </div>
              )}

              {/* Bouton principal */}
              <button
                type="submit"
                disabled={loading || !firstName || !lastName || !email || !isChecked}
                className="w-full py-2 px-4 border-2 border-[#d9b8b0] bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-black font-bold uppercase hover:from-[#e7d3cb] hover:to-[#d9b8b0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-sm flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Envoi en cours...
                  </>
                ) : (
                  'OUI S\'IL VOUS PLAÎT'
                )}
              </button>

              {/* Lien "Non merci" */}
              <button
                type="button"
                onClick={handleClose}
                className="w-full text-center text-xs text-black underline hover:text-gray-700 transition-colors"
              >
                Non merci
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterPopup; 