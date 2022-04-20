import React, { useEffect, useState } from 'react'
import { Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rolearray from './Rolearray';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';


function Editrole() {

    // Here usestate has been used in order
    // to set and get values from the jsx
    const [RoleName, setRoleName] = useState('');
    const [RoleDescription, setRoleDescription] = useState('');
    
    const [id, setid] = useState('');

    // used for navigation with logic in javascript
    let history = useNavigate()

    // getting an index of an entry with an id
    var index = Rolearray.map(function (e) { return e.id; }).indexOf(id);

    // function for handling the edit and 
    // pushing changes of editing/updating
    const handelSubmit = (e) => {
        e.preventDefault(); // preventing from reload

        let a = Rolearray[index] // getting an index of an array

        // putting the value from the input textfield and
        // replacing it from existing for updation
        a.RoleName = RoleName
        a.RoleDescription = RoleDescription
        
        // redirecting to main page
        history('/Rolelist')
    }


    // Useeffect take care that page will be rendered only once
    useEffect(() => {
        setRoleName(localStorage.getItem('RoleName'))
        setRoleDescription(localStorage.getItem('RoleDescription'))
        setid(localStorage.getItem('id'))
       
    }, [])

    return <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">Edit Role</div>
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
                        <li class="breadcrumb-item"><a>Edit Role</a></li>
                    </ol>
                </div>

                <div class="row">
                    <div class="col-lg-24">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title">Edit Role</h4>
                            </div>
                            <div class="card-body">
                                <Form className="d-grid gap-2" style={{ margin: '5rem' }}>

                                    {/* setting a name from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicRoleName">
                                        <h5>Role Name</h5>
                                        <Form.Control value={RoleName}
                                            onChange={e => setRoleName(e.target.value)}
                                            type="text" placeholder="Enter Role Name" />
                                    </Form.Group>

                                    {/* setting a age from the input textfiled */}
                                    <Form.Group className="mb-3" controlId="formBasicRoleDescription">
                                    <h5>Role Description</h5>
                                        <Form.Control value={RoleDescription}
                                            onChange={e => setRoleDescription(e.target.value)}
                                            type="text" placeholder="Enter Role Description" />
                                    </Form.Group>

                                   

                                    {/* Hadinling an onclick event running an edit logic */}
                                    <Button to='/Rolelist'
                                        onClick={e => handelSubmit(e)}
                                        variant="primary" type="submit" size="lg">
                                        Update Role
                                    </Button>


                                    {/* Redirecting to main page after editing */}
                                    <Link className="d-grid gap-2" to='/Rolelist'>
                                        <Button variant="warning" size="lg">Role List</Button>
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

export default Editrole