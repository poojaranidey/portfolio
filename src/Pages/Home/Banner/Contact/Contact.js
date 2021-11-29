import React, { useState } from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Contact = ({ name, ...props }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Button variant="primary" onClick={handleShow} className="ms-2">
                Contact
            </Button>
             <Offcanvas show={show} onHide={handleClose} {...props}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Contact form</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <input className="w-100 p-2 my-3" type="text" />
                    <input className="w-100 p-2 my-3" type="email" /><br />
                    <Button>Submit</Button>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default Contact;