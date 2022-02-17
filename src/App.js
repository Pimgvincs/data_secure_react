import react from "react";
import Cloud from "./components/Cloud/Cloud";
import Data from "./components/Data/Data";
import Footer from "./components/footer/Footer";
import Hero from "./components/navbar/hero/Hero";
import Navbar from "./components/navbar/Navbar";



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Data/>
      <Cloud />
      <Footer />
    </>
  );
}

export default App;
