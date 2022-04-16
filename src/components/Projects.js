import React from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Projectsarrary from './Projectsarrary';
import { Link, useNavigate } from 'react-router-dom';

function Projects() {

  let history = useNavigate()

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, ProjectName, ProjectDescription, ProjectTechnology, Suggestions) {
    localStorage.setItem('id', id);
    localStorage.setItem('ProjectName', ProjectName);
    localStorage.setItem('ProjectDescription', ProjectDescription);
    localStorage.setItem('ProjectTechnology', ProjectTechnology);
    localStorage.setItem('Suggestions', Suggestions);
  }

  // Deleted function - functionality 
  // for deleting the entry
  function deleted(id) {

    var index = Projectsarrary.map(function (e) { return e.id; }).indexOf(id);

    // deleting the entry with index
    Projectsarrary.splice(index, 1)

    // We need to re-render the page for getting 
    // the results so redirect to same page.
    history('/Projects')
  }
  return <div><div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">Projects</div>
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
            <li className="breadcrumb-item"><a>Project List</a></li>


          </ol>

        </div>
        <div className="row">
          <div className="col-lg-12">
            <div className="card">
              <div className="card-header">
                <h4 className="card-title">Projects </h4>
              </div>
              <div className="card-body">
                <div className="table-responsive">
                  <table className="table table-responsive-md">
                    <thead>
                      <tr>
                        
                        <th><strong>Project Id </strong></th>
                        <th><strong>Project Name </strong></th>
                        <th><strong>Description</strong></th>
                        <th><strong>Technology </strong></th>
                        <th><strong>Suggestions</strong></th>

                      </tr>
                    </thead>
                    <tbody>

                      {/* Mapping though every element in the array
    and showing the data in the form of table */}
                      {Projectsarrary.map((item) => {
                        return (

                          <tr>
                            <td>{item.id}</td>
                            <td>{item.ProjectName}</td>
                            <td>{item.ProjectDescription}</td>
                            <td>{item.ProjectTechnology}</td>
                            <td>{item.Suggestions}</td>

                            
                            <td><Link to={`/EditProjects`}><Button onClick={(e) =>
                              setID(item.id, item.ProjectName, item.ProjectDescription, item.ProjectTechnology, item.Suggestions)} variant="success">
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

export default Projects