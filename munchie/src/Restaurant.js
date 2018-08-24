import React, { Component } from 'react'

import { ButtonToolbar, ButtonGroup, Button } from 'react-bootstrap'
import './Restaurant.css'

class Restaurant extends Component {
    constructor(props) {
        super(props)

        this.state = {
            restaurants: [
                {
                    store: 'Subway',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Subway_restaurant.svg'
                },
                {
                    store: 'Smash Burger',
                    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9c/SmashBurger_logo.jpg'
                },
                {
                    store: 'Taco Hut',
                    image: 'https://signnn.com/wp-content/uploads/2017/01/Taco-Bell-Pizza-Hut-Logo.png'
                },
                {
                    store: 'Hagerty',
                    image: 'hagerty'
                },
                {
                    store: 'Star Ginger',
                    image: 'star'
                },
                {
                    store: 'Modernn Market',
                    image: 'modern'
                }
            ]
        }
    }

    render() {
        const restList = this.state.restaurants.map(rest => (
                <button className="btn-circle">{rest.store}</button>
        ))

        return (
            <div className="flex-container">
                <button>yo</button>
            </div>
            // <ButtonGroup vertical>
            //     {restList}
            // </ButtonGroup>
        )
    }
}

export default Restaurant
{/*
                    <div className="panel panel-default">
                        <div className="panel-heading" role="tab" id="headingFive">
                            <h4 className="panel-title">
                                <a role="button" data-toggle="collapse" data-parent="#accordion" href="#Modern" aria-expanded="false" aria-controls="collapseFive">
                                    Modern Market
                                </a>
                            </h4>
                        </div>
                        <div id="Modern" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-sm-6 col-md-3">
                                        <h4> Breakfast Sandwiches and Burritos </h4>
                                        <form action="/action_page.php" method="get">
                                            <input type="radio" name="burrito" value="rocket" id="rocket"> The Rocket<br />
                                                <input type="radio" name="burrito" value="chipotle_bacon" id="chipotle_bacon"> Chipotle Bacon<br />
                                                    <input type="radio" name="burrito" value="maple" id="maple"> Maple Sausage<br />
                                                        <input type="radio" name="burrito" value="classNameic" id="classNameic"> classNameic Sandwich<br />
                                                            <input type="radio" name="burrito" value="green_chili" id="green_chili"> Green Chili Burrito<br />
                                                                <input type="radio" name="burrito" value="chili_bacon" id="chili_bacon"> Chili Bacon Burrito<br /><br />
                </form>
              </div>
                                                            <div className="col-sm-6 col-md-3">
                                                                <h4> Oatmeals </h4>
                                                                <form action="/action_page.php" method="get">
                                                                    <input type="radio" name="oatmeal" value="peanut_butter" id="peanut_butter"> Peanut Butter Banana<br />
                                                                        <input type="radio" name="oatmeal" value="basic" id="basic"> Basic Oatmeal<br />
                                                                            <input type="radio" name="oatmeal" value="super" id="super"> Super Berry<br />
                </form>
              </div>
                                                                        <div className="col-sm-6 col-md-3">
                                                                            <h4> Avacado Toast </h4>
                                                                            <form action="/action_page.php" method="get">
                                                                                <input type="radio" name="Avacado" value="modern" id="modern"> Modern Avo Toast<br />
                </form>
              </div>
                                                                            <div className="col-sm-6 col-md-3">
                                                                                <h4> Brick Oven Pizza </h4>
                                                                                <form action="/action_page.php" method="get">
                                                                                    <input type="radio" name="brick" value="m'rita" id="m'rita"> M'rita<br />
                                                                                        <input type="radio" name="brick" value="three" id="three"> Three Cheese<br />
                                                                                            <input type="radio" name="brick" value="pepe" id="pepe"> Pep&eacute;<br />
                                                                                                <input type="radio" name="brick" value="crimini" id="crimini"> Crimini Kale<br />
                                                                                                    <input type="radio" name="brick" value="bacon_corn" id="bacon_corn"> Bacon Corn<br />
                                                                                                        <input type="radio" name="brick" value="bbq" id="bbq"> BBQ<br />
                                                                                                            <input type="radio" name="brick" value="sausage" id="sausage"> Sausage Pesto<br /><br />
                </form>
              </div>
                                                                                                        <div className="col-sm-6 col-md-3">
                                                                                                            <h4> Soups </h4>
                                                                                                            <form action="/action_page.php" method="get">
                                                                                                                <input type="radio" name="soup" value="split" id="split"> Curry Split Pea<br />
                                                                                                                    <input type="radio" name="soup" value="green_chili_soup" id="green_chili_soup"> Green Chili<br />
                                                                                                                        <input type="radio" name="soup" value="tomato_basil" id="tomato_basil"> Tomato Basil<br /><br />
                </form>
              </div>
                                                                                                                    <div className="col-sm-6 col-md-3">
                                                                                                                        <h4> Salads </h4>
                                                                                                                        <form action="/action_page.php" method="get">
                                                                                                                            <input type="radio" name="salads" value="thai" id="thai"> Thai Coconut<br />
                                                                                                                                <input type="radio" name="salads" value="farmer" id="farmer"> Farmer<br />
                                                                                                                                    <input type="radio" name="salads" value="flat" id="flat"> Flatiron<br />
                                                                                                                                        <input type="radio" name="salads" value="merida" id="merida"> M&eacute;rida<br />
                                                                                                                                            <input type="radio" name="salads" value="steak_caesar" id="steak_caesar"> Steak Caesar<br /><br />
                </form>
              </div>
                                                                                                                                        <div className="col-sm-6 col-md-3">
                                                                                                                                            <h4> Toasted Sandwiches </h4>
                                                                                                                                            <form action="/action_page.php" method="get">
                                                                                                                                                <input type="radio" name="toasted_sandwiches" value="chipotle_steak" id="chipotle_steak"> Chipotle Steak<br />
                                                                                                                                                    <input type="radio" name="toasted_sandwiches" value="tender" id="tender"> Tender Belly BLT+A<br />
                                                                                                                                                        <input type="radio" name="toasted_sandwiches" value="basil_chicken" id="basil_chicken"> Basil Chicken<br />
                                                                                                                                                            <input type="radio" name="toasted_sandwiches" value="blueberry" id="blueberry"> Blueberry Pesto<br /><br />
                </form>
              </div>
            </div>
          </div>
        </div>
                                                                                                                                        </div>
                                                                                                                                        <div className="panel panel-default">
                                                                                                                                            <div className="panel-heading" role="tab" id="headingSix">
                                                                                                                                                <h4 className="panel-title">
                                                                                                                                                    <a role="button" data-toggle="collapse" data-parent="#accordion" href="#StarGinger" aria-expanded="false" aria-controls="collapseSix">
                                                                                                                                                        Star Ginger
        </a>
                                                                                                                                                </h4>
                                                                                                                                            </div>
                                                                                                                                            <div id="StarGinger" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingSix">
                                                                                                                                                <div className="panel-body">
                                                                                                                                                    <div className="row">
                                                                                                                                                        <form action="/action_page.php" method="get">
                                                                                                                                                            <div className="col-sm-6 col-md-4">
                                                                                                                                                                <h4> Asian Grill </h4>
                                                                                                                                                                <input type="radio" name="star" value="thai_bbq" id="thai_bbq"> Thai BBQ Chicken<br />
                                                                                                                                                                    <input type="radio" name="star" value="lemongrass" id="lemongrass"> Lemongrass Tofu<br />
                                                                                                                                                                        <input type="radio" name="star" value="popsticker" id="popsticker"> Popsticker<br />
                                                                                                                                                                            <input type="radio" name="star" value="egg" id="egg"> Egg Roll<br />
                                                                                                                                                                                <input type="radio" name="star" value="fresh" id="fresh"> Fresh Vegetables<br /><br />
                </div>
                                                                                                                                                                                <div className="col-sm-6 col-md-4">
                                                                                                                                                                                    <h4> Hot Wok and Stir Fry </h4>
                                                                                                                                                                                    <input type="radio" name="star" value="orange" id="orange"> Orange Chicken<br />
                                                                                                                                                                                        <input type="radio" name="star" value="thai_chicken" id="thai_chicken"> Thai Chicken Curry<br />
                                                                                                                                                                                            <input type="radio" name="star" value="special" id="special"> Wok Special of the Day<br />
                </div>
                                                                                                                                                                                            <div className="col-sm-6 col-md-4">
                                                                                                                                                                                                <h4> Pho Noodle Bowls </h4>
                                                                                                                                                                                                <input type="radio" name="star" value="tofu_veggies_v" id="tofu_veggies_v"> Vietnamese Pho with Tofu and Veggies<br />
                                                                                                                                                                                                    <input type="radio" name="star" value="chicken_v" id="chicken_v"> Vietnamese Pho with chicken<br />
                                                                                                                                                                                                        <input type="radio" name="star" value="beef_v" id="beef_v"> Vietnamese Pho with beef<br />
                                                                                                                                                                                                            <input type="radio" name="star" value="tofu_veggies_s" id="tofu_veggies_s"> Spicy Thai with Tofu and Veggies<br />
                                                                                                                                                                                                                <input type="radio" name="star" value="chicken_s" id="chicken_s"> Spicy Thai with Chicken<br />
                                                                                                                                                                                                                    <input type="radio" name="star" value="beef_s" id="beef_s"> Spicy Thai with Beef <br /><br />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
                                                                                                                                                                                            </div>

                                                                                                                                                                                            <p className='text-center'><button type='button' className='btn btn-primary' id='calc' onclick="checkingstuff()">Add To Order</button></p>
                                                                                                                                                                                            <p className='text-center'><a role='button' className='btn btn-primary' href='payment.html' target='_self'>Checkout</a></p>
  </div>
                                                                                                                                                                                   )
                                                                                                                                                                                    }
}
*/}