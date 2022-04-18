import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Rolearray from './Rolearray';
import { Link, useNavigate } from 'react-router-dom';

function Rolelist() {

  let history = useNavigate()

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, RoleName, RoleDescription) {
    localStorage.setItem('id', id);
    localStorage.setItem('RoleName', RoleName);
    localStorage.setItem('RoleDescription', RoleDescription);
   
  }

  // Deleted function - functionality 
  // for deleting the entry
  function deleted(id) {

    var index = Rolearray.map(function (e) { return e.id; }).indexOf(id);

    // deleting the entry with index
    Rolearray.splice(index, 1)

    // We need to re-render the page for getting 
    // the results so redirect to same page.
    history('/Projects')
  }
  return <div>
    <div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">Roles</div>
          </div>
        </div>
      </nav>
    </div>
  </div>
    <div className="content-body">
      <div className="container-fluid">
        <div className="row page-titles">
          <ol className="breadcrumb">
            <li className="breadcrumb-item active"><a href="/Home">Home </a></li>
            <li className="breadcrumb-item"><a>Role List</a></li>


          </ol>

        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Role</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        
                        <th><strong>Role Id </strong></th>
                        <th><strong>Role Name </strong></th>
                        <th><strong>Role Description</strong></th>
                        

                      </tr>
                    </thead>
                    <tbody>

                      {/* Mapping though every element in the array
    and showing the data in the form of table */}
                      {Rolearray.map((item) => {
                        return (

                          <tr>
                            <td>{item.id}</td>
                            <td>{item.RoleName}</td>
                            <td>{item.RoleDescription}</td>
                            

                            
                            <td><Link to={`/Editrole`}><Button onClick={(e) =>
                              setID(item.id, item.RoleName, item.RoleDescription)} variant="success">
                              Update</Button></Link></td>

                           
                            <td><Button onClick={e => deleted(item.id)}
                              variant="danger">Delete</Button></td>
                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




  </div>
    ;
};

export default Rolelist