// import React from 'react'
// import { useState } from 'react';
// import  axios  from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const SignUpPage = () => {
//   const [emailId, setEmailId] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [lastname, setlastName] = useState('');
//   const [message, setMessage] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');
//   const inputValue = useSelector(state => state.inputvalue);

//   console.log(inputValue,"input value")
// const navigate=useNavigate()
//   const handleSubmit = async (event) => {


//     event.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailId)) {
//       setMessage("Invalid email format");
//       return;
//     }
//     if (password !== passwordConfirm) {
//       setMessage("Passwords do not match");
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:8080/signup', { emailId,name,lastname,password });
//       console.log(response.data);
//       // localStorage.setItem('token', response.data.token);
//       navigate('/signin');
//       // handle successful signup, e.g. redirect to dashboard page
//     } catch (error) {
//       console.log(error.response.data,"signup unsuccessfull");
//       setMessage(error.response.data.message)
//       // handle signup error, e.g. display error message to user
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Email"
//         value={inputValue?inputValue:emailId}
//         onChange={(event) => setEmailId(event.target.value)}
//       />
//        <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />
//        <input
//         type="text"
//         placeholder="LastName"
//         value={lastname}
//         onChange={(event) => setlastName(event.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={passwordConfirm}
//           onChange={(event) => setPasswordConfirm(event.target.value)}
//         />
//         {message?<p>{message}</p>:""}
//       <button type="submit">Sign up</button>
//     </form>
//     </div>
//   )
// }

// export default SignUpPage
// import React from 'react'
// import { useState } from 'react';
// import  axios  from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { useSelector } from 'react-redux';

// const SignUpPage = () => {
//   const [emailId, setEmailId] = useState('');
//   const [password, setPassword] = useState('');
//   const [name, setName] = useState('');
//   const [lastname, setlastName] = useState('');
//   const [message, setMessage] = useState('');
//   const [passwordConfirm, setPasswordConfirm] = useState('');
//   const inputValue = useSelector(state => state.inputvalue);

//   console.log(inputValue,"input value")
// const navigate=useNavigate()
//   const handleSubmit = async (event) => {


//     event.preventDefault();
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(emailId)) {
//       setMessage("Invalid email format");
//       return;
//     }
//     if (password !== passwordConfirm) {
//       setMessage("Passwords do not match");
//       return;
//     }
//     try {
//       const response = await axios.post('http://localhost:8080/signup', { emailId,name,lastname,password });
//       console.log(response.data);
//       // localStorage.setItem('token', response.data.token);
//       navigate('/signin');
//       // handle successful signup, e.g. redirect to dashboard page
//     } catch (error) {
//       console.log(error.response.data,"signup unsuccessfull");
//       setMessage(error.response.data.message)
//       // handle signup error, e.g. display error message to user
//     }
//   };
//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//       <input
//         type="text"
//         placeholder="Email"
//         value={inputValue?inputValue:emailId}
//         onChange={(event) => setEmailId(event.target.value)}
//       />
//        <input
//         type="text"
//         placeholder="Name"
//         value={name}
//         onChange={(event) => setName(event.target.value)}
//       />
//        <input
//         type="text"
//         placeholder="LastName"
//         value={lastname}
//         onChange={(event) => setlastName(event.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(event) => setPassword(event.target.value)}
//       />
//         <input
//           type="password"
//           placeholder="Confirm Password"
//           value={passwordConfirm}
//           onChange={(event) => setPasswordConfirm(event.target.value)}
//         />
//         {message?<p>{message}</p>:""}
//       <button type="submit">Sign up</button>
//     </form>
//     </div>
//   )
// }

// export default SignUpPage



import React from 'react'

import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from "../images/finallogo.png"
import Footer from './signup/Footer';
const SignUpPage = () => {
   
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [lastname, setlastName] = useState('');
    const [message, setMessage] = useState('');
    const [passwordConfirm, setPasswordConfirm] = useState('');
    const inputValue = useSelector(state => state.inputvalue);
    const [emailId, setEmailId] = useState(inputValue);
    console.log(inputValue, "input value")
    const navigate = useNavigate()
    const handleSubmit = async (event) => {


        event.preventDefault();
        // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        // const emailRegex=  /.*@.*\.com/
        // if (!emailRegex.test(emailId)) {
        //     setMessage("Invalid email format");
        //     return;
        // }
        console.log(emailId,"emailid")
        if (!emailId.includes("@") || !emailId.endsWith(".com")) {
            setMessage("Invalid email format");
            return;
        }
        if (password !== passwordConfirm) {
            setMessage("Passwords do not match");
            return;
        }
        const passwordError = validatePassword(password);
        if (passwordError) {
          setMessage(passwordError);
          return;
        }
        try {
            const response = await axios.post('https://poised-undershirt-fish.cyclic.app/signup', { emailId, name, lastname, password });
            console.log(response.data);
            // localStorage.setItem('token', response.data.token);
            navigate('/signin');
            // handle successful signup, e.g. redirect to dashboard page
        } catch (error) {
            console.log(error.response.data, "signup unsuccessfull");
            setMessage(error.response.data.message)
            // handle signup error, e.g. display error message to user
        }
    };

    //password validation 
    // const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/;
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&_])[A-Za-z\d@$!%*?&_]{8,20}$/ 
const validatePassword = (password) => {
  if (password.length < 8 || password.length > 20) {
    return 'Password must be between 8 and 20 characters';
  }
  if (!passwordRegex.test(password)) {
    return 'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character';
  }
  return '';
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
                                    <a href="#" class="theme-btn">Sign Up</a>
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
                                <h1>Sign Up</h1>
                                <div class="login-info-form">
                                    <form class="form" method="post" name="form" onSubmit={handleSubmit}>
                                        <div class="row">
                                            <div class="col-md-12 col-sm-12 col-12">
                                                <div class="form-field">
                                                    <input id="id_firstId" type="text" name="txt" placeholder="" value={name} onChange={(event) => setName(event.target.value)} required />
                                                    <label for="id_firstId" class="placeLabel"  >First name
                                                    <span style={{marginleft:"5px" ,color:"red"}}>*</span></label>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-12">
                                                <div class="form-field">
                                                    <input id="id_lastId" type="text" name="txt" placeholder="" value={lastname} onChange={(event) => setlastName(event.target.value)} required />
                                                    <label for="id_lastId" class="placeLabel">Last name  <span style={{marginleft:"5px" ,color:"red"}}>*</span></label>
                                                   
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-12">
                                                <div class="form-field">
                                                    <input id="id_userLoginId" type="text" name="txt" placeholder="" value={inputValue ? inputValue : emailId} onChange={(event) => setEmailId( event.target.value)} required />
                                             



                                                    <label for="id_userLoginId" class="placeLabel">Email  <span style={{marginleft:"5px" ,color:"red"}}>*</span> </label>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-12">
                                                <div class="form-field">
                                                    <input id="id_password" type="password" name="password" placeholder="" value={password} onChange={(event) => setPassword(event.target.value)} required />
                                                    <label for="id_password" class="placeLabel">Password  <span style={{marginleft:"5px" ,color:"red"}}>*</span></label>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-12">
                                                <div class="form-field">
                                                    <input id="id_passwordconfirm" type="password" name="password" placeholder="" value={passwordConfirm}
                                                        onChange={(event) => setPasswordConfirm(event.target.value)} required />
                                                    <label for="id_passwordconfirm" class="placeLabel">Confirm password  <span style={{marginleft:"5px" ,color:"red"}}>*</span></label>
                                                </div>
                                            </div>
                                            {message ? <p style={{ color: 'red' }}>{message}</p> : ""}
                                            <div class="col-md-12 col-sm-12 col-12">
                                                <div class="form-field">
                                                    <button class="btn-show">Sign Up</button>
                                                </div>
                                            </div>
                                            <div class="col-md-12 col-sm-12 col-12">
                                                <div class="form-field login-link-flixxit">
                                                    <span>Already a user?</span>
                                                    <Link to="/signin">  <a href="#" class="sign-up-link">Sign In now</a></Link>
                                                </div>
                                            </div>
                                        </div>
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

export default SignUpPage