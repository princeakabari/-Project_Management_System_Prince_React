import { Outlet, Link } from "react-router-dom"
import {useState} from 'react'
import axios from 'axios'
export const Addrole = () => {const [roleName, setroleName] = useState('')

const roleNameChangeHandler =(e)=>{
    setroleName(e.target.value)
}

var Data ={
    roleName:roleName
}

const submit = (e)=>{
    e.preventDefault()
    axios.post('http://localhost:4001/roles',Data).then(res =>{
        console.log(res.status)
        console.log(res.data)
    })
}
    return <div><div className="header border-bottom">
    <div className="header-content">
      <nav className="navbar navbar-expand">
        <div className="collapse navbar-collapse justify-content-between">
          <div className="header-left">
            <div className="dashboard_bar">Add Role</div>
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
            <li class="breadcrumb-item"><a>Add Role </a></li>
        </ol>
    </div>

    
    <div class="row">
        <div class="col-lg-24">
            <div class="card">
                <div class="card-header">
                    <h4 class="card-title">Add New Role </h4>
                </div>
                <div class="card-body">
                    <div class="form-validation">
                        <form class="needs-validation" onSubmit={submit}>
                            <div class="row">
                                <div class="col-xl-6">
                                    <div class="mb-3 row">
                                        <label class="col-lg-4 col-form-label"
                                            for="validationCustom01">Role Name
                                            <span class="text-danger">* </span>
                                        </label>
                                        <div class="col-lg-6">
                                            <input type="text" class="form-control" id="validationCustom01"
                                                placeholder="Please enter a Role" required="" onChange={(e)=>roleNameChangeHandler(e)}/>
                                            <div class="invalid-feedback">
                                                Please enter a Role
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
  
  export default Addrole;