import { useState, useEffect } from 'react';
import TitleHeader from "./TitleHeader";

const TermsConditionsModal = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Écouter les clics sur le lien Terms & Conditions
    const handleTermsClick = (e) => {
      if (e.target.closest('a[href="#terms-conditions"]')) {
        e.preventDefault();
        setIsVisible(true);
      }
    };

    // Écouter les clics sur l'ensemble du document
    document.addEventListener('click', handleTermsClick);

    return () => {
      document.removeEventListener('click', handleTermsClick);
    };
  }, []);

  const handleClose = () => {
    setIsVisible(false);
  };

  // Fermer avec la touche Escape
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        setIsVisible(false);
      }
    };

    if (isVisible) {
      document.addEventListener('keydown', handleEscape);
      // Empêcher le scroll du body quand le modal est ouvert
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden relative">
        {/* Bouton fermer */}
        <button
          onClick={handleClose}
          className="absolute top-8 right-8 z-50 text-gray-600 hover:text-gray-800 transition-colors bg-white rounded-full p-3 shadow-lg hover:shadow-xl"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Contenu scrollable */}
        <div className="overflow-y-auto max-h-[90vh] p-8">
          <TitleHeader
            title="Conditions Générales d'Utilisation"
            subtitle="SynapsLead - Méthode de leadership féminin"
          />

          <div className="mt-8 space-y-8 text-gray-700 leading-relaxed">
            
            {/* Informations de contact */}
            <div className="p-6 bg-gradient-to-r from-[#d9b8b0]/10 to-[#e7d3cb]/10 rounded-2xl border border-[#d9b8b0]/20">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Informations légales</h3>
              <div className="space-y-2 text-gray-600">
                <p><strong>Éditeur :</strong> SynapsLead</p>
                <p><strong>Fondatrice :</strong> Brigitte Papadopoulos</p>
                <p><strong>Adresse :</strong> Cannes, France</p>
                <p><strong>Email :</strong> contact@synapslead.com</p>
                <p><strong>Site web :</strong> www.synapslead.com</p>
              </div>
            </div>

            {/* Article 1 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">1</span>
                Objet et acceptation
              </h3>
              <p className="mb-4">
                Les présentes Conditions Générales d'Utilisation (CGU) régissent l'utilisation du site web SynapsLead et de ses services d'accompagnement en leadership féminin.
              </p>
              <p>
                En accédant à nos services, vous acceptez sans réserve l'ensemble de ces conditions. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser nos services.
              </p>
            </div>

            {/* Article 2 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">2</span>
                Services proposés
              </h3>
              <p className="mb-4">
                SynapsLead propose des services d'accompagnement personnalisé en leadership féminin, incluant :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Programmes de formation en ligne (12 modules)</li>
                <li>Tests confidentiels de diagnostic de leadership (7 tests)</li>
                <li>Accompagnement individuel en visioconférence</li>
                <li>Ateliers Mental Boost</li>
                <li>Podcasts personnalisés</li>
                <li>Support par chat et email</li>
              </ul>
            </div>

            {/* Article 3 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">3</span>
                Inscription et engagement
              </h3>
              <p className="mb-4">
                L'inscription à nos programmes implique un engagement de votre part à :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Fournir des informations exactes et à jour</li>
                <li>Respecter la confidentialité des contenus partagés</li>
                <li>Participer activement aux sessions programmées</li>
                <li>Respecter les délais de paiement convenus</li>
              </ul>
            </div>

            {/* Article 4 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">4</span>
                Tarifs et modalités de paiement
              </h3>
              <p className="mb-4">
                Les tarifs de nos services sont affichés sur le site et peuvent être modifiés. Le paiement s'effectue :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Par carte bancaire sécurisée</li>
                <li>Par virement bancaire (selon les cas)</li>
                <li>En une ou plusieurs fois selon la formule choisie</li>
              </ul>
              <p className="mt-4">
                <strong>Important :</strong> Aucun remboursement ne sera effectué après le début du programme, sauf cas de force majeure.
              </p>
            </div>

            {/* Article 5 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">5</span>
                Confidentialité et protection des données
              </h3>
              <p className="mb-4">
                Vos données personnelles sont protégées conformément au RGPD. Nous nous engageons à :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Ne pas partager vos informations avec des tiers</li>
                <li>Utiliser vos données uniquement pour votre accompagnement</li>
                <li>Vous permettre d'accéder, modifier ou supprimer vos données</li>
                <li>Conserver vos données pendant la durée nécessaire au service</li>
              </ul>
            </div>

            {/* Article 6 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">6</span>
                Propriété intellectuelle
              </h3>
              <p className="mb-4">
                L'ensemble du contenu de SynapsLead (textes, vidéos, tests, méthodes) est protégé par les droits d'auteur. Il est interdit de :
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Reproduire, distribuer ou commercialiser nos contenus</li>
                <li>Partager les accès avec des tiers</li>
                <li>Utiliser nos méthodes à des fins commerciales</li>
                <li>Modifier ou adapter nos contenus</li>
              </ul>
            </div>

            {/* Article 7 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">7</span>
                Responsabilité et garanties
              </h3>
              <p className="mb-4">
                <strong>Limitation de responsabilité :</strong> Nos services sont fournis "en l'état". Nous ne garantissons pas de résultats spécifiques, car ceux-ci dépendent de votre implication personnelle.
              </p>
              <p className="mb-4">
                <strong>Exclusion de garantie :</strong> Nous ne sommes pas responsables des décisions prises sur la base de nos conseils ou de l'utilisation de nos méthodes.
              </p>
            </div>

            {/* Article 8 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">8</span>
                Résiliation
              </h3>
              <p className="mb-4">
                Vous pouvez résilier votre engagement à tout moment, mais aucun remboursement ne sera effectué pour les services déjà fournis.
              </p>
              <p>
                Nous nous réservons le droit de suspendre ou résilier votre accès en cas de non-respect de ces conditions.
              </p>
            </div>

            {/* Article 9 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">9</span>
                Droit applicable et juridiction
              </h3>
              <p>
                Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
              </p>
            </div>

            {/* Article 10 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                <span className="w-8 h-8 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-full flex items-center justify-center text-white text-sm font-bold">10</span>
                Modifications des conditions
              </h3>
              <p>
                Nous nous réservons le droit de modifier ces conditions à tout moment. Les nouvelles conditions seront publiées sur le site et entreront en vigueur immédiatement.
              </p>
            </div>

            {/* Signature et date */}
            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Dernière mise à jour :</p>
                  <p className="font-semibold text-gray-700">1er janvier 2024</p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-500">SynapsLead</p>
                  <p className="font-semibold text-gray-700">Brigitte, Fondatrice</p>
                </div>
              </div>
            </div>

            {/* Contact pour questions */}
            <div className="p-6 bg-gradient-to-r from-[#d9b8b0]/10 to-[#e7d3cb]/10 rounded-2xl border border-[#d9b8b0]/20">
              <h4 className="font-bold text-gray-800 mb-2">Questions sur ces conditions ?</h4>
              <p className="text-gray-600">
                Contactez-nous à <a href="mailto:contact@synapslead.com" className="text-[#d9b8b0] hover:underline">contact@synapslead.com</a>
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsConditionsModal; 