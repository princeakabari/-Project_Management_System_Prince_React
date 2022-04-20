import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Userarray from './Userarray';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';



function Adduser() {

    // Making usestate for setting and
    // fetching a value in jsx
    const [name, setname] = useState('');
    const [role, setrole] = useState('');
    const [password, setpassword] = useState('');

    // Using useNavigation for redirecting to pages
    let history = useNavigate();

    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault();  // Prevent reload

        const ids = uuid() // Creating unique id
        let uni = ids.slice(0, 8) // Slicing unique id

        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = name, b = role, c = password
        Userarray.push({ id: uni, Name: a, role: b, Password: c });


        // Redirecting to home page after creation done
        history('/User')



    }

    return (

        <div>
            <div className="header border-bottom">
            <div className="header-content">
                <nav className="navbar navbar-expand">
                    <div className="collapse navbar-collapse justify-content-between">
                        <div className="header-left">
                            <div className="dashboard_bar">Add User</div>
                        </div>
                    </div>
                </nav>
            </div></div>
            <div className="content-body">

                <Form className="d-grid gap-2" style={{ margin: '5rem' }}>

                    {/* Fetching a value from input textfirld 
   in a setname using usestate*/}                        <h5>Name: </h5>
                    <Form.Group className="mb-3" controlId="formBasicName">

                        <Form.Control onChange={e => setname(e.target.value)}
                            type="text"
                            placeholder="Enter Name" required />
                    </Form.Group>


                    {/* Fetching a value from input textfirld in
     a setage using usestate*/} <h5>Role: </h5>
                    <Form.Group className="mb-3" controlId="formBasicrole">
                   
                        <Form.Control onChange={e => setrole(e.target.value)}
                            type="text"
                            placeholder="role" required />
                    </Form.Group>
                    <h5>Password: </h5>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control onChange={e => setpassword(e.target.value)}
                            type="text"
                            placeholder="Password" required />
                    </Form.Group>

                    {/* handing a onclick event in button for
     firing a function */}
                    <Link className="d-grid gap-" to='/User'>
                        <Button

                            onClick={e => handelSubmit(e)}
                            variant="primary" type="submit">
                            Add User
                        </Button>


                    </Link>
                    {/* Redirecting back to home page */}
                    <Link className="d-grid gap-2" to='/User'>
                        <Button variant="info" size="lg">
                            Home
                        </Button>
                    </Link>

                </Form>
            </div>

        </div>
    )
}

export default Adduser