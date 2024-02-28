import React, { useState, useEffect } from 'react';
import "../CustomCss/UserProfile.css"
import "../CustomCss/Popup.css"
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function AccountInfo() {




    //Account post api start
    
    const [AccountHolderName, setAccountHolderName] = useState("");
    const [BankName, setBankName] = useState("");
    const [AccountNumber, setAccountNumber] = useState("");
    const [ReEnterAccountNumber, setReEnterAccountNumber] = useState("");
    const [Ifsc, setIfsc] = useState("");
    const [EpfNumber, setEpfNumber] = useState("");
    const [DeductionCycle, setDeductionCycle] = useState("");
    const [EmployeeContributionRate, setEmployeeContributionRate] = useState("");
    const [Nominee, setNominee] = useState("");
    const [AccountTypeId, setAccountTypeId] = useState("")


    const [AccountError, setAccountError] = useState("")
    const [BankError, setBankError] = useState("")
    const [AccounnumberError, setAccountnumberError] = useState("")
    const [ReEnter, setReEnter] = useState("")
    const [IfscError, setIfscError] = useState("")
    const [EpfError, setEpfError] = useState("")
    const [DeductionError, setDeductionError] = useState("")
    const [ContributionError, setContributionError] = useState("")
    const [NomineeError, setNomineeError] = useState("")

    const ProfileRegistration = async (props) => {


        if (
            !AccountHolderName || !BankName || !AccountNumber || !ReEnterAccountNumber || !Ifsc || !EpfNumber || !DeductionCycle
            || !EmployeeContributionRate || !Nominee || !AccountTypeId
        ) {
            if (!AccountHolderName) {
                setAccountError('Account Holder Name is required');
            }

            if (!BankName) {
                setBankError('Bank Name is required');
            }
            if (!AccountNumber) {
                setAccountnumberError('Account Number is required');
            }
            if (!ReEnterAccountNumber) {
                setReEnter('Re-enter Account Number is required');
            }
            if (!Ifsc) {
                setIfscError('Ifsc code is required');
            }
            if (!EpfNumber) {
                setEpfError('EPF  Number is required');
            }
            if (!DeductionCycle) {
                setDeductionError('Deduction Cycle is required');
            }
            if (!EmployeeContributionRate) {
                setContributionError('Employee Contribution Rate is required');
            }
            if (!Nominee) {
                setNomineeError('Nominee Name is required');
            }

            return;
        }

        const profileData = {
            AccountHolderName,
            BankName,
            AccountNumber,
            ReEnterAccountNumber,
            Ifsc,
            EpfNumber,
            DeductionCycle,
            EmployeeContributionRate,
            Nominee,
            AccountTypeId
        };

        try {
            const token = sessionStorage.getItem('token');

            const responseData = await axios.post(
                'https://crm.ndinfotech.com/api/EmployeeApi/BankDetail',
                profileData,
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    },
                }
            );

            if (responseData.status === 200) {
                const { token } = responseData.data;
                console.log('Login successful:', responseData.data);
                toast.success('update Successfully');


                setAccountHolderName("");
                setBankName("");
                setAccountNumber("");
                setReEnterAccountNumber("");
                setIfsc("");
                setEpfNumber("");
                setDeductionCycle("");
                setEmployeeContributionRate("");
                setNominee("");
                setAccountTypeId("");
            } else {

                toast.error('Login failed');
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
    //Account post api start







    const [isPopupOpen1, setIsPopupOpen1] = useState(false);

    const openPopup1 = () => {
        setIsPopupOpen1(true);
    };

    const closePopup1 = () => {
        setIsPopupOpen1(false);
    };

      //get basic information of user start


      const [userInfo1, setuserInfo1] = useState([])
      const token=sessionStorage.getItem('token')
  
  
  
      const userInfoList1 = async () => {
  
          if (token) {
              const { data } = await axios.get('https://crm.ndinfotech.com/api/EmployeeApi/GetBankdetail',
                  {
                      headers: {
                          'Content-Type': 'application/json',
                          'Authorization': `Bearer ${token}`
                      },
                  }
              );
              setuserInfo1(data.data);
          }
      };
  
      useEffect(() => {
          userInfoList1();
  
      }, []);




    return (
        <>
            <div class="container py-2 border">
                <div className='d-flex justify-content-between pb-2' style={{ borderBottom: "1px solid black" }}>
                    <span className='text-left text-danger '><u>Account Information</u></span>
                    <button className='btn btn-success' onClick={openPopup1}>Update</button>
                </div>


                {<div class="row  ">
                    <div class="col">
                        <div className='d-flex'>
                            <span style={{ fontSize: "22px!important" }}><b >Account Holder Name:</b></span><p>{userInfo1.accountHolderName}</p>
                        </div>
                    </div>
                    <div class="col" >
                        <div className='d-flex'>
                            <span><b>Bank Name:</b></span><p>{userInfo1.bankName}</p>
                        </div>
                    </div>


                </div>}
                <br />
                {<div class="row ">
                    <div class="col">
                        <div className='d-flex'>
                            <span><b>Account No:</b></span><p>{userInfo1.accountNumber}</p>
                        </div>
                    </div>
                    <div class="col" >
                        <div className='d-flex'>
                            <span><b>IFSC Code:</b></span><p>{userInfo1.ifsc}</p>
                        </div>
                    </div>


                </div>}
                <br />
                {<div class="row ">
                    <div class="col">
                        <div className='d-flex'>
                            <span> <b>EPF No:</b></span><p>{userInfo1.epfNumber}</p>
                        </div>
                    </div>
                    <div class="col" >
                        <div className='d-flex'>
                            <span> <b>Employee Contribution Rate:</b></span><p>{userInfo1.employeeContributionRate}.00</p>
                        </div>
                    </div>


                </div>}
                <br />
                {<div class="row ">
                    <div class="col">
                        <div className='d-flex'>
                            <span><b>Deduction Cycle:</b></span><p>{userInfo1.deductionCycle}</p>
                        </div>
                    </div>
                    <div class="col">
                        <div className='d-flex'>
                            <span><b>Nominees Name:</b></span><p>{userInfo1.nominee}</p>
                        </div>
                    </div>



                </div>}
                <br />
                <div class="row ">
                    <div class="col">
                        <div className='d-flex'>
                            <span><b>Account Type:</b></span><p>{userInfo1.accountTypeId}</p>
                        </div>
                    </div>




                </div>
            </div>

            <div>
                    {isPopupOpen1 && (

                        <>

                            <div className="modal1">
                                {" "}
                                {/* This is the background overlay */}
                                <div className='container px-4'>
                                    <div className="modal1-content">
                                        {" "}
                                        <span className="modal1-close" onClick={closePopup1}>×</span>
                                        <div>
                                            <div className="row ">
                                                <div className="col-lg-12">
                                                    <h1 className=" text-left text-danger">Account Information</h1>
                                                    <form>
                                                        <div className="row g-3">
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-name" className="form-label">
                                                                    Account Holder Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"

                                                                    name="your-name"
                                                                    required=""
                                                                    value={AccountHolderName}
                                                                    onChange={(e) => {
                                                                        setAccountHolderName(e.target.value);
                                                                        setAccountError("")
                                                                    }}
                                                                />
                                                                {AccountError && <p className="text-danger" style={{ fontSize: "15px" }}>{AccountError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-surname" className="form-label">
                                                                    Bank Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"

                                                                    name="your-surname"
                                                                    required=""
                                                                    value={BankName}
                                                                    onChange={(e) => {
                                                                        setBankName(e.target.value);
                                                                        setBankError("")
                                                                    }}
                                                                />
                                                                {BankError && <p className="text-danger" style={{ fontSize: "15px" }}>{BankError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-email" className="form-label">
                                                                    Account No
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"

                                                                    name="your-email"
                                                                    required=""
                                                                    value={AccountNumber}
                                                                    onChange={(e) => {
                                                                        setAccountNumber(e.target.value);
                                                                        setAccountnumberError("")
                                                                    }}

                                                                />
                                                                {AccounnumberError && <p className="text-danger" style={{ fontSize: "15px" }}>{AccounnumberError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-email" className="form-label">
                                                                    Re-Enter Account No
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"

                                                                    name="your-email"
                                                                    required=""
                                                                    value={ReEnterAccountNumber}
                                                                    onChange={(e) => {
                                                                        setReEnterAccountNumber(e.target.value);
                                                                        setReEnter("");
                                                                    }}

                                                                />
                                                                {ReEnter && <p className="text-danger" style={{ fontSize: "15px" }}>{ReEnter}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    IFSC Code
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"

                                                                    name="your-subject"
                                                                    value={Ifsc}
                                                                    onChange={(e) => {
                                                                        setIfsc(e.target.value);
                                                                        setIfscError("")
                                                                    }}

                                                                />
                                                                {IfscError && <p className="text-danger" style={{ fontSize: "15px" }}>{IfscError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    EPF No
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"

                                                                    name="your-subject"
                                                                    value={EpfNumber}
                                                                    onChange={(e) => {
                                                                        setEpfNumber(e.target.value);
                                                                        setEpfError("")
                                                                    }}
                                                                />
                                                                {EpfError && <p className="text-danger" style={{ fontSize: "15px" }}>{EpfError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Employee Contribution Rate
                                                                </label>
                                                                <input
                                                                    type="number"
                                                                    className="form-control"

                                                                    name="your-subject"
                                                                    value={EmployeeContributionRate}
                                                                    onChange={(e) => {
                                                                        setEmployeeContributionRate(e.target.value);
                                                                        setContributionError("");
                                                                    }}
                                                                />
                                                                {ContributionError && <p className="text-danger" style={{ fontSize: "15px" }}>{ContributionError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Deduction Cycle
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"

                                                                    name="your-subject"
                                                                    value={DeductionCycle}
                                                                    onChange={(e) => {
                                                                        setDeductionCycle(e.target.value);
                                                                        setDeductionError("")
                                                                    }}
                                                                />
                                                                {DeductionError && <p className="text-danger" style={{ fontSize: "15px" }}>{DeductionError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Nominees Name
                                                                </label>
                                                                <input
                                                                    type="text"
                                                                    className="form-control"

                                                                    name="your-subject"
                                                                    value={Nominee}
                                                                    onChange={(e) => {
                                                                        setNominee(e.target.value);
                                                                        setNomineeError("");
                                                                    }}
                                                                />
                                                                {NomineeError && <p className="text-danger" style={{ fontSize: "15px" }}>{NomineeError}</p>}
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    Account Type
                                                                </label>
                                                                <div className='d-flex'>
                                                                    <div className='d-flex'>
                                                                        <span className='mt-2'>Saving </span>
                                                                        <input
                                                                            type="radio"
                                                                            className="form-control ml-2"
                                                                            style={{ width: "20px" }}
                                                                            value="2"
                                                                            checked={AccountTypeId === "2"}
                                                                            onChange={(e) => setAccountTypeId(e.target.value)}
                                                                        />
                                                                    </div>
                                                                    <div className='d-flex ml-2'>
                                                                        <span className='mt-2'>Current </span>
                                                                        <input
                                                                            type="radio"
                                                                            className="form-control ml-2"
                                                                            style={{ width: "20px" }}
                                                                            value="1"
                                                                            checked={AccountTypeId === "1"}
                                                                            onChange={(e) => setAccountTypeId(e.target.value)}
                                                                        />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-md-6">
                                                                <label htmlFor="your-subject" className="form-label">
                                                                    upload Cancelled cheque
                                                                </label>


                                                                <input
                                                                    type="file"
                                                                    className="form-control"

                                                                    name="your-subject"


                                                                />



                                                            </div>




                                                            <div className="col-12 mt-2">
                                                                <div className="row">
                                                                    <div className="col-md-12">
                                                                        <button

                                                                            type="button"
                                                                            className="btn btn-success w-100 fw-bold"
                                                                            onClick={ProfileRegistration}
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
                                    </div>
                                </div>

                            </div>

                        </>


                    )}


                </div>


        </>
    )
}

export default AccountInfo