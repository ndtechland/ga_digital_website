import React from 'react'
import service1 from '../Images/service_banner.jpg'
import service12 from '../Images/Executive Services.png'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'


function Service() {
    return (
        <>
            <Navbar />
            <div
                className="untree_co-hero1 overlay"
                style={{
                    backgroundImage:

                        `url(${service1})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "380px"




                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center ">
                                <div className="col-lg-6 text-center ">
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-section">
                <div className="container">
                    <div className="row justify-content-around">


                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div
                                className="section-title mb-3"

                            >
                                <h2 className="line-bottom mb-4"><b>OUR SERVICES</b></h2>
                            </div>
                            <div className='row'>
                                <div className='col-6'>
                                    <h4><b>Executive Search</b> </h4>
                                    <p className='mt-2'
                                        style={{  fontFamily: "poppins", fontSize: "18px" }}

                                    >
                                        Identify and attract top-tier
                                        leadership talent to steer
                                        your company toward
                                        success
                                        {" "}
                                    </p>
                                </div>
                                <div className='col-6'>
                                    <h4><b>Contingent Search</b></h4>
                                    <p
                                        style={{  fontFamily: "poppins", fontSize: "18px" }}

                                    >
                                        Build a high-performing
                                        team with our end-to-end recruitment
                                        solutions across levels.

                                        {" "}
                                    </p>
                                </div>
                            </div>
                            <div className='row mb-4'>
                                <div className='col-6'>
                                    <h4><b>HR Consulting</b> </h4>
                                    <p
                                        style={{  fontFamily: "poppins", fontSize: "18px" }}

                                    >
                                        Guide on strategic HR, policies
                                        formulation, talent
                                        management, employee
                                        engagement, training and
                                        development, leadership
                                        coaching and organizational
                                        development, HR audits,
                                        statutory compliance audits.

                                    </p>
                                </div>
                                <div className='col-6'>
                                    <h4><b>Third-Party Employee Management</b></h4>
                                    <p
                                        style={{  fontFamily: "poppins", fontSize: "18px" }}

                                    >
                                        Taking care of hiring,
                                        and payroll, compliances
                                        for third-party (white
                                        collar and blue collar)
                                        employees as per
                                        client’s business needs.
                                    </p>
                                </div>
                            </div>





                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={0}>
                            <figure className="img-wrap-2">
                                <img

                                    src={service12}
                                    alt="Image"
                                    className="img-fluid"
                                />
                                <div className="dotted" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Service