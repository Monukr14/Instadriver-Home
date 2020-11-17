import React, { Component } from 'react'
import './Team.css'
export default class Team extends Component {
    render() {
        return (
            <div className="bg-light">
                <div className="container-fluid">
                    <div className="row content-center">
                        <div className="col-lg-12">
                            <h2 className="section-heading box-head-content">
                            Driver Profiles posted on Instadriver
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="row m-0">
                    <div className="col-lg-12 content-center">
                        <div className="box-team">
                            <div className="col-sm-3 content-center">
                                <div className="box1">
                                    <h2 className="section-heading boxstyle1 mb-0">
                                        109
                                    </h2>
                                    <h4 className="section-heading boxtext1">
                                    Free Driver Profiles 
                                    </h4>
                                </div>
                            </div>
                            <div className="col-sm-3 content-center">
                                <div className="box2">
                                <h2 className="section-heading boxstyle2 mb-0">
                                        7
                                    </h2>
                                    <h4 className="section-heading boxtext2">
                                    Verified Driver Profiles 
                                    </h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
