const Header = () => {
    return (
        <header id="header" className="header">
            <div className="top-left">
                <div className="navbar-header">
                    <a className="navbar-brand hidden" href="./"><img src="images/logo.png" alt="Logo" /></a>
                    {/* <a className="navbar-brand" href="./"><img src="images/logo2.png" alt="Logo" /></a> */}
                    <a className="navbar-brand" href="./"><img id="logo-dash" src="images/fit-logo.png" alt="Logo" /></a>
                    {/* <a id="menuToggle" className="menutoggle"><i className="fa fa-bars"></i></a> */}
                </div>
            </div>
            <div className="top-right">
                <div className="header-menu">
                    <div className="user-area dropdown float-right">
                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle" src="images/avatar/avatar.png" alt="User Avatar" />
                        </a>

                        <div className="user-menu dropdown-menu">
                            <a className="nav-link" href="#"><i className="fa fa- user"></i>My Profile</a>

                            <a className="nav-link" href="#"><i className="fa fa- user"></i>Notifications <span className="count">13</span></a>

                            <a className="nav-link" href="#"><i className="fa fa -cog"></i>Settings</a>

                            <a className="nav-link" href="#"><i className="fa fa-power -off"></i>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;