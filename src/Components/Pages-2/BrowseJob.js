import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import service1 from '../Images/Footer_card.jpg'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

function BrowseJob() {






    const [Job, setJob] = useState([]);
    const [filteredJob, setFilteredJob] = useState([]);
    const [searchCriteria, setSearchCriteria] = useState({
        jobTitle: '',
        location: '',
        industries: ''
    });
    const [pageData, setPageData] = useState([]);
    const [page, setPage] = useState(1);
    const [pageCount, setPageCount] = useState(0);
    const [industries, setIndustries] = useState([]);

    useEffect(() => {
        getUsers();
        industriesUsers();
    }, []);

    const getUsers = async () => {
        const { data } = await axios.get('https://api.talent-destination.com/api/Admin/GetCurrent_Opening');
        setJob(data.response);
    };

    const industriesUsers = async () => {
        const { data } = await axios.get('https://api.talent-destination.com/api/Admin/IndustriesDropdownList');
        setIndustries(data.indusDropdownList);
    };

    const handleSearch = () => {
        const filtered = Job.filter(item => {
            const jobTitle = item.jobTitle ? item.jobTitle.toLowerCase() : ''; // Check if jobTitle exists
            const location = item.location ? item.location.toLowerCase() : ''; // Check if location exists
            const industries = item.industries ? item.industries.toLowerCase() : ''; // Check if industries exists
            const department = item.department ? item.department.toLowerCase() : ''; // Check if department exists
    
            // Check if search criteria are empty, if so, return true to include the item
            if (
                !searchCriteria.jobTitle &&
                !searchCriteria.location &&
                !searchCriteria.industries &&
                !searchCriteria.department
            ) {
                return true;
            }
    
            // Include filtering based on search criteria if they are not empty
            return (
                (!searchCriteria.jobTitle || jobTitle.includes(searchCriteria.jobTitle.toLowerCase())) &&
                (!searchCriteria.location || location.includes(searchCriteria.location.toLowerCase())) &&
                (!searchCriteria.industries || industries.includes(searchCriteria.industries.toLowerCase())) &&
                (!searchCriteria.department || department.includes(searchCriteria.department.toLowerCase()))
            );
        });
        setFilteredJob(filtered);
    };
    
    


    const handleInputChange = (e) => {
        setSearchCriteria({
            ...searchCriteria,
            [e.target.name]: e.target.value
        });
    };

    useEffect(() => {
        setFilteredJob(Job);
    }, [Job]);

    useEffect(() => {
        const pagedatacount = Math.ceil(filteredJob.length / 5);
        setPageCount(pagedatacount);

        if (page) {
            const LIMIT = 5
            const skip = LIMIT * page;
            const dataskip = filteredJob?.slice(page === 1 ? 0 : skip - LIMIT, skip);
            setPageData(dataskip)
        }
    }, [filteredJob, page]);

    const handleNext = () => {
        if (page === pageCount) return page;
        setPage(page + 1);
    };

    const handlePrevios = () => {
        if (page === 1) return page;
        setPage(page - 1);
    };

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
                                        Browse Jobs
                                    </h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="col-lg-12 mr-auto order-1 p-4"

            >

                <form onSubmit={e => { e.preventDefault(); handleSearch(); }}>

                    <h1 className='text-center font-bold t'>Browse Jobs</h1>
                    <div className="row container mx-auto">
                        <div className="col-12 col-lg-4 mb-3">
                            <label>Job Title</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="job title, skills..."
                                value={searchCriteria.jobTitle}
                                onChange={handleInputChange}
                                name="jobTitle"
                            />
                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <label>Industries</label>

                            <select name="industries" className="form-control" value={searchCriteria.industries} onChange={handleInputChange}>
                                <option>Select Industries</option>
                                {industries.map((item, index) => (
                                    <option key={index}>{item.industriesName}</option>
                                ))}
                            </select>

                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <label>Location</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Search Location"
                                value={searchCriteria.location}
                                onChange={handleInputChange}
                                name="location"
                            />
                        </div>


                        <div className="col-12 justify-content-center d-flex">
                            <input
                                type="submit"
                                value="Search Job"
                                className="btn btn-primary"
                            />
                        </div>


                    </div>
                </form>
            </div>

            <div className="untree_co-section bg-light">
                <div className="container">
                    {pageData.length ?
                        <div className="">
                            <h3 className='ml-3'>Current Opening</h3>
                            {pageData.map((item, index) => (
                                <>
                                    <div className="col-lg-12 mb-4"   >

                                        <div className="media-h d-flex justify-content-between px-2 h-100">

                                            <div className=" px-2 py-1">
                                                <div className='d-flex '>
                                                    <h4 className="mb-3">
                                                        Job Title-{item.jobTitle}
                                                    </h4>

                                                </div>
                                                <div className=" d-flex">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-building"
                                                        width={30}
                                                        height={30}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#000000"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M3 21l18 0" />
                                                        <path d="M9 8l1 0" />
                                                        <path d="M9 12l1 0" />
                                                        <path d="M9 16l1 0" />
                                                        <path d="M14 8l1 0" />
                                                        <path d="M14 12l1 0" />
                                                        <path d="M14 16l1 0" />
                                                        <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16" />
                                                    </svg>

                                                    <div className='d-flex'>
                                                        <h5 className='text-black'>Department:</h5>
                                                        <h6 className='text-black p-1'> {item.department}</h6>
                                                    </div>




                                                </div>

                                                <div className=" d-flex">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-notes"
                                                        width={30}
                                                        height={30}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#000000"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path d="M5 3m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z" />
                                                        <path d="M9 7l6 0" />
                                                        <path d="M9 11l6 0" />
                                                        <path d="M9 15l4 0" />
                                                    </svg>
                                                    <div className='d-flex'>
                                                        <h5 className='text-black'>No. of Positions: </h5>
                                                        <h6 className='text-black p-1'>  {item.noOfOpening}</h6>
                                                    </div>




                                                </div>
                                                <div className=" d-flex">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-calendar-filled"
                                                        width={30}
                                                        height={30}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#9e9e9e"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M16 2a1 1 0 0 1 .993 .883l.007 .117v1h1a3 3 0 0 1 2.995 2.824l.005 .176v12a3 3 0 0 1 -2.824 2.995l-.176 .005h-12a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-12a3 3 0 0 1 2.824 -2.995l.176 -.005h1v-1a1 1 0 0 1 1.993 -.117l.007 .117v1h6v-1a1 1 0 0 1 1 -1zm3 7h-14v9.625c0 .705 .386 1.286 .883 1.366l.117 .009h12c.513 0 .936 -.53 .993 -1.215l.007 -.16v-9.625z"
                                                            strokeWidth={0}
                                                            fill="currentColor"
                                                        />
                                                        <path
                                                            d="M12 12a1 1 0 0 1 .993 .883l.007 .117v3a1 1 0 0 1 -1.993 .117l-.007 -.117v-2a1 1 0 0 1 -.117 -1.993l.117 -.007h1z"
                                                            strokeWidth={0}
                                                            fill="currentColor"
                                                        />
                                                    </svg>

                                                    <div className='d-flex'>
                                                        <h5 className='text-black'>Posted On: </h5>
                                                        <h6 className='text-black p-1'> {item.addedOn}</h6>
                                                    </div>



                                                </div>
                                                <div className=" d-flex">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-map-pin-filled"
                                                        width={30}
                                                        height={30}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#9e9e9e"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M18.364 4.636a9 9 0 0 1 .203 12.519l-.203 .21l-4.243 4.242a3 3 0 0 1 -4.097 .135l-.144 -.135l-4.244 -4.243a9 9 0 0 1 12.728 -12.728zm-6.364 3.364a3 3 0 1 0 0 6a3 3 0 0 0 0 -6z"
                                                            strokeWidth={0}
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                    <div className='d-flex'>
                                                        <h5 className='text-black'>Job Location: </h5>
                                                        <h6 className='text-black p-1'> {item.location}</h6>
                                                    </div>



                                                </div>
                                                <div className=" d-flex">
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        className="icon icon-tabler icon-tabler-briefcase-filled"
                                                        width={30}
                                                        height={30}
                                                        viewBox="0 0 24 24"
                                                        strokeWidth="1.5"
                                                        stroke="#9e9e9e"
                                                        fill="none"
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                    >
                                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                        <path
                                                            d="M22 13.478v4.522a3 3 0 0 1 -3 3h-14a3 3 0 0 1 -3 -3v-4.522l.553 .277a20.999 20.999 0 0 0 18.897 -.002l.55 -.275zm-8 -11.478a3 3 0 0 1 3 3v1h2a3 3 0 0 1 3 3v2.242l-1.447 .724a19.002 19.002 0 0 1 -16.726 .186l-.647 -.32l-1.18 -.59v-2.242a3 3 0 0 1 3 -3h2v-1a3 3 0 0 1 3 -3h4zm-2 8a1 1 0 0 0 -1 1a1 1 0 1 0 2 .01c0 -.562 -.448 -1.01 -1 -1.01zm2 -6h-4a1 1 0 0 0 -1 1v1h6v-1a1 1 0 0 0 -1 -1z"
                                                            strokeWidth={0}
                                                            fill="currentColor"
                                                        />
                                                    </svg>
                                                    <div className='d-flex'>
                                                        <h5 className='text-black'>Required Experience: </h5>
                                                        <h6 className='text-black p-1'> {item.requiredExperience}</h6>
                                                    </div>



                                                </div>

                                                <h3>Job Description:</h3>
                                                <p style={{ fontSize: "20px", textAlign: "justify", marginBottom: "0rem!important" }}>
                                                    {item.jobDescription.split('\n').map((line, index) => (
                                                        <p key={index}>{line}</p>
                                                    ))}
                                                </p>
                                            </div>

                                            <div className='mt-2'>
                                                <Link to="/Career">
                                                    <button className='btn rounded-pill btn-primary ' style={{ width: "130px" }}>Apply Job</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </>

                            ))}
                            <div className="row mt-5">
                                <div className="col-12 text-center item-justify-center">
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
                        </div> :

                        <div>
                            <h2 className='ml-2'>Sorry!</h2>
                            <div className='bg-white d-flex justify-content-between   ' style={{ height: "120px" }}>
                                <p className='rounded-md text-black bg-white m-4'>We don't have any Current opening at the moment,<br />
                                    Please submit your CV for future opportunities.
                                </p>

                                <Link to="/Career">

                                    <button
                                        type="button"
                                        style={{ height: "50px", }}
                                        className="btn btn-secondary m-4 uppercase "
                                    >
                                        Submit CV
                                    </button>
                                </Link>


                            </div>

                        </div>
                    }

                </div>
            </div>



            <Footer />
        </>
    )
}

export default BrowseJob