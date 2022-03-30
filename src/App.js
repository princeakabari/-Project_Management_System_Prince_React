import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import {Navbar}from "./components/Navbar";


import {User} from "./components/User";
import {Projects} from "./components/Projects";
import {Home} from "./components/Home";
import Adduser from "./components/Adduser";
import Addprojects from "./components/Addprojects";
import Projectdetails from "./components/Projectdetails";
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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
ReactDOM.render(<App />, document.getElementById("root"));