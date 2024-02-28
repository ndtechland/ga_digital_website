import React, { useState } from "react";
import axios from "axios";
import Poster from "../Images/Poster123.jpeg"
import Poster1 from "../Images/Poster124.png"
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Swal from 'sweetalert2';
import contactus from "../Images/service_banner.jpg";
import Navbar from "../Header/Navbar";
import Footer from "../Footer/Footer";

function ContactUs() {
  const [msg, setMsg] = useState("");
  const Obj = {};
  const [inputField, setInputField] = useState(Obj);
  const schema = yup.object().shape({
    Name: yup.string().notOneOf([""], "Name required"),
    Phone: yup.string().notOneOf([""], "Mobile No required"),
    Email: yup.string().notOneOf([""], "Email required"),
    AboutusId: yup.string().notOneOf([""], " Select options required"),
    Text_Message: yup.string().notOneOf([""], "Message required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValue: {
      Name: "",
      Phone: "",
      Email: "",
      AboutusId: "",
      Text_Message: "",
    },
    resolver: yupResolver(schema),
  });

  const inputHandler = (e) => {
    var name = e.target.name;
    var value = e.target.value;
    setInputField(inputField);
  };

  const ContactUsRagistratio = async (data) => {
    console.log(data);
    setMsg("Sending...");

    try {
      const response = await axios.post(
        "https://api.talent-destination.com/api/Admin/ContactUss",
        data
      );

      if (response.status === 200) {
        setInputField({
          Name: "",
          Phone: "",
          Email: "",
          AboutusId: "",
          Text_Message: "",
        });
        Swal.fire({
          title: 'Thank You for Choosing Talent-Destination',
          text: 'Our Team will be in contact  you after reviewing your profile.',
          type: 'success',
        }).then(() => {
          setMsg(""); // Clear the success message
        });
      }
    } catch (error) {
      // Handle errors here
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Navbar />
      <div
        className="untree_co-heroo "
        style={{
          backgroundImage: `url(${contactus})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-12">
              <div className="row justify-content-center "></div>
            </div>
          </div>{" "}
          {/* /.row */}
        </div>{" "}
        {/* /.container */}
      </div>

      <div className="untree_co-section">
        <div className="container">
          <div className="row mb-5">
            <div
              className="col-lg-4 mb-5 order-2 mb-lg-0 "

            >
              <div className="contact-info">
                <div className="address " style={{ marginTop: "67px" }}>
                  <i className="icon-room" />
                  <h4 className="mb-2">Location:</h4>
                  <p>GA Digital Web Word Pvt Ltd , S-14 2nd Floor ,Aditya Mall Indirapuram , Avove ICICI Bank Ghaziabad, U.P-201014 </p>
                </div>
                <div className="open-hours mt-4">
                  <i className="icon-clock-o" />
                  <h4 className="mb-2">Open Hours:</h4>
                  <p>
                    Monday-Friday:
                    <br />
                    9:30 AM - 6:30 PM
                  </p>
                </div>
                <div className="email mt-4">
                  <i className="icon-envelope" />
                  <h4 className="mb-2">Email:</h4>
                  <p> shipra.hr2000@gmail.com</p>
                </div>
                <div className="phone mt-4">
                  <i className="icon-phone" />
                  <h4 className="mb-2">Call:</h4>
                  <p>+91 8178832125</p>
                </div>
                <div className="phone mt-4">
                  <i className="icon-phone" />
                  <h4 className="mb-2">Our Reception No :</h4>
                  <p>[0120-4218525 , 0120-4118516, 0120-4125729, 0120-4156899, 0120-4549656]</p>
                </div>
              </div>
              <ul className="list-unstyled d-flex mt-4">
                <h3>Follow Us:</h3>
             
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


              </ul>
            </div>
            <div
              className="col-lg-7 mr-auto order-1"
              data-aos="fade-up"
              data-aos-delay={200}
            >
              <h2
                className="text-black"
                style={{
                  fontFamily: "poppins",
                  fontWeight: "700",
                  fontSize: "38px",
                }}
              >
                Contact Us
              </h2>

              <p className="text-black ">
                A fast growing executive search firm working on recruitment and
                HR Services. We work with progressive Indian companies and MNCs,
                leading investors and fast growing startups.
              </p>
              <form onSubmit={handleSubmit(ContactUsRagistratio)}>
                <div className="row">
                  <div className="col-6 mb-3">
                    <input
                      value={inputField.Name}
                      onChange={inputHandler}
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      maxLength={50}
                      {...register("Name", { required: true })}
                    />
                    {errors.Name && (
                      <p className="text-danger">{errors.Name.message}</p>
                    )}
                  </div>
                  <div className="col-6 mb-3">
                    <input
                      value={inputField.Phone}
                      onChange={inputHandler}
                      // value={Phone} onChange={(e) => setPhone(e.target.value)}
                      type="number"

                      className="form-control"
                      placeholder="Phone No"
                      maxLength={10}
                      {...register("Phone", { required: true })}
                    />
                    {errors.Phone && (
                      <p className="text-danger">{errors.Phone.message}</p>
                    )}
                  </div>
                  <div className="col-12 mb-3">
                    <input
                      value={inputField.Email}
                      onChange={inputHandler}
                      type="email"
                      className="form-control"
                      placeholder="Your Email"
                      {...register("Email", { required: true })}
                    />
                    {errors.Email && (
                      <p className="text-danger">{errors.Email.message}</p>
                    )}
                  </div>
                  {/* <div className="col-12 mb-3">
                    <select
                      className="form-control"
                      value={inputField.AboutusId}
                      onChange={inputHandler}
                      {...register("AboutusId", { required: true })}
                    
                    >
                      <option>Executive Search</option>
                      <option>Contingent Search</option>
                      <option>HR Consulting</option>
                      <option>Third-Party Employee Management</option>

                    </select>
                    {errors.AboutusId && (
                      <p className="text-danger">{errors.AboutusId.message}</p>
                    )}


                  </div> */}
                  <div className="col-12 mb-3">
                    <select name="cars" id="cars" className="form-control" >
                      <option >How did you hear about us?</option>
                      <option value="saab">Word of mouth</option>
                      <option value="opel">Google</option>
                      <option value="audi1">LinkedIN/Other social media</option>
                      <option value="audi2">Talent-destination Employee</option>
                      <option value="audi3">Friends & Family</option>
                      <option value="audi4">Website</option>
                      <option value="audi5">Marketing</option>
                      <option value="audi6">Press & Media</option>
                    </select>
                
                  </div>
                  <div className="col-12 mb-3">
                    <textarea
                      value={inputField.Text_Message}
                      onChange={inputHandler}
                      {...register("Text_Message", { required: true })}
                      // value={Text_Message} onChange={(e) => setText_Message(e.target.value)}

                      cols={30}
                      rows={7}
                      maxLength={500}
                      className="form-control"
                      placeholder=" Leave us a message?"

                    />
                    {errors.Text_Message && (
                      <p className="text-danger">{errors.Text_Message.message}</p>
                    )}
                  </div>
                  <div className="col-12">
                    <button type="submit" className="btn btn-primary">
                      Send Message
                    </button>
                    <p className="text-success">{msg}</p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ContactUs;
