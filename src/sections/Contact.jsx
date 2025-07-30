import { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { Send, Phone, Mail, MapPin, Check, Loader2, ChevronDown, Search } from "lucide-react";

import TitleHeader from "../components/TitleHeader";
import ContactExperience from "../components/models/contact/ContactExperience";

// Liste des sujets pour SynapsLead®
const subjects = [
  { value: "", label: "Votre demande concerne..." },
  { value: "decouverte", label: "Découvrir SynapsLead®" },
  { value: "programme", label: "Programme complet" },
  { value: "coaching", label: "Coaching individuel" },
  { value: "entreprise", label: "Formation entreprise" },
  { value: "autre", label: "Autre demande" }
];

const Contact = () => {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorSubmit, setErrorSubmit] = useState(null);
  const [focusedField, setFocusedField] = useState(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    subject: "",
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
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      );

      setIsSubmitted(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        subject: "",
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
      <section id="contact" className="flex-center section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-transparent to-purple-50/30"></div>
        <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
          <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/30">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 mb-8 shadow-lg">
              <Check className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-4xl font-bold text-gray-800 mb-6">Message envoyé avec succès !</h3>
            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Merci pour votre message. Notre équipe SynapsLead® vous recontactera dans les 24h.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors flex items-center gap-2 mx-auto"
            >
              <span>← Envoyer un autre message</span>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="flex-center section-padding relative">
      {/* Background avec gradient subtil */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/30 via-transparent to-purple-50/30"></div>
      
      <div className="w-full h-full md:px-10 px-5 relative z-10">
        <TitleHeader
          title="Contactez-nous"
          sub="💬 Parlons de votre projet"
        />
        
        {/* Informations de contact modernisées */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-8 bg-white/80 backdrop-blur-md rounded-3xl p-8 shadow-lg border border-white/30">
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Téléphone</div>
                <div className="font-semibold">+33 1 23 45 67 89</div>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Email</div>
                <div className="font-semibold">contact@synapslead.com</div>
              </div>
            </div>
            <div className="w-px h-12 bg-gray-300"></div>
            <div className="flex items-center gap-3 text-gray-700">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Localisation</div>
                <div className="font-semibold">Paris, France</div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid-12-cols mt-16">
          <div className="xl:col-span-5">
            <div className="bg-white/90 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/30">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Sujet */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Sujet de votre demande
                  </label>
                  <select
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    className="w-full px-6 py-4 bg-white/80 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 outline-none transition-all duration-300 text-gray-700 font-medium"
                  >
                    {subjects.map((subject) => (
                      <option key={subject.value} value={subject.value}>
                        {subject.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Nom et Prénom */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={form.firstName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('firstName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Votre prénom"
                      className={`w-full px-6 py-4 bg-white/80 border rounded-2xl outline-none transition-all duration-300 font-medium ${
                        focusedField === 'firstName' 
                          ? 'ring-2 ring-purple-500 border-purple-500 bg-white shadow-lg' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    />
                  </div>
                  <div className="relative">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Nom *
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={form.lastName}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('lastName')}
                      onBlur={() => setFocusedField(null)}
                      placeholder="Votre nom"
                      className={`w-full px-6 py-4 bg-white/80 border rounded-2xl outline-none transition-all duration-300 font-medium ${
                        focusedField === 'lastName' 
                          ? 'ring-2 ring-purple-500 border-purple-500 bg-white shadow-lg' 
                          : 'border-gray-200 hover:border-purple-300'
                      }`}
                    />
                  </div>
                </div>
                
                {/* Email */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('email')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="votre.email@exemple.com"
                    className={`w-full px-6 py-4 bg-white/80 border rounded-2xl outline-none transition-all duration-300 font-medium ${
                      focusedField === 'email' 
                        ? 'ring-2 ring-purple-500 border-purple-500 bg-white shadow-lg' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  />
                </div>
                
                {/* Téléphone */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="06 12 34 56 78"
                    className={`w-full px-6 py-4 bg-white/80 border rounded-2xl outline-none transition-all duration-300 font-medium ${
                      focusedField === 'phone' 
                        ? 'ring-2 ring-purple-500 border-purple-500 bg-white shadow-lg' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Votre message *
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Décrivez votre projet de transformation du leadership et vos objectifs..."
                    rows={5}
                    className={`w-full px-6 py-4 bg-white/80 border rounded-2xl outline-none transition-all duration-300 resize-none font-medium ${
                      focusedField === 'message' 
                        ? 'ring-2 ring-purple-500 border-purple-500 bg-white shadow-lg' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  />
                </div>
                
                {/* Message d'erreur */}
                {errorSubmit && (
                  <div className="bg-red-50 border border-red-200 text-red-600 p-4 rounded-2xl text-sm font-medium">
                    {errorSubmit}
                  </div>
                )}

                {/* Bouton d'envoi */}
                <div className="pt-6">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-5 px-8 rounded-2xl hover:shadow-xl focus:ring-4 focus:ring-purple-500/20 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 font-bold text-lg group"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <span>Découvrir SynapsLead®</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="xl:col-span-7 min-h-96">
            <div className="bg-white/20 backdrop-blur-sm w-full h-full hover:cursor-grab rounded-3xl overflow-hidden border border-white/30 shadow-xl">
              <ContactExperience />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
