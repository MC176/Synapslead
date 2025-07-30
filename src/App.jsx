import Hero from "./sections/Hero";
import Navbar from "./components/NavBar";
import ShowcaseSection from "./sections/ShowcaseSection";
import FeatureCards from "./sections/FeatureCards";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Books from "./sections/Books";
import Conferences from "./sections/Conferences";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <ShowcaseSection />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Books />
    <Conferences />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
