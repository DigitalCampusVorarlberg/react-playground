import axios from "./Axios";

const getCars = () => {
    return axios.get('/cars');
}

export {
    getCars
}
