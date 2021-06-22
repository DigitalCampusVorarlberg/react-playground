import {useParams} from "react-router-dom";
import {getCarById} from "../../services/HttpService";
import {useEffect, useState} from "react";
import {useCarStore} from "../../state/store";

function CarDetails() {
    let {id} = useParams();
    const setCurrentCar = useCarStore(state => state.setCurrentCar);
    const car = useCarStore(state => state.currentCar);
    const cars = useCarStore(state => state.cars);

    useEffect(() => {
        setCurrentCar(id);
    }, [cars]);

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
