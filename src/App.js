import "./App.css";
import ClassSection from "./Components/ClassSection";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import TitleSection from "./Components/TitleSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <TitleSection />
      <ClassSection />
      <Footer />
    </div>
  );
}

export default App;
