import axios from "./Axios";

const getCars = () => {
    return axios.get('/cars');
}

const getCarById = (id) => {
    return axios.get(`/cars/${id}`);
}

export {
    getCars,
    getCarById
}
