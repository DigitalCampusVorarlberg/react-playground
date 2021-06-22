import './Navbar.css';
import {Link} from "react-router-dom";
import logo from '../../assets/logo.svg';
import {useUserStore} from "../../state/stores";

function Navbar({logoUrl, menuItems}) {
    const currentUser = useUserStore(state => state.currentUser);

    return (
        <div className="navbar-wrapper">
            <img className="logo" src={logo} alt="logo" />
            <div className="nav">
                <ul>
                    {menuItems.map(menuItem => {
                        return <li key={menuItem.url}><Link to={menuItem.url}>{menuItem.title}</Link></li>
                    })}
                    <li>
                        <Link to="/login">{currentUser ? currentUser.name : 'Login'}</Link>
                    </li>

                </ul>
            </div>
        </div>
    )
}

export default Navbar;
