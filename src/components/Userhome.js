import { Outlet, Link } from "react-router-dom";
import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import Taskarray from "./Taskarray";
import Projectsarrary from "./Projectsarrary";
import Teamarray from './Teamarray';

export const Userhome = () => {
  return (
    <div>
      <div className="nav-header">
        <a href="/Home" className="brand-logo">
          <img src="assets/images/logo.png" alt="logo" width="50" height="50" />
          <div className="brand-title">
            <div className="dashboard_bar">Project Management System</div>
          </div>
        </a>
      </div>

      <div className="header border-bottom">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">User Dashboard</div>
              </div>
              <Link type="button" className="btn btn-danger" to="/Landing">Log Out </Link>
            </div>
          </nav>
        </div>

        <div className="mtask">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header">
                    <h4 className="card-title">Task </h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <div className="col-lg-12">
                        <table className="table table-responsive-md">
                          <thead>
                            <tr>
                              <th>
                                <strong>Task Name </strong>
                              </th>
                              <th>
                                <strong>Task Info </strong>
                              </th>
                              <th>
                                <strong>Task Suggestions</strong>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            {/* Mapping though every element in the array
and showing the data in the form of table */}
                            {Taskarray.map((item) => {
                              return (
                                <tr>
                                  <td>{item.TaskName}</td>
                                  <td>{item.TaskInfo}</td>
                                  <td>{item.TaskSuggestions}</td>

                                  {/* getting theid,name, and age for storing these
value in the jsx with onclick event */}
                                  <td></td>

                                  {/* Using thr deleted function passing
the id of an entry */}
                                  <td></td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                            <th>
                              <strong>Project Id </strong>
                            </th>
                            <th>
                              <strong>Project Name </strong>
                            </th>
                            <th>
                              <strong>Description</strong>
                            </th>
                            <th>
                              <strong>Technology </strong>
                            </th>
                            <th>
                              <strong>Suggestions</strong>
                            </th>
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
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
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

        {/* Button for redirecting to create page for
insertion of values */}
      </div>
    </div>
  );
};

export default Userhome;
