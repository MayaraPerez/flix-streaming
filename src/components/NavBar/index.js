import { Link } from "react-router-dom";
import { handlerClick } from "../../utils/search";
import "./style.css";

function NavBar() {
  return (
    <div className="container-itens">
      <div className="search" onClick={handlerClick}>
        <div className="search-icon"></div>

        <input type="text" className="search-input" placeholder="Search..." />
      </div>

      <Link className="link" to={"/"}>
        <div className="item">Home</div>
      </Link>
      <Link className="link" to={"/favorites"}>
        <div className="item">Favorite</div>
      </Link>
    </div>
  );
}

export default NavBar;
