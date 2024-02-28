import React from 'react'

function WhyChooseus() {
    return (
        <div className="untree_co-section">
            <div className="container">
                <div className="row">
                    <div
                        className="col-lg-5 mr-auto mb-5 mb-lg-0"
                        data-aos="fade-up"
                        data-aos-delay={0}
                    >
                        <img
                           src="images/istockphoto-969985354-612x612.jpg"
                            alt="image"
                            className="img-fluid"
                        />
                    </div>
                    <div className="col-lg-7 ml-auto" data-aos="fade-up" data-aos-delay={100}>
                        <h3 className="line-bottom mb-4">Why Choose GA Digital?</h3>
                        <h4>“Speed , accuracy and timely delivery” </h4>
                        <div className="custom-accordion" id="accordion_1">
                            <div className="accordion-item">
                                <h2 className="mb-0">
                                    <button
                                        className="btn btn-link"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseOne"
                                        aria-expanded="true"
                                        aria-controls="collapseOne"
                                    >
                                        Expertise That Matters
                                    </button>
                                </h2>
                                <div
                                    id="collapseOne"
                                    className="collapse show"
                                    aria-labelledby="headingOne"
                                    data-parent="#accordion_1"
                                >
                                    <div className="accordion-body">
                                        <div className="d-flex">
                                            <div className="accordion-img mr-4">
                                                <img
                                                    src="images/poster22.jpg"
                                                    alt="Image"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div>
                                                <p >
                                                    Our team comprises seasoned professionals with a deep
                                                    understanding of the dynamic and competitive nature of the
                                                    business world. We leverage our expertise to provide
                                                    insights and solutions that drive your business forward.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="mb-0">
                                    <button
                                        className="btn btn-link collapsed"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="collapseTwo"
                                    >
                                        Tailored Solutions
                                    </button>
                                </h2>
                                <div
                                    id="collapseTwo"
                                    className="collapse"
                                    aria-labelledby="headingTwo"
                                    data-parent="#accordion_1"
                                >
                                    <div className="accordion-body">
                                        <div className="d-flex">
                                            <div className="accordion-img mr-4">
                                                <img
                                                    src="images/images (15).jpg"
                                                    alt="Image"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div>
                                                <p >
                                                    Recognizing the uniqueness of every organization, we don't
                                                    believe in cookie-cutter approaches. Our solutions are
                                                    meticulously crafted to align with your company's values,
                                                    culture, and growth objectives.{" "}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="accordion-item">
                                <h2 className="mb-0">
                                    <button
                                        className="btn btn-link collapsed"
                                        type="button"
                                        data-toggle="collapse"
                                        data-target="#collapseThree"
                                        aria-expanded="false"
                                        aria-controls="collapseThree"
                                    >
                                        Comprehensive Service Portfolio
                                    </button>
                                </h2>
                                <div
                                    id="collapseThree"
                                    className="collapse"
                                    aria-labelledby="headingThree"
                                    data-parent="#accordion_1"
                                >
                                    <div className="accordion-body">
                                        <div className="d-flex">
                                            <div className="accordion-img mr-4">
                                                <img
                                                    src="images/images (16).jpg"
                                                    alt="Image"
                                                    className="img-fluid"
                                                />
                                            </div>
                                            <div>
                                                <p>
                                                    We are covering from executive search and talent acquisition to
                                                    strategic HR consulting across all categories.
                                                </p>
                                                <p >
                                                    We provide an all-encompassing suite of services tailored to address
                                                    your diverse human capital requirements, all conveniently housed
                                                    under one roof..
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default WhyChooseus