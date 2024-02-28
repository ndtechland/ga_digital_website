import React from 'react'
import { Link } from "react-router-dom";
import BottonToTop from '../Pages/BottonToTop';

function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
 
    });
  };
  

  return (
    <>
    <div className="site-footer">
      <div className="container">
        <div className="row">
          {/* <div className="col-lg-3 mr-auto" style={{ marginTop: "45px" }}>
           
             <div className="widget">
              <h3>Industry</h3>
              <ul className="list-unstyled float-left links">
                <li>
                  <a href="#!">Aerospace & Defence </a>
                </li>
                <li>
                  <a href="#!">FMCG & FMCD</a>
                </li>
                <li>
                  <a href="#!">Retail</a>
                </li>
                <li>
                  <a href="#!">e-Commerce </a>
                </li>
                <li>
                  <a href="#!">Automobile &amp; Auto Components </a>
                </li>
                <li>
                  <a href="#!">Healthcare</a>
                </li>
                <li>
                  <a href="#!">Oil &amp; Gas </a>
                </li>
                <li>
                  <a href="#!">Steel &amp; power </a>
                </li>
                <li>
                  <a href="#!">Manufacturing &amp; Engineering </a>
                </li>
                <li>
                  <a href="#!">Consulting  </a>
                </li>
               
              </ul>
            </div>

          </div>
          <div className="col-lg-3 ml-auto" style={{ marginTop: "45px" }}>
            <div className="widget">
              <h3>Industry</h3>
              <ul className="list-unstyled float-left links ">
                <li>
                  <a href="#!">Metals, Minerals & Mining </a>
                </li>
                <li>
                  <a href="#!">Outsourcing & Offshoring</a>
                </li>
                <li>
                  <a href="#!">Pharma, Lifesciences, Devices &amp;  Diagnostics</a>
                </li>
                <li>
                  <a href="#!">Telecom </a>
                </li>
                <li>
                  <a href="#!">Media   &amp; Entertainment </a>
                </li>
                <li>
                  <a href="#!">Information Technology/ITeS</a>
                </li>
                <li>
                  <a href="#!">Energy  &amp;  Utilities</a>
                </li>
                <li>
                  <a href="#!">Finance & Banking</a>
                </li>
                <li>
                  <a href="#!">Startups</a>
                </li>
                <li>
                  <a href="#!">Services</a>
                </li>
              </ul>
            </div>
          </div> */}
          <div className="col-lg-6" style={{ marginTop: "45px" }}>
            <div className="widget">
              <h3>Useful Links</h3>


              <ul className="list-unstyled float-left links">
                <li>
                  <Link to="/about">About </Link>
                </li>
              
                <li>
                  <Link to="/Career">Career</Link>
                </li>
              
                <li>
                  <Link to="/privacy">Privacy &amp; Policy </Link>
                </li>

                <li>
                  <Link to="/termCondition">Terms &amp; Conditions </Link>
                </li>

              </ul>

            </div>
          </div>
          <div className="col-lg-6" style={{ marginTop: "45px" }}>
            <div className="widget">
              <h3>Contact Us</h3>
              <div className='d-flex gap-2'>

                <li className='ml4' style={{ listStyle: "none" }}>
                  <img style={{ width: "44px" }} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAABUUlEQVR4nO2YO07DQBCGp6Nav4rIeyMiGpckJCFwCOwecQMkkjhBvEHiFjwugIxEmdjcYyISbRNR4Oyul7Xnk/5iKvuT/92RDEAQBPE/iT/2IM6+IclQUwo4+WzrE/h5gL6XXyfOci3vHqb5O09zrCLhJH/TIfBamUCav4AWdNdHRBu1E4jO11E1k0DjKpTYLhCV6/jO6Re2RnMF1+yiCMdFu3KB1sVc4bJbbLGxJauheuGBSQF2/LzKtjNXIlCyQrUS4LZXiNsuwGyvELNdgNteIW67ADNRIXb0hM7wEZ3hAzqH9+gO7tAd3KLbv0Gvf41e7wq93iX6BzP0u1P0uykGnQkGnTEG+6N6CXATFWIbArB7tooQELMQEDMJpJq+QNkKyV4CsJnGC0DJMyCzBOG3PxjQdAGXzkBm8SGODFRImloJJAb2gDTWCxAEQcAfWAKHDU4gj5F3LwAAAABJRU5ErkJggg==" />

                </li>

                <address>GA Digital Web Word Pvt Ltd , S-14 2nd Floor ,Aditya Mall Indirapuram , Avove ICICI Bank Ghaziabad, U.P-201014</address>
              </div>

              <ul className="list-unstyled links mb-4">
                <div className='d-flex gap-2'>
                 
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={40}
                      height={40}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0f0"
                        d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"
                      />
                      <path
                        fill="#fff"
                        d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"
                      />
                    </svg>

                  </li>
                  <li>
                    <a href="tel://+91 8178832125">+91 8178832125</a>
                  </li>
                </div>
                <div className='d-flex gap-2'>
                  <li>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      x="0px"
                      y="0px"
                      width={40}
                      height={40}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#0f0"
                        d="M13,42h22c3.866,0,7-3.134,7-7V13c0-3.866-3.134-7-7-7H13c-3.866,0-7,3.134-7,7v22	C6,38.866,9.134,42,13,42z"
                      />
                      <path
                        fill="#fff"
                        d="M35.45,31.041l-4.612-3.051c-0.563-0.341-1.267-0.347-1.836-0.017c0,0,0,0-1.978,1.153	c-0.265,0.154-0.52,0.183-0.726,0.145c-0.262-0.048-0.442-0.191-0.454-0.201c-1.087-0.797-2.357-1.852-3.711-3.205	c-1.353-1.353-2.408-2.623-3.205-3.711c-0.009-0.013-0.153-0.193-0.201-0.454c-0.037-0.206-0.009-0.46,0.145-0.726	c1.153-1.978,1.153-1.978,1.153-1.978c0.331-0.569,0.324-1.274-0.017-1.836l-3.051-4.612c-0.378-0.571-1.151-0.722-1.714-0.332	c0,0-1.445,0.989-1.922,1.325c-0.764,0.538-1.01,1.356-1.011,2.496c-0.002,1.604,1.38,6.629,7.201,12.45l0,0l0,0l0,0l0,0	c5.822,5.822,10.846,7.203,12.45,7.201c1.14-0.001,1.958-0.248,2.496-1.011c0.336-0.477,1.325-1.922,1.325-1.922	C36.172,32.192,36.022,31.419,35.45,31.041z"
                      />
                    </svg>

                  </li>
                  <li>
                    <p>
                      Our Reception No
                    </p>
                    <a href="tel://+91 8178832125">
                      [0120-4218525 , 0120-4118516, 0120-4125729, 0120-4156899, 0120-4549656]
                    </a>
                  </li>
                </div>

                <div className='d-flex gap-2'>
                  <li>
                    <img src="data:image/png;base64,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" />

                  </li>
                  <li className='ml-2'>
                    <a href="shipra.hr2000@gmail.com">shipra.hr2000@gmail.com</a>
                  </li>
                </div>


              </ul>
            </div>

          </div>
        </div>

      </div>
      <div className="col-12 d-flex justify-content-around item-center " style={{background:"black"}}>
        <p className='pt-3' style={{marginLeft:'-36px'}}>
          Copyright ©2024 . All Rights Reserved-GA Digital Web Word P LTD     Designed  by-
          <a href="https://www.ndtechland.com/"  target='_blank'>ND Techland Pvt. Ltd.</a>
        </p>
        <div className=" d-flex">
          <h3 className='text-white pt-3' style={{fontSize:"20px"}}>Follow Us</h3>
          <ul className="list-unstyled ml-2 pt-3">
          <a href='' target='_blank'>
            <li>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width={25}
                height={25}
                viewBox="0 0 48 48"
              >
                <path
                  fill="#FFC107"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                />
                <path
                  fill="#FF3D00"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                />
                <path
                  fill="#4CAF50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                />
                <path
                  fill="#1976D2"
                  d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                />
              </svg>

            </li>
            </a>


          </ul>
        </div>
      </div>
    </div>

      <BottonToTop />
    </>

  )
}

export default Footer