import {useParams} from "react-router-dom";
import {deleteCarById} from "../../services/HttpService";
import {useEffect, useState} from "react";
import {useCarStore} from "../../state/store";
import Alert from "../../components/Alert/Alert";
import { useHistory } from "react-router-dom";

function CarDetails() {
    let {id} = useParams();
    const setCurrentCar = useCarStore(state => state.setCurrentCar);
    const [deleteAlertActive, setDeleteAlertActive] = useState(false);
    const car = useCarStore(state => state.currentCar);
    const cars = useCarStore(state => state.cars);
    const fetchCars = useCarStore(state => state.fetchCars);
    let history = useHistory();

    useEffect(() => {
        setCurrentCar(id);
    }, [cars]);

    const deleteCar = async () => {
        await deleteCarById(car.id);
        await fetchCars();
        setDeleteAlertActive(false);
        history.push('/cars');
    }

    return (
        <>
            {car && (<div>
                <h1>{car.brand} {car.model}</h1>
                <span>{car.hp}</span>
                <button onClick={() => setDeleteAlertActive(true)}>Delete Car</button>
                <Alert isVisible={deleteAlertActive} text={`Delete ${car.brand} ${car.model}?`} close={() => setDeleteAlertActive(false)} success={deleteCar} />
            </div>)}
        </>
    )
}

export default CarDetails;
