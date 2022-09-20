import { Routes, Route } from "react-router-dom";
import About from "../pages/About";
import Attendance from "../pages/Attendance";
import Forms from "../pages/Forms";
import { Home } from "../pages/Home";
import { Signin } from "../pages/Signin";
import { Signup } from "../pages/Signup";


export default function Dash(){
    return (
        <div> <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route  path="/about" element={<About/>} />
      {/* <Route  path="/Pages" element={} />
      <Route  path="/faq" element={} />
      <Route  path="/contact" element={} />
      <Route  path="/Home-1" element={} />
      <Route  path="/Home-2" element={} />
      <Route  path="/Home-3" element={} />
      <Route  path="/Page-1" element={} />
      <Route  path="/Page-2" element={} />
      <Route  path="/page-1" element={} />
      <Route  path="/page-2" element={} />
      <Route  path="/page-3" element={} />
      <Route  path="/page-4" element={} /> */}
      {/* <Route  path="/signup" ={() => <Signup />} /> */}
            
      </Routes></div>
    )
}