import "./App.css";
import { Home } from "./components/Español/Home";
import  Presentacion from "./components/Español/Presentacion"
import Codice from "./components/Español/Codice"
import Estudios from "./components/Español/Estudios"
import Descarga from "./components/Español/Descarga"
import Creditos from "./components/Español/Creditos"
import ProyectoEditorial from "./components/Español/ProyectoEditorial"



import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

      <Route path="/presentacion">
          <Presentacion/>
        </Route> 

        <Route path="/Codice">
          <Codice/>
        </Route>

        <Route path="/estudios">
          <Estudios/>
        </Route>

        <Route path="/Descarga">
          <Descarga/>
        </Route>

        <Route path="/Creditos">
          <Creditos/>
        </Route>


        <Route path="/ProyectoEditorial">
          <ProyectoEditorial/>
        </Route>


      </Switch>
    </Router>
  );
}

export default App;
