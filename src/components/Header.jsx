import { useState } from "react";
import { connect } from "react-redux";

const Header = ({ dispatch }) => {
    const [ showClass, setShowClass ] = useState('');
    
    const handleShowClass = () => {
        (showClass == 'show') ? setShowClass('') : setShowClass('show');
    }

    const logout = () => {
        localStorage.removeItem('credentials');
        localStorage.clear();
        dispatch({ type: 'LOGOUT' });
    }

    return (
        <header id="header" className="header">
            <div className="top-left">
                <div className="navbar-header">
                    <a className="navbar-brand hidden" href="./"><img src="images/logo.png" alt="Logo" /></a>
                    <a className="navbar-brand" href="./"><img id="logo-dash" src="images/fit-logo.png" alt="Logo" /></a>
                </div>
            </div>
            <div className="top-right">
                <div className="header-menu">
                    <div className="user-area dropdown float-right" onClick={handleShowClass}>
                        <a href="#" className="dropdown-toggle active" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img className="user-avatar rounded-circle" src="images/avatar/avatar.png" alt="User Avatar" />
                        </a>

                        <div className={`user-menu dropdown-menu open-menu ${showClass}`}>
                            <a className="nav-link" onClick={logout}><i className="fa fa-power -off"></i>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Header);