import { useEffect, useState } from "react";
import { GetAllMovies } from "../../services/movie";
import { Link } from "react-router-dom";
import "./style.css";

function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [movies, setMovies] = useState([]);

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

  useEffect(() => {
    if (movies.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === movies.length - 1 ? 0 : prev + 1));
    }, 9000);

    return () => clearInterval(interval);
  }, [movies]);

  const currentMovie = movies[currentIndex];

  return (
    <div className="banner-container">
      {currentMovie && (
        <Link to={`/filme/${currentMovie.id}`}>
          <img
            className="banner-img"
            src={`http://image.tmdb.org/t/p/original/${currentMovie.backdrop_path}`}
            alt={currentMovie.title}
          />
        </Link>
      )}

      <div className="banner-title">
        <h2>{currentMovie?.title}</h2>
        
        <p>{currentMovie?.overview}</p>

        <a
          className="btn-trailer"
          target="_blank"
          rel="external"
          href={`https://www.youtube.com/results?search_query=${currentMovie?.title} trailer`}
        >
          Trailer
        </a>
      </div>
    </div>
  );
}

export default Banner;
