
import NavBar from '../../components/navbar/NavBar';
import Featured from '../../components/featured/Featured';
import List from '../../components/list/List';
import './home.scss';
import { TVSeries,Movies } from '../../DummyData'


const Home = () => {
    return (
        <div className="home">
         <NavBar/>
         <Featured type="movie"/>
         <List title=" Continue to watch " data={TVSeries}/>
         <List title=" Continue to watch Movie " data={Movies}/>
        </div>
    )
}

export default Home

