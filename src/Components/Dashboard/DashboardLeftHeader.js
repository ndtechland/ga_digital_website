import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import "../CustomCss/DashboardHeader.css"

function DashboardLeftHeader() {
    const navigate = useNavigate();
    const handleLogout = () => {
        // Clear user session information
        sessionStorage.removeItem('isUserLoggedIn');

        // Redirect to the login page or another appropriate page after logout
        navigate('/login');
    };
    return (
        <>
            <div id="left-menu">
                <ul style={{ marginLeft: "25px", marginTop: "40px" }}>
                    <li className='d-flex' >
                        <svg style={{ marginTop: "10px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-dashboard" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 13m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                            <path d="M13.45 11.55l2.05 -2.05" />
                            <path d="M6.4 20a9 9 0 1 1 11.2 0z" />
                        </svg>
                        <Link to="/dashboard">
                            <i className="ion-ios-person-outline" />
                            <span className='Text_left1'>Dashboard</span>
                        </Link>
                    </li>
                    <li className=" d-flex">
                        <svg style={{ marginTop: "10px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-digit" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M9 12m0 1a1 1 0 0 1 1 -1h1a1 1 0 0 1 1 1v3a1 1 0 0 1 -1 1h-1a1 1 0 0 1 -1 -1z" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M15 12v5" />
                        </svg>
                        <Link to="/salaryslip">
                            <i className="ion-ios-person-outline" />
                            <span className='Text_left1'>Salary Slip</span>
                        </Link>
                        {/* <ul>
                            <li>
                                <a href="#">UI Elements Item 1</a>
                            </li>
                            <li>
                                <a href="#">UI Elements Item 2</a>
                            </li>
                            <li>
                                <a href="#">UI Elements Item 3</a>
                            </li>
                        </ul> */}
                    </li>
                    <li className='d-flex'>
                        <svg style={{ marginTop: "10px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-spreadsheet" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M8 11h8v7h-8z" />
                            <path d="M8 15h8" />
                            <path d="M11 11v7" />
                        </svg>
                        <a href="#">
                            <i className="ion-ios-albums-outline" />
                            <span className='Text_left1'>Attendence</span>
                        </a>
                    </li>
                    <li className="d-flex">

                        <svg style={{ marginTop: "10px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-file-description" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 3v4a1 1 0 0 0 1 1h4" />
                            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
                            <path d="M9 17h6" />
                            <path d="M9 13h6" />
                        </svg>
                        <Link to="/applyleave">
                            <i className="ion-ios-person-outline" />
                            <span className='Text_left1'> Apply for Leaves</span>
                        </Link>
                        {/* <ul>
                            <li>
                                <a href="#">UI Elements Item 1</a>
                            </li>
                        </ul> */}
                    </li>
                    <li className='d-flex'>
                        <svg style={{ marginTop: "10px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-user-circle" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
                            <path d="M12 10m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
                            <path d="M6.168 18.849a4 4 0 0 1 3.832 -2.849h4a4 4 0 0 1 3.834 2.855" />
                        </svg>
                        <Link to='/profile'>
                            <i className="ion-ios-chatboxes-outline" />
                            <span className='Text_left1'>Profile</span>
                        </Link>
                    </li>
                    <li className='d-flex '>
                        <svg style={{ marginTop: "10px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-logout" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />
                            <path d="M9 12h12l-3 -3" />
                            <path d="M18 15l3 -3" />

                        </svg>
                        <a href="#">
                            <i className="ion-ios-chatboxes-outline" />
                            <span className='Text_left1' onClick={handleLogout}>Logout</span>
                        </a>
                    </li>

                </ul>
            </div>
        </>
    )
}

export default DashboardLeftHeader