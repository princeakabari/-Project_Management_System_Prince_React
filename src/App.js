import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Navbar}from "./components/Navbar";


import {User} from "./components/User";
import {Projects} from "./components/Projects";
import {Home} from "./components/Home";
import Adduser from "./components/Adduser";
import Addprojects from "./components/Addprojects";
import Projectdetails from "./components/Projectdetails";
import Addtask from "./components/Addtask";
import Tasklist from "./components/Tasklist";
import Addmodules from "./components/Addmodules";
import Moduleslist from "./components/Moduleslist";
import Addteam from "./components/Addteam";
import Teamlist from "./components/Teamlist";
import Newproject from "./components/Newproject";
// import {Landingpage} from "./components/Landingpage";
// import {Login} from "./components/Login";


export default function App() {
  return (
    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>         
        <Route path="Home" element={<Home />}/>      
          
        {/* <Route path="Login" element={<Login/>} /> */}
        <Route path="User" element={<User/>} />
        <Route path="Adduser" element={<Adduser/>} />
        <Route path="Addprojects" element={<Addprojects/>} />
        <Route path="Projects" element={<Projects/>} />
        <Route path="Projectdetails" element={<Projectdetails/>} />
        {/* <Route path="Landingpage" element={<Landingpage/>} /> */}
        <Route path="Addtask" element={<Addtask/>} />
        <Route path="Tasklist" element={<Tasklist/>} />
        <Route path="Addmodules" element={<Addmodules/>} />
        <Route path="Moduleslist" element={<Moduleslist/>} />
        <Route path="Addteam" element={<Addteam/>} />
        <Route path="Teamlist" element={<Teamlist/>} />
        <Route path="Addrole" element={<Teamlist/>} />
        <Route path="Rolelist" element={<Teamlist/>} />
        <Route path="Newproject" element={<Newproject/>} />
        

        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));