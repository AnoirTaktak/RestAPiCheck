import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { adduser } from '../redux/actions';
const AddUser = () => {
    const [name, setname] = useState('');
    const [email, setemail] = useState('');
    const [phone, setphone] = useState('');
    const dispatch = useDispatch();
    const add = ()=>{
      
        const newuser = {
            name,
            email,
            phone
        };
        
        dispatch(adduser(newuser))

    }
  return (
    <div>
    <Form onSubmit={add}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First And Last Name</Form.Label>
        <Form.Control type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Phone number</Form.Label>
        <Form.Control type="text" placeholder="phone" onChange={(e)=>setphone(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Add to database
      </Button>
    </Form>
    </div>
  )
}

export default AddUser