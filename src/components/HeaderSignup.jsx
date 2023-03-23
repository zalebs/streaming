import React from 'react'
import SvgIcon from './SvgIcon';
import tv from "../images/tv.png"
import Part1 from './signup/Part1';
// import global from "../../images/global.svg"
import {BsGlobe2} from 'react-icons/bs';
import Part2 from './signup/Part2';
import Part3 from './signup/Part3';
import Part4 from './signup/Part4';
import Part5 from './signup/Part5';
import Part6 from './signup/Part6';
import Footer from './signup/Footer';
import Part0 from './signup/Part0';
const HeaderSignup = () => {
  return (
   <>
       <div className="wrapper">
 
    <Part0/>
    <main>
        <div className="main-part">
          
            <Part1/>
          
            <Part2/>
           
            <Part3/>
          
            <Part4/>
           
            <Part5/>
          
            <Part6/>
        </div>
    </main>
  
        <Footer/>
</div>
   </>
  )
}

export default HeaderSignup