import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Proyects from "./pages/Proyects";
import Proyecto1 from './pages/proyectos/Proyecto1';


const Router = () => (
    <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/art" element={<Art />} />
                <Route path="/proyects" element={<Proyects />} />
                <Route path="/proyectos/proyecto1" element={<Proyecto1 />} />
                <Route path="/proyectos/proyecto2" element={<Proyecto1 />} />
            </Routes>
    </BrowserRouter>
);

export default Router;