import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import service1 from '../Images/Footer_card.jpg'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

function Blogs() {

    const [Blog, setBlog] = useState([]);

    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);


    const blogsUsers = async () => {
        const { data } = await axios.get('https://api.talent-destination.com/api/Admin/getAllBlogs?id=0');
        setBlog(data.response);
    }



    //pagination section start here
    const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1)
    }
    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1)
    }
    useEffect(() => {
        blogsUsers();
        const pagedatacount = Math.ceil(Blog.length / 10);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 10;
            const skip = LIMIT * page // 5 *2 = 10
            const dataskip = Blog?.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip)
        }
    }, [Blog], [page])
    //pagination section end Here







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
                                    <h1
                                        className="mb-4 heading text-white"
                                        data-aos="fade-up"
                                        data-aos-delay={100}
                                    >
                                        Blogs
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="untree_co-section bg-light">
                <div className="container">
                    <div className="row align-items-stretch">
                        {pageData.map((item, index) => (
                            <div className="col-lg-12 mb-4" key={index.id}  >
                                <div className="media-h d-flex h-100">
                                    <figure>
                                        <img src={`http://admin.talent-destination.com/BlogImages/${item.filePath}`} alt="Image" />
                                    </figure>
                                    <div className="media-h-body">
                                        <h2 className="mb-3" style={{ fontSize: "24px" }}>
                                            {item.blogHeading}
                                        </h2>
                                        <div >
                                            <span className="icon-calendar mr-2" />
                                            <span>{item.addedOn}</span> <span className="icon-person mr-2" />
                                            Talent-destination
                                        </div>
                                        <p style={{ fontSize: "20px" }}>
                                            {item.phragraph.length > 220 ? `${item.phragraph.substring(0, 220)}...` : item.phragraph}
                                            <Link to={`/blogDetails/${item.id}`}>Read More</Link>
                                        </p>

                                      
                                    </div>
                                </div>
                            </div>
                        ))}



                    </div>
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <ul className="list-unstyled custom-pagination">
                                <button type="button" className='btn btn-secondary' onClick={handlePrevios} disabled={page === 1}>Previous</button>
                                {
                                    Array(pageCount).fill(null).map((ele, index) => {
                                        return (
                                            <>
                                                <li >
                                                    <a active={page === index + 1 ? true : false} onClick={() => setPage(index + 1)}>
                                                        {index + 1}
                                                    </a>
                                                </li>
                                            </>
                                        )
                                    })
                                }

                                <button type="button" className='btn btn-secondary' onClick={handleNext} disabled={page === pageCount} >Next</button>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Blogs