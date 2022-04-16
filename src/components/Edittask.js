import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Taskarray from './Taskarray';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EditTask() {

    // Here usestate has been used in order
    // to set and get values from the jsx
    const [TaskName, setTaskName] = useState('');
    const [TaskInfo, setTaskInfo] = useState('');
    const [TaskSuggestions, setTaskSuggestions] = useState('');
    const [id, setid] = useState('');

    // used for navigation with logic in javascript
    let history = useNavigate()

    // getting an index of an entry with an id
    var index = Taskarray.map(function (e) { return e.id; }).indexOf(id);

    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        e.preventDefault(); // preventing from reload

        let a = Taskarray[index] // getting an index of an array

        // putting the value from the input textfield and
        // replacing it from existing for updation
        a.TaskName = TaskName
        a.TaskInfo = TaskInfo        
        a.TaskSuggestions = TaskSuggestions

        // redirecting to main page
        history('/Task')
    }


    // Useeffect take care that page will be rendered only once
    useEffect(() => {
        setTaskName(localStorage.getItem('TaskName'))
        setTaskInfo(localStorage.getItem('TaskInfo'))
        setid(localStorage.getItem('id'))        
        setTaskSuggestions(localStorage.getItem('TaskSuggestions'))
    }, [])

    return <div><div className="header border-bottom">
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
                        <li class="breadcrumb-item"><a>Edit Task</a></li>
                    </ol>
                </div>

                <div class="row">
                    <div class="col-lg-24">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Edit Task </h4>
                            </div>
                            <div class="card-body">
                                <Form className="d-grid gap-2" style={{ margin: '5rem' }}>

                                    {/* setting a name from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicTaskName">
                                        <Form.Control value={TaskName}
                                            onChange={e => setTaskName(e.target.value)}
                                            type="text" placeholder="Enter Task Name" />
                                    </Form.Group>

                                    {/* setting a age from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicTaskInfo">
                                        <Form.Control value={TaskInfo}
                                            onChange={e => setTaskInfo(e.target.value)}
                                            type="text" placeholder="Enter Task Info" />
                                    </Form.Group>

                                   
                                    <Form.Group className="mb-3" controlId="formBasicTaskSuggestions">
                                        <Form.Control value={TaskSuggestions}
                                            onChange={e => setTaskSuggestions(e.target.value)}
                                            type="text" placeholder=" Enter Task Suggestions" />
                                    </Form.Group>

                                    {/* Hadinling an onclick event running an edit logic */}
                                    <Button to='/AddTask'
                                        onClick={e => handelSubmit(e)}
                                        variant="primary" type="submit" size="lg">
                                        Update
                                    </Button>


                                    {/* Redirecting to main page after editing */}
                                    <Link className="d-grid gap-2" to='/Task'>
                                        <Button variant="warning" size="lg">Projects</Button>
                                    </Link>
                                </Form>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
        ;
}

export default EditTask