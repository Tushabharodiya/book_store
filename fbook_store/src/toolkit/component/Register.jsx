import React, { useRef } from 'react'
import { useDispatch } from 'react-redux';
import { user_register } from '../user/api';
import { useNavigate } from 'react-router-dom';

const Register = () => {

    let email = useRef();
    let password = useRef();
    let dispatch = useDispatch();
    let role = useRef();
    let navigate = useNavigate();

    let register = (e) => {
        e.preventDefault();

        let user = {
            email: email.current.value,
            password: password.current.value,
            role: role.current.value,
        }

        dispatch(user_register(user))
        navigate("/home")


    }


    return (
        <>
            <div className="login d-flex  align-items-center">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-form  d-flex justify-content-center">
                                <form onSubmit={register}>
                                    <h2>login</h2>
                                    <label>Email: <input type="text" name='email' ref={email} className='form-control' placeholder='Enter name' required /></label>
                                    <label>Password: <input type="password" name='password' ref={password} className='form-control' placeholder='Enter password' /></label>
                                    <label>role: <input type="text" name='role' ref={role} className='form-control' placeholder='Enter role' /></label>
                                    <div className="login-btn text-center">
                                        <button className='button'>register</button>
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

export default Register
