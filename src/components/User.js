import React from "react";
import { Button, Table } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Userarray from "./Userarray";
import { Link, useNavigate } from "react-router-dom";

function User() {
  let history = useNavigate();

  // You may skip this part if you're
  // using react-context api or redux
  function setID(id, name, role, password) {
    localStorage.setItem("id", id);
    localStorage.setItem("Name", name);
    localStorage.setItem("role", role);
    localStorage.setItem("Password", password);
  }

  // Deleted function - functionality
  // for deleting the entry
  function deleted(id) {
    var index = Userarray.map(function (e) {
      return e.id;
    }).indexOf(id);

    // deleting the entry with index
    Userarray.splice(index, 1);

    // We need to re-render the page for getting
    // the results so redirect to same page.
    history("/User");
  }

  return (
    <div>
      <div className="header border-bottom">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar"> User</div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="content-body">
        <div style={{ margin: "5rem" }}>
          <Table striped bordered hover size="sm">
            <thead>
              <tr>
                <th>Name</th>
                <th>Role</th>
                <th>Password</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapping though every element in the array
    and showing the data in the form of table */}
              {Userarray.map((item) => {
                return (
                  <tr>
                    <td>{item.Name}</td>
                    <td>{item.role}</td>
                    <td>{item.Password}</td>

                    {/* getting theid,name, and age for storing these
          value in the jsx with onclick event */}
                    <td>
                      <Link to={`/Edituser`}>
                        <Button
                          onClick={(e) =>
                            setID(item.id, item.Name, item.role, item.Password)
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
          </Table>

          {/* Button for redirecting to create page for
   insertion of values */}
          <Link className="d-grid gap-2" to="/Adduser">
            <Button variant="warning" size="lg">
              Add User
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default User;
