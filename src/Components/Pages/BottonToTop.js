import React, { useState, useEffect } from 'react';
import Back from "../Images/images__5_-removebg-preview.png"

function BottonToTop() {
    const [visible, setVisible] = useState(false)
    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300) {
            setVisible(true)
        }
        else if (scrolled <= 300) {
            setVisible(false)
        }
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
            /* you can also use 'auto' behaviour 
               in place of 'smooth' */
        });
    };
    window.addEventListener('scroll', toggleVisible);


    return (
        <>
            <div style={{ position: 'fixed', bottom: '20px', right: '40px' }}>


                <div
                    onClick={scrollToTop}

                    style={{
                        border:'none',
                        cursor: 'pointer',
                       
                        display: visible ? 'inline' : 'none',
                    }}
                >
                  <img src={Back } style={{height:"40px",width:"40px"}} />

                </div>
            </div >
        </>

    )
}

export default BottonToTop