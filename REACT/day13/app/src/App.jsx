import React from "react";
import Navbar from "./components/Navbar";
import Section from "./components/Section";
import Footer from "./components/Footer";
import "./App.css";
import Section2 from "./components/Section2";
const App = () => {
  return (
    <div>
      <Navbar />
      <Section />
      <Section2 />
      <Footer />
    </div>
  );
};

export default App;
