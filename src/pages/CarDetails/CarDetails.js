import {useParams} from "react-router-dom";
import {getCarById} from "../../services/HttpService";
import {useEffect, useState} from "react";
import {useCarStore, useUserStore} from "../../state/stores";

function CarDetails() {
    let {id} = useParams();
    const setCurrentCar = useCarStore(state => state.setCurrentCar)
    const cars = useCarStore(state => state.cars);
    const setCurrentUser = useUserStore(state => state.setCurrentUser)

    useEffect(() => {
        setCurrentCar(id);
    }, [cars]);

    const car = useCarStore(state => state.currentCar);

    return (
        <>
            {car && (<div>
                <h1>{car.brand} {car.model}</h1>
                <span>{car.hp}</span>
            </div>)}
        </>
    )
}

export default CarDetails;
