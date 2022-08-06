import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Rocket from "./Rocket";
import Modal from "./components/Modal";
import ModalRocket from "./components/ModalRocket.js";
import Error404 from "./components/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Rocket" element={<Rocket/>} />
        <Route path="/Modal/:id" element={<Modal/>}/>
        <Route path="/ModalRocket/:id" element={<ModalRocket/>}/>
        <Route path="*" element={<Error404/>}/> 



      </Routes>
    </BrowserRouter>
  );
}
export default App;
