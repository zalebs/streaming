


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';

// const SignIn = () => {
//   const [emailId, setEmailId] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [message, setMessage] = useState('');

//   const navigate = useNavigate();


//   //remember me 
//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:8080/signin', { emailId, password });

//       localStorage.setItem('token', response.data.token);
//       localStorage.setItem('userId', response.data.emailId);

//       if (rememberMe) {
//         localStorage.setItem('rememberMe', 'true');
//         localStorage.setItem('emailId', emailId);
//         localStorage.setItem('password', password);
//       } else {
//         localStorage.removeItem('rememberMe');
//         localStorage.removeItem('emailId');
//         localStorage.removeItem('password');
//       }

//       navigate('/dashboard');
//     } catch (error) {
//       setMessage(error.response.data.message);
//     }
//   };

//   const handleRememberMeChange = (event) => {
//     setRememberMe(event.target.checked);
//   };




//   // Check for remember me data in local storage on page load
//   React.useEffect(() => {
//     const storedRememberMe = localStorage.getItem('rememberMe');
//     if (storedRememberMe === 'true') {
//       const storedEmailId = localStorage.getItem('emailId');
//       const storedPassword = localStorage.getItem('password');
//       setEmailId(storedEmailId);
//       setPassword(storedPassword);
//       setRememberMe(true);
//     }
//   }, []);



//   //valid email format 
  

//   return (
//     <div className="sign">
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           placeholder="Email"
//           value={emailId}
//           onChange={(event) => setEmailId(event.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(event) => setPassword(event.target.value)}
//         />
//         <div>
//           <label style={{ color: 'white' }}>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={handleRememberMeChange}
//             />
//             Remember me
//           </label>
//         </div>
//         <button type="submit">Sign In</button>
//       </form>
//       {message ? <p>{message}</p> : ''}
//       <Link to="/signup">
//         <h1>New User? SIGN UP</h1>
//       </Link>
//     </div>
//   );
// };

// export default SignIn;
import React from 'react'
import "../css/style.css"
import  { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import logo from "../images/finallogo.png"
const SignIn = () => {
    const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [message, setMessage] = useState('');

  const navigate = useNavigate();


  //remember me 
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://giddy-rose-threads.cyclic.app/signin', { emailId, password });

      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.emailId);

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
        localStorage.setItem('emailId', emailId);
        localStorage.setItem('password', password);
      } else {
        localStorage.removeItem('rememberMe');
        localStorage.removeItem('emailId');
        localStorage.removeItem('password');
      }

      navigate('/dashboard');
    } catch (error) {
      setMessage(error.response.data.message);
    }
  };

  const handleRememberMeChange = (event) => {
    setRememberMe(event.target.checked);
  };




  // Check for remember me data in local storage on page load
  React.useEffect(() => {
    const storedRememberMe = localStorage.getItem('rememberMe');
    if (storedRememberMe === 'true') {
      const storedEmailId = localStorage.getItem('emailId');
      const storedPassword = localStorage.getItem('password');
      setEmailId(storedEmailId);
      setPassword(storedPassword);
      setRememberMe(true);
    }
  }, []);



  return (
    <div class="wrapper">
    <header>
        <div class="header-part">
            <div class="container">
                <div class="header-inner">
                    <div class="logo">
                        {/* <a href="#">Flixxitt</a> */}
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
                        <h1>Sign In</h1>
                        <div class="login-info-form">
                            <form class="form" method="post" name="form" onSubmit={handleSubmit}>
                                <div class="row">
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="form-field">
                                          
                                          <input id="id_userLoginId" type="text" placeholder="" name="email" value={emailId}  onChange={(event) => setEmailId(event.target.value)} required/>
                                          <label for="id_userLoginId" class="placeLabel"  >Email</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="form-field">
                                          
                                             <input id="id_password" type="password"  placeholder=""  value={password}
          onChange={(event) => setPassword(event.target.value)} required/>
            <label for="id_password" class="placeLabel">Password</label>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="form-field">
                                            <button class="btn-show">Sign In</button>
                                        </div>
                                    </div>
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="form-field form-field-check">
                                            <div class="remember-check">
                                                <label class="lbl-check">Remember me
                                                    <input type="checkbox" checked={rememberMe}
                                                   onChange={handleRememberMeChange}/>
                                                    <span class="checkmark"></span>
                                                </label>
                                            </div>
                                            <div class="need-help">
                                                <a href="#"><small>Need help?</small></a>
                                            </div>
                                        </div>
                                    </div>
                                    {message ? <p style={{color:'red'}}>{message}</p> : ''}
                                    <div class="col-md-12 col-sm-12 col-12">
                                        <div class="form-field login-link-flixxit">
                                            <span>New to Flixxit?</span>
                                            <Link to="/signup"> <a href="#" class="sign-up-link">Sign up now</a></Link>
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
    <footer>
        <div class="footer-part">
            <div class="container">
                <div class="footer-inner">
                    <div class="question-part">
                        <span>Questions? Call</span> <a href="#">000-800-919-0000</a>
                    </div>
                    <div class="footer-links">
                        <div class="row">
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="footer-link-ul">
                                    <ul>
                                        <li><a href="#">FAQ</a></li>
                                        <li><a href="#">Accounts</a></li>
                                        <li><a href="#">Jobs</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Only on Flixxit</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="footer-link-ul">
                                    <ul>
                                        <li><a href="#">Gift Card Terms</a></li>
                                        <li><a href="#">Media Centre</a></li>
                                        <li><a href="#">Ways to Watch</a></li>
                                        <li><a href="#">Cookie Preferences</a></li>
                                        <li><a href="#">Speed Test</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-4 col-sm-4 col-xs-12">
                                <div class="footer-link-ul">
                                    <ul>
                                        <li><a href="#">Help Centre</a></li>
                                        <li><a href="#">Investor Relations</a></li>
                                        <li><a href="#">Terms of Use</a></li>
                                        <li><a href="#">Corporate Information</a></li>
                                        <li><a href="#">Legal Notices</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="footer-language">
                        <div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                <img src="images/global.svg" alt=""/> English
                            </button>
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a class="dropdown-item" href="#">English</a></li>
                                <li><a class="dropdown-item" href="#">German</a></li>
                                <li><a class="dropdown-item" href="#">French</a></li>
                            </ul>
                        </div>
                    </div>
                    <div class="copy-right">
                        <span>Flixxit India</span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</div>

  )
}

export default SignIn