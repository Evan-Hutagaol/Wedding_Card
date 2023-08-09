import Hero from "./pages/Hero";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import InfoAcara from "./components/InfoAcara";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (

      <div className="App">
        

        <Hero />
        <Navbar />
        <Home />
        <InfoAcara />
      </div>
    
  );
}

export default App;
