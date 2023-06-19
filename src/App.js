
import './App.css';
import {BrowserRouter as Router, Link, Routes} from "react-router-dom";


import Navegacion from "./componentes/Navegacion";
import Uno from "./componentes/Uno";
import Dos from "./componentes/Dos";
import Tres from "./componentes/Tres";
import Cuatro from "./componentes/Cuatro";
import Cinco from "./componentes/Cinco";


function App() {
  
  return (
    <Router>
      <div className="container">
      <h1 className="text-center mt-3 mb-3 text-white">Galería</h1>
      </div>

      <Routes path="/Uno" component={Uno} />
      <Routes path="/Dos" component={Dos} />
      <Routes path="/Tres" component={Tres} />
      <Routes path="/Cuatro" component={Cuatro} />
      <Routes path="/Cinco" component={Cinco} />

      <Navegacion/>
      
    </Router>
    
  );
}

export default App;
