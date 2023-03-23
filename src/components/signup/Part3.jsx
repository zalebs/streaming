import React from 'react'
import tv from "../../images/tv.png"
import part2 from "../../images/check3.jpg"
const Part3 = () => {
  return (
   <>
    <section className="image-info-part">
                    <div className="container">
                        <div className="image-info-inner">
                            <div className="row h-100">
                                <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <div className="image-info-left">
                                        <div className="tv-wrapper">
                                            {/* <img src={tv} alt=""/> */}
                                            <img src={part2} alt="no" />
                                        </div>
                                        <div className="video-wrapper">
                                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ccy9AhOvxCg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                                        {/* <img className='fitimg' src={part2} alt="no" /> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <div className="image-info-right">
                                        <h2>Download your shows to watch offline.</h2>
                                        <p>Save your favourites easily and always have something to watch.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
   </>
  )
}

export default Part3