import './login.css';
import React, { useState } from 'react';
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import login from '../../images/login2.svg'
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import {logindata} from '../../Data/Data'
import { useNavigate } from "react-router-dom";

const Login=()=>{
    const navigate = useNavigate()
    const [userdata ,setUserdata] = useState();
    const checkChange=(values)=>{ 
        const newcheck = values.checked;
        console.log(newcheck);
        if(newcheck === true){
        const retrivedata = localStorage.setItem("user", JSON.stringify(userdata));   
        console.log(retrivedata); 
        }
    }

    //For Login
    const { register, handleSubmit,reset, formState:{errors} } = useForm({mode: "onBlur"});
    const onSubmit = data =>{
        axios.post(`https://qa-platform-api.herokuapp.com/user/login`, data)
        .then(res =>{
                console.log(res);
                console.log(res.data);
                const datatoken = res.data.token;               
                //here set the token in local storage & pass to new page
                localStorage.setItem("user", JSON.stringify(datatoken));

                // localStorage.setObj("userid",JSON.stringify(res.data.data.user._id));
                // console.log(res.data.data.user._id);

                setUserdata(data.password);                 
                if(res.status === 200)
                {
                     navigate('/dashboard');    
                     Swal.fire({
                        position:'top',
                        icon: 'success',
                        title: 'You Login Succesfully',
                        showConfirmButton: false,
                        timer: 2000
                      })
                }         
        })
        .catch(error => 
            Swal.fire({
                        position:'top',
                        icon: 'warning',
                        title: 'Sorry,Incorrect Login',
                        showConfirmButton: false,
                        timer: 2000
                      })
                ) 
         reset();    
    }
    return(
        <>
            <section>
                <div className='container'>
                    <div className='row mt-5 mb-5 mx-3 login-card'>
                        <div className='col-lg-6 col-md-6 col-sm-6 py-5'>
                            <img src={login} className='img-fluid logimgres' alt='loginimage'/>
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-6 pt-5 logincols'>
                            <h1 style={{fontWeight:'bold'}}>Login</h1>
                            <h3>Sign into your account</h3>
                            <form  key={1} autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">User Name</label>
                                    <input type="text" className="form-control"
                                     {...register("username",{ required: true, maxLength: 10, pattern: /^[A-Za-z]+$/i.test(logindata.username)})}
                                      />
                                    <div className='passtxtdiv'>
                                    {errors.username && "Please enter username."}
                                        {errors?.username?.type === "maxLength" && (
                                            <p >First name cannot exceed 10 characters</p>
                                        )}
                                        {errors?.username?.type === "pattern" && (
                                            <p>Alphabetical characters only</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <label  className="form-label">Password</label>
                                    <input type="password" className="form-control"
                                     {...register("password",{ required: true, minLength:5,pattern:/[A-Za-z]{3}/})}
                                      />
                                    <div className='passtxtdiv'>
                                    {errors.password && "Please provide a valid Password."}
                                        {errors?.password?.type === "minLength" && (
                                            <p style={{color:'#bf1650'}}>Password can not be Less than 5 characters</p>
                                        )}
                                        {errors?.password?.type === "pattern" && (
                                            <p style={{color:'#bf1650'}}>Alphabetical characters only</p>
                                        )}
                                    </div>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" 
                                     value={logindata.check} 
                                    onChange={(e)=>checkChange(e.target)} />
                                    <label className="form-check-label" for="exampleCheck1">Keep in Sign in</label>
                                </div>
                               <Button text="Submit"/>
                            </form>
                            <Link to='#' className='forgetrpass py-1'>Forgot password?</Link>
                        </div>
                    </div>
                </div>               
            </section>
        </>     
    )
}
export default Login;

