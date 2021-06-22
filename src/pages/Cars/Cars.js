import axios from "axios";
import {useEffect, useState} from "react";
import './Cars.css';
import {getCars} from "../../services/HttpService";
import {Link} from "react-router-dom";

function Cars() {

    const [cars, setCars] = useState([]);
    useEffect(() => {
        getCars().then(result => {
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
                    <th/>
                </thead>
                <tbody>
                {cars.map(car => {
                    return (
                        <tr>
                            <td>{car.brand}</td>
                            <td>{car.model}</td>
                            <td>{car.hp}</td>
                            <td><Link to={`/cars/${car.id}`}>Details</Link></td>
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
