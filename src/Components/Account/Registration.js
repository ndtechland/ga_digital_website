import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Header/Navbar'

function Registration() {
  return (
    <>
    <Navbar/>
    <div
      className="untree_co-hero inner-page overlay"
      style={{ backgroundImage: 'url("https://media.istockphoto.com/id/1322630105/photo/two-hr-specialists-analyzing-the-recruitment-market-using-laptop-to-boost-the-intern-program.jpg?s=612x612&w=0&k=20&c=Hw8XVi_RDfTBYfACHBm39YXs866mHyhj5ERlZugqfOg=")' }}
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
                  Register
                </h1>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* /.row */}
      </div>{" "}
      {/* /.container */}
    </div>{" "}
    {/* /.untree_co-hero */}
    <div className="untree_co-section">
      <div className="container">
        <div className="row mb-5 justify-content-center">
          <div
            className="col-lg-5 mx-auto order-1"
            data-aos="fade-up"
            data-aos-delay={200}
          >
            <form action="#" className="form-box">
              <div className="row">
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Full name"
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Password"
                  />
                </div>
                <div className="col-12 mb-3">
                  <input
                    type="password"
                    className="form-control"
                    placeholder="Re-type Password"
                  />
                </div>
                <div className="col-12 mb-3">
                  <label className="control control--checkbox">
                    <span className="caption">
                      Accept our <a href="#">terms and conditions</a>
                    </span>
                    <input type="checkbox" defaultChecked="checked" />
                    <div className="control__indicator" />
                  </label>
                </div>
                <div className="col-12">
                  <input
                    type="submit"
                    defaultValue="Send Message"
                    className="btn btn-primary"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </>
  
  )
}

export default Registration