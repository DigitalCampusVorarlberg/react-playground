import axios from "./Axios";

const getCars = () => {
    return axios.get('/cars');
}

const addCar = (car) => {
    return axios.post('/cars', car);
}

const getCarById = (id) => {
    return axios.get(`/cars/${id}`);
}

const deleteCarById = (id) => {
    return axios.delete(`/cars/${id}`);
}

export {
    getCars,
    addCar,
    getCarById,
    deleteCarById
}
