import { Outlet, Link } from "react-router-dom";

export const Projectdetails = () => {
    return <div><div className="header border-bottom">
        <div className="header-content">
            <nav className="navbar navbar-expand">
                <div className="collapse navbar-collapse justify-content-between">
                    <div className="header-left">
                        <div className="dashboard_bar">Project Details</div>
                    </div>
                </div>
            </nav>
        </div>
    </div>

    
    <div className="content-body">
      
  <div className="container-fluid">
    <div className="row">
      <div className="col-xl-12">
        <div className="row">
          <div className="col-xl-12">
            <div className="card overflow-hidden">
              <div className="company-profile">
                <img src="assets/images/back1.jpg" alt />
              </div>
              <div className="card-body">
                <div className="row border-bottom pb-5">
                  <div className="col-xl-8 col-lg-9">
                    <div>
                      <h4 className="fs-32 font-w700">Project Management System</h4>
                      <span className="mb-2 d-block">Created by Tommy Hank at June 31, 2020
                      </span>
                      <div className="workload-button">
                        <a href="javascript:void(0);" className="btn btn-primary btn-rounded">New <i className="fas fa-caret-down ms-2 scale5" /></a>
                        <a href="javascript:void(0);" className="btn btn-primary light btn-rounded"><i className="fas fa-user-plus scale2 me-3" />Invite People
                        </a>
                        <a href="javascript:void(0);" className="btn btn-outline-light btn-rounded">Edit </a>
                        
                        <a href="javascript:void(0);" className="btn btn-outline-light btn-rounded"><i className="far fa-envelope scale5 me-3 text-primary" />45
                          Comments </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-3 info">
                    <div className="kanbanimg1">
                      <span><i className="fas fa-info-circle me-3" />Project Details </span>
                      <div className="dropdown ms-3">
                        <div className="btn-link" data-bs-toggle="dropdown">
                          <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12.4999" cy="3.5" r="2.5" fill="#A5A5A5">
                            </circle>
                            <circle cx="12.4999" cy="11.5" r="2.5" fill="#A5A5A5">
                            </circle>
                            <circle cx="12.4999" cy="19.5" r="2.5" fill="#A5A5A5">
                            </circle>
                          </svg>
                        </div>
                        <div className="dropdown-menu dropdown-menu-right">
                          <a className="dropdown-item" href="javascript:void(0)">Delete
                          </a>
                          <a className="dropdown-item" href="javascript:void(0)">Edit </a>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                  <div className="col-xl-3 mt-4 col-sm-6">
                    <div className="d-flex">
                      <span><i className="far fa-clock scale5 text-primary mt-2 me-3" /></span>
                      <div>
                        <h4 className="fs-18 font-w500 text-black">Project Create </h4>
                        <span>Monday, October 31th, 2020 </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 mt-4 col-sm-6">
                    <div className="d-flex">
                      <span><i className="far fa-clock scale5 text-primary mt-2 me-3" /></span>
                      <div>
                        <h4 className="fs-18 font-w500 text-black">Due date </h4>
                        <span>Monday, October 31th, 2020 </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 mt-4 col-sm-12">
                    <div className="mb-3">
                      <span className="fs-18 font-w500">Total Progress 60% </span>
                    </div>
                    <div className="progress default-progress1">
                      <div className="progress-bar progress-animated" style={{width: '40%', height: 14}} role="progressbar">
                        <span className="sr-only">45% Complete </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="project-description">
                  <span className="fs-18 font-w500 mb-3 d-block">PROJECT DESCRIPTION </span>
                  <p className="fs-18 font-w500">
                   

                  </p>
                  
                </div>
               
                
              </div>
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

export default Projectdetails;