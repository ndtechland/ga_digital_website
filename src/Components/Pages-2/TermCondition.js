import React from 'react'
import Navbar from '../Header/Navbar'
import Footer from '../Footer/Footer'

function TermCondition() {
    return (
        <>
            <Navbar />
            <br />
            <br />
            <br />
            <br />

            <div className="container mt-4 mb-4">
                <h2 style={{ fontSize: "25px" }}>Terms & Conditions</h2>
                <p style={{ fontSize: "15px", textAlign: "justify" }}>The following Terms and Conditions govern your use of the GA Digital website in conjunction with our PRIVACY POLICY. By accessing this website, you acknowledge your acceptance and agreement to adhere to these Terms and Conditions, as they may be updated periodically. If you do not agree with these terms, kindly refrain from using the website.
                </p>
                <p style={{ fontSize: "15px", textAlign: "justify" }}>
                    Additionally, our recruitment services and business relationship with you are subject to our standard Terms and Conditions for clients and candidates, which can be provided by our specialist consultants during discussions about your recruitment needs.
                </p>
                <p style={{ fontSize: "15px", textAlign: "justify" }}>
                    We reserve the right to modify these Terms and Conditions at our discretion and without prior notice. We recommend checking this page regularly to stay informed about any changes.
                </p>


                <h2 style={{ fontSize: "25px" }} className='mt-4'>Use of Website</h2>
                <p style={{ fontSize: "15px", textAlign: "justify", marginTop: "-4px" }}>The purpose of this website is to provide you with our services and general information. You must not breach any term of our Acceptable Use Policy set out below.
                    .
                </p>
                <h2 style={{ fontSize: "25px" }} className='mt-4'>Links to or from other Sites</h2>
                <p style={{ fontSize: "15px", textAlign: "justify", marginTop: "-4px" }}>
                    This site includes links to external websites, and there may be numerous automatic links to other sites that could be of interest to you. Talent Destination does not take responsibility for the content of these sites, and it cannot be assumed that Talent Destination has reviewed or approved of such sites or their content. Additionally, we do not guarantee the functionality or currency of the links to these sites.

                </p>

                <h2 style={{ fontSize: "25px" }} className='mt-4'>Disclaimer</h2>
                <p style={{ fontSize: "15px", textAlign: "justify", marginTop: "-4px" }}>
                    The information and material presented on this website are intended as a general guide only. Despite using reasonable care in compiling and presenting this information, Talent Destination makes no representation or warranty regarding the accuracy, currency, completeness, adequacy, suitability, or operation of this website, the services provided through it, or the information/material it contains.
                </p>
                <p style={{ fontSize: "15px", textAlign: "justify" }}>
                    To the maximum extent permitted by law, GA Digital shall not be held responsible or liable for:
                </p>

                <ol type="a">
                    <li style={{ fontSize: "15px", textAlign: "justify" }}> any loss, liability or damage suffered or incurred arising out of or in connection with any access to or use of this website or any of its content;
                    </li>
                    <li style={{ fontSize: "15px", textAlign: "justify" }}>
                        Any reliance on, or decision made based on, information or material shown on or omitted from this website.
                    </li>
                    <li style={{ fontSize: "15px", textAlign: "justify" }}>
                        Any representation or otherwise in respect of the existence or availability of any job, vacancy, assignment or other engagement or appointment advertised on this website;
                    </li>
                    <li style={{ fontSize: "15px", textAlign: "justify" }}>
                        any representation or otherwise that any employer or client will ask for a candidate's information, ask to interview or hire a candidate, or that any candidates will be available or will meet the needs of any employer or client;
                    </li>

                </ol>




            </div>
            <Footer />
        </>
    )
}

export default TermCondition