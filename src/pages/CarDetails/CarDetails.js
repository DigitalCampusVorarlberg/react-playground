import {useParams} from "react-router-dom";
import {getCarById} from "../../services/HttpService";
import {useEffect, useState} from "react";

function CarDetails() {
    let {id} = useParams();
    const [car, setCar] = useState();

    useEffect(() => {
        getCarById(id).then(result => {
            setCar(result.data);
        });
    }, []);

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
