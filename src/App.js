import './App.css';
import Navbar from "./components/Navbar/Navbar";
import Layout from "./components/Layout/Layout";
import {useEffect, useState} from "react";
import axios from "axios";
import Starship from "./components/Starship/Starship";

function App() {

    const [starships, setStarships] = useState([]);
    useEffect( () => {
        axios.get('https://swapi.dev/api/starships').then(result => {
            setStarships(result.data.results);
        });
    }, []);


    const items = [{title: "Start", url: "/"},{title: "Google", url: "https://google.at"}];

  return (
    <div className="App">
        <Navbar logoUrl="https://logoipsum.com/logo/logo-24.svg" menuItems={items} />
        <Layout>
            <h1>Welcome</h1>
            <p>lasd as fölkasjdfklsf lköasdfas df</p>
            <div className="starships">
                {starships.length === 0 &&
                    <h2>Loading...</h2>
                }
                {starships.map(ship => {
                    return <Starship key={ship.name} data={ship} />
                })}
            </div>
        </Layout>
    </div>
  );
}

export default App;
