import { Link } from "react-router-dom";
import { handlerClick } from "../../utils/search";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import logo from "../../logo.png";

import "./style.css";

function NavBar() {
  return (
    <>
      <div className="container">
        <div className="container-logo">
          <img src={logo} alt="logo" />
        </div>

        <div className="container-itens">
          <div className="search" onClick={handlerClick}>
            <div className="search-icon"></div>
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
            />
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
