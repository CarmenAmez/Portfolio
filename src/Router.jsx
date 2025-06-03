import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Proyects from "./pages/Proyects";
import Proyecto1 from './pages/proyects/Proyecto1';
import Proyecto2 from './pages/proyects/Proyecto2';
import Proyecto3 from './pages/proyects/Proyecto3';
import Proyecto4 from './pages/proyects/Proyecto4';


const Router = () => (
    <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/art" element={<Art />} />
                <Route path="/proyects" element={<Proyects />} />
                <Route path="/proyects/proyecto1" element={<Proyecto1 />} />
                <Route path="/proyects/proyecto2" element={<Proyecto2 />} />
                <Route path="/proyects/proyecto3" element={<Proyecto3 />} />
                <Route path="/proyects/proyecto4" element={<Proyecto4 />} />
            </Routes>
    </BrowserRouter>
);

export default Router;