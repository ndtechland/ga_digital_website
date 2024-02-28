import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../CustomCss/BlogDetails.css'

import { useParams } from "react-router-dom";
import Navbar from '../Header/Navbar';
import Footer from '../Footer/Footer';

function BlogDetails() {
    

    const { id } = useParams();
    const [Blog,setBlog]=useState({})

    const blogsDetails = async () => {
        const { data } = await axios.get(`https://api.talent-destination.com/api/Admin/getAllBlogs?id=${id}`);
        setBlog(data);
     
    }

    useEffect(() => {
        blogsDetails();
    
    }, [id])



    return (
        <>
        <Navbar/>
        <br/>
        <br/>
        <br/>
        <br/>
            <div className="container mt-4">
           
            {    <div className="cs-blog-detail">
                    <div className="cs-main-post">
                      
                        <figure>
                            <img
                               
                                alt="Talent-destination Bolgs"
                                src={`http://admin.talent-destination.com/BlogImages/${Blog.filePath}`} 
                            />
                        </figure>
                    </div>
                    <div className="cs-post-title">
                        <div className="cs-author">
                            
                            <div className="cs-text">
                               
                        
                      
                              
                                 <h3><b>
                                 {Blog.blogHeading}
                                 </b>
                              
                               
                              
                            </h3> 
                           
                          
                               
                            </div>
                        </div>
                        <div className="post-option">
                            <span className="post-date">
                                <a href="#!">
                                    <i className="cs-color icon-chat6" />
                                   {Blog.addedOn}
                                </a>
                            </span>
                           
                        </div>
                    </div>
                    <div className="cs-post-option-panel">
                        <div className="rich-editor-text">
                            
                            <p>
                                {Blog.phragraph}
                            </p>
                           
                        </div>
                    </div>
                 
                </div>}
             
               
            </div>
            
          

        </>
    )
}

export default BlogDetails