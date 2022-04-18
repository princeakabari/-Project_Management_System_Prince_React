import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Teamarray from './Teamarray';
import { Link, useNavigate } from 'react-router-dom';

function Teamlist() {

  let history = useNavigate()

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, TeamName, TeamMember,Technology,TeamSuggestions ) {
    localStorage.setItem('id', id);
    localStorage.setItem('TeamName', TeamName);
    localStorage.setItem('TeamMember', TeamMember);
    localStorage.setItem('Technology', Technology);
    localStorage.setItem('TeamSuggestions', TeamSuggestions);
   
  }

  // Deleted function - functionality 
  // for deleting the entry
  function deleted(id) {

    var index = Teamarray.map(function (e) { return e.id; }).indexOf(id);

    // deleting the entry with index
    Teamarray.splice(index, 1)

    // We need to re-render the page for getting 
    // the results so redirect to same page.
    history('/Teamlist')
  }
  return <div>
    <div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">Teams</div>
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
            <li className="breadcrumb-item"><a>Team List</a></li>


          </ol>

        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Team</h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        
                        <th><strong>Team Id </strong></th>
                        <th><strong>Team Name </strong></th>
                        <th><strong>Team Member</strong></th>
                        <th><strong>Technology</strong></th>
                        <th><strong>Team Suggestions</strong></th>
                        

                      </tr>
                    </thead>
                    <tbody>

                      {/* Mapping though every element in the array
    and showing the data in the form of table */}
                      {Teamarray.map((item) => {
                        return (

                          <tr>
                            <td>{item.id}</td>
                            <td>{item.TeamName}</td>
                            <td>{item.TeamMember}</td>
                            <td>{item.Technology}</td>
                            <td>{item.TeamSuggestions}</td>
                            

                            
                            <td><Link to={`/Editteam`}><Button onClick={(e) =>
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

export default Teamlist