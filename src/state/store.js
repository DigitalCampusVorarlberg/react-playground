import create from 'zustand'
import {getCars} from "../services/HttpService";

const useCarStore = create(set => ({
    cars: [],
    currentCar: null,
    setCurrentCar: (carId) => {
        set( state => ({ currentCar: state.cars.find(car => car.id === carId)}))
    },
    fetchCars: async () => {
        let { data } = await getCars();
        set( () => ({ cars: data}))}
}));

const useUserStore = create(set => ({
    currentUser: null,
    setCurrentUser: (user) => {
        set(() => ({currentUser: user}))
    }
}));

export {
    useCarStore,
    useUserStore
}
