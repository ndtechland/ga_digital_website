import React from 'react'
import { Link } from 'react-router-dom'
import poster from '../Images/home1.jpg'

function BigBanner() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };
    return (
        <div
            className=" pt-0 bg-img1 bg-img11 overlay"
            style={{
                backgroundImage:

                    `url(${poster})`,
              
            }}
        >
            <div className="container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-9">
                        <h2 className="text-white mb-3" style={{ fontSize: "46px", fontFamily: "poppins" }}>
                            Innovative talent powering a brighter future.
                        </h2>
                        <p
                            className="text-white h5 mb-2"

                            style={{ textAlign: "justify", fontFamily: "poppins", fontSize: "20px" }}
                        >
                            Far far away, behind the word mountains, far from the countries
                            Vokalia and Consonantia, there live the blind texts.
                        </p>
                        <p>
                            <Link to="/contactus"
                                onClick={scrollToTop}
                                className="btn btn-secondary"

                            >
                                Get in Touch
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BigBanner