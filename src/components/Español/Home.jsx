import React, { useEffect } from "react";
import "../../styles/Home.css";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import Button from "./Button";
import venus from "../../assets/venus.jpg";
import venussecond from "../../assets/venus2.jpg";
import codice from "../../assets/codice_02.png";
import especialistas from "../../assets/expertos_Mesa de trabajo 1 copia 1.jpg";
import M from "materialize-css";

export const Home = () => {
  useEffect(() => {
    let element = document.querySelectorAll(".parallax");
    M.Parallax.init(element);
  });
  return (
    <div className="home">
      <Navbar />
      <div className="container-back">
        <div className="parallax-container section-parallax">
          <div className="parallax flex-box">
            <img alt="venus" src={venus} />
            <h1 className="header__codice">
              Códice Maya
              <br />
              de México
            </h1>
            <h3 className="header__almanaque">El Almanaque de Venus</h3>
          </div>
        </div>
      </div>

      <div className="flex-box home__content_introtext">
        <p className="top-line">
          El Códice Maya de México es el documento <br />
          legible conservado más antiguo de la <br />
          civilización mesoamericana, y el más <br />
          antiguo de américa.
        </p>
      </div>
      <div className="container-back">
        <div className="parallax-container section-parallax">
          <div className="parallax flex-box">
            <img src={venussecond} alt="venus" />
          </div>
        </div>
      </div>

      <section className="home__content_codice row">
        <div className="home__content_codice_img col s12 m6">
          <img className="codiceimg" src={codice} alt="Sobre el Códice" />
        </div>

        <div className="home__content_codice_text flex-box col s12 m6">
        <div>
          <h3 className="title-section-left "top-line>El Códice Maya <br /> de México</h3>
          <p>
            Descubre el documento más antiguo de América de la mano de
            especialistas que describen la importancia de cultural del códice,
            que a través de sus extraordinarias láminas registran
            sistemáticamente los movimientos del planeta Venus como fenómeno
            astronómico recurrente y observable
          </p>
          <Button />
          </div>
        </div>
      </section>

      <section className="home__content_estudios row">
                   <div className=" box-text flex-box col s12 m5">
                       <div>
                       <h3 className="title-section-left">Estudios de Especialistas</h3>

                    <p>Alejandra Moreno Toscano, Baltazar Brito Guadarrama, 
                        Erik Velásquez García, John B. Carlson,
                         Ricardo F. Vila Freyer y Esther Orozco escribieron 
                         los ensayos que acompañan esta edición sobre el 
                         “Códice Maya de México. Almanaque de Venus”,</p>

                    <Button />
                    </div>
                    </div> 

                    <div className="gallery-researchers col s12 m7">
                    <img src={especialistas} alt="Especialistas" className="responsive-img" />

                        
                    </div>
                </section>



      {/* <div className="home__content" >
                <img className="venusimg" src={venus} alt="venus" />
                <h1 className="header__codice">Códice Maya de México</h1>
                <h3 className="header__almanaque">El Almanaque de Venus</h3>
                <div className="home__content_introtext">
                      <p> 
El Códice Maya de México es el documento legible
 conservado más antiguo de la civilización
  mesoamericana, y el más antiguo de américa.</p>
                </div>



                <img className="venusimg__second" src={venussecond} alt="venus" />
                <section className="home__content_codice">

                    <h1>El Códice</h1>
                    <div className="home__content_codice_img">
                    <img className="codiceimg" src={codice} alt="Sobre el Códice" />
                    </div>

                    <div className="home__content_codice_text">
                        
                        <p></p>Descubre el documento más antiguo de América 
                            de la mano de especialistas que describen la importancia 
                            de cultural del códice, que a través de sus extraordinarias
                             láminas registran sistemáticamente los movimientos del planeta 
                            Venus como fenómeno astronómico recurrente y observable.</p>
                        <Button />

                    </div>
                </section>

                <section className="home__content_estudios">
                    <h1>Estudios de Especialistas</h1>

                    <p>Alejandra Moreno Toscano, Baltazar Brito Guadarrama, 
                        Erik Velásquez García, John B. Carlson,
                         Ricardo F. Vila Freyer y Esther Orozco escribieron 
                         los ensayos que acompañan esta edición sobre el 
                         “Códice Maya de México. Almanaque de Venus”,</p>

                    <Button />
                </section>

                <section className="home__content_editorial">
                    <p>editorial</p>


                </section>

                




            </div> */}

      <Footer />
    </div>
  );
};
