import React, { Component } from "react";
import "./About.css";
import AboutUs from "../../Images/aboutus.svg";
import TopAdd from "../../Images/topadd.svg";
import Verify from "../../Images/verify.svg";
export default class About extends Component {
  render() {
    return (
      <div className="about">
        <div className="container">
          <div className="col-lg-12 content-center">
            <div className="row content-center">

              <div className="col-md-4">
                <br />
                <br />
                <img src={AboutUs} />
                <h4 className="service-heading">About us</h4>
                <p>
                  Learn how useful
                  <br />
                  Instadriver is to
                  <br />
                  both the employer and drivers
                </p>
              </div>

              <div className="col-md-4">
                <br />
                <br />
                <img src={Verify} />
                <h4 className="service-heading">Verified Search</h4>
                <p>
                Learn how employers can
                  <br />
cut the curve and save
                  <br />
a lot by using verified search
                </p>
              </div>

              <div className="col-md-4">
                <br />
                <br />
                <img src={TopAdd} />
                <h4 className="service-heading">Top Ad Feature</h4>
                <p>
                See how top ad feature
                  <br />
                  can increase the odds
                  <br />
                  of a driver getting hired
                </p>
              </div>


            </div>
          </div>
        </div>
      </div>
    );
  }
}
