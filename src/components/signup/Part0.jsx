import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../../images/finallogo.png"
import { useNavigate } from 'react-router-dom';
const Part0 = () => {
  const navigate = useNavigate()
    const isLoggedIn = localStorage.getItem('token');
    const handleSignOut = () => {
        localStorage.removeItem('token'); 
        window.location.reload();
        // Remove the token from local storage
      };

  return (
    <header>
    <div className="header-part">
        <div className="container">
            <div className="header-inner">
               
                <div className="logo">
                    {/* <a href="#">Flixxit</a> */}

                    <img src={logo}
                      onClick={() => navigate("/")}
                      width= "151px"
            height= "33px" alt="no" />
                </div>
                <div className="header-btn">
                <div className="sign-btn">
                        
                        {/* <Link to="/dashboard"><a href="#" className="theme-btn">Dashboard</a></Link> */}
                      {isLoggedIn?(<Link to="/dashboard"><a href="#" className="theme-btn">Dashboard</a></Link> ):""}  
                    </div>
                  
                  
                    <div className="sign-btn">
                        
                        {/* <Link to="/dashboard"><a href="#" className="theme-btn">Dashboard</a></Link> */}
                      {isLoggedIn?(<Link to="/user"><a href="#" className="theme-btn">Change Password</a></Link> ):""}  
                    </div>

                    <div className="sign-btn">
                     
                     {/* <Link to="/signin"><a href="#" className="theme-btn">Sign In</a></Link> */}
                     {isLoggedIn ? (
      
         <a href="#"className="theme-btn" onClick={handleSignOut} >Sign Out</a>
       
     ) : (
       
         <Link to="/signin">
           <a href="#" className="theme-btn">
             Sign In
           </a>
         </Link>
      
     )}
                 </div>
                </div>


                {/*  */}
            </div>
        </div>
    </div>
</header>
  )
}

export default Part0