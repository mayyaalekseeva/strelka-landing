import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FeatureSection from "./components/FeatureSection/FeatureSection";
import Footer from "./components/Footer/Footer";
import TestimonialsSection from "./components/TestimonialsSection/TestimonialsSection";

const App = () => (
  <>
    <Navbar />
    <div className="max-w-7xl mx-auto pt-20 px-6">
      <FeatureSection />
      <FeatureSection />
      <FeatureSection />
      <FeatureSection />
      <TestimonialsSection />
      <Footer />
    </div>
  </>
);

export default App;
