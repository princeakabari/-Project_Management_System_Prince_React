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
    history('/Newprojects')
  }
  return <div><div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">New Project List </div>
          </div>
        </div>
      </nav>
    </div>
  </div>

    <div className="content-body">


      <div className="container-fluid">
        <div class="row page-titles">
          <ol class="breadcrumb">
            <li class="breadcrumb-item active"><Link to="/Home">Home</Link></li>
            <li class="breadcrumb-item"><a>New Project </a></li>
          </ol>
        </div>


        <div class="row">
          <div class="col">
            <div class="card border-0 pb-0">
              <div class="card-header border-0 pb-0">
                <h4 class="card-title">New Project </h4>
              </div>

             
              <div class="card-body">
                <div id="DZ_W_Todo3" class="widget-media dlab-scroll ">
                  <ul class="timeline">
                  {Projectsarrary.map((item) => {
                        return (
                    <li>
                      <div class="timeline-panel">
                        <div class="media me-2 media-info">
                          NP
                        </div>
                        <div class="media-body">
                          <h5 class="mb-1">{item.ProjectName} <small class="text-muted">{item.ProjectTechnology}</small></h5>
                          <p class="mb-1">{item.ProjectDescription} </p>
                          <p class="mb-1">{item.Suggestions} </p>
                          
                          <Link to={`/EditProjects`}><Button  class="btn btn-primary btn-xxs shadow" onClick={(e) =>
                              setID(item.id, item.ProjectName, item.ProjectDescription, item.ProjectTechnology, item.Suggestions)} variant="sucess">
                              Update</Button></Link>
                          
                              <Link to={`/Projectdetails`}><Button  class="btn btn-primary btn-xxs shadow"  variant="primary">
                              View More</Button></Link>
                         
                        </div>
                      </div>
                    </li> )
                      })}

                  </ul>
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

export default Projects;