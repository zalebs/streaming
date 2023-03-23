import React from 'react'
import { useState } from 'react';
import logo from "../images/finallogo.png"
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Footer from './signup/Footer';
const User = () => {
  const email=localStorage.getItem('emailId')
  console.log(email,"local")
      const [emailId, setEmailId] = useState(email);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [CorfirmPassword, setCorfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    // setCorfirmPassword
    const navigate = useNavigate()
    const handleSubmit = async (event) => {
      event.preventDefault();
      console.log(email,"inside rihc")
      if (newPassword !==CorfirmPassword) {
        setMessage("Passwords do not match");
        return;
    }
      const response = await fetch('https://poised-undershirt-fish.cyclic.app/changepassword', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
         
        },
        body: JSON.stringify({
          emailId,
          currentPassword,
          newPassword
        })
      });
  
      const data = await response.json();
  
      setMessage(data.message);
      setEmailId('');
      setCurrentPassword('');
      setNewPassword('');
    }
  return (
    <div class="wrapper">
        <header>
            <div class="header-part">
                <div class="container">
                    <div class="header-inner">
                        <div class="logo">
                            {/* <a href="#">Flixxit</a> */}
                          <img src={logo}
                            onClick={() => navigate("/")}
                               width= "151px"
            height= "33px" alt="" />
                        </div>
                        <div class="header-btn">
                         
                            <div class="sign-btn">
                              <Link to="/"><a href="#" class="theme-btn">Back</a></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <div class="main-part">
                <section class="banner-part">
                    <div class="overlay"></div>
                    <div class="login-info-wrapper">
                        <div class="login-info-wrapper-inner">
                            <h1>Change password</h1>
                            <div class="login-info-form">
                                <form class="form" method="post" name="form" onSubmit={handleSubmit}>
                                    <div class="row">
                                    {/* <div class="col-md-12 col-sm-12 col-12">
                                            <div class="form-field">
                                               
                                                  <input id="id_userLoginId" type="text" placeholder="" name="email" value={emailId} onChange={(event) => setEmailId(event.target.value)} required/>
                                          <label for="id_userLoginId" class="placeLabel"  >Email</label>  
                                            </div>
                                        </div> */}
                                        <div class="col-md-12 col-sm-12 col-12">
                                            <div class="form-field">
                                                <input id="id_password" type="password" name="password" placeholder="" required value={currentPassword} onChange={(event) => setCurrentPassword(event.target.value)} /> 
                                                <label for="id_password" class="placeLabel">Current Password</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-12">
                                            <div class="form-field">
                                                <input id="id_password" type="password" name="password" placeholder=""  value={newPassword} onChange={(event) => setNewPassword(event.target.value)}  required/> 
                                                <label for="id_password" class="placeLabel">Password</label>
                                            </div>
                                        </div>
                                        <div class="col-md-12 col-sm-12 col-12">
                                            <div class="form-field">
                                                <input id="id_password" type="password" name="password" placeholder=""  value={CorfirmPassword} onChange={(event) => setCorfirmPassword(event.target.value)}  required/> 
                                                <label for="id_password" class="placeLabel">Confirm Password</label>
                                            </div>
                                        </div>
                                        {message && <p style={{color: message === 'Password updated successfully' ? 'green' : 'red'}}>{message}</p>}
                                        <div class="col-md-12 col-sm-12 col-12">
                                            <div class="form-field">
                                                <button class="btn-show">Set password</button>
                                            </div>
                                        </div>
                                    </div>
                                    {/* {message && <p style={{color:"white"}}>{message}</p>} */}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
     <Footer/>
    </div>

  )
}

export default User






