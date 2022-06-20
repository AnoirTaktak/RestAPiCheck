import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch } from 'react-redux';
import { deluser } from '../redux/actions';
import UpdateUser from './UpdateUser';


const UserCard = ({user}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const dispatch = useDispatch();
 
  const del = () => {
    dispatch(deluser(user._id));
  }
  return (
    <div> 
    <Card className="text-center">
      <Card.Header></Card.Header>
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>
         <h3> Options :</h3>
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
        Update
      </Button>
        <Button variant="primary" onClick={del}>delete</Button>
      </Card.Body>
      <Card.Footer className="text-muted"> <h3> email : {user.email} || phone number : {user.phone} </h3></Card.Footer> 
    </Card>
    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateUser el={user}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary">Understood</Button>
        </Modal.Footer>
      </Modal>
      
    </div>
    

  )
}

export default UserCard