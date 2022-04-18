import { Outlet, Link } from "react-router-dom";
export const Adminlogin = () => {
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
                    <h4 className="text-center mb-4">Admin Login</h4>
                    <form action="/Home">
                     
                      <div className="mb-3">
                        <label className="mb-1">
                          <strong>Name</strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue="Password"
                        />
                      </div>
                      <div className="mb-3">
                        <label className="mb-1">
                          <strong>Password </strong>
                        </label>
                        <input
                          type="password"
                          className="form-control"
                          defaultValue="Password"
                        />
                      </div>
                      <div className="row d-flex justify-content-between mt-4 mb-2"></div>
                      <div className="text-center">
                        <button
                          type="submit"
                          className="btn btn-primary btn-block"
                          
                        >
                          Login{" "}
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

export default Adminlogin;
