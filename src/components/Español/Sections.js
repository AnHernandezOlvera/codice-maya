import React, {useEffect} from 'react';
import M from 'materialize-css';

import venus  from '../../assets/venus.jpg';
import venus2 from '../../assets/venus2.jpg';
export const Sections = () => {
    useEffect(()=> {
        let element = document.querySelectorAll(".parallax")
        M.Parallax.init(element)
    })
    return (
        <div className="container">
            <div className="parallax-container">
                <div className="parallax">
                    <img alt="venus" src={venus}/>
                </div>
            </div>
            <div className="parallax-container">
                <div className="parallax">
                    <img alt="venus" src={venus2}/>
                </div>
            </div>
        </div>
    )
}
