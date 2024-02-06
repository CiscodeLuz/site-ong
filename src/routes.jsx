import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
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
        <HashRouter>
            <Routes>
                <Route path="site-ong/#/" element={<Home/>}></Route>
                <Route path="site-ong/#/escola" element={<Escola/>}></Route>
                <Route path="site-ong/#/leiamais" element={<MaisSobre/>}></Route>
                <Route path="site-ong/#/contato" element={<Contato/>}></Route>
                <Route path="site-ong/#/hospital" element={<Hospital/>}></Route>
                <Route path="site-ong/#/servicos" element={<Servicos/>}></Route>
                <Route path="site-ong/#/casa" element={<Casa/>}></Route>
                <Route path="site-ong/#/sobre-casa" element={<Sobre/>}></Route>
                <Route path="site-ong/#/cursos" element={<Cursos/>}></Route>
                <Route path="site-ong/#/contato-casa" element={<CttCasa/>}></Route>
            </Routes>
        </HashRouter>
    )
}