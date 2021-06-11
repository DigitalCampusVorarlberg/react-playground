import './SubmitCar.css';
import axios from "axios";
import {useState} from "react";

function SubmitCar() {

    let reset = {
        brand: "",
        model: "",
        hp: 0
    }
    const [formdata, setFormdata] = useState(reset);

    function onChange(evt) {
        let copy = {
            ...formdata
        };
        copy[evt.target.name] = evt.target.value;
        setFormdata(copy);
    }

    function postCar(evt) {
        evt.preventDefault();

        var data = JSON.stringify(formdata);

        var config = {
            method: 'post',
            url: 'https://60c31121917002001739df29.mockapi.io/api/cars',
            headers: {
                'Content-Type': 'application/json'
            },
            data : data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                setFormdata(reset)
            })
            .catch(function (error) {
                console.log(error);
            });

    }

    return (
        <div className="submit-form">
            <form onSubmit={postCar}>
                <input type="text" name="brand" placeholder="Brand" onChange={onChange} value={formdata.brand} />
                <input type="text" name="model" placeholder="Model" onChange={onChange} value={formdata.model} />
                <input type="number" name="hp" placeholder="Horsepower" onChange={onChange} value={formdata.hp} />
                <button type="submit">Send</button>
            </form>
        </div>
    )
}

export default SubmitCar;
