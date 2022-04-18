import { Outlet, Link } from "react-router-dom";

export const Usernavbar = () => {

  return (
    <>
      <div>
        <div id="main-wrapper">

          <div className="nav-header">
            <a href="/Home" className="brand-logo">
            <img src="assets/images/logo.png" alt="logo" width="50" height="50"/>
              <div className="brand-title">
                <div className="dashboard_bar">Project Management System</div>
                
              </div>
            </a>
            <div className="nav-control">
              <div className="hamburger">
                <span className="line" />
                <span className="line" />
                <span className="line" />
              </div>
            </div>
          </div>


          <div className="dlabnav">
            <div className="dlabnav-scroll">
              <ul className="metismenu" id="menu">


                
                <li><a class="" to="/Home" aria-expanded="false">
                  <i class="fa-solid fa-home"></i>
                  <Link className="nav-text" to="/Home">Dashboard</Link>
                </a>
                
                </li>

                <li><a class="has-arrow " href="/Projects" aria-expanded="false">
                  <i class="fa-solid fa-list"></i>
                  <span class="nav-text">Projects</span>
                </a>
                  <ul aria-expanded="false">

                    
                      <li><Link className="nav-text" to="/Newproject">New Project</Link></li>
                     <li> <Link className="nav-text" to="/Addprojects">Add Projects</Link></li>
                    <li><Link className="nav-text" to="/Projects">Project List</Link></li>
                    <li><Link className="nav-text" to="/Projectdetails">Project Details</Link></li>
                    
                    
                  </ul>
                </li>

                <li><a class="has-arrow " href="/Userlist" aria-expanded="false">
                  <i class="fa-solid fa-user"></i>
                  <span class="nav-text">User </span>
                </a>
                  <ul aria-expanded="false">

                    <li>
                      <Link className="nav-text" to="/Adduser">Add User</Link></li>

                    <li><Link className="nav-text" to="/User">User List</Link></li>

                  </ul>
                </li>
                
               

                <li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
                  <i class="fa fa-user-o"></i>
                  <span class="nav-text">Roles </span>
                </a>
                  <ul aria-expanded="false">

                    <li>
                      <Link className="nav-text" to="Addrole">Add Role</Link></li>

                    <li><Link className="nav-text" to="Rolelist">Role List</Link></li>

                  </ul>
                </li>

                <li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
                  <i class="fa-solid fa-people-group"></i>
                  <span class="nav-text">Project Teams</span>
                </a>
                  <ul aria-expanded="false">

                    <li>
                      <Link className="nav-text" to="AddTeam">Add Team</Link></li>

                    <li><Link className="nav-text" to="Teamlist">Team List</Link></li>

                  </ul>
                </li>

               

                <li><a class="has-arrow " href="javascript:void()" aria-expanded="false">
                  <i class="fa-solid fa-list-ol"></i>
                  <span class="nav-text">Task</span>
                </a>
                  <ul aria-expanded="false">

                    <li>
                      <Link className="nav-text" to="Addtask">Add Task</Link></li>

                    <li><Link className="nav-text" to="Task">Task List</Link></li>

                  </ul>
                </li>
              </ul>

              <div className="copyright">
                <p>
                  <strong>Project Management System</strong> © 2022 All Rights
                  Reserved{" "}
                </p>
                <p className="fs-12">
                  Made with by Frontendtrick{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
     
      <Outlet />
    </>


  )
}