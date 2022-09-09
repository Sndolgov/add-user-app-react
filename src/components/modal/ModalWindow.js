import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalWindow(props) {
    const getText = () => {
        return Array.isArray(props.text)
            ? <ul>
                {props.text.map((text, index) => {
                    return <li key={index}>{text}</li>
                })}
            </ul>
            : props.text
    }

    return (
        <>
            <Modal
                show={props.show}
                onHide={props.onClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title style={{color: 'red'}}>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {getText()}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.onClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalWindow