import './Alert.css';

const Alert = ({isVisible, text, close, success}) => {
    return (
        <>
            {isVisible &&
            <div className="background">
                <div className="alert">
                    <h2>{text}</h2>
                    <div>
                        <button onClick={close}>Nein</button>
                        <button onClick={success}>Ja</button>
                    </div>
                </div>
            </div>
         }
        </>
    )
}

export default Alert;
