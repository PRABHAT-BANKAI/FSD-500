import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Section from "./components/Section";

const App = () => {
  return (
    <div>
      {/* <h1 className="heading-1">Hello world</h1>
      <h2>heading 2</h2>
      <h3>heading 3</h3> */}
      <Navbar />
      <Navbar />
      <Section />
      <Section />
      <Footer />
    </div>
  );
};

export default App;
