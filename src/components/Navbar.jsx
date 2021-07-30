import React from 'react';
import '../styles/Navbar.css'
import logo from '../assets/logo-white.png';
import { useHistory } from "react-router-dom";


export const Navbar = () => {
  let history =useHistory();
  function handlePath (path){
      history.push(path);
  }

    return (
        <div className = "navbar">
            <nav className= "option__navbar">
                <img className="logo__codice" onClick={()=>handlePath('/')} src={logo}  alt="Logo Codice Maya"/>
               
              
                <button classname="option__navbar_button" onClick={()=>handlePath('AcercaDe')}>Acerca de</button>
                <button onClick={()=>handlePath('Codice')}>Codice</button>
                <button onClick={()=>handlePath('Estudios')}>Estudios</button>
                <button onClick={()=>handlePath('Descarga')}>Descarga</button>
                <button onClick={()=>handlePath('Creditos')}>Creditos</button>

                <select id="orderSelect" className="option__navbar_selector">
              <option value="english" >EN</option>
              <option value="español" id="ascending">ESP</option>
             
            </select>




                </nav>
        
        
            
        </div>

    )
    
    {/* function DropDrownMenu(){
        return (
            <div className="dropdown">


            </div>

        )

    } */}

}

export default Navbar