import React from 'react'

// import {  useSelector } from 'react-redux';

import Header from '../components/Header';
// import SearchedShow from '../components/SearchedShow';
import Video from '../components/Video';
import Footer from '../components/signup/Footer';
const HomePage = () => {
  // const data=useSelector((state)=>state.data)
  // console.log(data,"checkinglll")


  return (
    <>
      
        <Header />
        <Video/>
        <Footer/>
</>
  )
}

export default HomePage