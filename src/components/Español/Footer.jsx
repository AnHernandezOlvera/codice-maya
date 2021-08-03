import React from 'react';
import '../../styles/Footer.css'
import logos from '../../assets/logos_Mesa de trabajo 1 1.png'
import { useHistory } from "react-router-dom";




export const Footer = () => {
    let history = useHistory();
    function handlePath(path) {
        history.push(path)

    }

    return (
        <div className="footer">


            <img className="logos__mesa_trabajo" src={logos} alt="Logos Mesa de Trabajo" />
            <button classname="option__footer_button" onClick={() => handlePath('Presentacion')}>Presentación</button>
            <button classname="option__footer_button" onClick={() => handlePath('Codice')}>Codice</button>
            <button classname="option__footer_button" onClick={() => handlePath('Estudios')}>Estudios</button>
            <button classname="option__footer_button" onClick={() => handlePath('Descarga')}>Descarga</button>
            <button classname="option__footer_button" onClick={() => handlePath('Creditos')}>Creditos</button>



        </div>

    )

}
