import ReactDOM from "react-dom";
import { BrowserRouter ,Route, Routes }from 'react-router-dom';
import {Navbar}from "./components/Navbar";
import {Usernavbar}from "./components/Usernavbar";


import User from "./components/User";
import Projects from "./components/Projects";
import {Home} from "./components/Home";
import {Userhome} from "./components/Userhome";
import Addprojects from "./components/Addprojects";
import Projectdetails from "./components/Projectdetails";
import Addtask from "./components/Addtask";
import Task from "./components/Task";
import Addmodules from "./components/Addmodules";
import Moduleslist from "./components/Moduleslist";
import AddTeam from "./components/AddTeam";
import Teamlist from "./components/Teamlist";
import Newproject from "./components/Newproject";
import Rolelist from "./components/Rolelist";

import Addrole from "./components/Addrole";
import EditUser from "./components/EditUser";
import Adduser from "./components/Adduser";
import Login from "./components/Login";
import EditProjects from "./components/EditProjects";
import EditTask from "./components/Edittask";
import { Adminlogin } from "./components/Adminlogin";
import Landing from "./components/Landing";







export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar /> }>         
        <Route path="Home" element={<Home />}/>      
          
        {/* <Route path="Login" element={<Login/>} /> */}
        
        {/* <Route path="Adduser" element={<Adduser/>} /> */}
        <Route path="Addprojects" element={<Addprojects/>} />
        <Route path="Projects" element={<Projects/>} />
        <Route path="Projectdetails" element={<Projectdetails/>} />
        {/* <Route path="Landingpage" element={<Landingpage/>} /> */}
        <Route path="Addtask" element={<Addtask/>} />
        <Route path="Task" element={<Task/>} />
        <Route path="Addmodules" element={<Addmodules/>} />
        <Route path="Moduleslist" element={<Moduleslist/>} />
        <Route path="AddTeam" element={<AddTeam/>} />-
        <Route path="Teamlist" element={<Teamlist/>} />
        <Route path="Addrole" element={<Addrole/>} />
        <Route path="Rolelist" element={<Rolelist/>} />
        <Route path="Newproject" element={<Newproject/>} />


        <Route path='User' element={<User/>}/>
        <Route path='Adduser' element={<Adduser/>}/>
        <Route path='EditUser' element={<EditUser/>}/>
       
        <Route path='EditProjects' element={<EditProjects/>}  />
        <Route path='Edittask' element={<EditTask/>}  />
        
       
      
         

        </Route> <Route path='Login' element={<Login/>} />
       <Route path="/Userhome" element={<Userhome /> }></Route>
       <Route path="/Usernavbar" element={<Usernavbar /> }></Route>
       <Route path="/Adminlogin" element={<Adminlogin /> }></Route>
       <Route path="/Landing" element={<Landing /> }></Route>

      </Routes>
    </BrowserRouter>
    
  );
}
ReactDOM.render(<App />, document.getElementById("root"));