import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Favorite from "../pages/Favorites";
import MovieDetails from "../pages/MovieDetails";
import User from "../pages/User";

function RouteApp() {
    return (
        <>
            <BrowserRouter>
             <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} /> 
                <Route path="/favorites" element={<Favorite />} />
                <Route path="/user" element={<User />} />
             </Routes>
            </BrowserRouter>
        </>
    )
}
export default RouteApp;