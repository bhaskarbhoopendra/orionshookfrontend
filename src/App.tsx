import { Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
// import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
