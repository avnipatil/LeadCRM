import './Contentdashboard.css';
import React,{useState,useEffect} from 'react';
import Select from 'react-select';
import axios from 'axios';
import Charts from '../Charts/Charts';


const Contentdashboard=()=>{
  
    const data = [
        {
          value: 1,
          label: "January",
          capvalue:8.907,
          totlead:5.1,
          product:3.201,
          addleads:4.5002,
          leadtarget:7.809,
          investlead:4.908,
          capgain:1.209,
          monthlyavg:10.2009,
          visitors:100,
          lessachiev:1.2
        },
        {
          value: 2,
          label: "February",
          capvalue:5.409,
          totlead:1.1,
          product:2.701,
          addleads:3.902,
          leadtarget:8.809,
          investlead:4.908,
          capgain:1.209,
          monthlyavg:10.2009,
          visitors:10,
          lessachiev:1.2
        },
        {
          value: 3,
          label: "March",
          capvalue:2.909,
          totlead:2.1,
          product:1.301,
          addleads:4.602,
          leadtarget:2.809,
          investlead:4.908,
          capgain:1.209,
          monthlyavg:10.2009,
          visitors:200,
          lessachiev:1.2
        },
        {
          value: 4,
          label: "April",
          capvalue:66.909,
          totlead:32.1,
          product:81.31,
          addleads:5.902,
          leadtarget:3.809,
          investlead:4.908,
          capgain:7.209,
          monthlyavg:17.2009,
          visitors:160,
          lessachiev:1.2
        },
        {
          value: 5,
          label: "May",
          capvalue:6.209,
          totlead:64.2,
          product:96.201,
          addleads:61.802,
          leadtarget:67.809,
          investlead:6.908,
          capgain:6.209,
          monthlyavg:60.2009,
          visitors:600,
          lessachiev:6.2
        },
        {
          value: 6,
          label: "June",
          capvalue:56.809,
          totlead:54.3,
          product:53.301,
          addleads:55.5002,
          leadtarget:75.809,
          investlead:5.908,
          capgain:5.209,
          monthlyavg:15.2009,
          visitors:500,
          lessachiev:5.2
        },
        {
            value: 7,
            label: "July",
            capvalue:84.909,
            totlead:14.1,
            product:45.601,
            addleads:47.6002,
            leadtarget:74.809,
            investlead:4.408,
            capgain:4.209,
            monthlyavg:40.2409,
            visitors:400,
            lessachiev:4.2
          },
          {
            value: 8,
            label: "Auguest",
            capvalue:3.909,
            totlead:3.1,
            product:43.401,
            addleads:35.1002,
            leadtarget:3.809,
            investlead:3.908,
            capgain:1.209,
            monthlyavg:30.2009,
            visitors:300,
            lessachiev:3.2
          },
          {
            value: 9,
            label: "September",
            capvalue:7.909,
            totlead:1.1,
            product:2.31,
            addleads:2002,
            leadtarget:7.809,
            investlead:4.908,
            capgain:1.209,
            monthlyavg:10.2009,
            visitors:100,
            lessachiev:1.2
          },
          {
            value: 10,
            label: "Octomber",
            capvalue:7.909,
            totlead:1.1,
            product:2.31,
            addleads:2002,
            leadtarget:7.809,
            investlead:4.908,
            capgain:1.209,
            monthlyavg:10.2009,
            visitors:100,
            lessachiev:1.2
          },
          {
            value: 11,
            label: "November",
            capvalue:7.909,
            totlead:1.1,
            product:2.31,
            addleads:2002,
            leadtarget:7.809,
            investlead:4.908,
            capgain:2.209,
            monthlyavg:20.2009,
            visitors:210,
            lessachiev:21.2
          },
          {
            value: 12,
            label: "December",
            capvalue:71.909,
            totlead:1.1,
            product:2.31,
            addleads:2002,
            leadtarget:17.809,
            investlead:14.908,
            capgain:11.209,
            monthlyavg:12.2009,
            visitors:1100,
            lessachiev:11.2
          }
      ];
       // set value for default selection
  const [selectedValue, setSelectedValue] = useState(1);
  const [selectedcapacity, setSelectedcapacity] = useState(12);
  const [selectedproduct, setSelectedproduct] = useState(81);
  const [selectedaddlead, setSelectedaddlead] = useState(61);
  const [targetvalue, setSelectedtarget] = useState(1);
  const [investleadvalue, setSelectedinvestlead] = useState(10);
  const [capgainvalue, setSelectedcapgain] = useState(91);
  const [monthlyavgvalue, setSelectedmonthavg] = useState(19);
  const [visitorvalue, setSelectedvisitors] = useState(54);
  const [lessachievvalue, setSelectedlessachiev] = useState(76);

  // handle onChange event of the dropdown
  const handleChange = (e) => {
    setSelectedValue(e.value);
    setSelectedcapacity(e.capvalue);
    setSelectedproduct(e.product);
    setSelectedaddlead(e.addleads);
    setSelectedtarget(e.leadtarget);
    setSelectedinvestlead(e.investlead);
    setSelectedcapgain(e.capgain);
    setSelectedmonthavg(e.monthlyavg);
    setSelectedvisitors(e.visitors);
    setSelectedlessachiev(e.lessachiev);
  }

//here get the token from local storage & pass that variable into api
const tok =  JSON.parse(localStorage.getItem("user"));

// API Here
  const [totalapileads,setTotalapilead] = useState()

 useEffect(() => {
     axios.get(`https://qa-platform-api.herokuapp.com/lead`, { headers: {"Authorization" : `Bearer ${tok}`} })
         .then((res) => {
            //  console.log(res.data.leadData);
              setTotalapilead(res.data.count);
              console.log(totalapileads);
         })
 }, [])

    return(
        <>
        <div className="contentcols">
            <main className="row">
                <h3 className='headtxt'>Welcome To Dashboard</h3>
            <div style={{textAlign:'justify'}}>
            {/* select dropdown logic */}
                <Select
                    className='btn monthdropdown mt-1'
                    style={{backgroundColor:'red'}}
                    placeholder="Select Option"
                    value={data.find(obj => obj.value === selectedValue)}// set selected value
                    options={data} // set list of the data
                    onChange={handleChange} // assign onChange function
                />                 
            </div>    
                <div className='col-lg-3 col-md-6 co-sm-6'>
                    <div className='leadbox my-2 py-5'>
                        <div className='ml-5'>
                            <i className="fa fa-balance-scale" style={{fontSize:'50px',color:'orangered'}}></i>
                        </div>
                        <div className='ml-4'>
                            <div>Capacity</div>
                            <span className='conleadvalue'>{selectedcapacity}</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 co-sm-6'>
                    <div className='leadbox my-2 py-5'>
                        <div className='ml-5'>
                            <i className="fa fa-users" style={{fontSize:'50px',color:'green'}}></i>
                        </div>
                        <div className='ml-4'>
                            <div>Total Leads</div>
                            <span className='conleadvalue'>{totalapileads}</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 co-sm-6'>
                    <div className='leadbox my-2 py-5'>
                        <div className='ml-5'>
                            <i className="fa fa-bar-chart" style={{fontSize:'50px',color:'orange'}}></i>
                        </div>
                        <div className='ml-4'>
                            <div>Products</div>
                            <span className='conleadvalue'>{selectedproduct}</span>
                        </div>
                    </div>
                </div>
                <div className='col-lg-3 col-md-6 co-sm-6'>
                    <div className='leadbox my-2 py-5'>
                        <div className='ml-4'>
                            <i className="fa fa-user" style={{fontSize:'50px',color:'skyblue'}}></i>
                        </div>
                        <div className='ml-4'>
                            <div>Add Leads</div>
                            <span className='conleadvalue'>{selectedaddlead}</span>
                        </div>
                    </div>
                </div>
                {/* next Month Average section */}
                  <div className='col-lg-9 col-md-8 col-sm-12'>
                        <div className='graphbox text-justify'>
                            <div className='box'>
                                <span className='pl-2 pt-3 fw-bold'>Lead Performance</span>
                                <hr/>
                                    <div className='row text-center'>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                            <span className='fw-bold small'>Lead Target</span>
                                            <h2 className='pl-3'style={{color:'#FF1493'}}>{targetvalue}</h2>
                                            <span className='text-muted small'><b>{lessachievvalue}</b>&nbsp;Less Achieved</span>
                                    </div>
                                    <div className='col-lg-4 col-md-4 col-sm-12'>
                                        <span className='fw-bold small'>Investment of Lead</span>
                                        <h2 className='pl-3'style={{color:'#00FFFF'}}>{investleadvalue}</h2>
                                        <span className='text-muted small'><b>{lessachievvalue}</b>&nbsp;Less Achieved</span>
                                    </div>
                                        <div className='col-lg-4 col-md-4 col-sm-12'>
                                            <span className='fw-bold small'>Capital Gain</span>
                                            <h2 className='pl-3'style={{color:'#EE4B2B'}}>{capgainvalue}</h2>
                                            <span className='text-muted small'><b>{lessachievvalue}</b>&nbsp;Less Achieved</span>
                                        </div>
                                    </div> 

                                <hr/>
                            </div>
                        </div>
                  </div>
                  <div className='col-lg-3 col-md-4 col-sm-12'>
                      <div className='monthlyavgbox'>
                          <h6>Monthly Average</h6>
                          <div>
                              <h4 className='avg-total text-secondary'>${monthlyavgvalue}</h4>
                              <span className='avg-label'>Visitors</span>
                          </div>
                          <div>
                              <h4 className='avg-total' style={{color:'#da1113'}}>{visitorvalue}</h4>
                          </div>
                      </div>
                  </div>           
            </main>
        </div>
        <Charts/>
        </>     
    )
}
export default Contentdashboard;