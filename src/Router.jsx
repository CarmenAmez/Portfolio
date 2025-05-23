import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Proyects from "./pages/Proyects";
import Proyecto1 from './pages/proyectos/Proyecto1';
import Proyecto2 from './pages/proyectos/Proyecto2';
import Proyecto3 from './pages/proyectos/Proyecto3';
import Proyecto4 from './pages/proyectos/Proyecto4';


const Router = () => (
    <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/art" element={<Art />} />
                <Route path="/proyects" element={<Proyects />} />
                <Route path="/proyectos/proyecto1" element={<Proyecto1 />} />
                <Route path="/proyectos/proyecto2" element={<Proyecto2 />} />
                <Route path="/proyectos/proyecto3" element={<Proyecto3 />} />
                <Route path="/proyectos/proyecto4" element={<Proyecto4 />} />
            </Routes>
    </BrowserRouter>
);

export default Router;