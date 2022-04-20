import { Outlet, Link } from "react-router-dom";
import Taskarray from "./Taskarray";
import Projectsarrary from "./Projectsarrary";
import Teamarray from "./Teamarray";
import Rolearray from "./Rolearray";

export const Home = () => {
  return (
    <div>
      <div className="header border-bottom">
        <div className="header-content">
          <nav className="navbar navbar-expand">
            <div className="collapse navbar-collapse justify-content-between">
              <div className="header-left">
                <div className="dashboard_bar">Admin Dashboard</div>
              </div>

              <Link type="button" className="btn btn-danger" to="/Landing">
                Logout{" "}
              </Link>
            </div>
          </nav>
        </div>
      </div>

      <div className="content-body">
        <div className="container-fluid">
          <div className="row">
            <div className="col-xl-24">
              <div className="row">
                <div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div class="widget-stat card bg-danger">
                    <div class="card-body p-4">
                      <div class="media">
                        <span class="me-3">
                          <i class="flaticon-381-calendar-1"></i>
                        </span>
                        <div class="media-body text-white text-end">
                          <p class="mb-1">Projects</p>
                          <h3 class="text-white">6 </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div class="widget-stat card bg-success">
                    <div class="card-body p-4">
                      <div class="media">
                        <span class="me-3">
                          <i class="la la-graduation-cap"></i>
                        </span>
                        <div class="media-body text-white text-end">
                          <p class="mb-1">Task</p>
                          <h3 class="text-white">4 </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div class="widget-stat card bg-warning">
                    <div class="card-body p-4">
                      <div class="media">
                        <span class="me-3">
                          <i class="la la-users"></i>
                        </span>
                        <div class="media-body text-white text-end">
                          <p class="mb-1">Project Teams</p>
                          <h3 class="text-white">6</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-3 col-xxl-6 col-lg-6 col-sm-6">
                  <div class="widget-stat card bg-primary">
                    <div class="card-body p-4">
                      <div class="media">
                        <span class="me-3">
                          <i class="flaticon-381-user-7"></i>
                        </span>
                        <div class="media-body text-white text-end">
                          <p class="mb-1">User</p>
                          <h3 class="text-white">11 </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
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
                          <th>
                            <strong>Team Id </strong>
                          </th>
                          <th>
                            <strong>Team Name </strong>
                          </th>
                          <th>
                            <strong>Team Member</strong>
                          </th>
                          <th>
                            <strong>Technology</strong>
                          </th>
                          <th>
                            <strong>Team Suggestions</strong>
                          </th>
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
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
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

                              {/* Using thr deleted function passing
   the id of an entry */}
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
                          <th>
                            <strong>Role Id </strong>
                          </th>
                          <th>
                            <strong>Role Name </strong>
                          </th>
                          <th>
                            <strong>Role Description</strong>
                          </th>
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

          
        </div>
      </div>
    </div>
  );
};

export default Home;
