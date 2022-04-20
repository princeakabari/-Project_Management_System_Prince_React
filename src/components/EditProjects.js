import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectsarrary from './Projectsarrary';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function EditProjects() {

    // Here usestate has been used in order
    // to set and get values from the jsx
    const [ProjectName, setProjectName] = useState('');
    const [ProjectDescription, setProjectDescription] = useState('');
    const [ProjectTechnology, setProjectTechnology] = useState('');
    const [Suggestions, setSuggestions] = useState('');
    const [id, setid] = useState('');

    // used for navigation with logic in javascript
    let history = useNavigate()

    // getting an index of an entry with an id
    var index = Projectsarrary.map(function (e) { return e.id; }).indexOf(id);

    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        e.preventDefault(); // preventing from reload

        let a = Projectsarrary[index] // getting an index of an array

        // putting the value from the input textfield and
        // replacing it from existing for updation
        a.ProjectName = ProjectName
        a.ProjectDescription = ProjectDescription
        a.ProjectTechnology = ProjectTechnology
        a.Suggestions = Suggestions

        // redirecting to main page
        history('/Projects')
    }


    // Useeffect take care that page will be rendered only once
    useEffect(() => {
        setid(localStorage.getItem('id'))
        setProjectName(localStorage.getItem('ProjectName'))
        setProjectDescription(localStorage.getItem('ProjectDescription'))        
        setProjectTechnology(localStorage.getItem('ProjectTechnology'))
        setSuggestions(localStorage.getItem('Suggestions'))
    }, [])

    return <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">Edit Project</div>
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
                        <li class="breadcrumb-item"><a>Edit Project</a></li>
                    </ol>
                </div>

                <div class="row">
                    <div class="col-lg-24">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Edit Project </h4>
                            </div>
                            <div class="card-body">
                                <Form className="d-grid gap-2" style={{ margin: '5rem' }}>

                                    {/* setting a name from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicProjectName">
                                        <h5>Project Name</h5>
                                        <Form.Control value={ProjectName}
                                            onChange={e => setProjectName(e.target.value)}
                                            type="text" placeholder="Enter Project Name" />
                                    </Form.Group>

                                    {/* setting a age from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicProjectDescription">
                                    <h5>Project Description</h5>
                                        <Form.Control value={ProjectDescription}
                                            onChange={e => setProjectDescription(e.target.value)}
                                            type="text" placeholder="Enter Project Description" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicProjectTechnology">
                                    <h5>Project Technology</h5>
                                        <Form.Control value={ProjectTechnology}
                                            onChange={e => setProjectTechnology(e.target.value)}
                                            type="text" placeholder=" Enter Project Technology" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicSuggestions">
                                    <h5>Suggestions</h5>
                                        <Form.Control value={Suggestions}
                                            onChange={e => setSuggestions(e.target.value)}
                                            type="text" placeholder=" Enter Suggestions" />
                                    </Form.Group>

                                    {/* Hadinling an onclick event running an edit logic */}
                                    <Button to='/Projects'
                                        onClick={e => handelSubmit(e)}
                                        variant="primary" type="submit" size="lg">
                                        Update Project
                                    </Button>
                                    



                                    {/* Redirecting to main page after editing */}
                                    <Link className="d-grid gap-2" to='/Projects'>
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

export default EditProjects