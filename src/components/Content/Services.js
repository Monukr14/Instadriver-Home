import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import WaveImage from '../../Images/oceanwaves.png'
import Employers from './Employers'
import Drivers from './Drivers'
export default class Services extends Component {
    state = {
        toggle1:true,
        toggle2:false
    }
    handleEmployerToggle = () =>{
        this.setState({
            toggle1:true,
            toggle2:false
        })
    }

    handleDriverToggle = () =>{
        this.setState({
            toggle1: false,
            toggle2:true
        })
        console.log("toggle2")
    }
    render() {
        return (
            <div className="services">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 content-center">
                        <h2>How it works ?</h2>
                        <img src={WaveImage} />
                        <br />
                        <br />
                        <div className="service-tabs">
                            <div className="tabs-style">
                                <button onClick={this.handleEmployerToggle} className={this.state.toggle1 ? "btn-a-color" :""}>For Employer</button>
                                <button onClick={this.handleDriverToggle} className={this.state.toggle2 ? "btn-a-color" :""}>For Drivers</button>
                            </div>
                        </div>
                        <div className="services-details">
                            {this.state.toggle1 ? <Employers /> : ""}
                            {this.state.toggle2 ? <Drivers /> : ""}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
