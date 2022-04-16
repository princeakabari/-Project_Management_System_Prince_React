import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectsarrary from './Projectsarrary';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';


function Addprojects() {

    // Making usestate for setting and
    // fetching a value in jsx
    const [ProjectName, setProjectName] = useState('');
    const [ProjectDescription, setProjectDescription] = useState('');
    const [ProjectTechnology, setProjectTechnology] = useState('');
    const [Suggestions, setSuggestions] = useState('');

    // Using useNavigation for redirecting to pages
    let history = useNavigate();

    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault();  // Prevent reload

        const ids = uuid() // Creating unique id
        let uni = ids.slice(0, 8) // Slicing unique id

        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = ProjectName, b = ProjectDescription, c = ProjectTechnology, d = Suggestions
        Projectsarrary.push({ id: uni, ProjectName: a, ProjectDescription: b, ProjectTechnology: c, Suggestions: d });


        // Redirecting to home page after creation done
        history('/Projects')



    }
    return <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">Add Projects</div>
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
                        <li class="breadcrumb-item"><a>Add Projects </a></li>
                    </ol>
                </div>

                <div class="row">
                    <div class="col-lg-24">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add New Project </h4>
                            </div>
                            <div class="card-body">
                                <div class="form-validation">
                                    <form class="needs-validation" novalidate="">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom01">Project Name
                                                        <span class="text-danger">* </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicName">
                                                            <Form.Control onChange={e => setProjectName(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Project Name" required />
                                                        </Form.Group>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom02">Project Description <span class="text-danger">*
                                                        </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicName">
                                                            <Form.Control onChange={e => setProjectDescription(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Description" required />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom03">Project Technology
                                                        <span class="text-danger">* </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicName">
                                                            <Form.Control onChange={e => setProjectTechnology(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Project Technology" required />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom04">Suggestions <span class="text-danger">*
                                                        </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicName">
                                                            <Form.Control onChange={e => setSuggestions(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Suggestions" required />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">

                                                    <Link class="col-lg-4 ms-auto" to='/Projects'>
                                                        <Button className="btn btn-primary"

                                                            onClick={e => handelSubmit(e)}
                                                            variant="primary" type="submit">
                                                            Add Project
                                                        </Button>


                                                    </Link>
                                                    {/* Redirecting back to home page */}
                                                    <Link class="col-lg-4 ms-auto" to='/Projects'>
                                                        <Button className="btn btn-primary" variant="info" size="lg">
                                                            Project List
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

export default Addprojects