import { Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
// import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

import { Row, Col } from "react-bootstrap";
import { SideBar } from "./basecomponents/SideBar";
import Attendance from "./pages/Attendance";

function App() {
  return (
//     <Row>
//       <Col xl={3}>
//         <SideBar/>
// 
//       </Col>
//       <Col xl={9}>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/signin" element={<Signin />} />
      <Route path="/attendance" element={<Attendance />} />
      <Route path="/signup" element={<SideBar />} />
    
    </Routes>
    // </Col>
    // </Row>
  );
}

export default App;
