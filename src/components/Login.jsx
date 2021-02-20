const Login = () => {
    return (
        <div className="sufee-login d-flex align-content-center flex-wrap">
            <div className="container">
                <div className="login-content">
                    <div className="login-logo">
                        <a href="index.html">
                            {/* <img className="align-content" src="images/logo.png" alt="" /> */}
                            <img id="logo-login" className="align-content" src="images/fit-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="login-form">
                        <form>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="email" className="form-control" placeholder="User Name" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Remember Me
                            </label>
                                <label className="pull-right">
                                    <a href="#">Forgotten Password?</a>
                                </label>

                            </div>
                            <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                            <div className="register-link m-t-15 text-center">
                                <p>Don't have account ? <a href="#"> Sign Up Here</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;