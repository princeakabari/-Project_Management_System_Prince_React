import { Outlet, Link } from "react-router-dom";

export const Home = () => {
  return <div><div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">Dashboard</div>
          </div>

          <Link type="button" className="btn btn-secondary" to="/login">Lougout </Link>

        </div>
      </nav>
    </div>
  </div>

    <div className="content-body">
      <div className="container-fluid">

        <div className="row">
        <div className="col-xl-24">
            <div className="row">
              <div className="col-xl-6 col-sm-6 col-xxl-12">
                <div className="card bg-progradient manage-project">
                  <div className="card-body">
                    <div className="row align-items-center">
                      <div className="col-xl-6 col-12">
                        <h3 className="fs-24 font-w600 text-white">Good afternoon, Prince</h3>
                        <h4 className="fs-24 font-w700 text-white">Welcome to Project Management System
                        </h4>
                        <span className="fs-16 text-white d-block">Let Work With Us </span>
                      </div>
                      <div className="col-xl-6 col-12 text-end">
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-sm-6 col-xxl-12">
              </div>
            </div>
          </div>
          
         
        
          

          <div className="col-xl-12">


            <div className="row">
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body d-flex px-4 pb-0 justify-content-between">
                    <div>
                      <h4 className="fs-18 font-w600 mb-4 text-nowrap">Total Projects </h4>
                      <div className="d-flex align-items-center">
                        <h2 className="fs-32 font-w700 mb-0">10 </h2>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body px-4">
                    <h4 className="fs-18 font-w600 mb-5 text-nowrap">Complete Project </h4>
                    <div className="progress default-progress">
                      <div className="progress-bar progress-animated" style={{ width: '90%', height: 10 }} role="progressbar">
                        <span className="sr-only">45% Complete </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-end mt-1 justify-content-between">
                      <span><small className="text-primary">{100 - 70} </small> left from target </span>
                      <h4 className="mb-0 fs-32 font-w800">70%</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body d-flex px-4 pb-0 justify-content-between">
                    <div>
                      <h4 className="fs-18 font-w600 mb-4 text-nowrap">Completed Project </h4>
                      <div className="d-flex align-items-center">
                        <h2 className="fs-32 font-w700 mb-0">7 </h2>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body d-flex px-4 pb-0 justify-content-between">
                    <div>
                      <h4 className="fs-18 font-w600 mb-4 text-nowrap">Pendding Project </h4>
                      <div className="d-flex align-items-center">
                        <h2 className="fs-32 font-w700 mb-0">3</h2>

                      </div>
                    </div>

                  </div>
                </div>
              </div>




            </div>
          </div>
          <div className="col-xl-12">


            <div className="row">
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body d-flex px-4 pb-0 justify-content-between">
                    <div>
                      <h4 className="fs-18 font-w600 mb-4 text-nowrap">Total Tasks </h4>
                      <div className="d-flex align-items-center">
                        <h2 className="fs-32 font-w700 mb-0">70 </h2>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body px-4">
                    <h4 className="fs-18 font-w600 mb-5 text-nowrap">Complete Tasks</h4>
                    <div className="progress default-progress">
                      <div className="progress-bar progress-animated" style={{ width: '90%', height: 10 }} role="progressbar">
                        <span className="sr-only">45% Complete </span>
                      </div>
                    </div>
                    <div className="d-flex align-items-end mt-1 justify-content-between">
                      <span><small className="text-primary">{100 - 70} </small> left from target </span>
                      <h4 className="mb-0 fs-32 font-w800">70%</h4>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body d-flex px-4 pb-0 justify-content-between">
                    <div>
                      <h4 className="fs-18 font-w600 mb-4 text-nowrap">Completed Tasks </h4>
                      <div className="d-flex align-items-center">
                        <h2 className="fs-32 font-w700 mb-0">30 </h2>

                      </div>
                    </div>

                  </div>
                </div>
              </div>
              <div className="col-xl col-sm">
                <div className="card">
                  <div className="card-body d-flex px-4 pb-0 justify-content-between">
                    <div>
                      <h4 className="fs-18 font-w600 mb-4 text-nowrap">Pendding Tasks </h4>
                      <div className="d-flex align-items-center">
                        <h2 className="fs-32 font-w700 mb-0">40</h2>

                      </div>
                    </div>

                  </div>
                </div>
              </div>




            </div>
          </div>
          

          <div className="col-xl-6 col-sm-12">
            <div className="row">
              <div className="col-xl-12">
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-sm-12">
            <div className="row">
              <div className="col-xl-12">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
    ;
};

export default Home;