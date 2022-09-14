import { Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
// import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Sign } from "./pages/Sign";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<Sign />} />
      <Route path="/forms" element={<Forms />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
