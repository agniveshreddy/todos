import React, { PureComponent } from 'React';
import Modal from 'react-bootstrap/Modal'; 
import Form from 'react-bootstrap/Form'; 
import Button from 'react-bootstrap/Button';
import { render } from '@testing-library/react';

class TodoModal extends PureComponent {
    constructor(props) {
        super(props);
        this.onChange =this.onChange.bind(this);
        this.state={
            userName: '',
        }
    }
    onChange(e){
        this.setState({userName:e.target.value});
    }
    onSave(modalName){
        const {userName} = this.state;
        this.props.onSave(modalName, userName);
    }
    render(){
        const {
            show, 
            onClose, 
            placeHolder,
            heading,
            modalName,
        } = this.props;
        return(
            <Modal show={show} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{heading}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder={placeHolder} onChange={this.onChange}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onClose}>
                    Close
                    </Button>
                    <Button variant="primary" onClick={this.onSave.bind(this,modalName)}>
                            Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default TodoModal;