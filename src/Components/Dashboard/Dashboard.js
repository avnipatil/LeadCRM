import './Dashboard.css';
import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import Contentdashboard from '../Contentdashboard/Contentdashboard'

const Dashboard=()=>{

    return(
        <>
        <Header/>
        <section>
            <div className='container-fluid'>
            <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-4'>
                    <Sidebar/>
                </div>
                <div className='col-lg-10 col-md-10 col-sm-8'>
                    <Contentdashboard/>                                       
                </div>
            </div>
            </div>
        </section>
        <Footer/>       
        </>     
    )
}
export default Dashboard;