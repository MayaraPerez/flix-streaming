import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorites";
import MovieDetails from "../pages/MovieDetails";

function RouteApp() {
    return (
        <>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} /> 
                <Route path="/favorites" element={<Favorite />} />
             </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteApp;