import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { user_login } from '../user/api';
import axios from 'axios';
import { BASE_URL, USERLOGIN } from '../constnt';

const Login = ({ onLoginSuccess }) => {

    let email = useRef();
    let password = useRef();
    let navigate = useNavigate()

    let login = async (e) => {
        e.preventDefault();

        let user = {
            email: email.current.value,
            password: password.current.value,
        }

        try {

            let res = await axios.post(BASE_URL + USERLOGIN, user)
            console.log(res);

            let role = res.data.user.role;
            localStorage.setItem("role", JSON.stringify(role))
            console.log(role);
            if (role == "admin") {
                navigate("/dashborad")
            } else if (role == "user") {
                navigate("/home")
            }

        } catch (error) {
            console.error('Login error:', error);
        }

    }

    return (
        <>
            <div className="login d-flex  align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-form  d-flex justify-content-center">
                                <form onSubmit={login} >
                                    <h2>login</h2>
                                    <label>Email: <input type="text" name='email' ref={email} className='form-control' placeholder='Enter name' /></label>
                                    <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                    <div className="login-btn text-center">
                                        <button className='button'>login</button>
                                        <Link to={"/register"}> register now  </Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
