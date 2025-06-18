import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Card style={{ width: '18rem' }}>
        <Card.Img onClick={handleShow} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlWl5eL6nkHFh3DlavM4tzmFZ7p_knh2LiA&s" />
        <Card.Body>
          <Card.Title>Blog App</Card.Title>
        </Card.Body>
      </Card>


      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Project title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row">
            <div className="col">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjlWl5eL6nkHFh3DlavM4tzmFZ7p_knh2LiA&s" className='w-75' alt="" />
            </div>
            <div className="col">
              <h3>Project Title</h3>
              <p>
                <span className='fw-bolder'>Description : </span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ratione nulla blanditiis doloremque molestias neque temporibus, sunt odit optio officiis, repellat quia ipsum beatae iusto facere ab voluptatum, libero doloribus?

              </p>
              <p>
                  <span className='fw-bolder'>Language : </span>
                  HTML,CSS,JS
              </p>
              <div className="d-flex justify-content-between">
                <a href="">
                  <i className="fa-brands fa-square-github fa-xl"></i>
                </a>
                <a href="">
                  <i className="fa-solid fa-link fa-xl"></i>
                </a>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ProjectCard
