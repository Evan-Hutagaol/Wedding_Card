
import "./App.css";
import Hero from "./pages/Home";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return <div className="App">
    <Hero/>
    <Navbar/>
  </div>;
}

export default App;
