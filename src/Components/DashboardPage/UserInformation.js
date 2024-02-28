import React, { useState, useEffect } from 'react';
import axios from 'axios';

function UserInformation() {
  const [userInfo, setUserInfo] = useState([]);
  const token = sessionStorage.getItem('token');

  const userInfoList = async () => {
    try {
      if (token) {
        const { data } = await axios.get(
          'https://crm.ndinfotech.com/api/EmployeeApi/GetEmployeeById',
          {
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setUserInfo(data.data);
      }
    } catch (error) {
      console.error('Error fetching user information:', error);
    }
  };

  useEffect(() => {
    userInfoList();
  }, []);

  return (
    <div className="container py-2 border">
      <div className="d-flex justify-content-between pb-2" style={{ borderBottom: '1px solid black' }}>
        <span className="text-left text-danger">
          <u>Basic Information</u>
        </span>
      </div>

      {userInfo ? (
        <>
          <div className="row">
            <div className="col">
              <div className="d-flex">
                <span style={{ fontSize: '22px!important' }}>
                  <b>Name:</b>
                </span>
                <p>{userInfo.fullName}</p>
              </div>
            </div>
            <div className="col" style={{ marginLeft: '-105px' }}>
              <div className="d-flex">
                <span>
                  <b>Work Email:</b>
                </span>
                <p>{userInfo.workEmail}</p>
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <div className="d-flex">
                <span>
                  <b>DOJ:</b>
                </span>
                <p>{userInfo.dateOfJoining}</p>
              </div>
            </div>
            <div className="col" style={{ marginLeft: '-100px' }}>
              <div className="d-flex">
                <span>
                  <b>Gender:</b>
                </span>
                <p>{userInfo.genderName}</p>
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <div className="d-flex">
                <span>
                  <b>Work Location:</b>
                </span>
                <p>{userInfo.workLocationName}</p>
              </div>
            </div>
            <div className="col" style={{ marginLeft: '-100px' }}>
              <div className="d-flex">
                <span>
                  <b>Designation:</b>
                </span>
                <p>{userInfo.designationName}</p>
              </div>
            </div>
          </div>

          <br />

          <div className="row">
            <div className="col">
              <div className="d-flex">
                <span>
                  <b>Department:</b>
                </span>
                <p>{userInfo.departmentName}</p>
              </div>
            </div>
            <div className="col" style={{ marginLeft: '-100px' }}>
              <div className="d-flex">
                <span>
                  <b>Company Name:</b>
                </span>
                <p>{userInfo.customerName}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p className="text-danger text-center">Record Not Found</p>
      )}
    </div>
  );
}

export default UserInformation;
