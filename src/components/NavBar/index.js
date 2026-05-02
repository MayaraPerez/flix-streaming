import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

import "./style.css";
import { useEffect, useState } from "react";
import { GetMovie } from "../../services/movie";

function NavBar() {
  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [results, setResults] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(timeout);
    };
  }, [search]);

  useEffect(() => {
    if (!debouncedSearch) {
      setResults([]);
      return;
    }

    async function loadMovie() {
      try {
        const data = await GetMovie(debouncedSearch);

        const top3 = data
          .filter((m) => m.release_date)
          .sort((a, b) => new Date(b.release_date) - new Date(a.release_date))
          .slice(0, 3);

        setResults(top3);
      } catch (error) {
        console.log("Erro", error);
      }
    }

    loadMovie();
  }, [debouncedSearch]);

  return (
    <>
      <div className="container">
        <div className="container-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="search-container">
          <div className={`search ${search ? "active" : ""}`}>
            <div className="search-icon"></div>

            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />

            {results.length > 0 && (
              <div className="dropdown">
                {results.map((movie) => (
                  <div
                    key={movie.id}
                    className="btn-acessar"
                    onClick={() => {
                      setSearch(movie.title);
                      setResults([]);
                      navigate(`/movie/${movie.id}`);
                      console.log('clickei filme', movie.title);
                    }}
                  >
                    <div className="dropdown-item">
                      <img
                        src={`https://image.tmdb.org/t/p/w92${movie.poster_path}`}
                        alt={movie.title}
                      />
                      <span>{movie.title}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link className="link" to={"/"}>
            <div className="item">Home</div>
          </Link>
          <Link className="link" to={"/favorites"}>
            <div className="item">Favorite</div>
          </Link>
        </div>

        <div className="container-user">
          <Link to={`/user/`}>
            <div className="myUser">
              <FontAwesomeIcon className="icon" icon={faUser} />
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default NavBar;
