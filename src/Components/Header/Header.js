import './Header.css';
import React from 'react';
import profileimage from '../../images/proimg.png'
import headlogo1 from '../../images/headlogo.jpg'
import {Link} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const Header=()=>{
    const navigate = useNavigate();
    const logout = (data) =>{
            console.log(data);
           localStorage.removeItem("user",(data.token));  
           navigate('/');        
    }

    return(
        <>
        <section className='bg-light fixed-top'>
            <div className='container-fluid'>
                <div className='row'>            
                        <nav className="navbar navbar-light bg-light">
                            <div className='d-flex align-items-center'>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                                     <span className="navbar-toggler-icon"></span>
                                </button>
                                <Link to="#">
                                    <div className='d-flex align-items-center ml-2'>
                                        <img src={headlogo1} className='headlogo1' alt='headlogo1'/>
                                    </div>                                   
                                </Link>
                            </div>                          
                            <div className='dashprodiv'>
                                <div>
                                    {/* <span className='notiicon mr-2'><i className="fa fa-bell" aria-hidden="true" style={{color:'#da1113'}}></i></span>
                                    <span className='noticount'>2</span> */}
                                    <span className='badge bg-warning fw-bold mr-2'>Agent</span>
                                    <img src={profileimage} className='profileimg' alt='profileimg'/>
                                </div>
                                <button onClick={logout} type='submit' className='headsignout ml-2'>
                                <i className="fa fa-power-off"></i>
                                </button>                           
                            </div>
                        </nav>  
                        {/* Collapsible Sidebar code mobile view*/}
                        <div className="collapse"  id="navbarToggleExternalContent">
                            <div className="bg-dark">
                                  <div className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                                    <Link to='/dashboard' className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none">
                                        <span className="fs-5">B<span className="d-none d-sm-inline">rand</span></span>
                                    </Link>
                                    <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                                        <li>
                                            <Link to='/dashboard' className="sidelistul nav-link px-sm-0 px-2">
                                            <i className="fa fa-chart-pie"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span> 
                                            </Link>
                                        </li>
                                        <li>
                                            <Link to='/allleads' className="sidelistul nav-link px-sm-0 px-2">
                                                <i className="fa fa-users"></i><span className="ms-1 d-none d-sm-inline">All Leads</span>
                                            </Link>
                                        </li> 
                                        <li>
                                            <Link to='/addleads' className="sidelistul nav-link px-sm-0 px-2">
                                            <i className="fa fa-user"></i><span className="ms-1 d-none d-sm-inline">Add Leads</span>
                                            </Link>
                                        </li>                        
                                    </ul>
                                </div>
                            </div>
                        </div>                    
                </div>
            </div>
        </section>
        </>     
    )}
export default Header;