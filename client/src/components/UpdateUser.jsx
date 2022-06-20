import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useDispatch } from 'react-redux';
import { updateuser } from '../redux/actions';


const UpdateUser = ({el}) => {
    const [name, setname] = useState(el.name);
    const [email, setemail] = useState(el.email);
    const [phone, setphone] = useState(el.phone);
    const dispatch = useDispatch();
    const upd = ()=>{
      
        const upduser = {
            name,
            email,
            phone
        };
        
        dispatch(updateuser(upduser,el._id))

    }
  return (
    <div>
    <Form onSubmit={upd}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control defaultValue={el.email} type="email" placeholder="email" onChange={(e)=>setemail(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>First And Last Name</Form.Label>
        <Form.Control  defaultValue={el.name} type="text" placeholder="name" onChange={(e)=>setname(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Label>Phone number</Form.Label>
        <Form.Control defaultValue={el.phone} type="text" placeholder="phone" onChange={(e)=>setphone(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Update User
      </Button>
    </Form>
    </div>
  )
}

export default UpdateUser