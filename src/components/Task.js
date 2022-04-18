import { Outlet, Link } from "react-router-dom";
import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Taskarray from "./Taskarray";

import { useNavigate } from "react-router-dom";

function Task() {
  let history = useNavigate();

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, TaskName, TaskInfo, TaskSuggestions) {
    localStorage.setItem("id", id);
    localStorage.setItem("TaskName", TaskName);
    localStorage.setItem("TaskInfo", TaskInfo);
    localStorage.setItem("TaskSuggestions", TaskSuggestions);
  }

  // Deleted function - functionality
  // for deleting the entry
  function deleted(id) {
    var index = Taskarray.map(function (e) {
      return e.id;
    }).indexOf(id);

    // deleting the entry with index
    Taskarray.splice(index, 1);

    // We need to re-render the page for getting
    // the results so redirect to same page.
    history("/Task");
  }

  return (
    <div className="header border-bottom">
      <div className="header-content">
        <nav className="navbar navbar-expand">
          <div className="collapse navbar-collapse justify-content-between">
            <div className="header-left">
              <div className="dashboard_bar">Task</div>
            </div>
          </div>
        </nav>
      </div>

      <div className="mtask">
        <div className="container-fluid">
          <div className="row page-titles">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active">
                <a href="/Home">Home </a>
              </li>
              <li className="breadcrumb-item">
                <a>Task</a>
              </li>
            </ol>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="card">
                <div className="card-header">
                  <h4 className="card-title">Task </h4>
                </div>
                <div className="card-body">
                  <div className="table-responsive">
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
                              <td>
                                <Link to={`/Edittask`}>
                                  <Button
                                    onClick={(e) =>
                                      setID(
                                        item.id,
                                        item.TaskName,
                                        item.TaskInfo,
                                        item.TaskSuggestions
                                      )
                                    }
                                    variant="info"
                                  >
                                    Update
                                  </Button>
                                </Link>
                              </td>

                              {/* Using thr deleted function passing
   the id of an entry */}
                              <td>
                                <Button
                                  onClick={(e) => deleted(item.id)}
                                  variant="danger"
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                    <Link className="d-grid gap-2" to="/Addtask">
                      <Button variant="warning" size="lg">
                        Add Task
                      </Button>
                    </Link>
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
  );
}

export default Task;
