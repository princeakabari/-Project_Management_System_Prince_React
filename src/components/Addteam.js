import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Teamarray from "./Teamarray";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";

function AddTeam() {
  // Making usestate for setting and
  // fetching a value in jsx
  const [TeamName, setTeamName] = useState("");
  const [TeamMember, setTeamMember] = useState("");
  const [Technology, setTechnology] = useState("");
  const [TeamSuggestions, setTeamSuggestions] = useState("");

  // Using useNavigation for redirecting to pages
  let history = useNavigate();

  // Function for creating a post/entry
  const handelSubmit = (e) => {
    e.preventDefault(); // Prevent reload

    const ids = uuid(); // Creating unique id
    let uni = ids.slice(0, 8); // Slicing unique id

    // Fetching a value from usestate and
    // pushing to javascript object
    let a = TeamName,
      b = TeamMember,
      c = Technology,
      d = TeamSuggestions;
      Teamarray.push({
      id: uni,
      TeamName: a,
      TeamMember: b,
      Technology: c,
      TeamSuggestions: d,
    });

    // Redirecting to home page after creation done
    history("/Teamlist");
  };
  return (
    <div>
      <div className="header border-bottom">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">Add Team</div>
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="content-body">
        <div className="container-fluid">
          <div class="row page-titles">
            <ol class="breadcrumb">
              <li class="breadcrumb-item active">
                <a href="/Home">Home </a>
              </li>
              <li class="breadcrumb-item">
                <a>Add Team </a>
              </li>
            </ol>
          </div>

          <div class="row">
            <div class="col-lg-24">
              <div class="card">
                <div class="card-header">
                  <h4 class="card-title">Add New </h4>
                </div>
                <div class="card-body">
                  <div class="form-validation">
                    <form class="needs-validation" novalidate="">
                      <div class="row">
                        <div class="col-xl-6">
                          <div class="mb-3 row">
                            <label
                              class="col-lg-4 col-form-label"
                              for="validationCustom01"
                            >
                              Team Name
                              <span class="text-danger">* </span>
                            </label>
                            <div class="col-lg-6">
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicTeamName"
                              >
                                <Form.Control
                                  onChange={(e) =>
                                    setTeamName(e.target.value)
                                  }
                                  type="text"
                                  placeholder="Enter Team Name"
                                  required
                                />
                              </Form.Group>
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label
                              class="col-lg-4 col-form-label"
                              for="validationCustom02"
                            >
                              Team Member{" "}
                              <span class="text-danger">*</span>
                            </label>
                            <div class="col-lg-6">
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicTeamMember"
                              >
                                <Form.Control
                                  onChange={(e) =>
                                    setTeamMember(e.target.value)
                                  }
                                  type="text"
                                  placeholder="Enter Team Member"
                                  required
                                />
                              </Form.Group>
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label
                              class="col-lg-4 col-form-label"
                              for="validationCustom03"
                            >
                             Technology
                              <span class="text-danger">* </span>
                            </label>
                            <div class="col-lg-6">
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicTechnology"
                              >
                                <Form.Control
                                  onChange={(e) =>
                                    setTechnology(e.target.value)
                                  }
                                  type="text"
                                  placeholder="Enter Technology"
                                  required
                                />
                              </Form.Group>
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <label
                              class="col-lg-4 col-form-label"
                              for="validationCustom04"
                            >
                              Team Suggestions <span class="text-danger">*</span>
                            </label>
                            <div class="col-lg-6">
                              <Form.Group
                                className="mb-3"
                                controlId="formBasicTeamSuggestions"
                              >
                                <Form.Control
                                  onChange={(e) =>
                                    setTeamSuggestions(e.target.value)
                                  }
                                  type="text"
                                  placeholder="Enter Team Suggestions"
                                  required
                                />
                              </Form.Group>
                            </div>
                          </div>
                          <div class="mb-3 row">
                            <Link class="col-lg-4 ms-auto" to="/Teamlist">
                              <Button
                                className="btn btn-primary"
                                onClick={(e) => handelSubmit(e)}
                                variant="primary"
                                type="submit"
                              >
                                Add Team
                              </Button>
                            </Link>
                            {/* Redirecting back to home page */}
                            <Link class="col-lg-4 ms-auto" to="/Teamlist">
                              <Button
                                className="btn btn-primary"
                                variant="info"
                                size="lg"
                              >
                                Team List
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddTeam;
