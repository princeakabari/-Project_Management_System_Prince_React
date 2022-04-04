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
                    "Lorem ipsum dolor sit ____, consectetur adipiscing elit, sed __ eiusmod
                    tempor incididunt ut ______ et dolore magna aliqua. __ enim ad minim
                    veniam, ____ nostrud exercitation ullamco laboris ____ ut aliquip ex ea
                    _______ consequat. Duis aute irure _____ in reprehenderit in voluptate
                    _____ esse cillum dolore eu ______ nulla pariatur. Excepteur sint
                    ________ cupidatat non proident, sunt __ culpa qui officia deserunt
                    ______ anim id est laborum."
                  </p>
                  <span className="fs-18 font-w500 my-4 d-block">Section 1.10.32 of "de _______
                    Bonorum et Malorum", written __ Cicero in 45 BC </span>
                  <p className="fs-18 font-w500">
                    "Sed ut perspiciatis unde _____ iste natus error sit __________
                    accusantium doloremque laudantium, totam ___ aperiam, eaque ipsa quae __
                    illo inventore veritatis et _____ architecto beatae vitae dicta ____
                    explicabo. Nemo enim ipsam __________ quia voluptas sit aspernatur ___
                    odit aut fugit, sed ____ consequuntur magni dolores eos ___ ratione
                    voluptatem sequi nesciunt. _____ porro quisquam est, qui _______ ipsum
                    quia dolor sit ____, consectetur, adipisci velit, sed ____ non numquam
                    eius modi _______ incidunt ut labore et ______ magnam aliquam quaerat
                    voluptatem. __ enim ad minima veniam, ____ nostrum exercitationem ullam
                    corporis ________ laboriosam, nisi ut aliqui
                  </p>
                </div>
                <div className="message1">
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows={4} placeholder="Type comment here..." defaultValue={""} />
                  <div className="msg-button">
                    <i className="fas fa-smile me-3 " />
                    <i className="fas fa-paperclip me-3" />
                    <a href="javascript:void(0);" className="btn btn-primary"><i className="fas fa-paper-plane me-2 text-white fs-18 btn-rounded" />SEND
                    </a>
                  </div>
                </div>
                <div className="comments">
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="text-uppercase fs-18 font-w500">comment </span>
                    <div>
                      <select className="default-select dashboard-select">
                        <option data-display="Newest Comment">Newest Comment
                        </option><option value={2}>Oldest Comment
                        </option></select>
                    </div>
                  </div>
                </div>
                <div className="user-comment row border-bottom pb-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="d-flex align-items-center">
                      <img src="images/pic1.jpg" />
                      <div className="ms-3">
                        <h4 className="fs-18 font-w600">Kevin Sirait </h4>
                        <span className="fs-16">Lorem ipsum dolor sit ____, consectetur
                          adipiscing elit, sed __ eiusmod </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end">
                    <div className="like-reply">
                      <span className="fs-18 font-w600 me-2"><i className="far fa-thumbs-up text-primary me-2" />45 Like
                      </span>
                      <span className="fs-18 font-w600"><i className="fas fa-reply-all me-2 text-blue" />Reply </span>
                    </div>
                  </div>
                </div>
                <div className="user-comment row border-bottom pb-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="d-flex align-items-start">
                      <img src="images/pic2.jpg" />
                      <div className="ms-3">
                        <h4 className="fs-18 font-w600">Hendric Suneo </h4>
                        <span className="fs-16">Nemo enim ipsam voluptatem ____ voluptas sit
                          aspernatur aut ____ aut fugit, sed quia ____________ magni
                          dolores eos qui _______ voluptatem sequi nesciunt. Neque
                          _____ quisquam est, qui dolorem _____ quia dolor sit amet,
                          ___________, adipisci velit, sed quia ___ numquam eius modi
                          tempora ________ ut labore et dolore ______ aliquam quaerat
                          voluptatem. Ut ____ ad minima ve </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end">
                    <div className="like-reply">
                      <span className="fs-18 font-w600 me-2"><i className="far fa-thumbs-up text-primary me-2" />45 Like
                      </span>
                      <span className="fs-18 font-w600"><i className="fas fa-reply-all me-2 text-blue" />Reply </span>
                    </div>
                  </div>
                </div>
                <div className="user-comment row border-bottom pb-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="d-flex align-items-start ms-5">
                      <img src="images/pic2.jpg" />
                      <div className="ms-3">
                        <h4 className="fs-18 font-w600">Kesha Jean </h4>
                        <span className="fs-16">m quia dolor sit ____, consectetur, adipisci
                          velit, sed ____ non numquam eius modi _______ incidunt ut
                          labore et ______ magnam aliquam quaerat voluptatem. __ enim
                          ad minima ve </span>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3 d-flex justify-content-end">
                    <div className="like-reply">
                      <span className="fs-18 font-w600 me-2"><i className="fas fa-star text-orange" /></span>
                      <span className="fs-18 font-w600"><i className="fas fa-star text-orange" /></span>
                    </div>
                  </div>
                </div>
                <div className="user-comment row border-bottom pb-3 align-items-center">
                  <div className="col-lg-9">
                    <div className="d-flex align-items-start ms-5">
                      <img src="images/pic3.jpg" />
                      <div className="ms-3">
                        <h4 className="fs-18 font-w600">Kesha Jean </h4>
                        <span className="fs-16">m quia dolor sit ____, consectetur, adipisci
                          velit, sed ____ non numquam eius modi _______ incidunt ut
                          labore et ______ magnam aliquam quaerat voluptatem. __ enim
                          ad minima ve </span>
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
  </div>
</div>

    
</div>
    
        ;
};

export default Projectdetails;