import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import axios from 'axios';
import "../CustomCss/Testimonials.css"


function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);

  const testimonialUsers = async () => {
    try {
      const { data } = await axios.get('https://api.talent-destination.com/api/Admin/getAllTestimonial');
      setTestimonials(data.response);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  }

  useEffect(() => {
    testimonialUsers();
  }, []);

  var settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div>
        <h2 className='text-center line-bottom '> Customer Testimonials </h2>


        <Slider {...settings}>

          <div >

            <section>
              <div className='Testimonial_card'>

                <div className="testimonials">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="single-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="profile">
                                <div className="img-area">
                                  <img src="http://gadigital.in/img/home/BEL.png" alt="" />
                                </div>
                                <div className="bio">
                                  <h2>BHEL</h2>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="content">
                                <p>

                                  It is certified that work order numbers Services/2016/002/B and Services/2016/002/D was awarded to M/S G A Digital Web Word Private Limited initially for the period of one year w.e.f. 01.10.2016, further renewed upto 31.12.2020.
                                </p><br />
                                <p>The Contract was awarded for providing Contractual manpower for ?Peripheral Maintenance, Office and Machine Maintenance, Canteen, Logistics and Data Entry Etc. and deployed around 210 contractual workmen including 22 Diploma holders/Engineers. The amount paid to the contractor from 01.10.2016 to 30.09.2020 is Rs. 24.84 Crore and during this period the performance of the said contractor is found Excellent / Very Good.</p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
          <div >

            <section>
              <div className='Testimonial_card'>

                <div className="testimonials">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="single-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="profile">
                                <div className="img-area">
                                  <img src="http://gadigital.in/img/home/C-DAC.png" alt="" />
                                </div>
                                <div className="bio">
                                  <h2>C-DAC</h2>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="content">
                                <p>

                                  This is to certify that Mls GA Digital Web Word Pvt Ltd is empanelled by C-DAC, Noida for providing manpower for various IT projects implemented by the Centre since 01-Jul- 2019 to till date. The total value of the manpower provided from July 2019 to Oct 2020 is Rs.721 Lacs including taxes.
                                </p><br />
                                <p>The overall services provided by the outsource agency is Good. This Certificate is issued on the request of M/s GA Digital Web Word Pvt Ltd for filling new tenders.</p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
          <div >

            <section>
              <div className='Testimonial_card'>

                <div className="testimonials">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="single-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="profile">
                                <div className="img-area">
                                  <img src="http://gadigital.in/img/home/icai.jpg" alt="" />
                                </div>
                                <div className="bio">
                                  <h2>ICAI</h2>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="content">
                                <p>

                                  This i s to certify that MIS. G . A. Digital Web Word Pvt. Ltd., having its registered office at no. 1 Hargovind Enclave, Vikas Marg Extension, Delhi - 110092, has provided contractual manpower (including 17 - CAICSICMAILL.B, 46 - MBA 1 MCA and 110 - Data Entry Operator (DEO) vide agreement dated 2gth October 2014 from 01.12.2014 to 31.12.2017 to the Institute of Chartered Accountants of India (ICAI) at i t s various office locations viz. Delhi, Noida and Mumbai with total nos. of manpower 170-180 (approx.) and total value of service is Rr. 6 Crore (per annum) up to 31.12.2017.
                                </p><br />
                                <p>The agreement of the agency has been further extended to 3 months w.e.f. OISt Janua'ry2018 to 31" March 2018.</p>
                                <p>

                                  During the aforesaid contract period, the performance of the Company has been found satisfactorv.</p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>
          <div >

            <section>
              <div className='Testimonial_card'>

                <div className="testimonials">
                  <div
                    id="carouselExampleControls"
                    className="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="single-item">
                          <div className="row">
                            <div className="col-md-4">
                              <div className="profile">
                                <div className="img-area">
                                  <img src="http://gadigital.in/img/home/tcil.png" alt="" />
                                </div>
                                <div className="bio">
                                  <h2>TCIL</h2>

                                </div>
                              </div>
                            </div>
                            <div className="col-md-8">
                              <div className="content">
                                <p>

                                  Subject: Hiring of Manpower  Agency for Outsourcing  of Contractual  Manpower Ref: Tender No.: TCIL/17/1756/1/18-MM/HRD   dated 22.01.2018.
                                </p><br />
                                <p>Subject: Hiring of Manpower  Agency for Outsourcing  of Contractual  Manpower Ref: Tender No.: TCIL/17/1756/1/18-MM/HRD   dated 22.01.2018.</p>
                                <p>

                                  Dear Sir,
                                  Reference to your bid against the above referred Tender No, We are pleased to place the work order for Supply of Manpower on contractual basis as per the below Terms and conditions.</p>

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </section>


          </div>



        </Slider>


      </div>


    </>
  );
}




export default Testimonials