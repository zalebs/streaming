import React from 'react'
import logo from "../images/finallogo.png"
import { useNavigate } from 'react-router-dom';
import Footer from './signup/Footer';
const About = () => {
    const navigate = useNavigate()
  return (
    <div class="wrapper">
    <header>
        <div class="header-part">
            <div class="container">
                <div class="header-inner">
                    <div class="logo">
                      <img src={logo}  onClick={() => navigate("/")} width= "151px"
            height= "33px" alt="" />
                       
                    </div>
                    <div class="header-btn">
                       
                        <div class="sign-btn">
                            <a href="#" class="theme-btn">Sign In</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    <main>
        <div class="main-part">
            <section class="banner-part no-border">
                <div class="overlay"></div>
                <div class="container">
                    <div class="banner-txt">
                        <div class="small-container">
                            <h1>Stories move us.They make us feel more emotion, see new perspectives, and bring us closer to each other.</h1>
                        </div>
                    </div>
                </div>
            </section>
            <section class="about-info">
                <div class="container">
                    <div class="about-info-inner text-center small-font">
                        <div class="small-container">
                            <p>At Flixxit, we want to entertain the world. Whatever your taste, and no matter where you live, we give you access to best-in-class TV series, documentaries, feature films and mobile games. Our members control what they want to watch, when they want it, in one simple subscription. We’re streaming in more than 30 languages and 190 countries, because great stories can come from anywhere and be loved everywhere. We are the world’s biggest fans of entertainment, and we’re always looking to help you find your next favorite story.</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="new-release-part">
                <div class="overlay"></div>
                <div class="container">
                    <div class="new-release-inner">
                        <h2>New on Flixxit</h2>
                        <div class="new-release-box small-font">
                            <div class="new-release-box-top">
                                <h3>Alice in Borderland</h3>
                                <p>An aimless gamer and his two friends find themselves in a parallel Tokyo, where they're forced to compete in a series of sadistic games to survive.</p>
                                <a href="#">Watch Now →</a>
                            </div>
                            <div class="new-release-box-bottom">
                                <a href="#">Are You Press? Find everything you need here →</a>
                            </div>
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

export default About