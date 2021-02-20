const Register = () => {
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
                                <label>User Height</label>
                                <input type="number" className="form-control" placeholder="User Height" />
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" />
                            </div>
                            <div className="checkbox">
                                <label>
                                    <input type="checkbox" /> Agree the terms and policy
                            </label>
                            </div>
                            <button type="submit" className="btn btn-primary btn-flat m-b-30 m-t-30">Register</button>
                            <div className="register-link m-t-15 text-center">
                                <p>Already have account ? <a href="#"> Sign in</a></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;