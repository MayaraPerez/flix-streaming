import { use, useEffect, useState } from "react";
import "./style.css";
import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";

function Favorite() {
  const [favoriteMovie, setFavoriteMovie] = useState([]);

  useEffect(() => {
    const favoriteFilm = localStorage.getItem("@flixMovies");
    setFavoriteMovie(JSON.parse(favoriteFilm) || []);
  }, []);

  function handlerDelete() {

  }
  return (
    <>
      <NavBar />

      <div className="container-favorite">
        <h2>Meus Filmes</h2>
        <ul>
          {favoriteMovie.map((item) => (
            <li key={item.id}>
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
