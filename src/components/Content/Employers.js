import React, { Component } from 'react'
import SearchDriver from '../../Images/searchdriver.svg'
import CallDriver from '../../Images/calldriver.svg'
import HireDriver from '../../Images/hiredriver.svg'
export default class Employers extends Component {
    state={
        empServices:[
            {head:"Search Drivers",headDetails:"Visit Instadriver platform, select the driver category you want, choose the location of the driver and you can either select all drivers or verified drivers and press search button.",img:SearchDriver},
            {head:"Call Driver",headDetails:"After hitting search button, you will see summarised profiles of the drivers with their contacts. Click view profile, to read the full profile. Access the contact number and call the driver.",img:CallDriver},
            {head:"Hire Drivers",headDetails:"On the call, discuss the job opportunity, terms and conditions, or arrange a meetup to discuss further and if you are both a perfect fit, proceed to hire that driver. As simple as that.",img:HireDriver}
        ]
    }
    render() {
        return (
            <div className="row content-center">
                 {this.state.empServices.map((data) => {
                return(
                    <div className="col-md-4">
                    <br />
                    <br />
                    <br />
                    <img src={data.img} />
                    <h4 className="service-heading"> {data.head} </h4>
                    <p className="text-muted"> {data.headDetails} </p>
                </div>
                )
            })}
            </div>
           
        )
    }
}
