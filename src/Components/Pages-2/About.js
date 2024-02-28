import React from 'react'
import Aboutimage from '../Images/india-map-img-removebg-preview.png'
import contactus from '../Images/AboutBanner.png'
import Atul from '../Images/02.png'
import client from "../Images/1.png"
import client1 from "../Images/2.png"
import client2 from "../Images/3.jpg"
import client3 from "../Images/5 (2).png"
import client4 from "../Images/6.png"
import client5 from "../Images/4.png"
import Map1 from "../Images/Map (1).png"
import Map2 from "../Images/Map (2).png"
import Map3 from "../Images/Map (3).png"

import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

function About() {
    return (
        <>
            <Navbar />
            <div
                className="untree_co-hero1 overlay"
                style={{
                    backgroundImage:

                        `url(${contactus})`,
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
                    <div className="row justify-content-between">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div
                                className="section-title mb-3"

                            >
                                <h2 className="line-bottom mb-4">GAD at a Glance</h2>
                            </div>
                      
                            <p
                                style={{ fontFamily: "poppins", fontSize: "18px" }}

                            >

                                G.A. Digital is in the business for Human Capital Management Services close to two-decade.
                                {" "}
                            </p>
                            <p
                                style={{ fontFamily: "poppins", fontSize: "18px" }}

                            >
                                The vision is to exceed customer expectations in deliveries.
                            </p>
                            <p
                                style={{ fontFamily: "poppins", fontSize: "18px" }}

                            >
                                At G.A. Digital, we believe and follow our motto- deliveries are perfect when excellence is the habit!
                            </p>
                            <p
                                style={{ fontFamily: "poppins", fontSize: "18px" }}

                            >
                                We have serviced more than 350 + clients across India from leading corporate both private and public sectors.
                            </p>
                            <p
                                style={{ fontFamily: "poppins", fontSize: "18px" }}

                            >
                                For the past 3 years, our organization has had a CAGR of over 25 % approximately.
                            </p>
                            <p
                                style={{ fontFamily: "poppins", fontSize: "18px" }}

                            >
                                We have a Pan India presence managed through 11 zonal offices.
                            </p>




                        </div>
                        <div className="col-lg-6" data-aos="fade-up" data-aos-delay={0}>
                            <figure className="img-wrap-2">
                                <img
                                    style={{ marginLeft: "120px" }}
                                    src={Aboutimage}
                                    alt="Image"
                                    className="img-fluid"
                                />
                                <div className="dotted" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div
                            className="col-lg-7 text-center"

                        >
                            <h2 className="line-bottom text-center mb-4">How we work </h2>
                            <p style={{ textAlign: "justify", fontSize: "20px" }}>
                                We employ our innovative 3 – Screen Model in Leadership Hiring to
                                help clients reduce their hiring time by closing the positions in
                                the lowest TAT possible. Our idea is simple – to bring together the
                                most like-minded people, create a small community of believers and
                                generate value for our stakeholders through our indefatigable
                                efforts!
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"

                        >
                            <div className="feature">
                             <img src={Map1} className='w-25'/>
                                <h3>GA Digital Mapping</h3>
                                <p style={{ textAlign: "justify" }}>
                                    We locate the best individual talent using cutting-edge technology
                                    and social media from a wellresearched talent landscape.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"

                        >
                            <div className="feature">
                            <img src={Map3}  className='w-25'/>
                                <h3>GA Digital Fitment</h3>
                                <p style={{ textAlign: "justify" }}>
                                    We ensure that the talents fit the job, through our intelligent
                                    scan of interest, aptitude, ability, and personality.
                                </p>
                            </div>
                        </div>
                        <div
                            className="col-6 col-sm-6 col-md-6 col-lg-4"

                        >
                            <div className="feature">
                            <img src={Map2}  className='w-25'/>
                                <h3>GA Digital Assessment</h3>
                                <p style={{ textAlign: "justify" }}>
                                    Our team of seasoned psychologists and OB practitioners help
                                    create, design, and schedule assessments.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-1">
                        <div
                            className="col-lg-7 text-center"

                        >
                            <h2 className="line-bottom text-center mb-4">Our Leadership Member</h2>

                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div
                            className="col-12 col-sm-6 col-md-6 mb-4 mb-lg-0 col-lg-7"

                        >
                            <div className="staff text-center" style={{ border: "1px solid red", borderRadius: "30px" }}>
                                <div >
                                    <img src={Atul} alt="Image" className="img-fluid" />
                                </div>
                                <div className="staff-body">
                                    <h3 className="staff-name">Garima Arora</h3>
                                    <span className="d-block position">Managing Director</span>
                                    <p style={{ textAlign: "justify", fontFamily: "poppins", fontSize: "17px" }}>
                                        Garima Arora, the Managing Director, has helped the company reach new heights. Born and brought up in Delhi, she concluded her education in Commerce. Inaugurating her company in 2003, she started human resource consultancy services. The company set out its foot and has never looked back following then. GA Digital Web Word Pvt. Ltd has become one of the ever-growing businesses with 50000+ deployed employees. It is one of the most reputable companies in temporary staffing and is in contact with more than 1 Lakh job-seekers. The company's strength lies in its employees as well as the directors. It is the result of her untiring efforts that the company is expanding and prospering. From skilled to professional staff, the company has shown to be the best option for work seekers. She has been working with her expertise which lies in finance, accounting, and strategic planning. Presently, GA Digital Web Word has been assisting various State, Central and PSUs with close connections to various administrative departments. With her experience and constant efforts for 17+ years, GA Digital Web Word Pvt. Ltd. has been a prominent company across India
                                    </p>
                                  
                                </div>
                            </div>
                        </div>
                     

                    </div>
                    <div className='container'>
                        <h2  className="line-bottom  mb-2 mt-4">Our Certifications</h2>
                        <div className='row'>
                            <div className='col-lg-2 col-sm-2 col-md-2'>
                                <img src={client} className='Imgscr' />

                            </div>
                            <div className='col-lg-2 col-sm-2 col-md-2'>
                                <img src={client1} className='Imgscr' />

                            </div>
                            <div className='col-lg-2 col-sm-2 col-md-2'>
                                <img src={client2} className='Imgscr' />

                            </div>
                            <div className='col-lg-2 col-sm-2 col-md-2'>
                                <img src={client3} className='Imgscr' />

                            </div>
                            <div className='col-lg-2 col-sm-2 col-md-2'>
                                <img src={client4} className='Imgscr' />

                            </div>
                            <div className='col-lg-2 col-sm-2 col-md-2'>
                                <img src={client5} className='Imgscr' />

                            </div>
                        </div>
                    </div>


                </div>
            </div>

            {/* <WhyChooseus /> */}
            <Footer />
        </>

    )
}

export default About