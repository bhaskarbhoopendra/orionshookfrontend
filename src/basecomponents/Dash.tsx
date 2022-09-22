import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import HR_Document from "../pages/HR_Document";
import Attendance from "../pages/Attendance";
import Forms from "../pages/Forms";
import { Home } from "../pages/Home";
import Home1 from "../pages/Home-1";
import Home2 from "../pages/Home-2";
import Home3 from "../pages/Home-3";
import Leave from "../pages/Leave";

export default function Dash() {
  return (
    <Container fluid className="content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forms" element={<Forms />} />
        <Route path="/attendance" element={<Attendance />} />
        <Route path="/hrDocument" element={<HR_Document />} />
        <Route path="/leave" element={<Leave />} />
        <Route path="/Home-1" element={<Home1 />} />
        <Route path="/Home-2" element={<Home2 />} />
        <Route path="/Home-3" element={<Home3 />} />
      </Routes>
    </Container>
  );
}
