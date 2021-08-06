import React from 'react'
import styled from 'styled-components'

export const Modal = ({showModal, setShowModal}) => {
    return ( showModal ? 
        <div className="modal-video">
            <h1>Modal</h1>
        </div>
        : null

    )
}
