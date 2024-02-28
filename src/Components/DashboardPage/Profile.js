import React, { useState, useEffect } from 'react';
import "../CustomCss/UserProfile.css"
import "../CustomCss/Popup.css"
import "../CustomCss/UploadButton.css"
import axios from 'axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import DashboardTopHeader from '../Dashboard/DashboardTopHeader'
import DashboardLeftHeader from '../Dashboard/DashboardLeftHeader'
import UserInformation from './UserInformation';
import AccountInfo from './AccountInfo';
import PersonalInfo from './PersonalInfo';




function Profile(props) {

    const [activeTab, setActiveTab] = useState(1);

    const handleTabClick = (tabNumber) => {
        setActiveTab(tabNumber);
    };

    //get basic information of user start
    const [userInfo, setuserInfo] = useState([])
    const token = sessionStorage.getItem('token');


    const userInfoList = async () => {

        if (token) {
            const { data } = await axios.get('https://crm.ndinfotech.com/api/EmployeeApi/GetEmployeeById',
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }
            );
            setuserInfo(data.data);
        }
    };

    useEffect(() => {
        userInfoList();

    }, []);



    return (
        <>
            <DashboardTopHeader />
            <DashboardLeftHeader />
            <ToastContainer />
            <div id="page-container">

                <div className="container">
                    <div className="row profile1">
                        <div className="col-md-3">
                            <div className="profile-sidebar">

                                <div className="profile-userpic">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfBk-osPazUcEkZIvAkzS1ahpLQOpLDazoeQ&usqp=CAU" className='w-75 ml-4' />
                                </div>

                                <div className='ml-5'>
                                    <div className="file-input">
                                        <input
                                            type="file"
                                            name="file-input"
                                            id="file-input"
                                            className="file-input__input"
                                        />
                                        <label className="file-input__label" htmlFor="file-input">
                                            <svg
                                                aria-hidden="true"
                                                focusable="false"
                                                data-prefix="fas"
                                                data-icon="upload"
                                                className="svg-inline--fa fa-upload fa-w-16"
                                                role="img"
                                                xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 512 512"
                                            >
                                                <path
                                                    fill="currentColor"
                                                    d="M296 384h-80c-13.3 0-24-10.7-24-24V192h-87.7c-17.8 0-26.7-21.5-14.1-34.1L242.3 5.7c7.5-7.5 19.8-7.5 27.3 0l152.2 152.2c12.6 12.6 3.7 34.1-14.1 34.1H320v168c0 13.3-10.7 24-24 24zm216-8v112c0 13.3-10.7 24-24 24H24c-13.3 0-24-10.7-24-24V376c0-13.3 10.7-24 24-24h136v8c0 30.9 25.1 56 56 56h80c30.9 0 56-25.1 56-56v-8h136c13.3 0 24 10.7 24 24zm-124 88c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20zm64 0c0-11-9-20-20-20s-20 9-20 20 9 20 20 20 20-9 20-20z"
                                                />
                                            </svg>
                                            <span>Upload photo</span>
                                        </label>
                                    </div>


                                </div>

                                {<div className="profile-usertitle">

                                    <div className="profile-usertitle-name">Employee Id-{userInfo.employeeId}</div>
                                    {/* <div className="profile-usertitle-name">{userInfo.fullName}</div> */}
                                    <div className="profile-usertitle-job"> {userInfo.designationName}</div>
                                </div>}
                              







                            </div>
                        </div>
                        <div className="col-md-9">
                            <div className="profile-content">
                                <div className='d-flex px-2'>
                                    <div style={{ borderRadius: "8px!important", fontSize: "18px", padding: "4px", cursor: "pointer" }} className={`tab ${activeTab === 1 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(1)}>

                                        Basic Information
                                    </div>
                                    <svg style={{ marginTop: "6px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="currentColor" />
                                    </svg>
                                    <div style={{ borderRadius: "8px!important", fontSize: "18px", padding: "4px", cursor: "pointer", marginLeft: "3px" }} className={`tab ${activeTab === 2 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(2)}>
                                        Personal Information
                                    </div>
                                    <svg style={{ marginTop: "6px" }} xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-arrow-badge-right-filled" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                        <path d="M7 6l-.112 .006a1 1 0 0 0 -.669 1.619l3.501 4.375l-3.5 4.375a1 1 0 0 0 .78 1.625h6a1 1 0 0 0 .78 -.375l4 -5a1 1 0 0 0 0 -1.25l-4 -5a1 1 0 0 0 -.78 -.375h-6z" stroke-width="0" fill="currentColor" />
                                    </svg>
                                    <div style={{ borderRadius: "8px!important", fontSize: "18px", padding: "4px", marginLeft: "4px", cursor: "pointer" }} className={`tab ${activeTab === 3 ? 'active' : ''}`}
                                        onClick={() => handleTabClick(3)}>
                                        Account Information
                                    </div>
                                </div>

                                {activeTab === 1 &&

                                    <UserInformation />

                                }
                                {activeTab === 2 &&

                                    <PersonalInfo />

                                }
                                {activeTab === 3 &&

                                    <AccountInfo />

                                }

                            </div>
                        </div>
                    </div>
                </div>





            </div>
        </>
    )
}

export default Profile