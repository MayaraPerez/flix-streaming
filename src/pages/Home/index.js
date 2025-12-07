import Banner from "../../components/Banner";
import NavBar from "../../components/NavBar";
import MovieRow from "../../components/MovieRow";

function Home () {
    return(
        <div>
           <NavBar /> 
            <Banner />
            <MovieRow />
        </div>
    )
}
export default Home;