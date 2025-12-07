import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorites";
import Filmes from "../pages/Filmes";

function RouteApp() {
    return (
        <>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<Filmes />} /> 
                <Route path="/favorites" element={<Favorite />} />
             </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteApp;