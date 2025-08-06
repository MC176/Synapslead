import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Phone, Mail, MapPin, Check, Loader2, MessageSquare, X, ArrowRight, Play } from "lucide-react";

import TitleHeader from "../components/TitleHeader";

const Contact = () => {
  // Initialiser EmailJS
  useEffect(() => {
    emailjs.init('2rvX7TiM_sBqKr5r9');
  }, []);

  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    if (errorSubmit) setErrorSubmit(null);
  };

  const validateForm = () => {
    if (!form.firstName.trim() || form.firstName.length < 2) return 'Prénom requis (min. 2 caractères)';
    if (!form.lastName.trim() || form.lastName.length < 2) return 'Nom requis (min. 2 caractères)';
    if (!form.email.trim() || !form.email.includes('@')) return 'Email valide requis';
    if (!form.phone.trim() || form.phone.length < 5) return 'Téléphone requis';
    if (!form.message.trim() || form.message.length < 10) return 'Message requis (min. 10 caractères)';
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
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    } catch (error) {
      setErrorSubmit('Erreur lors de l\'envoi. Veuillez réessayer.');
      console.error("EmailJS Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 bg-gradient-to-br from-[#e7d3cb]/90 to-[#f5e3df]/90"></div>
        <div className="max-w-md mx-auto px-6 text-center relative z-10">
          <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] mb-6 shadow-lg">
              <Check className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Message envoyé !</h3>
            <p className="text-gray-600 mb-6">
              Notre équipe SynapsLead vous recontactera dans les 24h.
            </p>
            <button
              onClick={() => {
                setIsSubmitted(false);
                setShowForm(false);
              }}
              className="text-[#d9b8b0] font-semibold hover:text-[#e7d3cb] transition-colors"
            >
              ← Retour
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="landing-section flex-center section-padding relative">
      {/* Contenu principal */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <TitleHeader
          title="Contactez-nous"
          subtitle="Parlons de votre transformation"
        />
        
        {/* Informations de contact élégantes */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 mb-12">
          <div className="group cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-black/20 hover:shadow-xl transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Téléphone</h3>
              <p className="text-gray-700">+33 66 46 25 77 56</p>
            </div>
          </div>
          
          <div className="group cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-black/20 hover:shadow-xl transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Email</h3>
              <p className="text-gray-700">contact@synapslead.com</p>
            </div>
          </div>
          
          <div className="group cursor-pointer hover:scale-105 transition-all duration-300">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 border border-black/20 hover:shadow-xl transition-all duration-300 shadow-lg">
              <div className="w-12 h-12 bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-black">Localisation</h3>
              <p className="text-gray-700">Paris, France</p>
            </div>
          </div>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => setShowForm(true)}
            className="bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white px-8 py-4 rounded-2xl hover:shadow-2xl focus:ring-4 focus:ring-[#d9b8b0]/20 transition-all duration-300 flex items-center gap-3 font-bold text-lg group"
          >
            <MessageSquare className="w-6 h-6" />
            <span>Nous contacter</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </button>

          <a
            href="https://calendly.com/synapslead"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-[#d9b8b0] border-2 border-[#d9b8b0] px-8 py-4 rounded-2xl hover:bg-[#d9b8b0] hover:text-white focus:ring-4 focus:ring-[#d9b8b0]/20 transition-all duration-300 flex items-center gap-3 font-bold text-lg group"
          >
            <Play className="w-6 h-6" />
            <span>Prendre RDV</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>

      {/* Modal du formulaire */}
      {showForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 pt-24">
          <div className="bg-white rounded-3xl shadow-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto">
            {/* En-tête du modal */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-800">Contactez-nous</h3>
              <button
                onClick={() => setShowForm(false)}
                className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
              >
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            {/* Formulaire */}
            <div className="p-8">
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Champs cachés pour EmailJS */}
                <input type="hidden" name="from_name" value={`${form.firstName} ${form.lastName}`} />
                <input type="hidden" name="reply_to" value={form.email} />
                <input type="hidden" name="message" value={form.message} />
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      placeholder="Votre prénom"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#d9b8b0] focus:border-[#d9b8b0] transition-all duration-200 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      placeholder="Votre nom"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#d9b8b0] focus:border-[#d9b8b0] transition-all duration-200 placeholder-gray-300"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="votre.email@exemple.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#d9b8b0] focus:border-[#d9b8b0] transition-all duration-200 placeholder-gray-300"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="06 12 34 56 78"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#d9b8b0] focus:border-[#d9b8b0] transition-all duration-200 placeholder-gray-300"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Décrivez votre projet de transformation du leadership et vos objectifs..."
                    rows={5}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl outline-none focus:ring-2 focus:ring-[#d9b8b0] focus:border-[#d9b8b0] transition-all duration-200 resize-none placeholder-gray-300"
                  />
                </div>

                {errorSubmit && (
                  <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-xl text-sm">
                    {errorSubmit}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-[#d9b8b0] to-[#e7d3cb] text-white py-4 px-6 rounded-xl hover:shadow-lg focus:ring-4 focus:ring-[#d9b8b0]/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 font-semibold text-lg"
                >
                  {loading ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Envoyer le message</span>
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Contact;
