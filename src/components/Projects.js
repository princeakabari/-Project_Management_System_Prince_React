import { Outlet, Link } from "react-router-dom";

export const Projects = () => {
  return <div><div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">Projects</div>
          </div>
        </div>
      </nav>
    </div>
  </div>
   <div className="content-body">
  <div className="container-fluid">
    <div className="row page-titles">
      <ol className="breadcrumb">
        <li className="breadcrumb-item active"><a href="/Home">Home </a></li>
        <li className="breadcrumb-item"><a>Project List</a></li> 
        
        
      </ol>
      
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
                    <th style={{width: 50}}>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                        <input type="checkbox" className="form-check-input" id="checkAll" required />
                        <label className="form-check-label" htmlFor="checkAll" />
                      </div>
                    </th>
                    <th><strong>ROLL NO. </strong></th>
                    <th><strong>NAME </strong></th>
                    <th><strong>Email </strong></th>
                    <th><strong>Date </strong></th>
                    <th><strong>Status </strong></th>
                    <th><strong /></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                        <input type="checkbox" className="form-check-input" id="customCheckBox2" required />
                        <label className="form-check-label" htmlFor="customCheckBox2" />
                      </div>
                    </td>
                    <td><strong>542 </strong></td>
                    <td>
                      <div className="d-flex align-items-center"><img src="images/avatar/1.jpg" className="rounded-lg me-2" width={24} alt /> <span className="w-space-no">Dr. Jackson </span></div>
                    </td>
                    <td><a href="../cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="492c31282439252c092c31282439252c672a2624">[email&nbsp;protected]
                      </a> </td>
                    <td>01 August 2020 </td>
                    <td>
                      <div className="d-flex align-items-center"><i className="fa fa-circle text-success me-1" /> Successful
                      </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                        <input type="checkbox" className="form-check-input" id="customCheckBox3" required />
                        <label className="form-check-label" htmlFor="customCheckBox3" />
                      </div>
                    </td>
                    <td><strong>542 </strong></td>
                    <td>
                      <div className="d-flex align-items-center"><img src="images/avatar/2.jpg" className="rounded-lg me-2" width={24} alt /> <span className="w-space-no">Dr. Jackson </span></div>
                    </td>
                    <td><a href="../cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="fb9e839a968b979ebb9e839a968b979ed5989496">[email&nbsp;protected]
                      </a> </td>
                    <td>01 August 2020 </td>
                    <td>
                      <div className="d-flex align-items-center"><i className="fa fa-circle text-danger me-1" /> Canceled </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="form-check custom-checkbox checkbox-success check-lg me-3">
                        <input type="checkbox" className="form-check-input" id="customCheckBox4" required />
                        <label className="form-check-label" htmlFor="customCheckBox4" />
                      </div>
                    </td>
                    <td><strong>542 </strong></td>
                    <td>
                      <div className="d-flex align-items-center"><img src="images/avatar/3.jpg" className="rounded-lg me-2" width={24} alt /> <span className="w-space-no">Dr. Jackson </span></div>
                    </td>
                    <td><a href="../cdn-cgi/l/email-protection.html" className="__cf_email__" data-cfemail="75100d141805191035100d14180519105b161a18">[email&nbsp;protected]
                      </a> </td>
                    <td>01 August 2020 </td>
                    <td>
                      <div className="d-flex align-items-center"><i className="fa fa-circle text-warning me-1" /> Pending </div>
                    </td>
                    <td>
                      <div className="d-flex">
                        <a href="#" className="btn btn-primary shadow btn-xs sharp me-1"><i className="fas fa-pencil-alt" /></a>
                        <a href="#" className="btn btn-danger shadow btn-xs sharp"><i className="fa fa-trash" /></a>
                      </div>
                    </td>
                  </tr>
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
    ;
};

export default Projects;