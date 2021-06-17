import axios from "axios";

const getForecast = () => {
    return axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weatherforecast`);
}

const getForecastById = (id) => {
    return axios.get(`${process.env.REACT_APP_WEATHER_API_URL}/weatherforecast/${id}`);
}

export {
    getForecast,
    getForecastById
}
