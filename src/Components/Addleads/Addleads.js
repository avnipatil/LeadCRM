import './Addleads.css';
import React from 'react';
import { useForm } from "react-hook-form";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const Addleads=()=>{
//here get the token from local storage & pass that variable into api
     const tok2 =  JSON.parse(localStorage.getItem("user"));
   
     const Userid = localStorage.getItem('userid');
     console.log(Userid);

 //This is for navigation login succss to nxt page 
    const navigate = useNavigate()
//For ADD data
    const { register, handleSubmit,reset, formState:{errors} } = useForm({mode: "onBlur"});
    const onSubmit = (data,e) =>{
        e.preventDefault();
        console.log(data);
        axios.post(`https://qa-platform-api.herokuapp.com/lead`,data,{ headers: {"Authorization" : `Bearer ${tok2}`}})
        .then(res => { 
            console.log(res);
            console.log(res.data);
            alert('Added Sucessfull');
            navigate('/allLeads');
                    if(res.status === 200){
                        Swal.fire({
                            position:'centerd',
                            icon:'success',
                            title: 'Your Data has been saved',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }else{
                        Swal.fire({
                            position: 'centerd',
                            icon: 'Warning',
                            title: 'Your Data Failed saved',
                            showConfirmButton: false,
                            timer: 2000
                        })
                    }
        }).catch(error => alert(error.message))
        reset();
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
                        <h3 className='headtxt'>Add Lead Here ..</h3>
                        <div className='row'>

                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" value={Userid} className="form-control" 
                                {...register("Userid")} style={{width:'100%'}}
                            />
                        </div>

                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='fname' className="form-control" placeholder="Enter Fname" style={{width:'100%'}}
                            {...register("fname",
                                { required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.fname && "Please enter Fname."}
                                    {errors?.fname?.type === "maxLength" && (
                                    <p >Fname cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div> 
                        <div className="col-lg-6 col-md-12 col-sm-12 my-2">
                            <input type="text" name="lname" className="form-control" placeholder="Enter Lead Name"  style={{width:'100%'}}
                            {...register("lname",
                                { required: true, maxLength: 10,pattern:/[A-Za-z]/ })}/>
                             <div className='passtxtdiv'>
                                {errors.lname && "Please enter lname."}
                                    {errors?.lname?.type === "maxLength" && (
                                    <p >lname cannot exceed 10 characters</p>
                                )}
                                {errors?.lname?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 my-2">
                            <input type="text" name="job_title" className="form-control" placeholder="Enter job_title"  style={{width:'100%'}}
                            {...register("job_title",
                                { required: true, maxLength: 50,pattern:/[A-Za-z]/ })}/>
                             <div className='passtxtdiv'>
                                {errors.job_title && "Please enter job_title."}
                                    {errors?.job_title?.type === "maxLength" && (
                                    <p >job_title cannot exceed 50 characters</p>
                                )}
                                {errors?.job_title?.type === "pattern" && (
                                    <p>Alphabetical characters only</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="number" name='contact' className="form-control" placeholder="Enter contact" style={{width:'100%'}}
                            {...register("contact",{ required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.contact && "Please enter contact."}
                                    {errors?.contact?.type === "maxLength" && (
                                    <p >contact cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="email" name='email' className="form-control" placeholder="Enter email" style={{width:'100%'}}
                            {...register("email",{ required: true, maxLength: 50})}/>
                            <div className='passtxtdiv'>
                               {errors.email && "Please enter email."}
                                   {errors?.email?.type === "maxLength" && (
                                   <p >email cannot exceed 50 characters</p>
                               )}
                           </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name="c_name" className="form-control" placeholder="Enter Company Name" style={{width:'100%'}}
                            {...register("c_name",
                                { required: true, maxLength: 30})}/>
                             <div className='passtxtdiv'>
                                {errors.c_name && "Please enter Company Name."}
                                    {errors?.c_name?.type === "maxLength" && (
                                    <p >Company Name cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div> 
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='address_one' className="form-control" placeholder="Enter address_one" style={{width:'100%'}}
                            {...register("address_one",{ required: true, maxLength: 50})}/>
                             <div className='passtxtdiv'>
                                {errors.address_one && "Please enter address_one."}
                                    {errors?.address_one?.type === "maxLength" && (
                                    <p >address_one cannot exceed 50 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='country' className="form-control" placeholder="Enter country" style={{width:'100%'}}
                            {...register("country",{ required: true, maxLength: 30})}/>
                             <div className='passtxtdiv'>
                                {errors.country && "Please enter country."}
                                    {errors?.country?.type === "maxLength" && (
                                    <p >country cannot exceed 30 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='state' className="form-control" placeholder="Enter state" style={{width:'100%'}}
                            {...register("state",{ required: true, maxLength: 20})}/>
                             <div className='passtxtdiv'>
                                {errors.state && "Please enter state."}
                                    {errors?.state?.type === "maxLength" && (
                                    <p >state cannot exceed 20 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='city' className="form-control" placeholder="Enter city" style={{width:'100%'}}
                            {...register("city",{ required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.city && "Please enter city."}
                                    {errors?.city?.type === "maxLength" && (
                                    <p >city cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='zipcode' className="form-control" placeholder="Enter zipcode" style={{width:'100%'}}
                            {...register("zipcode",{ required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.zipcode && "Please enter zipcode."}
                                    {errors?.zipcode?.type === "maxLength" && (
                                    <p >zipcode cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='industry_type' className="form-control" placeholder="Enter industry_type" style={{width:'100%'}}
                            {...register("industry_type",{ required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.industry_type && "Please enter industry_type."}
                                    {errors?.industry_type?.type === "maxLength" && (
                                    <p >industry_type cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='employee' className="form-control" placeholder="Enter employee" style={{width:'100%'}}
                            {...register("employee",{ required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.employee && "Please enter employee."}
                                    {errors?.employee?.type === "maxLength" && (
                                    <p >employee cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='revenue' className="form-control" placeholder="Enter revenue" style={{width:'100%'}}
                            {...register("revenue",{ required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.revenue && "Please enter revenue."}
                                    {errors?.revenue?.type === "maxLength" && (
                                    <p >revenue cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='website' className="form-control" placeholder="Enter website" style={{width:'100%'}}
                            {...register("website",{ required: true, maxLength: 50})}/>
                             <div className='passtxtdiv'>
                                {errors.website && "Please enter website."}
                                    {errors?.website?.type === "maxLength" && (
                                    <p >website cannot exceed 50 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='c_link' className="form-control" placeholder="Enter c_link" style={{width:'100%'}}
                            {...register("c_link",{ required: true, maxLength: 50})}/>
                             <div className='passtxtdiv'>
                                {errors.c_link && "Please enter c_link."}
                                    {errors?.c_link?.type === "maxLength" && (
                                    <p >c_link cannot exceed 50 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='p_link' className="form-control" placeholder="Enter p_link" style={{width:'100%'}}
                            {...register("p_link",{ required: true, maxLength: 50})}/>
                             <div className='passtxtdiv'>
                                {errors.p_link && "Please enter p_link."}
                                    {errors?.p_link?.type === "maxLength" && (
                                    <p >p_link cannot exceed 50 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name="campaign" className="form-control" placeholder="Enter Campaign" style={{width:'100%'}}
                            {...register("campaign",
                                { required: true, maxLength: 50})}/>
                             <div className='passtxtdiv'>
                                {errors.campaign && "Please enter Campaign."}
                                    {errors?.campaign?.type === "maxLength" && (
                                    <p >Campaign cannot exceed 50 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name="qa_status" className="form-control" placeholder="Enter QA Status" style={{width:'100%'}}
                            {...register("qa_status",
                                { required: true, maxLength: 50})}/>
                             <div className='passtxtdiv'>
                                {errors.qa_status && "Please enter QA Status."}
                                    {errors?.qa_status?.type === "maxLength" && (
                                    <p >QA Status cannot exceed 50 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name="qa_resone" className="form-control" placeholder="Enter QA Response" style={{width:'100%'}}
                            {...register("qa_resone",
                                { required: true, maxLength: 50})}/>
                             <div className='passtxtdiv'>
                                {errors.qa_resone && "Please enter QA Response."}
                                    {errors?.qa_resone?.type === "maxLength" && (
                                    <p >QA Response cannot exceed 50 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name='score' className="form-control" placeholder="Enter Score" style={{width:'100%'}}
                            {...register("score",{ required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.score && "Please enter Score."}
                                    {errors?.score?.type === "maxLength" && (
                                    <p >Score cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name="client_status" className="form-control" placeholder="Enter Client Status" style={{width:'100%'}}
                            {...register("client_status",
                                { required: true, maxLength: 10})}/>
                             <div className='passtxtdiv'>
                                {errors.client_status && "Please enter Client Status"}
                                    {errors?.client_status?.type === "maxLength" && (
                                    <p >Client Status cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div>
                        <div className="col-lg-6  col-md-12 col-sm-12 my-2">
                            <input type="text" name="client_resone" className="form-control" placeholder="Enter Client Response" style={{width:'100%'}}
                            {...register("client_resone",
                                { required: true, maxLength: 30})}/>
                             <div className='passtxtdiv'>
                                {errors.client_resone && "Please enter Client Response."}
                                    {errors?.client_resone?.type === "maxLength" && (
                                    <p >Client Response cannot exceed 10 characters</p>
                                )}
                            </div>
                        </div> 
                    </div>
                        <button type="submit" className="btn btn-primary">Add Lead</button>
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
export default Addleads;