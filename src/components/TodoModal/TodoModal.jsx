import React from 'React';
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';

const TodoModal = ({show, 
        onSave,
        onClose, 
        placeHolder='Enter Name',
        heading,
    }) =>{
    return(
        <Modal show={show} onHide={onClose}>
            <Modal.Header closeButton>
                <Modal.Title>{heading}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Label>Name</Form.Label>
                <Form.Control placeholder={placeHolder} />
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={onClose}>
                Close
                </Button>
                <Button variant="primary" onClick={onSave}>
                        Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default TodoModal;