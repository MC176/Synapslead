import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import ShowcaseSection from "./sections/ShowcaseSection";
import Experience from "./sections/Experience";
import Tests from "./sections/Tests";
import Books from "./sections/Books";
import Accompagnement from "./sections/Accompagnement";
import Conferences from "./sections/Conferences";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NewsletterPopup from "./components/NewsletterPopup";
import TermsConditionsModal from "./components/TermsConditionsModal";

const App = () => (
  <>
    <NewsletterPopup />
    <Navbar />
            <Hero />
        <ShowcaseSection />
    <Experience />
    <Tests />
    <Accompagnement />
    <Books />
    <Conferences />
    <Contact />
    <Footer />
    <TermsConditionsModal />
  </>
);

export default App;
