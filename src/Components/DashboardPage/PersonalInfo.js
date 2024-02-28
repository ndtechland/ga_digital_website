import React, { useState, useEffect } from 'react';
import "../CustomCss/UserProfile.css"
import "../CustomCss/Popup.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PersonalInfo() {
    //popup update form
    const [isPopupOpen, setIsPopupOpen] = useState(false);


    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    //personal Information post api start
    const [PersonalEmailAddress, setPersonalEmailAddress] = useState("")
    const [MobileNumber, setMobileNumber] = useState("")
    const [DateOfBirth, setDateOfBirth] = useState("")
    const [Age, setAge] = useState("")
    const [FatherName, setFatherName] = useState("")
    const [aadharcard, setAadharcard] = useState("")
    const [Pan, setPan] = useState("")
    const [AddressLine1, setAddressLine1] = useState("")
    const [AddressLine2, setAddressLine2] = useState("")
    const [City, setCity] = useState("")
    const [StateId, setStateId] = useState("")
    const [Pincode, setPincode] = useState("")
    const [aadharOne, setAadharOne] = useState("")
    const [panimg, setPanimg] = useState("")


    const ProfileInfoRegistration = async () => {
        try {
          const token = sessionStorage.getItem('token');
      
          const formData = new FormData();
          formData.append('PersonalEmailAddress', PersonalEmailAddress);
          formData.append('MobileNumber', MobileNumber);
          formData.append('DateOfBirth', DateOfBirth);
          formData.append('Age', Age);
          formData.append('FatherName', FatherName);
          formData.append('aadharcard', aadharcard);
          formData.append('AddressLine1', AddressLine1);
          formData.append('AddressLine2', AddressLine2);
          formData.append('City', City);
          formData.append('StateId', StateId);
          formData.append('Pincode', Pincode);
          formData.append('aadharOne', aadharOne);
          formData.append('panimg', panimg);
      
          // Append files to FormData
          formData.append('aadharOneFile', aadharOne);
          formData.append('panimgFile', panimg);
      
          const responseData1 = await axios.post(
            'https://crm.ndinfotech.com/api/EmployeeApi/PersonalDetail',
            formData,
            {
              headers: {
                'Content-Type': 'multipart/form-data',
                'Authorization': `Bearer ${token}`
              },
            }
          );
      
          if (responseData1.status === 200) {
            const { token } = responseData1.data;
            console.log('Update successful:', responseData1.data);
            toast.success('Update Successful');
          } else {
            toast.error('Update failed');
          }
        } catch (error) {
          console.error('Error:', error);
          if (error.response) {
            console.error('Server response data:', error.response.data);
            console.error('Server response status:', error.response.status);
            console.error('Server response headers:', error.response.headers);
          } else if (error.request) {
            console.error('No response received:', error.request);
          } else {
            console.error('Error setting up the request:', error.message);
          }
          toast.error('Network error');
        }
      };
      
      function handleChange(event) {
        setAadharOne(event.target.files[0]);
      }
      
      function handleChange1(event) {
        setPanimg(event.target.files[0]);
      }
      

    //personal Information post api end


    //State Drop Down api start



    const [citylist, setCitylist] = useState([])
    const [schoollist, setSchoollist] = useState([])
    const [id, setId] = useState('');

    //get city list
    const stateDroplist = async () => {
        const { data } = await axios.get('https://crm.ndinfotech.com/api/EmployeeApi/Getstate');
        setCitylist(data.data);
    }


    // get school list
    const cityDroplist = async () => {
        if (id) {
            const { data } = await axios.get(`https://crm.ndinfotech.com/api/EmployeeApi/GetCity?stateid=${id}`);
            setSchoollist(data.data);
        }
    };

    useEffect(() => {
        stateDroplist();
        cityDroplist();
    }, [id]);


    const handleCityChange = (event) => {
        setId(event.target.value);
    };

    //State Drop Down api end




    return (
        <>

            <div class="container py-2 border">
                <div className='d-flex justify-content-between pb-2' style={{ borderBottom: "1px solid black" }}>
                    <span className='text-left text-danger '><u>Personal Information</u></span>
                    <button className='btn btn-success' onClick={openPopup}>Update</button>


                </div>


                <div class="row  mt-4">
                    <div class="col-md-8 col-12">
                        <div className='d-flex'>
                            <span style={{ fontSize: "22px!important" }}><b >Your Email:</b></span><p>Vishnundtechland@gmail.com</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12" >
                        <div className='d-flex'>
                            <span><b>Mobile No:</b></span><p>8355039378</p>
                        </div>
                    </div>


                </div>
                <br />
                <div class="row ">
                    <div class="col-md-8 col-12">
                        <div className='d-flex'>
                            <span><b>D.O.B:</b></span><p>17/02/1998</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12" >
                        <div className='d-flex'>
                            <span><b>Age:</b></span><p>24 Year</p>
                        </div>
                    </div>


                </div>
                <br />
                <div class="row ">
                    <div class="col-md-8 col-12">
                        <div className='d-flex'>
                            <span> <b>Father Name:</b></span><p>S.N Tiwari</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12" >
                        <div className='d-flex'>
                            <span> <b>Pan No:</b></span><p>BIRPT4565H</p>
                        </div>
                    </div>


                </div>
                <br />
                <div class="row ">
                    <div class="col-md-8 col-12">
                        <div className='d-flex'>
                            <span><b>Address-1:</b></span><p>Noida</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div className='d-flex'>
                            <span><b>Address-2:</b></span><p>Noida</p>
                        </div>
                    </div>



                </div>
                <br />
                <div class="row ">
                    <div class="col-md-8 col-12">
                        <div className='d-flex'>
                            <span><b>City:</b></span><p>Noida</p>
                        </div>
                    </div>
                    <div class="col-md-4 col-12">
                        <div className='d-flex'>
                            <span><b>State:</b></span><p>u.p</p>
                        </div>
                    </div>



                </div>
                <br />
                <div class="row ">
                    <div class="col-md-8 col-12">
                        <div className='d-flex'>
                            <span><b>Pincode:</b></span><p>201301</p>
                        </div>
                    </div>




                </div>
            </div>

            <div>
                {isPopupOpen && (

                    <>

                        <div className="modal1">
                            {" "}
                            {/* This is the background overlay */}
                            <div className='container px-2'>
                                <div className="modal1-content">
                                    {" "}
                                    {/* This is the actual modal/popup box */}
                                    <span className="modal1-close" onClick={closePopup}>×</span>
                                    <>
                                        <div>
                                            <div className="row ">
                                                <div className="col-lg-12">
                                                    <h1 className=" text-left text-danger">Personal Information</h1>
                                                    <form>
                                                        <div className="row g-3">
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-name" className="form-label">
                                                                    Your Email
                                                                </label>
                                                                <input
                                                                    type="email"
                                                                    className="form-control"
                                                                    value={PersonalEmailAddress} onChange={(e) => setPersonalEmailAddress(e.target.value)}
                                                                    name="your-name"
                                                                    required=""
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-surname" className="form-label">
                                                                    Mobile No
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={MobileNumber} onChange={(e) => setMobileNumber(e.target.value)}

                                                                    name="your-surname"
                                                                    required=""
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-email" className="form-label">
                                                                    D.O.B
                                                                </label>
                                                                <input
                                                                    type="date"
                                                                    className="form-control"
                                                                    value={DateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)}
                                                                    name="your-email"
                                                                    required=""
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Age
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={Age} onChange={(e) => setAge(e.target.value)}
                                                                    name="your-subject"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Father Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={FatherName} onChange={(e) => setFatherName(e.target.value)}
                                                                    name="your-subject"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Aadhar Number
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={aadharcard} onChange={(e) => setAadharcard(e.target.value)}
                                                                    name="your-subject"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Pan No
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={Pan} onChange={(e) => setPan(e.target.value)}
                                                                    name="your-subject"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Address-1
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={AddressLine1} onChange={(e) => setAddressLine1(e.target.value)}

                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Address-2
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"
                                                                    value={AddressLine2} onChange={(e) => setAddressLine2(e.target.value)}
                                                                    name="your-subject"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    State
                                                                </label>
                                                                <select
                                                                    className="form-control"
                                                                    onChange={handleCityChange}
                                                                    value={StateId}
                                                                    // onChange={(e) => setStateId(e.target.value)}
                                                                >
                                                                    <option>--select state--</option>
                                                                    {citylist.map((item, index) => (
                                                                        <option key={index.id} value={item.id}>
                                                                            {item.sName}
                                                                        </option>
                                                                    ))}
                                                                </select>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    City
                                                                </label>
                                                                <select className="form-control" value={City} onChange={(e) => setCity(e.target.value)} >
                                                                    <option selected>--select Your city--</option>
                                                                    {schoollist.map((item, index) => {
                                                                        console.log('data.item')
                                                                        return (
                                                                            <option key={index.id}>{item.city1}</option>
                                                                        )
                                                                    })}
                                                                </select>
                                                            </div>

                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Pincode
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"
                                                                    value={Pincode} onChange={(e) => setPincode(e.target.value)}
                                                                    name="your-subject"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Upload Aadhar card
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    className="form-control"
                                                                    onChange={handleChange}
                                                                    name="your-subject"
                                                                />
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Upload Pan card
                                                                </label>
                                                                <input
                                                                    type="file"
                                                                    className="form-control"
                                                                    onChange={handleChange1}
                                                                    name="your-subject"
                                                                />
                                                            </div>


                                                            <div className="col-12 mt-2">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <button
                                                                            onClick={ProfileInfoRegistration}
                                                                            type="type"
                                                                            className="btn btn-success w-100 fw-bold"
                                                                        >
                                                                            Submit
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>

                                    </>

                                </div>
                            </div>

                        </div>

                    </>


                )}


            </div>

        </>
    )
}

export default PersonalInfo