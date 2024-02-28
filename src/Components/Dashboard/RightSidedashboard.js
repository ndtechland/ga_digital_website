import React from 'react'
import { Link } from 'react-router-dom'

function RightSidedashboard() {
    return (
        <>


            <div id="page-container">
                <div className="grey-bg container-fluid">
                    <div id="minimal-statistics">


                        <div className="row">

                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex">
                                                <div className="media-body text-left">
                                                    <h3 className="warning">85</h3>
                                                    <span>Total Leaves</span>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="icon-bubbles warning font-large-2 float-right" />
                                                </div>
                                            </div>
                                            <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                                <div
                                                    className="progress-bar bg-warning"
                                                    role="progressbar"
                                                    style={{ width: "35%" }}
                                                    aria-valuenow={35}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex">
                                                <div className="media-body text-left">
                                                    <h3 className="success">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-file-filled" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M12 2l.117 .007a1 1 0 0 1 .876 .876l.007 .117v4l.005 .15a2 2 0 0 0 1.838 1.844l.157 .006h4l.117 .007a1 1 0 0 1 .876 .876l.007 .117v9a3 3 0 0 1 -2.824 2.995l-.176 .005h-10a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-14a3 3 0 0 1 2.824 -2.995l.176 -.005h5z" strokeWidth="0" fill="currentColor" />
                                                            <path d="M19 7h-4l-.001 -4.001z" strokeWidth="0" fill="currentColor" />
                                                        </svg>
                                                    </h3>
                                                    <span>Salary Slip</span>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="icon-cup success font-large-2 float-right" />
                                                </div>
                                            </div>
                                            <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                                <div
                                                    className="progress-bar bg-success"
                                                    role="progressbar"
                                                    style={{ width: "60%" }}
                                                    aria-valuenow={60}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex">
                                                <div className="media-body text-left">
                                                    <h3 className="danger">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-table-filled" width="36" height="36" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M4 11h4a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-2a3 3 0 0 1 -2.995 -2.824l-.005 -.176v-6a1 1 0 0 1 1 -1z" strokeWidth="0" fill="currentColor" />
                                                            <path d="M21 12v6a3 3 0 0 1 -2.824 2.995l-.176 .005h-6a1 1 0 0 1 -1 -1v-8a1 1 0 0 1 1 -1h8a1 1 0 0 1 1 1z" strokeWidth="0" fill="currentColor" />
                                                            <path d="M18 3a3 3 0 0 1 2.995 2.824l.005 .176v2a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-4a1 1 0 0 1 1 -1h6z" strokeWidth="0" fill="currentColor" />
                                                            <path d="M9 4v4a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1v-2a3 3 0 0 1 2.824 -2.995l.176 -.005h2a1 1 0 0 1 1 1z" strokeWidth="0" fill="currentColor" />
                                                        </svg>
                                                    </h3>
                                                    <span>Attendence</span>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="icon-direction danger font-large-2 float-right" />
                                                </div>
                                            </div>
                                            <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                                <div
                                                    className="progress-bar bg-danger"
                                                    role="progressbar"
                                                    style={{ width: "40%" }}
                                                    aria-valuenow={40}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-sm-6 col-12">
                                <div className="card">
                                    <div className="card-content">
                                        <div className="card-body">
                                            <div className="media d-flex">
                                                <div className="media-body text-left">
                                                    <h3 className="primary">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-user-filled" width="32" height="32" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#ffffff" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                                            <path d="M12 2a5 5 0 1 1 -5 5l.005 -.217a5 5 0 0 1 4.995 -4.783z" strokeWidth="0" fill="currentColor" />
                                                            <path d="M14 14a5 5 0 0 1 5 5v1a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2v-1a5 5 0 0 1 5 -5h4z" strokeWidth="0" fill="currentColor" />
                                                        </svg>
                                                    </h3>
                                                    <Link to="/profile">
                                                        <span>Profile</span>
                                                    </Link>
                                                </div>
                                                <div className="align-self-center">
                                                    <i className="icon-book-open primary font-large-2 float-right" />
                                                </div>
                                            </div>
                                            <div className="progress mt-1 mb-0" style={{ height: 7 }}>
                                                <div
                                                    className="progress-bar bg-primary"
                                                    role="progressbar"
                                                    style={{ width: "80%" }}
                                                    aria-valuenow={80}
                                                    aria-valuemin={0}
                                                    aria-valuemax={100}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </>
    )
}

export default RightSidedashboard