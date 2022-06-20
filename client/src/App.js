
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import UserCard from './components/UserCard';
import { getusers } from './redux/actions';
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddUser from './components/AddUser';

function App() {
  const {loading,users} = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
   dispatch(getusers());
  }, [])
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="App">
        {
          loading ? 
          <h1> Loading ... </h1> 
          :
          users.map(el => <UserCard user={el} />)
          
        }
      <hr></hr>
        <Button variant="primary" onClick={handleShow}>
        Add a new user
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add a user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddUser />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
