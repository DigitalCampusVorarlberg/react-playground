import {useUserStore} from "../../state/stores";
import styles from './Login.module.css'; // Import css modules stylesheet as styles

function Login() {
    const setCurrentUser = useUserStore(state => state.setCurrentUser);
    const currentUser = useUserStore(state => state.currentUser);
    const removePoints = useUserStore(state => state.removePoints);

    return (<div className={styles.wrapper}>
        {!currentUser && (
            <button onClick={() => setCurrentUser({name: "Günther", points: 20})}>Login</button>
        )}
        {currentUser && (
            <div>
                <button onClick={() => setCurrentUser(null)}>Logout</button>
                <button onClick={() => removePoints(10)}>Rmove</button>
            </div>
        )}
    </div>)
}

export {
    Login
}
