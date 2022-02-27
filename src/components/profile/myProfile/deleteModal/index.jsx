import React from 'react'
import { Button, Modal, ModalBody, ModalFooter } from 'reactstrap';
import './deleteModal.scss'

const DeleteProfileModal = ({ open, handleYes, handleNo }) => {
    return (
        <Modal isOpen={open} toggle={() => handleNo()}>
            <ModalBody>
                Do you really want to Delete?
            </ModalBody>
            <ModalFooter>
                <Button onClick={() => handleYes()}>Yes</Button>{' '}
                <Button onClick={() => handleNo()}>No</Button>
            </ModalFooter>
        </Modal>
    )
}

export default DeleteProfileModal