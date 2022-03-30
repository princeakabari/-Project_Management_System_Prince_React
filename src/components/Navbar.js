import { Outlet, Link } from "react-router-dom";

export const Navbar = () => {

  return (
    <>
      <div>
        <div id="main-wrapper">

          <div className="nav-header">
            <a href="/Home" className="brand-logo">
             
              <div className="brand-title">
                <div className="dashboard_bar">PMS</div>
                <span className="brand-sub-title">Project Management Sytem</span>
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


                
                <li><a class="has-arrow " href="/Home" aria-expanded="false">
                  <i class="fa-solid fa-user"></i>
                  <span class="nav-text">Home </span>
                </a>
                  <ul aria-expanded="false">

                    <li>
                      <Link className="nav-text" to="/Home">Dashboard</Link></li>

                    

                  </ul>
                </li>

                <li><a class="has-arrow " href="/Projects" aria-expanded="false">
                  <i class="fa-solid fa-user"></i>
                  <span class="nav-text">Projects</span>
                </a>
                  <ul aria-expanded="false">

                    <li>
                      <Link className="nav-text" to="/Addprojects">Add Projects</Link></li>

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
                  <i class="fa-solid fa-user"></i>
                  <span class="nav-text">User </span>
                </a>
                  <ul aria-expanded="false">

                    <li>
                      <Link className="nav-text" to="Adduser">Add User</Link></li>

                    <li><Link className="nav-text" to="Userlist">User List</Link></li>

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