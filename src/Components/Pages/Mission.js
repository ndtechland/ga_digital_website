import React from 'react'
import Mission1 from '../Images/missionposter.svg'
import Mission2 from '../Images/Che (3).png'

function Mission() {
    return (
        <div className="services-section" >
            <div className="container">
                <div className="row justify-content-between">
                    <div className="col-lg-4 mb-5 mb-lg-0">
                    
                        <div
                            className="section-title"
                         
                        >
                            <h2 className="line-bottom ">Our Vision</h2>
                          
                        </div>
                        <p
                            style={{ textAlign: "justify",fontSize:"20px",marginTop:"-32px" }}
                         
                        >
                            We envision a business landscape
                            where every company thrives by
                            harnessing the power of its human
                            capital, and we are committed to
                            being the catalyst for that
                            transformation.
                        </p>
                        <div
                            className="section-title "
                           
                        >
                            <h2 className="line-bottom mt-4 "> Our Mission </h2>
                         
                        </div>
                        <p
                            style={{ textAlign: "justify",fontSize:"20px",marginTop:"-32px" }}
                           
                        >
                            Our mission is to empower
                            individuals and organizations
                            through superior HR solutions,
                            fostering growth within a global
                            community that values diversity,
                            while striving to add meaningful
                            value for clients and candidates.
                        </p>
                         <div
                            className="section-title "
                          
                        >
                            <h2 className="line-bottom  mt-4"> Values</h2>
                            <ul
                            className="ul-check list-unstyled  primary"
                          
                        >
                           
                            <li>Ethics & Integrity</li>
                            <li>Respect</li>
                            <li>Trust</li>
                            <li>Collaboration</li>
                        </ul>
                        </div>
                       
                        {/* <p data-aos="fade-up" data-aos-delay={300}>
                            <a href="#" className="btn btn-primary">
                                Get Started
                            </a>
                        </p> */}
                    </div>
                    <div className="col-lg-6" data-aos="fade-up" data-aos-delay={0}>
                        <figure className="img-wrap-2">
                        <img
                                src={Mission2}
                                alt="Image"
                                className="img-fluid"
                                style={{marginTop:"-201px"}}
                            />
                            <img
                                src={Mission1}
                                alt="Image"
                                className="img-fluid"
                                style={{marginTop:"-150px"}}
                               
                            />
                          
                            <div className="dotted" />
                        </figure>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Mission