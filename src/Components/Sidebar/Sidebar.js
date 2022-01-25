import './Sidebar.css';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar=()=>{

    return(
        <>
            <span className="sidebarcols  bg-dark d-flex sticky-top">
                <span className="d-flex flex-sm-column flex-row flex-grow-1 align-items-center align-items-sm-start px-3 pt-2 text-white">
                    <Link to='/dashboard' className="d-flex align-items-center pb-sm-3 mb-md-0 me-md-auto text-white text-decoration-none sidebrand">
                        <span className="fs-5">B<span className="d-none d-sm-inline">rand</span></span>
                    </Link>
                    <ul className="nav nav-pills flex-sm-column flex-row flex-nowrap flex-shrink-1 flex-sm-grow-0 flex-grow-1 mb-sm-auto mb-0 justify-content-center align-items-center align-items-sm-start" id="menu">
                        <li>
                            <Link to='/dashboard' className="sidelistul nav-link px-sm-0 px-2">
                            <i className="fa fa-chart-pie"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">Dashboard</span> 
                            </Link>
                        </li>
                        <li>
                            <Link to='/allLeads' className="sidelistul nav-link px-sm-0 px-2">
                                <i className="fa fa-users">&nbsp;</i><span className="ms-1 d-none d-sm-inline">All Leads</span>
                            </Link>
                        </li> 
                        <li>
                            <Link to='/addleads' className="sidelistul nav-link px-sm-0 px-2">
                            <i className="fa fa-user"></i>&nbsp;<span className="ms-1 d-none d-sm-inline">Add Leads</span>
                            </Link>
                        </li>                
                    </ul>
                </span>
                </span>
            
        </>     
    )
}
export default Sidebar;