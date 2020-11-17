import React, { Component } from 'react'
import SearchDriver from '../../Images/searchdriver.svg'
import CallDriver from '../../Images/calldriver.svg'
import HireDriver from '../../Images/hiredriver.svg'
export default class Drivers extends Component {
    state={
        empServices:[
            {head:"Post Profile",headDetails:"As a driver, all you need to do is to create an account with Instadriver, go to your profile page and update your profile. Once you post your profile, employers will be able to find you.",img:SearchDriver},
            {head:"Employers find you and call you",headDetails:"Employers normally come to Instadriver to find and hire drivers. Employers will be able to view your profile, and if they are impressed, they will call you and you instantly get a driving job.",img:CallDriver},
            {head:"And you get hired",headDetails:"Instadriver is the best and reliable platform for drivers to get hired. When it comes to looking for drivers, employers only know of Instadriver. Leverage Instadriver to get a good job.",img:HireDriver}
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
