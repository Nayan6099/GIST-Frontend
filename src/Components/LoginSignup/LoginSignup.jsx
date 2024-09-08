import React from 'react'
import './LoginSignup.css'
import {useState} from 'react'

import user_icon from '../Assets/user.jpg'
import email_icon from '../Assets/email.jpg'
import password_icon from '../Assets/password.jpg'
const LoginSignup =() => {
    const [action,setAction]= useState("Recruiter Sign Up");
    return(
        <div className='container'>
            <div className='header'>
            <div className="text">{action}</div> 
               <div className="underline"></div>        
                       </div>
                       <div className="inputs">
                        {action==="User Login"?<div></div>:<div className="input">
                            <img src={user_icon} alt=''/>
                            <input placeholder="Name" type="text"/>
                            
                        </div>}
                        <div className="input">
                            <img src={email_icon} alt=''/>
                            <input placeholder="Email id"type="email"/>
                       </div>
                       <div className="input">
                            <img src={password_icon}alt=''/>
                            <input placeholder="password"type="password"/>
                       </div>
                       {action !== "User Login" && (
                       <div className="input">
                            <img src={password_icon} alt='' />
                            <input placeholder="Confirm Password"type="Password" autoComplete='off'/>
                       </div>)}
                       
                       {action !== "User Login" && (
          <div className="input">
            <input placeholder="Contact Number" type="Contact Number"/>
          </div>
        )}
        {action !== "User Login" && (
          <div className="input">
            <input placeholder="Bio" type="Bio"/>
          </div>
        )}
                      
                            </div>
                       
{action==="Sign Up"?<div></div>:<div className="forgot-password">Lost-password?<span>click Here</span></div>}
    
    <div className="submit-container">
        <div className={action==="User Login"?"submit grey":"submit"}onClick={()=>{setAction("Recruiter Sign Up")}}>Sign Up</div>
        <div className={action==="Sign Up"?"submit grey":"submit"}onClick={()=>{setAction("User Login")}}>Login</div>
    </div>
    </div>
    );
};
export default LoginSignup;