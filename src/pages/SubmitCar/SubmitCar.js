import './SubmitCar.css';
import { useForm } from "react-hook-form";
import {addCar} from "../../services/HttpService";
import {useCarStore} from "../../state/store";
import {useHistory} from "react-router-dom";

function SubmitCar() {
    const fetchCars = useCarStore(state => state.fetchCars);
    let history = useHistory();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = async data => {
        await addCar(data);
        await fetchCars();
        history.push('/cars');
    }

    return (
        <div className="submit-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className={errors.brand ? 'error' : ''} placeholder="Brand" {...register("brand", { required: true })} />
                {errors.brand && <span>This field is required</span>}

                <input className={errors.model ? 'error' : ''}  placeholder="Model" {...register("model", { required: true })} />
                {errors.model && <span>This field is required</span>}

                <input className={errors.hp ? 'error' : ''}  placeholder="Power" {...register("hp", { required: true })} />
                {errors.model && <span>This field is required</span>}

                <input type="submit" />
            </form>
        </div>
    )
}

export default SubmitCar;
