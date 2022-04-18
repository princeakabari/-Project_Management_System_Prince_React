import { Outlet, Link } from "react-router-dom";
export const Landing = () => {
  return (
    <div className="authincation h-100">
      <div className="container h-100">
        <div className="row justify-content-center h-100 align-items-center mt-100">
          <div className="col-md-6">
            <div className="authincation-content ">
              <div className="row no-gutters">
                <div className="col-xl-12">
                  <div className="auth-form ">
                    <div className="text-center mb-3 ">
                      <a href="index.html">
                        <img className="" src="assets/images/logo.png" alt />
                      </a>
                    </div>
                    <h1 className="text-center mb-4">Welcome to PMS</h1>
                    <h5 className="text-center ">We help teams move faster</h5>
                    <p className="text-center">
                      The first project management platform built for users by
                      users.
                    </p>
                    <form action="/Login">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                        >
                         User Login{" "}
                        </button>
                      </div>
                    </form>
                    <form action="/AdminLogin">
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block  mt-4"
                        >
                          Admin Login{" "}
                        </button>
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
};

export default Landing;
