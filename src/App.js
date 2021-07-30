import "./App.css";
import { Home } from "./components/Home";
import  AcercaDe from "./components/AcercaDe"
import Codice from "./components/Codice"
import Estudios from "./components/Estudios"
import Descarga from "./components/Descarga"
import Creditos from "./components/Creditos"


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>

      <Route path="/acercade">
          <AcercaDe/>
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



      </Switch>
    </Router>
  );
}

export default App;
