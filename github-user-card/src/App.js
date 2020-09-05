import React from 'react';

//component imports
import UserCard from './Components/UserCard'

import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
     userdata: [],
     followdata: []
  }

  

  componentDidMount() {
    console.log("componentDidMount")

    // fetch("https://api.github.com/users/MikeG353")
    //  .then(res => res.json())
    //  .then(console.log(json))
    axios.get("https://api.github.com/users/MikeG353")
      .then(res => {
        console.log("axios res: ", res)
        this.setState({
          userdata: res.data
        })
        console.log("state after axios call: ", this.state)
      })
      .catch(err => {
        console.log(err)
    })

    axios.get("https://api.github.com/users/MikeG353/followers")
      .then(res => {
        console.log("followers: ", res.data)
        this.setState({
          followdata: res.data
        })
        console.log("state after follower call: ", this.state)
    })
  }

  render() {
    console.log("render runs")
    return (
      <div className="App">
        <div className="header">
          <h1>Github User Card</h1>
          <h2>by: Michael Gregory</h2>
          <UserCard userdata={this.state.userdata} followdata={this.state.followdata}/>
        </div>
      </div>
    )
  }
}

export default App;
