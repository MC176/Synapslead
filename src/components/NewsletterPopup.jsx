import { useState, useEffect } from 'react';

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isChecked, setIsChecked] = useState(false);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && isChecked) {
      // Ici vous pouvez ajouter la logique pour envoyer l'email
      console.log('Formulaire soumis:', { firstName, lastName, email });
      setIsVisible(false);
    }
  };

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
            <form onSubmit={handleSubmit} className="space-y-3">
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

              {/* Bouton principal */}
              <button
                type="submit"
                disabled={!firstName || !lastName || !email || !isChecked}
                className="w-full py-2 px-4 border-2 border-[#d9b8b0] bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-black font-bold uppercase hover:from-[#e7d3cb] hover:to-[#d9b8b0] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed rounded-md text-sm"
              >
                OUI S'IL VOUS PLAÎT
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