import React, { Component } from 'react'
import './Contact.css'
import Email from '../../Images/message.svg'
export default class Contact extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                <div className="col-lg-12 c-details">
                    <div className="container">
                        <div className="f-right">
                            <img src={Email} />
                            <span className="mail-to">saysomething@instadriver.co</span >
                        </div>
                    </div>
                </div>
                </div>
                
            </div>
        )
    }
}
