import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import Filmes from "../../components/MovieRow"
import './style.css';

function Home () {
    return(
        <div className="container">
           <NavBar /> 
            <Banner />
            <Filmes />
        </div>
    )
}
export default Home;