import { Route, Routes, useLocation } from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import Dash from "./basecomponents/Dash";
import SideBar from "./basecomponents/SideBar";
import "./styles/app.css";

function App() {
  const location = useLocation();
  localStorage.setItem("user", "1");
  const pathName = location.pathname;
  console.log({ pathName });
  const localStorageUser: any = localStorage.getItem("user");
  const isUserAvaiable = JSON.parse(localStorageUser);
  console.log({ isUserAvaiable });
  return (
    <div>
      {isUserAvaiable !== 1 ? (
        <Routes>
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      ) : (
        <div className="d-flex">
          <SideBar />
          <Dash />
        </div>
      )}
    </div>
  );
}

export default App;
