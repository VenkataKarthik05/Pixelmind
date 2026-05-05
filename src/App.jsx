import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Hero from "./Sections/Hero";
import Results from "./components/Results";
import Footer from "./components/Footer";
import Aboutus from "./Pages/About Us";
import WhyChooseus from "./components/WhyChooseus";
import SplashCurtain from "./components/loader";

import { Routes, Route } from "react-router-dom";
import Portfolio from "./Pages/Portfolio";

function App() {
  return (
    <SplashCurtain duration={1800}>
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
      </Routes>
      <Footer />
    </SplashCurtain>
  );
}

export default App;