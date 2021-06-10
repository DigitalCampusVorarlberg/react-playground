import './Starship.css';

function Starship({data}) {
    return (
        <div className="starship">
            <h3>{data.name}</h3>
            <span>{data.model}</span>
            <span>{data.cost_in_credits} $</span>
        </div>
    )
}

export default Starship;
