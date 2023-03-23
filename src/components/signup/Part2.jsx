import React from 'react'
import tv from "../../images/tv.png"

const Part2 = () => {
  return (
    <>
      <section className="image-info-part">
                    <div className="container">
                        <div className="image-info-inner">
                            <div className="row h-100 row-switch">
                                <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <div className="image-info-left">
                                        <div className="tv-wrapper">
                                            <img src={tv} alt="not"/>
                                        </div>
                                        <div className="video-wrapper">
                                            {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/ccy9AhOvxCg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe> */}
                                            <iframe width="956" height="538" src="https://www.youtube.com/embed/TbM-zWIkj_o?autoplay=1&mute=1" title="NEW MOVIE TRAILERS 2023 | 4K ULTRA HD" frameBorder="0" allow="accelerometer; autoPlay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6 col-sm-12 col-xs-12 align-self-center">
                                    <div className="image-info-right">
                                        <h2>Enjoy on your TV.</h2>
                                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
    </>
  )
}

export default Part2