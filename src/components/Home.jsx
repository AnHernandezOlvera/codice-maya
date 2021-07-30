import React from 'react';
import '../styles/Home.css';
import {Navbar} from './Navbar'
import {Footer} from './Footer'
import venus from '../assets/venus.jpg'
import venussecond from '../assets/venus2.jpg'


export const Home = () => {
    return (
        <div className="home">
        <Navbar/>
        <div className="home__content">
            <img className="venusimg" src={venus} alt="venus" />
                <h1 className="header__codice">Códice Maya de México</h1>
                <h3 className="header__almanaque">El Almanaque de Venus</h3>
               <div className="home__content_introtext">
                   <p>"Lorem ipsum dolor sit amet, 
                       consectetur adipiscing elit, 
                       sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.
                         Ut enim ad minim veniam, 
                         quis nostrud exercitation ullamco 
                         laboris nisi ut aliquip ex ea
                          commodo consequat. 
                          Duis aute irure dolor in reprehenderit 
                          in voluptate velit esse cillum dolore 
                          eu fugiat nulla pariatur.
                           Excepteur sint occaecat cupidatat
                            non proident, sunt in culpa qui
                             officia deserunt mollit anim id
                              est laborum."</p>
               </div>



                <img className="venusimg__second" src={venussecond} alt="venus" />
                <section className="home__content_codice">

                    <p>El Códice</p>


                </section>

                <section className="home__content_estudios">
                 <p>Estudios de Especialistas</p>
                </section>

                <section className="home__content_estudios">
                 <p>editorial</p>
                </section>

                <Footer/>




            </div>
    
      
               
               
    
            </div>
    )

}

