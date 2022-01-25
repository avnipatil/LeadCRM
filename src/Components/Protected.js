import React from "react";
import { useNavigate } from "react-router-dom";

function Protected (props){
    const navigate = useNavigate()

    const Cmp = props.cmp
    var auth = JSON.parse(localStorage.getItem('token'))
    console.log(auth);
    return(
        <>
        <div>
            { auth ? <Cmp/> :  navigate('/dashboard') } 
        </div>
        </>
    )
}
export default Protected;