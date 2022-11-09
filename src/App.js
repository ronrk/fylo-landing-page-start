import React from "react";
import Navbar from "./components/Navbar";
import HeaderSection from "./components/HeaderSection";
import AboutUsSection from "./components/AboutUsSection";
import GetStartedSection from "./components/GetStartedSection";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeaderSection />
        <AboutUsSection />
        <GetStartedSection />
        <Footer />
      </main>
    </>
  );
};

export default App;
