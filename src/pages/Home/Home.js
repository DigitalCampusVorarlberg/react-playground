import {useEffect, useState} from "react";
import {getForecast, getForecastById} from "../../services/WeatherService";
import moment from "moment";

function Home() {

    const [forecast, setForecast] = useState([]);
    useEffect(() => {
        getForecastById(moment().format('YYYY-MM-DD')).then(result => {
            setForecast(result.data);
        })
    }, []);

    return (
        <div>
            <h1>Welcome Home</h1>
            <h2>Weather forecast</h2>
            <ul>
                {forecast.map(day => {
                    return (
                        <li>
                            <strong>{day.date}</strong>
                            <span>{day.summary}</span>
                            <span>{day.temperatureC} °</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Home;
