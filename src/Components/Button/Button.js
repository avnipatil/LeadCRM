import './Button.css';



const Button=(props)=>{

    return(
        <>
         <button type="submit" className='btn btn-block login-btn mb-4' onClick={props.functionbtn} >{props.text}</button>    
        </>     
    )
}
export default Button;