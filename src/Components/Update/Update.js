import './Update.css';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Update =()=>{
//here get the token from local storage & pass that variable into api
    const tok =  JSON.parse(localStorage.getItem("user"));
    const {id}  = useParams();
    const navigate = useNavigate()

//here get data of perticular ID 
    const[leadnew,setLeaddata] = useState([]);
    useEffect(()=>{
        axios.get(`https://qa-platform-api.herokuapp.com/lead/leadId/`+id, { headers: {"Authorization" : `Bearer ${tok}`} })
            .then((res) => {
                console.log(res);
                console.log(res.data.selectLead);
                setLeaddata(res.data.selectLead);              
            }).catch(err=> console.log(err));
    },[]);

//here update data of perticular ID 
const [setfname,setFname] = useState(leadnew.lname);
const[setlname,setLname] = useState(leadnew.lname);
const [setjobtitle,setJobtitle] = useState(leadnew.job_title);
const [setcontact,setContact] = useState(leadnew.contact);
const[setemail,setEmail]=useState(leadnew.email);
const[setc_name,setCname] = useState(leadnew.c_name);
const[add_one,setAddone] = useState(leadnew.address_one);
const[setcountry,setCountry] = useState(leadnew.country);
const[setstate,setState] = useState(leadnew.state);
const[setcity,setCity] = useState(leadnew.city);
const[setzipcode,setZipcode] = useState(leadnew.zipcode);
const[indu_type,setIndutype] = useState(leadnew.industry_type);
const[setemployee,setEmployee] = useState(leadnew.employee);
const[setrevenue,setRevenue] = useState(leadnew.revenue);
const[setwebsite,setWebsite] = useState(leadnew.website);
const[setclink,setClink] = useState(leadnew.c_link);
const[setplink,setPlink] = useState(leadnew.p_link);
const[setcompgain,setCompgain] = useState(leadnew.campaign);
const[setqastaus,setQastatus] = useState(leadnew.qa_status);
const[setqares,setQares] = useState(leadnew.qa_resone);
const[setscore,setScore] = useState(leadnew.score);
const[setclientsta,setClientsta] = useState(leadnew.client_status);
const[setclientres,setClientres] = useState(leadnew.client_resone);

    const { handleSubmit,reset,formState:{}} = useForm({mode: "onBlur"});
    const onSubmit = () =>{
        const user ={
            fname: setfname,
            lname:setlname,
            job_title:setjobtitle,
            contact:setcontact,
            email:setemail,
            c_name:setc_name,
            address_one:add_one,
            country:setcountry,
            state:setstate,
            city:setcity,
            zipcode:setzipcode,
            industry_type :indu_type,
            employee:setemployee,
            revenue:setrevenue,
            website:setwebsite,
            c_link:setclink,
            p_link:setplink,
            campaign:setcompgain,
            qa_status:setqastaus,
            qa_resone:setqares,
            score:setscore,
            client_status:setclientsta,
            client_resone:setclientres
        }
        axios.put(`https://qa-platform-api.herokuapp.com/lead/leadId/`+id,user,{ headers: {"Authorization" : `Bearer ${tok}`} })
            .then((res)=>{
                console.log(res);
                console.log(res.data);
                // const userdata= res.data.updateLead;
                // console.log(userdata)
                alert(res.data.message);  
                reset();           
                navigate('/allLeads')
            }).catch(error => alert(error.message))
    }            
   
    return(
        <>
        <Header/>
        <Sidebar/>
        <section style={{marginTop:'10%'}}>
            <div className='container'>
                <div className='row'>
                <div className='col-lg-2 col-md-2 col-sm-2'></div>
                    <div className='col-lg-8 col-md-8 col-sm-8 addformcols py-4'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <h3 className='headtxt'>Update Lead Here ..</h3>
                        <div className='row'>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setFname(e.target.value)} defaultValue={leadnew.fname}  type="text" name='fname' className="form-control" placeholder="Enter Fname" style={{width:'100%'}}
                           required/>
                        </div> 
                        <div className="col-lg-6 col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setLname(e.target.value)} defaultValue={leadnew.lname} type="text" name="lname" className="form-control" placeholder="Enter Lead Name"  style={{width:'100%'}}
                            required/>                            
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setJobtitle(e.target.value)} defaultValue={leadnew.job_title} type="text" name="job_title" className="form-control" placeholder="Enter job_title"  style={{width:'100%'}}
                                />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setContact(e.target.value)} defaultValue={leadnew.contact} type="text" name='contact' className="form-control" placeholder="Enter contact" style={{width:'100%'}}
                            />                            
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setEmail(e.target.value)} defaultValue={leadnew.email} type="email" name='email' className="form-control" placeholder="Enter email" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setCname(e.target.value)} defaultValue={leadnew.c_name} type="text" name="c_name" className="form-control" placeholder="Enter Company Name" style={{width:'100%'}}
                            />  
                        </div> 
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setAddone(e.target.value)} defaultValue={leadnew.address_one} type="text" name='address_one' className="form-control" placeholder="Enter address_one" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setCountry(e.target.value)} defaultValue={leadnew.country} type="text" name='country' className="form-control" placeholder="Enter country" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setState(e.target.value)} defaultValue={leadnew.state} type="text" name='state' className="form-control" placeholder="Enter state" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setCity(e.target.value)} defaultValue={leadnew.city} type="text" name='city' className="form-control" placeholder="Enter city" style={{width:'100%'}}
                           />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setZipcode(e.target.value)} defaultValue={leadnew.zipcode} type="text" name='zipcode' className="form-control" placeholder="Enter zipcode" style={{width:'100%'}}
                           />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setIndutype(e.target.value)} defaultValue={leadnew.industry_type} type="text" name='industry_type' className="form-control" placeholder="Enter industry_type" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setEmployee(e.target.value)} defaultValue={leadnew.employee} type="text" name='employee' className="form-control" placeholder="Enter employee" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setRevenue(e.target.value)} defaultValue={leadnew.revenue} type="text" name='revenue' className="form-control" placeholder="Enter revenue" style={{width:'100%'}}
                           />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setWebsite(e.target.value)} defaultValue={leadnew.website} type="text" name='website' className="form-control" placeholder="Enter website" style={{width:'100%'}}
                          />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setClink(e.target.value)} value={leadnew.c_link} type="text" name='c_link' className="form-control" placeholder="Enter c_link" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setPlink(e.target.value)} defaultValue={leadnew.p_link} type="text" name='p_link' className="form-control" placeholder="Enter p_link" style={{width:'100%'}}
                           />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setCompgain(e.target.value)} defaultValue={leadnew.campaign} type="text" name="campaign" className="form-control" placeholder="Enter Campaign" style={{width:'100%'}}
                          />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setQastatus(e.target.value)} defaultValue={leadnew.qa_status} type="text" name="qa_status" className="form-control" placeholder="Enter QA Status" style={{width:'100%'}}
                           />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setQares(e.target.value)} defaultValue={leadnew.qa_resone} type="text" name="qa_resone" className="form-control" placeholder="Enter QA Response" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setScore(e.target.value)} defaultValue={leadnew.score} type="text" name='score' className="form-control" placeholder="Enter Score" style={{width:'100%'}}
                            />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setClientsta(e.target.value)} defaultValue={leadnew.client_status} type="text" name="client_status" className="form-control" placeholder="Enter Client Status" style={{width:'100%'}}
                           />
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input onChange={(e)=>setClientres(e.target.value)} defaultValue={leadnew.client_resone} type="text" name="client_resone" className="form-control" placeholder="Enter Client Response" style={{width:'100%'}}
                           />
                        </div>
                    </div>
                        <button type="submit" className="btn btn-success">Update</button>
                    </form>                  
                    </div>
                    <div className='col-lg-2 col-md-2 col-sm-2'></div>
                </div>
            </div>          
        </section>
        <Footer/>  
        </>
    )
}
export default Update;