import React from 'react'
import { NavLink, Link } from "react-router-dom";
import Logo from '../Images/logo (1).png'
function Navbar() {
    var activeMenuBar = ({ isActive }) => {
        return (isActive ? "text-danger" : "text-black")
    }
    return (
        <>


            <div className="site-mobile-menu">
                <div className="site-mobile-menu-header">
                    <div className="site-mobile-menu-close">
                        <span className="icofont-close js-menu-toggle" />
                    </div>
                </div>
                <div className="site-mobile-menu-body" />
            </div>
            <nav className="site-nav mb-5">
                <div className="pb-2 top-bar mb-3">
                    <div className="container">
                        <div className="row align-items-center Top_left" >
                            <div className="col-6 col-lg-9">
                                <Link to="/contactus" className="small mr-3">
                                    <span className="icon-question-circle-o mr-2" />{" "}
                                    <span className="d-none d-lg-inline-block">
                                        Have a questions?
                                    </span>
                                </Link>
                                <a href="#!" className="small mr-3">
                                    <span className="icon-phone mr-2" />{" "}
                                    <span className="d-none d-lg-inline-block">+91 8178832125</span>
                                </a>
                                <a href="#!" className="small mr-3">
                                    <span className="icon-envelope mr-2" />{" "}
                                    <span className="d-none d-lg-inline-block">
                                    shipra.hr2000@gmail.com
                                    </span>
                                </a>
                            </div>
                            {/* <div className="col-6 col-lg-3 text-right">
                                <Link to="/login" className="small mr-3">
                                    <span className="icon-lock" />
                                    Log In
                                </Link>
                                <Link to="/register" className="small">
                                    <span className="icon-person" />
                                    Register
                                </Link>
                            </div>  */}
                        </div>
                    </div>
                </div>
                <div className="sticky-nav js-sticky-header Navbar_Background" >
                    <div className="container position-relative">
                        <div className="site-navigation text-center">
                            <Link to="/" className="logo menu-absolute m-0">
                                <div className='d-flex logo_image'>
                                <img src={Logo} style={{ width: "120px", height: "100px", marginTop: "-14px" }} />
                                <span style={{color:"#2a255d",fontSize:"33px"}} >GA</span> <span style={{color:"#cc0001",fontSize:"33px",marginLeft:"10px"}}>Digital</span>

                                </div>

                                <span className="text-primary" />
                            </Link>
                            <ul className="js-clone-nav d-none d-lg-inline-block site-menu " style={{ marginLeft: "150px" }}>
                                <li >
                                    <NavLink
                                        to="/"
                                        className={activeMenuBar}>Home</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/about" className={activeMenuBar}>About</NavLink>
                                </li>
                                <li 
                                // className="has-children"
                                >
                                    <a href="#!" className='text-black'>Industries</a>
                                    {/* <ul className="dropdown">
                                        <div className='d-flex flex-row' style={{ width: "600px" }}>
                                            <div className='p-4'>
                                                <li>
                                                    <a href="#!">Aerospace & Defence</a>
                                                </li>
                                                <li>
                                                    <a href="#!">FMCG & FMCD</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Automobile &amp; Auto Components</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Retail </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Finance &amp; accounts </a>
                                                </li>
                                                <li>
                                                    <a href="#!">E-commerce</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Legal &amp; CS </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Healthcare</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Oil & Gas</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Steel & Power</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Outsourcing & Offshoring</a>
                                                </li>

                                            </div>
                                            <div className='p-4'>
                                                <li>
                                                    <a href="#!">Pharma, Lifesciences, Devices & Diagnostics</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Telecom</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Information Technology/ITeS</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Media & Entertainment </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Energy & Utilities </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Finance & Banking</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Startups </a>
                                                </li>
                                                <li>
                                                    <a href="#!">Consulting Services</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Corporate function</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Manufacturing & Engineering</a>
                                                </li>
                                                <li>
                                                    <a href="#!">Metals, Minerals & Mining</a>
                                                </li>

                                            </div>

                                        </div>

                                    </ul> */}
                                </li>

                                <li className="has-children">
                                    <NavLink to="/service" className={activeMenuBar}>Services</NavLink>
                                    <ul className="dropdown">
                                        <li>
                                            <NavLink to="/service"> Executive Search </NavLink>
                                        </li>
                                        <li>
                                            <Link to="/service"> Contingent Search</Link>
                                        </li>
                                        <li>
                                            <Link to="/service"> HR Consulting</Link>
                                        </li>

                                        <li>
                                            <Link to="/service"> Third-Party Employee Management </Link>
                                        </li>

                                    </ul>
                                </li>
                                <li className="has-children">

                                    <NavLink to="/resource" className={activeMenuBar}>Resource</NavLink>
                                    <ul className="dropdown">
                                        {/* <li>
                                            <NavLink to="/resource/blogs" className={activeMenuBar}>Blogs/Newsroom </NavLink>
                                        </li> */}

                                        <li>
                                            <NavLink to="/resource/career" className={activeMenuBar}>Careers</NavLink>
                                        </li>

                                    </ul>
                                </li>
                                <li className="has-children">
                                    <a href="#!" className='text-black'>Jobs</a>
                                    <ul className="dropdown">
                                        <li>
                                            <Link to="/browsejob" style={{ minWidth: "249px" }} >Find Jobs On Talent-Destination </Link>
                                        </li>

                                        <li>
                                            <Link to="/Career">Submit Your CV</Link>
                                        </li>

                                    </ul>
                                </li>
                                <li>
                                    <NavLink to="/contactus" className={activeMenuBar}>Contact</NavLink>
                                </li>
                            </ul>
                            <NavLink to="/login"
                                className={`btn-book btn btn-secondary btn-sm menu-absolute ${activeMenuBar}`}

                            >
                                Login
                            </NavLink>
                            <a
                                href="#"
                                className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                                data-toggle="collapse"
                                data-target="#main-navbar"
                            >
                                <span />
                            </a>
                        </div>
                    </div>
                </div>
            </nav>
        </>

    )
}

export default Navbar