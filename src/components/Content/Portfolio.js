import React, { Component } from "react";
import Employees from "../../Images/employees.svg";
import Drivers from "../../Images/drivers.svg";
import WaveImage from "../../Images/oceanwaves.png";
import WhiteWaveImage from "../../Images/ocean-waves-white.png";

export default class Portfolio extends Component {
  state = {
    empServices: [
      {
        head: "Search Drivers",
        headDetails:
          "Visit Instadriver platform, select the driver category you want, choose the location of the driver and you can either select all drivers or verified drivers and press search button.",
        img: Employees,
      },
      {
        head: "Call Driver",
        headDetails:
          "After hitting search button, you will see summarised profiles of the drivers with their contacts. Click view profile, to read the full profile. Access the contact number and call the driver.",
        img: Drivers,
      },
    ],
  };
  render() {
    return (
      <div className="portfolio">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6 content-center  padding501">
              <div className="col-lg-9" style={{ float: "right" }}>
                <img src={Employees} />
                <br />
                <br />
                <h2 className="service-heading content-center">Employers!</h2>
                <img src={WaveImage} />
                <p>
                  You don’t have to waste money posting vacancy Ads. Stop
                  posting vacancy ads on whatsapp groups and on social media.
                  Stop making desperate hires because you have few choices. Stop
                  nagging your friends to find you a driver. Get your driver
                  from Instadriver and it is free. At Instadriver, you have a
                  long list to choose a competent driver. Go to search bar,
                  select the driver category you want, choose the location of
                  the driver and press search button. Pick the driver you want.
                  It is that simple and instantaneous.
                </p>
              </div>
            </div>
            <div className="col-lg-6 content-center yellowbg">
              <div className="col-lg-9" style={{ float: "right" }}>
                <img src={Drivers} />
                <br />
                <br />
                <h2 className="service-heading content-center">Drivers!</h2>
                <img src={WhiteWaveImage} />
                <p>
                  This is a platform to get employed faster and effortlessly. It
                  is not fun staying unemployed. You don’t have to toil asking
                  your relatives, friends and acquaintances to find you a job.
                  Get a job instantly. Just post your profile on Instadriver and
                  employers will find you instantaneously. You can increase your
                  visibility and increase the odds of getting hired by using the{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
