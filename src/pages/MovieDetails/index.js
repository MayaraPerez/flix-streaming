import { useEffect, useState } from "react";
import "./style.css";
import { useParams } from "react-router-dom";
import { GetAllMovies } from "../../services/movie";
import NavBar from "../../components/NavBar";

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await GetAllMovies();
        const filterMovie = data.find((item) => item.id == id);
        setMovie(filterMovie);
      } catch (error) {
        console.log("Filme não encontrado", error);
      }
    }
    load();
  }, [id]);

  if (!movie) {
    return <div>Carregando...</div>;
  }

  function saveToFavorite() {
    const myListMovie = localStorage.getItem('@flixMovies')

    let moviesSaved = JSON.parse(myListMovie) || [];

    const hasFilmes = moviesSaved.some((moviesSaved) => moviesSaved.id === movie.id )
     
    if(hasFilmes){
      alert('Esse Filme já esta na lista')
      return
    }
    moviesSaved.push(movie)
    localStorage.setItem("@flixMovies", JSON.stringify(moviesSaved))
    alert('Filme Salvo com sucesso')
  
  }

  return (
    <>
      <NavBar />

      <div className="movie-details-page">
        <div className="movie-poster">
          <img
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt={movie.title}
          />
        </div>

        <div className="movie-info">
          <h1 className="movie-title">{movie.title}</h1>
          <span className="movie-year">{movie.release_date.split("-")[0]}</span>

          <p className="movie-overview">{movie.overview}</p>

          <div className="movie-stats">
            <div className="stat-card">
              <img
                className="stat-icon"
                src="https://cdn-icons-png.flaticon.com/512/616/616655.png"
                alt="star"
              />
              <span>Popularity: {movie.popularity.toFixed(1)}</span>
            </div>

            <div className="stat-card">
              <img
                className="stat-icon"
                src="https://cdn-icons-png.flaticon.com/512/616/616655.png"
                alt="star"
              />
              <span>Rating: {movie.vote_average}</span>
            </div>

            <div className="stat-card">
              <img
                className="stat-icon"
                src="https://cdn-icons-png.flaticon.com/512/1384/1384060.png"
                alt={`trailer ${movie.title}`}
              />
              <a
                target="_blank"
                rel="external noreferrer"
                href={`https://www.youtube.com/results?search_query=${movie.title} trailer`}
              >
                <span>Trailer</span>
              </a>
            </div>
            <div className="stat-card">
              <img
                className="stat-icon"
                src=""
                alt={`trailer ${movie.title}`}
                onClick={() => saveToFavorite()}
              />
                <button onClick={saveToFavorite}>Salvar</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieDetails;
