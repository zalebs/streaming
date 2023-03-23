import React from 'react'
import SvgIcon from './../SvgIcon';
import { Link } from 'react-router-dom';
import { getinputvalue } from '../../store/action';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';

const Part1 = () => {
    const [jsonData, setJsonData] = useState([]);
  const [userData, setUserData] = useState(null);
  const userIdFromLocalStorage = localStorage.getItem('userId');
    const dispatch=useDispatch()
     const isLoggedIn = localStorage.getItem('token');
     const handleChange = (e) => {
        dispatch(getinputvalue(e.target.value));
      };

      async function fetchCount() {
        console.log("fetching ...")
        const res = await fetch(`https://poised-undershirt-fish.cyclic.app/usercreds`);
      
        const data = await res.json();
        console.log(data,"inside header")
    
        setJsonData(data);
        
      }
      useEffect(() => {
        fetchCount()
      }, [])
      
      useEffect(() => {
        // Find the user data that matches the user ID from local storage
        const matchingUserData = jsonData.find(data => data.emailId === userIdFromLocalStorage);
        console.log(matchingUserData,"matching")
        setUserData(matchingUserData);
      }, [jsonData, userIdFromLocalStorage]);
  return (
   <>
      <section className="banner-part" >
                <div className="overlay"></div>
                <div className="container">
                    <div className="banner-txt checking">
                        <h1>Unlimited movies, TV shows and more.</h1>
                        {userData && isLoggedIn&&(
        <h3 style={{ color: 'white'}}>WELCOME {`${userData.name} ${userData.lastname}`}</h3>

      )}
                        {/* <p>Watch anywhere. Cancel anytime.</p>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className="form-get" method="post" name="form">
                            <div className="form-get-row">
                                <div className="form-get-left">
                                    <input type="email" name="email" placeholder="Email address"/>
                                </div>
                                <div className="form-get-right">
                                  
                                    <Link to="/signup"> <button><span>Get Started <SvgIcon /> </span>
                                    </button></Link>
                                </div>
                            </div>
                        </form> */}

                        {!isLoggedIn?(
                            <>
                              <p>Watch anywhere. Cancel anytime.</p>
                        <p>Ready to watch? Enter your email to create or restart your membership.</p>
                        <form className="form-get" method="post" name="form">
                            <div className="form-get-row">
                                <div className="form-get-left">
                                    <input type="email" name="email" placeholder="Email address" onChange={handleChange}/>
                                </div>
                                <div className="form-get-right">
                                  
                                    <Link to="/signup"> <button><span>Get Started <SvgIcon /> </span>
                                    </button></Link>
                                </div>
                            </div>
                        </form> 
                            </>
                        ):""}
                    </div>
                </div>
            </section>
   </>
  )
}

export default Part1