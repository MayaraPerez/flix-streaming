import { useEffect, useRef, useState } from "react";
import { GetAllMovies } from "../../services/movie";
import { scrollLeft, scrollRight } from "../../utils/BtnScroll";
import { Link } from "react-router-dom";
import "./style.css";


function Banner() {
  const [movies, setMovies] = useState([]);
  const rowRef = useRef(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        const data = await GetAllMovies();
        setMovies(data);
      } catch (error) {
        console.log("Erro ao carregar filmes", error);
      }
    }
    loadMovies();
  }, []);

  return (
    <div className="container-banner" ref={rowRef}>
      <h2>Movies highlights</h2>

      <button className="arrow left" onClick={() => scrollLeft(rowRef)}> ◀ </button>

      <button className="arrow right" onClick={() => scrollRight(rowRef)}> ▶ </button>

      <div className="banner-posters">
        {movies
          //.filter((item) => item.vote_average > 8)
          .map((item) => {
            return (
              <Link to={`/filme/${item.id}`} className="btn-acessar">
                <div className="poster-item" key={item.id}>
                <img
                  className="banner-poster"
                  src={`http://image.tmdb.org/t/p/w300/${item.poster_path}`}
                  alt={item.title}
                />
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default Banner;
