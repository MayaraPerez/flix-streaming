import { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { GetAllMovies } from "../../services/movie";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await GetAllMovies();
        console.log("FFFF", data);
        const filterMovie = data.find((item) => item.id == id);
        setMovie(filterMovie);
        console.log("FFFFF", filterMovie);
      } catch (error) {
        console.log("Filme não encontrado", error);
      }
    }
    load();
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="container">
      <div className="poster-movie" id={movie.id}>
        <img
          src={`http://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={movie.title}
        ></img>
      </div>

      <div className="details-movie">
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}
export default MovieDetails;
