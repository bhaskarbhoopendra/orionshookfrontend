import { Route, Routes } from "react-router-dom";
import Forms from "./pages/Forms";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}

export default App;
