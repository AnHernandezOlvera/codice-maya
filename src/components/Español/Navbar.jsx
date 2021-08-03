import React from 'react';
import '../../styles/Navbar.css'
import logo from '../../assets/logo-white.png';
import { useHistory, useLocation } from "react-router-dom";



export const Navbar = () => {
  let history =useHistory();
  let location = useLocation();
  function handlePath (path){
      history.push(path);
  }
  const HandleLanguaje = () => {
    switch (location.pathname) {
        case '/' :
            handlePath('/en');
            break;
        case '/Estudios' :
            handlePath('/en/studies');
            break;
        default :
        handlePath('/');
    }
}
    return (
        <div className = "navbar">
            <nav className= "option__navbar">
                <img className="logo__codice" onClick={()=>handlePath('/')} src={logo}  alt="Logo Codice Maya"/>
               
              
                <button classname="option__navbar_button" onClick={()=>handlePath('Presentacion')}>Presentación</button>
                <button onClick={()=>handlePath('Codice')}>Codice Maya de México</button>
                <button onClick={()=>handlePath('Estudios')}>Estudios</button>
                <button onClick={()=>handlePath('ProyectoEditorial')}>Proyecto Editorial</button>
                <button onClick={()=>handlePath('Descarga')}>Descarga</button>
                <button onClick={()=>handlePath('Creditos')}>Creditos</button>

                <select id="orderSelect" className="option__navbar_selector" onChange={()=>HandleLanguaje()}>
                    <option value="es" >ES</option>
                    <option value="en" id="ascending">EN</option>
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