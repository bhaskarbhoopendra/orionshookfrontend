import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

import { Home } from "./pages/Home";


function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
    </>
  );
}

export default App;





// function App() {
//   return (
//     <ShoppingCartProvider>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />}></Route>
//         <Route path="/store" element={<Store />}></Route>
//         <Route path="/about" element={<About />}></Route>
//         <Route path="/backend" element={<Backend />}></Route>
//         <Route path="/signup" element={<Signup />}></Route>
//         <Route path="/store/Orderplace" element={<Orderplace />}></Route>
//       </Routes>
//     </ShoppingCartProvider>
//   );
// }

// export default App;

