import React, { useState, useEffect } from 'react';
import DashboardTopHeader from '../Dashboard/DashboardTopHeader'
import DashboardLeftHeader from '../Dashboard/DashboardLeftHeader'

function SalarySlip() {

    const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
    const [years, setYears] = useState([]);

    useEffect(() => {
        // Generate a list of years, e.g., from the current year to the previous 10 years
        const startYear = currentYear - 10;
        const endYear = currentYear;
        const yearList = Array.from({ length: endYear - startYear + 1 }, (_, index) => endYear - index);

        setYears(yearList);
    }, [currentYear]);


    return (
        <>
            <DashboardTopHeader />
            <DashboardLeftHeader />
            <div id="page-container">

                <div className='container'>
                    <h2 className=' text-center'>View Salary Slip</h2>
                    <form style={{ border: "1px solid gray", height: "500px", borderRadius: "5px", background: "lightseagreen" }}>
                        <div className='d-flex g-4 p-4'>
                            <label>Report Type:</label>
                            <select style={{ marginLeft: "15px" }}>
                                <option>Salary Slip with PFNo in PDF.</option>
                                <option>Salary Slip with PFNo in PDF.</option>
                                <option>Salary Slip with PFNo in PDF.</option>
                            </select>
                        </div>
                        <div className='d-flex g-4 p-4'>
                            <label>Month&Year:</label>
                            <div className='d-flex ' style={{ marginLeft: "8px" }}>
                                <select class="form-select" id="month" name="month">
                                    <option value=""> Select Month</option>
                                    <option value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <select style={{ width: "145px" }} className='ml-2' id="year" value={currentYear} onChange={(e) => setCurrentYear(parseInt(e.target.value, 10))}>
                                    {years.map((year) => (
                                        <option key={year} value={year}>
                                            {year}
                                        </option>
                                    ))}
                                </select>
                            </div>

                        </div>
                        <button style={{marginLeft:"155px"}} className='btn btn-secondary'>Salary Slip </button>
                    </form>
                </div>

            </div>

        </>
    )
}

export default SalarySlip