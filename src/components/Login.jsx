import { Link, useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { connect } from "react-redux";

// Services
import ApiService from "../services/ApiService";
import { alertService } from '../services/alert.service';

const Login = ({ dispatch }) => {
    
    const { register, errors, handleSubmit, setError, reset } = useForm({});
    let history = useHistory();

    const onSubmit = async (data) => {
        localStorage.clear();
        let responseLogin = await ApiService.login(data);
        
        if(responseLogin.id) {            
            localStorage.setItem('credentials', JSON.stringify(responseLogin));
            dispatch({ type:"LOGIN" });
            history.push('/');
        } else {       
            alertService.error('User Name or password incorrect', { keepAfterRouteChange: true });
        }
    }

    return (
        <div className="sufee-login d-flex align-content-center flex-wrap">
            <div className="container">
                <div className="login-content">
                    <div className="login-logo">
                        <a href="index.html">
                            <img id="logo-login" className="align-content" src="images/fit-logo.png" alt="" />
                        </a>
                    </div>
                    <div className="login-form">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label>User Name</label>
                                <input type="email" className="form-control" name="userName" ref={
                                    register({
                                        required: { value: true, message: 'User Name is required' }
                                    })
                                }/>
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.userName?.message}
                                </span>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" name="password" ref={
                                    register({
                                        required: { value: true, message: 'Password is required' }
                                    })
                                }/>
                                <span className="text-danger text-small d-block mb-2">
                                    {errors?.password?.message}
                                </span>                            
                            </div>
                            <button type="submit" className="btn btn-success btn-flat m-b-30 m-t-30">Sign in</button>
                            <div className="register-link m-t-15 text-center">
                                <p>Don't have account ? <Link to="/register"> Sign Up Here</Link></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Login)