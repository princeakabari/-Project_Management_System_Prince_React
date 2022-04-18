import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rolearray from './Rolearray';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';


function Addrole() {

    // Making usestate for setting and
    // fetching a value in jsx
    const [RoleName, setRoleName] = useState('');
    const [RoleDescription, setRoleDescription] = useState('');
    
    // Using useNavigation for redirecting to pages
    let history = useNavigate();

    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault();  // Prevent reload

        const ids = uuid() // Creating unique id
        let uni = ids.slice(0, 8) // Slicing unique id

        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = RoleName, b = RoleDescription
        Rolearray.push({ id: uni, RoleName: a, RoleDescription: b});


        // Redirecting to home page after creation done
        history('/Rolelist')



    }
    return <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">Add Role</div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

        <div className="content-body">


            <div className="container-fluid">
                <div class="row page-titles">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item active"><a href="/Home">Home </a></li>
                        <li class="breadcrumb-item"><a>Add Role </a></li>
                    </ol>
                </div>

                <div class="row">
                    <div class="col-lg-24">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add New Role</h4>
                            </div>
                            <div class="card-body">
                                <div class="form-validation">
                                    <form class="needs-validation" novalidate="">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom01">Role Name
                                                        <span class="text-danger">* </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicRoleName">
                                                            <Form.Control onChange={e => setRoleName(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Role Name" required />
                                                        </Form.Group>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom02">Role Description <span class="text-danger">*
                                                        </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicRoleDescription">
                                                            <Form.Control onChange={e => setRoleDescription(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Role Description" required />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                
                                                <div class="mb-3 row">

                                                    <Link class="col-lg-4 ms-auto" to='/Addrole'>
                                                        <Button className="btn btn-primary"

                                                            onClick={e => handelSubmit(e)}
                                                            variant="primary" type="submit">
                                                            Add Role
                                                        </Button>


                                                    </Link>
                                                    {/* Redirecting back to home page */}
                                                    <Link class="col-lg-4 ms-auto" to='/Rolelist'>
                                                        <Button className="btn btn-primary" variant="info" size="lg">
                                                            Role List
                                                        </Button>
                                                    </Link>
                                                </div>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
        ;
}

export default Addrole