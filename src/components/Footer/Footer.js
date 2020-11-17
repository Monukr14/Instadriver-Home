import React, { Component } from 'react'
import './Footer.css'
import FooterLogo from '../../Images/footerlogo.svg'
import FacebookLogo from '../../Images/facebook.svg'
export default class Footer extends Component {
    render() {
        return (
            <div className="footer" style={{paddingTop:"58px"}}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12 content-center">
                            <img src={FooterLogo} />
                        </div>
                        <div className="col-md-3 col-sm-6 text-left spacing">
                            <h4 className="service-heading text-left">Useful links</h4>
                            <p className="links mb-0">About InstaDriver</p>
                            <p className="links mb-0">Verified Search (For Employers & Drivers)</p>
                            <p className="links mb-0">Top Ad Feature (For Drivers)</p>
                        </div>
                        <div className="col-md-2 col-sm-6 text-left spacing">
                        <h4 className="service-heading text-left">Useful links</h4>
                            <p className="links mb-0">Driver Sign In</p>
                            <p className="links mb-0">Driver Sign Up Employer Sign in</p>
                            <p className="links mb-0">Employer Sign up</p>
                        </div>
                        <div className="col-md-2 col-sm-6 text-left spacing">
                        <h4 className="service-heading text-left">Useful links</h4>
                            <p className="links mb-0">FAQs</p>
                            <p className="links mb-0">Contact Us</p>
                            <p className="links mb-0">Terms & Conditions</p>
                        </div>
                        <div className="col-md-3 col-sm-6 text-left spacing">
                        <h4 className="service-heading text-left">Social Media</h4>
                            <ul className="pl-0">
                                <li className="list-inline-item">
                                    <img src={FacebookLogo} />
                                </li>
                                <li className="list-inline-item">
                                    <img src={FacebookLogo} />
                                </li>
                                <li className="list-inline-item">
                                    <img src={FacebookLogo} />
                                </li>
                                <li className="list-inline-item">
                                    <img src={FacebookLogo} />
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-2 col-sm-6 text-left spacing">
                        <h4 className="service-heading text-left">Contact Info</h4>
                            <p className="links mb-0">saysomething@instadriver.co</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
