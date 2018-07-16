import React, { Component } from 'react'

import './Mainbody.css'

export default class Mainbody extends Component {
    render() {
        return (
            <div className="Mainbody jumbotron" id="our_jumbo">
                <div className="Mainbody container">
                    <h1 className="Mainbody" id="h1">Hungry, but too busy?</h1>
                    <p className="Mainbody" id="hText">Have someone get your food for you!</p>
                    <p><a className="Mainbody btn btn-primary btn-lg" href="" id="OrderNowJumbo" role="button">Order Now!</a></p><br /><br /><br /><br />
                    <p className="Mainbody" id="About_P">About Us</p>
                    <p className="Mainbody" id="About_Text">munched is a community delivery service for students by students. Our mission is to create a service that allows students access to food from different restaurants across campus without leaving their dorm.</p>
                </div>
            </div>
        )
    }
}