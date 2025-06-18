import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function AddProject() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <button className="btn btn-secondary" onClick={handleShow}>Add New Project + </button>
            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add Project Details</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="row">
                        <div className="col">
                            <label htmlFor="ff">
                                <input type="file" name='' style={{ display: 'none' }} id='ff' />
                                <img src="https://static.thenounproject.com/png/1231023-200.png" alt="" />
                            </label>
                        </div>
                        <div className="col">
                            <input type="text" placeholder='Enter Title' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Description' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Language Used' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Git Repo URL' className='form-control mb-3' />
                            <input type="text" placeholder='Enter Demo URL' className='form-control mb-3' />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary">SAVE</Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default AddProject
