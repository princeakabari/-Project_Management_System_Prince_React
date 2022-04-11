import { Outlet, Link } from "react-router-dom";

export const Login = () => {

  return (
    <>

<div className="vh-100">
  <div className="authincation h-100">
    <div className="container h-100">
      <div className="row justify-content-center h-100 align-items-center">
        <div className="col-md-6">
          <div className="authincation-content">
            <div className="row no-gutters">
              <div className="col-xl-12">
                <div className="auth-form">
                  <div className="text-center mb-3">
                    <a href="index.html"><img src="images/logo-full.png" alt /></a>
                  </div>
                  <h4 className="text-center mb-4">Sign in your account </h4>
                  <form action="/Home">
                    <div className="mb-3">
                      <label className="mb-1"><strong>Email </strong></label>
                      <input type="email" className="form-control" defaultValue="hello@example.com" />
                    </div>
                    <div className="mb-3">
                      <label className="mb-1"><strong>Password </strong></label>
                      <input type="password" className="form-control" defaultValue="Password" />
                    </div>
                    <div className="row d-flex justify-content-between mt-4 mb-2">
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary btn-block">Sign Me In </button>
                       
                    </div>
                  </form>
                  <div className="new-account mt-3">
                    <p>Don't have an account? <a className="text-primary" href="page-register.html">Sign
                        up </a></p>
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

      <Outlet />
    </>


  )
}
export default Login;