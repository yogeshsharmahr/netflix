import './login.scss';
import NetflixLogo from '../../images/netflixlogo.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = () => {

    const [emailChecker, setEmailChecker]=  useState(false)
    const [passwordChecker, setPasswordChecker]=  useState(false)
    const [verified, setVerifieed]=  useState(false)
    
    const  HandleOnClickFun = () =>{
        if(emailChecker !=false && passwordChecker!= false){
            setVerifieed(true);
        }else{
            alert("Please fill the email and password"); 
        }
        
    }



    return (
        <div className="mainPage">
            <div className="login">
            <div className="top">
                    <div className="wrapper">
                        <img src={NetflixLogo} alt="logo" className="logo" />
                    </div>
                </div>
                <div className="container">
                  
                    <div className="input">
                    <h2>Sign In</h2>
                        <input type="email" placeholder="Email Or Mobile Number"  onChange={(event)=>setEmailChecker(event.target.value)}/>
                       
                        <input type="password" placeholder="Password" onChange={(event)=>setPasswordChecker(event.target.value)} />
                        <Link to="home" onClick={(event)=> verified ===false ? event.preventDefault() : null}>
                        <button className="Sign_In" onClick={HandleOnClickFun}>Sign In</button>
                        </Link>
                        <div className="links">
                            <ul>
                                <li>Login With FaceBook</li>
                                <li>New to Netflix? Sign up now.</li>
                            </ul>
                            <p>This page is protected by Google reCAPTCHA
                                 to ensure you're not a bot. 
                                 <span>Learn more.</span>
                                 </p>
                        </div>
                      
                    </div>
                </div> 
            </div>
           
        </div>
    )
}

export default Login
