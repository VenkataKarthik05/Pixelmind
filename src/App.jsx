import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Hero from "./Sections/Hero";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Aboutus from "./Pages/AboutUs";
import WhyChooseus from "./components/WhyChooseus";
import SplashCurtain from "./components/loader";
import WhatsAppButton from "./components/Whatsapp"; 

import { Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";

function App() {
  return (
    <SplashCurtain duration={1400}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Services />
              <Process />
              <Results />
              <WhyChooseus />
            </>
          }
        />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      
      {/* Add WhatsApp button here - it will appear on all pages */}
      <WhatsAppButton />
    </SplashCurtain>
  );
}

export default App;