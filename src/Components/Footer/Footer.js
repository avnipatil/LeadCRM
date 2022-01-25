import './Footer.css';
import React from 'react';
const Footer=()=>{
// variable for copy-right to get system date function
    const getCurrentYear = () => {
        return new Date().getFullYear();
      };
    return(
        <>
            <div className='container-fluid footercont'>
                <div className='row'> 
                    <footer className="col-lg-12 bg-light py-4 mt-auto">
                            <div className="text-end text-muted small">
                                © {getCurrentYear()} Copyright 
                                <a className="text-dark text-decoration-none" rel="noreferrer" target='_blank' href="http://lead-tronics.com/">&nbsp;Lead-Tronics Pvt Ltd</a>
                            </div>
                    </footer>
                </div>
            </div>
        </>     
    )
}
export default Footer;