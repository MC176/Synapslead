import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import Books from "./sections/Books";
import Conferences from "./sections/Conferences";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import NewsletterPopup from "./components/NewsletterPopup";

const App = () => (
  <>
    <NewsletterPopup />
    <Navbar />
    <Hero />
    <FeatureCards />
    <ShowcaseSection />
    <Experience />
    <Books />
    <Conferences />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
