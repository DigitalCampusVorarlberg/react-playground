import axios from "axios";
import {useEffect, useState} from "react";
import './Cars.css';

function Cars() {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        axios.get('https://60c31121917002001739df29.mockapi.io/api/cars').then(result => {
            console.log(result.data);
            setCars(result.data);
        });
    }, []);

    return (
        <div>
            <h1>Cars for sale</h1>
            <table className="cars">
                <thead>
                    <th>Brand</th>
                    <th>Model</th>
                    <th>Power</th>
                </thead>
                <tbody>
                {cars.map(car => {
                    return (
                        <tr>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.hp}</td>
                        </tr>
                    )
                })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Cars;
