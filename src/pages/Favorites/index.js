import { useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import { toast } from "react-toastify";

function Favorite() {
  const [favoriteMovie, setFavoriteMovie] = useState([]);

  useEffect(() => {
    const favoriteFilm = localStorage.getItem("@flixMovies");
    setFavoriteMovie(JSON.parse(favoriteFilm) || []);
  }, []);

  function handlerDelete(id) {
    const IdFavoritesFilme = favoriteMovie.filter((item) => item.id !== id);

    if(favoriteMovie) {
      localStorage.setItem("@flixMovies", JSON.stringify(IdFavoritesFilme));
      setFavoriteMovie(IdFavoritesFilme);
      toast.success("Filme removido com sucesso");
    }
  }
  return (
    <>
      <NavBar />

      <div className="container-favorite">
        <ul>
          {favoriteMovie.map((item) => (
            <li key={item.id} className="favorite-item">
              <div className="favoritePoster">
                <img
                  className="posterSelected"
                  src={`http://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt={item.title}
                />
              </div>

              <span>{item.title}</span>

              <div className="actions">
                <Link to={`/movie/${item.id}`}>Ver Detalhes</Link>

                <button onClick={() => handlerDelete(item.id)}>Remover</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
export default Favorite;
