import React, { useState, useEffect } from 'react';
import axios from 'axios';
import contactus from '../Images/fg.jpeg'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'
import Swal from 'sweetalert2';

function Career() {

    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [MobileNo, setMobileNo] = useState("");
    const [Email, setEmail] = useState("");
    const [Gender, setGender] = useState("");
    const [CurrentLocation, setCurrentLocation] = useState("");
    const [CurrentCTC, setCurrentCTC] = useState("");
    const [ExpectedCTC, setExpectedCTC] = useState("");
    const [HighestQualification, setHighestQualification] = useState("");
    const [PositionApplyFor, setPositionApplyFor] = useState("");
    const [CVFileName, setCVFileName] = useState("");

    const [msg, setMsg] = useState("");

    function handleChange(event) {
        setCVFileName(event.target.files[0])
    }

    const ContactRegistration = async () => {
        setMsg("Sending...");

        try {
            const formData = new FormData();
            formData.append('CVFileName', CVFileName);
            formData.append('FirstName', FirstName);
            formData.append('LastName', LastName);
            formData.append('MobileNo', MobileNo);
            formData.append('Email', Email);
            formData.append('Gender', Gender);
            formData.append('CurrentLocation', CurrentLocation);
            formData.append('CurrentCTC', CurrentCTC);
            formData.append('ExpectedCTC', ExpectedCTC);
            formData.append('HighestQualification', HighestQualification);
            formData.append('PositionApplyFor', PositionApplyFor);





            console.log("FormData", CVFileName)
            const config = {
                headers: {
                    'content-type': 'multipart/form-data',
                },
            };
            const response = await axios.post("https://api.talent-destination.com/api/Admin/Carrier", formData, config);

            if (response.status === 200) {
                setFirstName("");
                setLastName("");
                setMobileNo("");
                setEmail("");
                setGender("");
                setCurrentLocation("");
                setCurrentCTC("");
                setExpectedCTC("");
                setHighestQualification("");
                setPositionApplyFor("");
                setCVFileName("");
                // Reset file input field
                document.getElementById("cvInput").value = "";
                Swal.fire({
                    title: 'Thank You for Choosing Talent-Destination',
                    text: 'Our Team will be in contact  you after reviewing your profile.',
                    type: 'success',
                }).then(() => {
                    setMsg(""); // Clear the success message
                });
            }
        } catch (error) {
            // Handle errors here
            console.error('Error:', error);
        }
    }

    return (
        <>
            <Navbar />
            <div
                className="untree_co-heroo "
                style={{
                    backgroundImage:

                        `url(${contactus})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",





                }}
            >
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-12">
                            <div className="row justify-content-center mt-4 ">
                                <div className="col-lg-6 text-center " >
                                    <h2 className='text-white'
                                        style={{ fontFamily: "poppins", fontWeight: "700", fontSize: "38px", }}


                                    >
                                        Career
                                    </h2>
                                    <div


                                    >
                                        <h5 className='text-white text-left' style={{fontSize:"21px!important"}}>
                                            A fast growing executive search firm working on recruitment and
                                            HR Services. We work with progressive Indian companies and MNCs,
                                            leading investors and fast growing startups.
                                        </h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>{" "}
                    {/* /.row */}
                </div>{" "}


                {/* /.container */}
            </div>
            <div
                className="col-lg-12 mr-auto order-1 p-4"

            >

                <form >
                    <h2 style={{ marginLeft: "140px" }}>Fill All Feilds</h2>
                    <div className="row container mx-auto">
                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={FirstName} onChange={(e) => setFirstName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="First Name*"
                                maxLength={50}
                            />
                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={LastName} onChange={(e) => setLastName(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Last Name*"
                                maxLength={50}
                            />
                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <select className="form-control" value={Gender} onChange={(e) => setGender(e.target.value)}>
                                <option >Select Gender</option>
                                <option >Male</option>
                                <option >Female</option>
                                <option >Others</option>


                            </select>
                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={MobileNo} onChange={(e) => setMobileNo(e.target.value)}
                                type="number"
                                className="form-control"
                                placeholder="Mobile No*"
                                maxLength={10}
                            />
                        </div>

                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={Email} onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                className="form-control"
                                placeholder="Email*"
                            />
                        </div>

                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={CurrentLocation} onChange={(e) => setCurrentLocation(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Current Location*"
                                maxLength={100}
                            />
                        </div>



                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={CurrentCTC} onChange={(e) => setCurrentCTC(e.target.value)}
                                type="number"
                                className="form-control"
                                placeholder="Current CTC*"
                                maxLength={20}
                            />
                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={ExpectedCTC} onChange={(e) => setExpectedCTC(e.target.value)}
                                type="number"
                                className="form-control"
                                placeholder="Expected CTC"
                                maxLength={20}
                            />
                        </div>
                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={HighestQualification} onChange={(e) => setHighestQualification(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Highest Qualification*"
                                maxLength={40}
                            />
                        </div>



                        <div className="col-12 col-lg-4 mb-3">
                            <input
                                value={PositionApplyFor} onChange={(e) => setPositionApplyFor(e.target.value)}
                                type="text"
                                className="form-control"
                                placeholder="Position Apply For"
                                maxLength={100}
                            />
                        </div>
                        <div className="col-12 col-lg-4 " style={{ marginTop: "-23px" }}>
                            <label style={{ fontSize: "17px", color: "#2a255d" }}>Upload CV</label>
                            <input
                                onChange={handleChange}
                                type="file"
                                id="cvInput"
                                name="CVFileName"
                                className="form-control"

                            />
                            <p className='text-danger ' style={{ fontSize: "14px" }}>* Upload Document in .Docx .Pdf format only.</p>
                        </div>





                        <div className="col-12">
                            <button
                                onClick={ContactRegistration}
                                type="button"

                                className="btn btn-primary"
                            >Send Message</button>
                        </div>
                        <p className="text-success">{msg}</p>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    )
}

export default Career