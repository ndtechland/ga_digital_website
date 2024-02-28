import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OurExperties() {

    const [Expertise, setExpertise] = useState([]);


    const getUsers = async () => {
        const { data } = await axios.get('https://api.talent-destination.com/api/Admin/GetExperTise');
        setExpertise(data.experTiseList);
    }

    useEffect(() => {
        getUsers();
    }, []);


    return (
        <>
            <div style={{ background: "#cf0001" }}>
                <marquee>
                    <div className='d-flex ' style={{height:"30px"}}>
                        <h4 className='text-white '>Note:-</h4>
                        <h5 className='text-white mt-1  ml-2 '>

                            One Time Training /Induction/Security & Placement Fees In GA Digital Web Word P Ltd--Rs 20000.
                        </h5>
                    </div>


                </marquee>
            </div>
            <div className="untree_co-section">


                <div className="container">
                    <div className="row justify-content-center mb-3">
                        <div
                            className="col-lg-7 text-center"
                            data-aos="fade-up"
                            data-aos-delay={0}
                        >
                            <h2 className="line-bottom text-center mb-4">
                                Our Expertise In Industries
                            </h2>
                        </div>
                    </div>
                    <div className="row align-items-stretch">
                        {Expertise.map((item, index) => (
                            <>
                                <div
                                    className="col-sm-6 col-md-6 col-lg-3 mb-4"
                                    key={item.id}
                                    data-aos="fade-up"
                                    data-aos-delay={0}
                                >
                                    <a href="#" className="category d-flex align-items-start h-100">
                                        <div>
                                            <img style={{ width: "60px" }} src={`https://admin.talent-destination.com/ExperTiseImages/${item.filePath}`} />
                                        </div>
                                        <div>
                                            <h3 className='ml-3'>{item.categoryName}</h3>
                                        </div>
                                    </a>
                                </div>
                            </>

                        ))}


                    </div>
                </div>
            </div>
        </>


    )
}

export default OurExperties