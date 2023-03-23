import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import netflix from "../assets/netflix.png";
import logo from "../images/finallogo.png"
import '../css/custom.css'
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { getFeeds } from './../store/action';
import Card from './Card';

const Header = () => {
  const [jsonData, setJsonData] = useState([]);
  const [userData, setUserData] = useState(null);
  const userIdFromLocalStorage = localStorage.getItem('userId');
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const data=useSelector((state)=>state.data)
  const api = '172510d522626e855a7c3e09464b6ce1';
  const [searched, setSearched] = useState("");
  const onToggleHandler = () => {
    // onToggle((clicked) => !clicked);
  };

  const onChangeSearchHandler = (event) => {
   let value =event.target.value
   setSearched(value)
   dispatch(getFeeds(api,value))
  
   
  };
  async function fetchCount() {
    console.log("fetching ...")
    const res = await fetch(`https://poised-undershirt-fish.cyclic.app/usercreds`);
  
    const data = await res.json();
    console.log(data,"inside header")

    setJsonData(data);
    
  }
  const handleSignOut = () => {
    localStorage.removeItem('token'); 
    window.location.reload();
    // Remove the token from local storage
  };

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
    <header>
      <div
        className={`row justify-content-between py-2 pt-3`}
       
      >
        <div className="col-12 col-sm-6 col-md-6 header-logo-wrap">
          <img
            onClick={() => navigate("/")}
            src={logo}
            alt="Netflix Logo"
           
            width= "151px"
            height= "33px"
            style={{ cursor: "pointer" }}
          />
        </div>
        <div className="col-12 col-sm-6 col-md-6 header-info-wrap d-flex align-items-center justify-content-end">
          <div className="d-flex align-items-center gap-3">
            <div>
            <div className="d-flex align-items-center gap-2">
        <i
          onClick={onToggleHandler}
          className="bi bi-search text-white fs-4"
          style={{ cursor: "pointer" }}
        ></i>
       
          <input
            type="search"
         
            className="search"
            placeholder="TV Shows Title"
            onChange={onChangeSearchHandler}
          />
        
      </div>
            </div>
            <div className="user-pic">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                alt="Netflix Logo"
                width="35px"
                height="35px"
                
                style={{ cursor: "pointer" }}
              />
             
            </div>
            {/* <h4 className="guest">Guest</h4> */}
            {userData && (
        <h3 style={{ color: 'white'}}>{`${userData.name} ${userData.lastname}`}</h3>

      )}
     <Link to="/user"> <a href="#"className="theme-btn"  >Change Password</a></Link>
     <Link> <a href="#"className="theme-btn" onClick={handleSignOut} >Sign Out</a></Link>
          </div>
        </div>
      </div>
    </header>
    {searched === "" ? (
        <div className='search'><h1>Search for movie</h1></div>
      ) : data.length === 0 ? (
        <div className='search'><h1>No results found</h1></div>
      ) : (
        <Card movies={data} banner="Recent TV Shows Search" />
      )}
 </>
  );
};

export default Header;
