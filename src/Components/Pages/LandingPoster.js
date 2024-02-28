import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pic from "../Images/LandingPoster.jpg"
import Pic1 from "../Images/poster.png"
import Slider from "react-slick";
import axios from 'axios';

function LandingPoster() {

    const CustomNextArrow = ({ onClick }) => (
        <button className="slick-next custom-arrow" onClick={onClick}>
            Next
        </button>
    );

    const CustomPrevArrow = ({ onClick }) => (
        <button className="slick-prev custom-arrow" onClick={onClick}>
            Prev
        </button>
    );

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    // const [Banner, setBanner] = useState([]);

    // const bannerUsers = async () => {
    //     try {
    //         const { data } = await axios.get('https://api.talent-destination.com/api/Admin/GetBanners');
    //         setBanner(data.bannerImageList);
    //     } catch (error) {
    //         console.error("Error fetching banners:", error);
    //     }
    // }

    // useEffect(() => {
    //     bannerUsers();
    // }, []);

    return (
        <>
            <Slider {...settings}>
                {/* {Banner.map((item, index) => ( */}
                    <div >
                        <div className="untree_co-hero"
                            style={{
                                backgroundImage:
                                `url(${Pic})`,
                                opacity: "0.8"
                            }}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-12">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10 text-left mt-4">
                                                <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay={100}>
                                                   {/* {item.bannerHeading} */}
                                                </h1>
                                                <div className="d-flex" style={{marginTop:"300px"}}>
                                                    <p className="mb-0" data-aos="fade-up" data-aos-delay={300}>
                                                        <Link to="/contactus" className="btn btn-secondary caption mb-4 d-inline-block" data-fancybox="" data-aos="fade-up" data-aos-delay={0}>
                                                            Find Talent
                                                        </Link>
                                                    </p>
                                                    <p className="mb-0 ml-3" data-aos="fade-up" data-aos-delay={300}>
                                                        <Link to="/browsejob" className="btn btn-secondary">
                                                            Find Jobs
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div >
                        <div className="untree_co-hero"
                            style={{
                                backgroundImage:
                                `url(${Pic1})`,
                                opacity: "0.8"
                            }}>
                            <div className="container">
                                <div className="row align-items-center justify-content-center">
                                    <div className="col-12">
                                        <div className="row justify-content-center">
                                            <div className="col-lg-10 text-left mt-4">
                                                <h1 className="mb-4 heading text-white" data-aos="fade-up" data-aos-delay={100}>
                                                   {/* {item.bannerHeading} */}
                                                </h1>
                                                <div className="d-flex" style={{marginTop:"300px"}}>
                                                    <p className="mb-0" data-aos="fade-up" data-aos-delay={300}>
                                                        <Link to="/contactus" className="btn btn-secondary caption mb-4 d-inline-block" data-fancybox="" data-aos="fade-up" data-aos-delay={0}>
                                                            Find Talent
                                                        </Link>
                                                    </p>
                                                    <p className="mb-0 ml-3" data-aos="fade-up" data-aos-delay={300}>
                                                        <Link to="/browsejob" className="btn btn-secondary">
                                                            Find Jobs
                                                        </Link>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                {/* ))} */}
            </Slider>
        </>
    )
}

export default LandingPoster;
