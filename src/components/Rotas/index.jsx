import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home";
import { ToastContainer } from "react-toastify";
import Pais from "../Pais";
import Navbar from "../Navbar";


function Rotas() {

    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={ <Home />} />
                <Route path="/pais/codigo/:codigoPais" element={<Pais />}/>
            </Routes>
        </BrowserRouter>
    )

}export default Rotas;