import React, {useState} from 'react'
import {Menu,MenuItem,Button} from '@material-ui/core'
import ModalPopOver from '../registerPatient/ModalPopOver'


export const MenuOfItems = (props) => {
    const [showModal, setShow] = useState(false)

    function handleShow () { 
        setShow(true)
    }
    const handleClose = () => setShow(false);


    return (
        <div>                                            
            <MenuItem onClick={props.onClick}>VER PERFIL</MenuItem>
            <MenuItem onClick={props.onClick}>VER SINTOMAS</MenuItem>
            <MenuItem onClick={props.onClick}>VER REGISTRO DIARIO</MenuItem>
            <MenuItem color="red"  onClick={handleShow}>ELIMINAR</MenuItem>
            <ModalPopOver
                displayModal={showModal}
                closeModal={handleClose}
            />
        </div>
    )
}



