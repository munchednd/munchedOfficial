import React, { Component } from 'react'

export default class Mainbody extends Component {
    render() {
        return (
            <div className="jumbotron" id="our_jumbo">
                <div className="container">
                    <h1 id="h1">Hungry, but too busy?</h1>
                    <p id="hText">Have someone get your food for you!</p>
                    <p><a className="btn btn-primary btn-lg" href="order.html" id="OrderNowJumbo" role="button">Order Now!</a></p><br /><br /><br /><br />
                    <p id="About_P">About Us</p>
                    <p id="About_Text">munched is a community delivery service for students by students. Our mission is to create a service that allows students access to food from different restaurants across campus without leaving their dorm.</p>
                </div>
            </div>
        )
    }
}