import React, {useRef, useEffect, useCallback} from "react";
import {useSpring, animated} from 'react-spring'
import logo from '../assets/logo.png'

export const Modal = ({ showModal, setShowModal }) => {
  showModal
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "unset");

    const modalRef = useRef()
    const animation = useSpring({
        config: { 
            duration: 250
        },
        opacity: showModal ? 1: 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`,
    })

    const closeModal = e => {
        if(modalRef.current === e.target){
            setShowModal(false);
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && showModal){
            setShowModal(false)
        }
    }, [setShowModal, showModal])

    useEffect(() => {
        document.addEventListener('keydown', keyPress);
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

  return showModal ? (
    <div className="modal-video">
    <animated.div style={animation} className="div-animated" ref={modalRef} onClick={closeModal}>    
      <div className="back-modal">
     <img alt="logo" src = {logo} className="logo-modal"></img>
      <button
        className="btn-close waves-effect"
        onClick={() => setShowModal((prev) => !prev)}
      >
        <i class="small material-icons">close</i>
      </button>
        <div className="container-video">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/kh7A88nmwLM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      </animated.div> 
    </div>
  ) : null;
};
