import { Outlet, Link } from "react-router-dom";
export const  Addtask = () => {
    return <div><div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">Add Task</div>
          </div>
        </div>
      </nav>
    </div>
  </div>

  <div className="content-body">


<div className="container-fluid">
<div class="row page-titles">
        <ol class="breadcrumb">
            <li class="breadcrumb-item active"><Link to="/Home">Home</Link></li>
            <li class="breadcrumb-item"><a>Add Task </a></li>
        </ol>
    </div>

    
    <div class="row">
        <div class="col-lg-24">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Add New Task </h4>
                </div>
                <div class="card-body">
                    <div class="form-validation">
                        <form class="needs-validation" novalidate="">
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="mb-3 row">
                                        <label class="col-lg-4 col-form-label"
                                            for="validationCustom01">Task
                                            <span class="text-danger">* </span>
                                        </label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Enter a Task.." required="" />
                                            <div class="invalid-feedback">
                                                Please enter a Task.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <label class="col-lg-4 col-form-label"
                                            for="validationCustom02">Task Info <span class="text-danger">*
                                            </span>
                                        </label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" id="validationCustom02"
                                                placeholder="Task Info.." required="" />
                                            <div class="invalid-feedback">
                                                Please enter a Email.
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div class="mb-3 row">
                                        <label class="col-lg-4 col-form-label"
                                            for="validationCustom04">Suggestions <span class="text-danger">*
                                            </span>
                                        </label>
                                        <div class="col-lg-6">
                                            <textarea class="form-control" id="validationCustom04" rows="5"
                                                placeholder="What would you like to see?"
                                                required=""></textarea>
                                            <div class="invalid-feedback">
                                                Please enter a Suggestions.
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mb-3 row">
                                        <div class="col-lg-8 ms-auto">
                                            <button type="submit" class="btn btn-primary">Submit </button>
                                        </div>
                                    </div>
                                </div>
                               
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
;
};
  
  export default Addtask;