function Navbar({logoUrl, menuItems}) {
    return (
        <div>
            <img src={logoUrl} alt="logo" />
            <div>
                <ul>
                    {menuItems.map(menuItem => {
                        return <li><a href={menuItem.url}>{menuItem.title}</a></li>
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Navbar;
