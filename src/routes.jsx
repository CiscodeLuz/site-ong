import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Escola from "./pages/Escola";
import MaisSobre from "./pages/Escola/ext/maissobre";
import Contato from "./pages/Escola/ext/contato";
import Hospital from "./pages/Hospital/index";
import Servicos from "./pages/Hospital/ext/servicos";
import Casa from "./pages/Casa";
import Sobre from "./pages/Casa/ext/sobre/index.jsx";
import Cursos from "./pages/Casa/ext/cursos/index.jsx";
import CttCasa from "./pages/Casa/ext/contatoCasa/index.jsx";

export default function AppRoutes() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/escola" element={<Escola/>}></Route>
                <Route path="/leiamais" element={<MaisSobre/>}></Route>
                <Route path="/contato" element={<Contato/>}></Route>
                <Route path="/hospital" element={<Hospital/>}></Route>
                <Route path="/servicos" element={<Servicos/>}></Route>
                <Route path="/casa" element={<Casa/>}></Route>
                <Route path="/sobre-casa" element={<Sobre/>}></Route>
                <Route path="/cursos" element={<Cursos/>}></Route>
                <Route path="/contato-casa" element={<CttCasa/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}