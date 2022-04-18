import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Teamarray from './Teamarray';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Editteam() {

    // Here usestate has been used in order
    // to set and get values from the jsx
    const [TeamName, setTeamName] = useState('');
    const [TeamMember, setTeamMember] = useState('');
    const [Technology, setTechnology] = useState('');
    const [TeamSuggestions, setTeamSuggestions] = useState('');
    const [id, setid] = useState('');

    // used for navigation with logic in javascript
    let history = useNavigate()

    // getting an index of an entry with an id
    var index = Teamarray.map(function (e) { return e.id; }).indexOf(id);

    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        e.preventDefault(); // preventing from reload

        let a = Teamarray[index] // getting an index of an array

        // putting the value from the input textfield and
        // replacing it from existing for updation
        a.TeamName = TeamName
        a.TeamMember = TeamMember
        a.Technology = Technology
        a.TeamSuggestions = TeamSuggestions

        // redirecting to main page
        history('/Teamlist')
    }


    // Useeffect take care that page will be rendered only once
    useEffect(() => {
        setTeamName(localStorage.getItem('TeamName'))
        setTeamMember(localStorage.getItem('TeamMember'))
        setid(localStorage.getItem('id'))
        setTechnology(localStorage.getItem('Technology'))
        setTeamSuggestions(localStorage.getItem('TeamSuggestions'))
    }, [])

    return <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">Edit Team</div>
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
                        <li class="breadcrumb-item"><a>Edit Team</a></li>
                    </ol>
                </div>

                <div class="row">
                    <div class="col-lg-24">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Edit Team</h4>
                            </div>
                            <div class="card-body">
                                <Form className="d-grid gap-2" style={{ margin: '5rem' }}>

                                    {/* setting a name from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicTeamName">
                                        <Form.Control value={TeamName}
                                            onChange={e => setTeamName(e.target.value)}
                                            type="text" placeholder="Enter Team Name" />
                                    </Form.Group>

                                    {/* setting a age from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicTeamMember">
                                        <Form.Control value={TeamMember}
                                            onChange={e => setTeamMember(e.target.value)}
                                            type="text" placeholder="Enter Team Member" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicTechnology">
                                        <Form.Control value={Technology}
                                            onChange={e => setTechnology(e.target.value)}
                                            type="text" placeholder=" Enter Team Technology" />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicTeamSuggestions">
                                        <Form.Control value={ TeamSuggestions}
                                            onChange={e => setTeamSuggestions(e.target.value)}
                                            type="text" placeholder=" Enter Team Suggestions" />
                                    </Form.Group>

                                    {/* Hadinling an onclick event running an edit logic */}
                                    <Button to='/Teamlist'
                                        onClick={e => handelSubmit(e)}
                                        variant="primary" type="submit" size="lg">
                                        Update
                                    </Button>


                                    {/* Redirecting to main page after editing */}
                                    <Link className="d-grid gap-2" to='/Teamlist'>
                                        <Button variant="warning" size="lg">Team List</Button>
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

export default Editteam