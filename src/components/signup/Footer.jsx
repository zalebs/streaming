import React from 'react'
import {BsGlobe2} from 'react-icons/bs';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
    <div className="footer-part">
        <div className="container">
            <div className="footer-inner">
                <div className="question-part">
                    <span>Questions? Call</span> <a href="#">000-800-919-0000</a>
                </div>
                <div className="footer-links">
                    <div className="row">
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-link-ul">
                                <ul>
                                    <li><a href="#">FAQ</a></li>
                                    <li><a href="#">Accounts</a></li>
                                    <li><a href="#">Jobs</a></li>
                                    <li><a href="#">Privacy</a></li>
                                    <li><a href="#">Contact Us</a></li>
                                    <li><a href="#">Only on Flixxit</a></li>
                                    <li><Link to="/about#top">About Us</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-link-ul">
                                <ul>
                                    <li><a href="#">Gift Card Terms</a></li>
                                    <li><a href="#">Media Centre</a></li>
                                    <li><a href="#">Ways to Watch</a></li>
                                    <li><a href="#">Cookie Preferences</a></li>
                                    <li><a href="#">Speed Test</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-md-4 col-sm-4 col-xs-12">
                            <div className="footer-link-ul">
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
                {/* <div className="footer-language">
                    <div className="dropdown">
                        <button className="btn btn-secondary dropdown-toggle fix" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                           
                           < BsGlobe2 className="fix"/>
                             English
                        </button>
                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                            <li><a className="dropdown-item" href="#">English</a></li>
                            <li><a className="dropdown-item" href="#">German</a></li>
                            <li><a className="dropdown-item" href="#">French</a></li>
                        </ul>
                    </div>
                </div> */}
                <div className="copy-right">
                    <span>Flixxit UK</span>
                </div>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer