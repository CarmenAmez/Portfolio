import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Art from "./pages/Art";
import Proyects from "./pages/Proyects";


const Router = () => (
    <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/art" element={<Art />} />
                <Route path="/proyects" element={<Proyects />} />
            </Routes>
    </BrowserRouter>
);

export default Router;