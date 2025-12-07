import { handlerClick} from "../../utils/search";
import "./style.css";

function NavBar() {
  return (
    <div className="container-itens">
  
      <div 
        className="search"
        onClick={handlerClick}
      >
        <div className="search-icon"></div>
  
        <input 
          type="text" 
          className="search-input"
          placeholder="Search..."
        />
      </div>
  
      <div className="item">Home</div>
      <div className="item">Série</div>
      <div className="item">Movie</div>
      <div className="item">Favorite</div>
    </div>
  );
  
}

export default NavBar;
