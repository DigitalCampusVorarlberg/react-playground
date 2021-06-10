import './Navbar.css';

function Navbar({logoUrl, menuItems}) {
    return (
        <div className="navbar-wrapper">
            <img className="logo" src={logoUrl} alt="logo" />
            <div className="nav">
                <ul>
                    {menuItems.map(menuItem => {
                        return <li key={menuItem.url}><a href={menuItem.url}>{menuItem.title}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
