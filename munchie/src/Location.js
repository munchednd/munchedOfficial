import React, { Component } from 'react'
import './Location.css'

class Location extends Component {
  constructor(props) {
    super(props)

    this.state = {
      dorms: [['Alumni', 'Carroll', 'Dillon', 'Duncan', 'Dunne', 'Fisher',
        'Keenan', 'Keough'],
      ['Knott', 'Morrissey', "O'Neill Family", 'Siegfried',
        'Sorin College', "St. Edward's", 'Stanford', 'Zahm'],
      ['Badin', 'Breen-Phillips', 'Cavanaugh', 'Flaherty', 'Farley', 'Howard', 'Lewis'],
      ['Lyons', 'McGlinn', 'Pasquerilla East', 'Pasquerilla West', 'Ryan', 'Walsh', 'Welsh Family']],
      selectedDorm: null,
      roomNum: null
    }
  }

  setDorm = (ev) => {
    this.setState({ selectedDorm: ev.target.value })
  }

  setRoom = (ev) => {
    this.setState({ roomNum: ev.target.value })
  }

  render() {

    const dormMapping = this.state.dorms.map(group => (
      <div className="col-sm-12 col-md-3">
        {group.map(dorm => (
          <div>
            <input type="radio" name="dorm" value={dorm} onClick={this.setDorm} />
            <label>{dorm}</label>
          </div>
        ))}
      </div>
    ))

    return (
      <div className="jumbotron" id="jumbo">
        <form>
        <div className="container">
          <div>
            <div className="row">
              <div className="col-sm-12 col-md-12">
                <h2> Pick delivery location: </h2>
              </div>
            </div>
            <div className="row">
              {dormMapping}
            </div>
            <div class="form-group" id="room">
              <label for="exampleInputroom">Room Number</label>
              <input type="room" class="form-control" id="rn" placeholder="Room #" onChange={this.setRoom}/>
            </div>
          </div>
        </div>
        </form>
      </div>
    )
  }
}

export default Location