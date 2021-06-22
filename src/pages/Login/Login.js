import {useUserStore} from "../../state/store";

function Login() {

    const setUser = useUserStore(state => state.setCurrentUser);
    const currentUser = useUserStore(state => state.currentUser);


    return (
        <div>
            <h1>Login</h1>
            {!currentUser && (
                <button onClick={() => setUser({name: "Günther", points: 250})}>Login</button>
            )}
            {currentUser && (
                <button onClick={() => setUser(null)}>Logout</button>
            )}
        </div>
    )
}

export default Login;
