import create from 'zustand'
import {getCars} from "../services/HttpService";
import {persist} from "zustand/middleware";

const useCarStore = create(set => ({
    cars: [],
    currentCar: null,
    setCurrentCar: (id) => {
        set(state => ({
            currentCar: state.cars.find(car => {
                return car.id === id
            })
        }));
    },
    fetch: async () => {
        let {data} = await getCars();
        set({cars: data});
    }
}));

const useUserStore = create(persist(
    (set, get) => ({
        currentUser: null,
        setCurrentUser: (user) => set({currentUser: user}),
        removePoints: (amount) => {
            set(state => ({
                currentUser: {...state.currentUser, points: state.currentUser.points - amount}
            }))
        }
    }),
    {
        name: "user-storage", // unique name
        getStorage: () => sessionStorage, // (optional) by default the 'localStorage' is used
    }
    )
);

export {
    useCarStore,
    useUserStore
}
