import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Taskarray from './Taskarray';
import { v4 as uuid } from 'uuid';
import { Link, useNavigate } from 'react-router-dom';



function AddTask() {

    // Making usestate for setting and
    // fetching a value in jsx
    const [TaskName, setTaskName] = useState('');
    const [TaskInfo, setTaskInfo] = useState('');
    const [TaskSuggestions, setTaskSuggestions] = useState('');

    // Using useNavigation for redirecting to pages
    let history = useNavigate();

    // Function for creating a post/entry
    const handelSubmit = (e) => {
        e.preventDefault();  // Prevent reload

        const ids = uuid() // Creating unique id
        let uni = ids.slice(0, 8) // Slicing unique id

        // Fetching a value from usestate and 
        // pushing to javascript object
        let a = TaskName, b = TaskInfo, c = TaskSuggestions
        Taskarray.push({ id: uni, TaskName: a, TaskInfo: b, TaskSuggestions: c });


        // Redirecting to home page after creation done
        history('/Task')



    }

    return         <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">Add Task</div>
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
                        <li class="breadcrumb-item"><a>Add Task </a></li>
                    </ol>
                </div>

                <div class="row">
                    <div class="col-lg-24">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Add New Task </h4>
                            </div>
                            <div class="card-body">
                                <div class="form-validation">
                                    <form class="needs-validation" novalidate="">
                                        <div class="row">
                                            <div class="col-xl-6">
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom01">Task Name
                                                        <span class="text-danger">* </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicTaskName">
                                                            <Form.Control onChange={e => setTaskName(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Task Name" required />
                                                        </Form.Group>

                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom02">Task Info<span class="text-danger">*
                                                        </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicTaskInfo">
                                                            <Form.Control onChange={e => setTaskInfo(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Task Info" required />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                                <div class="mb-3 row">
                                                    <label class="col-lg-4 col-form-label"
                                                        for="validationCustom03">Task Suggestions
                                                        <span class="text-danger">* </span>
                                                    </label>
                                                    <div class="col-lg-6">
                                                        <Form.Group className="mb-3" controlId="formBasicTaskSuggestions">
                                                            <Form.Control onChange={e => setTaskSuggestions(e.target.value)}
                                                                type="text"
                                                                placeholder="Enter Task Suggestions" required />
                                                        </Form.Group>
                                                    </div>
                                                </div>
                                               
                                                <div class="mb-3 row">

                                                    <Link class="col-lg-4 ms-auto" to='/Addtask'>
                                                        <Button className="btn btn-primary"

                                                            onClick={e => handelSubmit(e)}
                                                            variant="primary" type="submit">
                                                            Add Task
                                                        </Button>


                                                    </Link>
                                                    {/* Redirecting back to home page */}
                                                    <Link class="col-lg-4 ms-auto" to='/Task'>
                                                        <Button className="btn btn-primary" variant="info" size="lg">
                                                            Task list
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

export default AddTask