const Sidebar = () => {
    return (
        <aside id="left-panel" className="left-panel">
            <nav className="navbar navbar-expand-sm navbar-default">
                <div id="main-menu" className="main-menu collapse navbar-collapse">
                    <ul className="nav navbar-nav">
                        <li className="active">
                            <a href="index.html"><i className="menu-icon fa fa-laptop"></i>Dashboard </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}

export default Sidebar;