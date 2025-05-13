import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Art from "./pages/Art";


const Router = () => (
    <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/art" element={<Art />} />
            </Routes>
    </BrowserRouter>
);

export default Router;