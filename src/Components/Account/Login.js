import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import Wrong from "../Images/Wrong.png"

import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/dist/sweetalert2.css';
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

function Login() {

    const navigate = useNavigate();
    const [Employee_ID, setEmployee_ID] = useState('');
    const [Password, setPassword] = useState('');
    const [employeeIdError, setEmployeeIdError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [loginError, setLoginError] = useState('');

    const [passwordVisible, setPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setPasswordVisible(!passwordVisible);
    };


    const handleLogin = async () => {
        setEmployeeIdError('');
        setPasswordError('');
        setLoginError('');

        if (!Employee_ID || !Password) {
            if (!Employee_ID) {
                setEmployeeIdError('Employee ID is required');
            }

            if (!Password) {
                setPasswordError('Password is required');
            }

            return;
        }
        try {
            const response = await axios.post(
                'https://crm.ndinfotech.com/api/Account/Login',
                {
                    Employee_ID,
                    Password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            if (response.status === 200) {
                const { token } = response.data;

                sessionStorage.setItem('token', token);
                sessionStorage.setItem('isUserLoggedIn', 'true');

                console.log('Login successful:', response.data);
                toast.success('Login successful');

                setEmployee_ID('');
                setPassword('');

                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            } else {
                console.error('Login failed:', response.statusText);
                setLoginError('Invalid Employee ID or Password');
            }
        } catch (error) {
            console.error('Network error:', error.message);
            setLoginError('Invalid Employee ID or Password');
        }
    };

    useEffect(() => {

        const isUserLoggedIn = sessionStorage.getItem('isUserLoggedIn') === 'true';

        if (isUserLoggedIn) {
            toast.warning('You are already logged in.');
            navigate('/dashboard');
        }
    }, [navigate]);


    return (
        <>
            <Navbar />
            <ToastContainer />
            <div
                className="untree_co-hero inner-page overlay"
                style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1322630105/photo/two-hr-specialists-analyzing-the-recruitment-market-using-laptop-to-boost-the-intern-program.jpg?s=612x612&w=0&k=20&c=Hw8XVi_RDfTBYfACHBm39YXs866mHyhj5ERlZugqfOg=")' }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center ">
                                <div className="col-lg-6 text-center ">
                                    <h1
                                        className="mb-4 heading text-white"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        Login
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>{" "}

                </div>{" "}

            </div>{" "}

            <div className="untree_co-section">
                <div className="container">
                    <div className="row mb-5 justify-content-center">
                        <div
                            className="col-lg-5 mx-auto order-1"
                            data-aos="fade-up"
                            data-aos-delay={200}
                        >
                            <form action="#" className="form-box">
                                {loginError && <p className="text-danger text-center " style={{ marginTop: "-40px", marginLeft: "-40px" }}>
                                    <img src={Wrong} style={{ width: "22px" }} />
                                    {loginError}</p>}
                                <div className="row">

                                    <div className="col-12 mb-3">
                                        <label>Enter Employee Id</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder="Ex-ND-2/2024-20"
                                            value={Employee_ID}
                                            onChange={(e) => {
                                                setEmployee_ID(e.target.value);
                                                setEmployeeIdError('');
                                                setLoginError('');
                                            }}
                                        />
                                        {employeeIdError && <p className="text-danger">{employeeIdError}</p>}
                                    </div>
                                    <div className='d-flex'>
                                        <div className="col-12 mb-3">
                                            <label>Enter Password</label>
                                            <input
                                                type={passwordVisible ? 'text' : 'password'}
                                                value={Password}
                                                onChange={(e) => {
                                                    setPassword(e.target.value);
                                                    setPasswordError('');
                                                    setLoginError('');
                                                }}
                                                className="form-control"
                                                placeholder="Password"
                                                style={{width:"364px"}}
                                            />
                                            {passwordError && <p className="text-danger">{passwordError}</p>}
                                        </div>
                                        <div
                                          style={{zIndex:"999",marginTop:"48px",marginLeft:"-46px",cursor:"pointer"}}
                                            onClick={togglePasswordVisibility}
                                        >
                                            {passwordVisible ? (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-lock-open"
                                                    width={36}
                                                    height={36}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="#000000"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M5 11m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                                                    <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
                                                    <path d="M8 11v-5a4 4 0 0 1 8 0" />
                                                </svg>

                                            ) : (
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="icon icon-tabler icon-tabler-lock"
                                                    width={36}
                                                    height={36}
                                                    viewBox="0 0 24 24"
                                                    strokeWidth="1.5"
                                                    stroke="#000000"
                                                    fill="none"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                    <path d="M5 13a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-6z" />
                                                    <path d="M11 16a1 1 0 1 0 2 0a1 1 0 0 0 -2 0" />
                                                    <path d="M8 11v-4a4 4 0 1 1 8 0v4" />
                                                </svg>

                                            )}
                                        </div>

                                    </div>



                                    <div className="col-12">

                                        <button type='button' className='btn btn-primary'

                                            onClick={handleLogin}>Login</button>

                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div >
            <Footer />
        </>

    )
}

export default Login