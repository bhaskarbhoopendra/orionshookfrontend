import { Route, Routes } from "react-router-dom";
// import { Navbar } from "./components/Navbar";
import { Home } from "./pages/Home";
import { Signin } from "./pages/Signin";

function App() {
  return (
    <>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </>
  );
}

export default App;
