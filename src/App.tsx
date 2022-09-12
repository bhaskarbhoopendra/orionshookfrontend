import { Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Forms from "./pages/Forms";
import { Home } from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form" element={<Form />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}

export default App;
