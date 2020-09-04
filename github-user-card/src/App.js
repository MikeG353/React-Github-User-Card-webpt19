import React from 'react';

//component imports
import UserCard from './Components/UserCard'

import axios from 'axios'
import './App.css';

class App extends React.Component {
  state = {
     userdata: []
  }

  componentDidMount() {
    // fetch("https://api.github.com/users/MikeG353")
    //  .then(res => res.json())
    //  .then(console.log(json))
    axios.get("https://api.github.com/users/MikeG353")
      .then(res => {
        this.setState({
          userdata: res.data
        })
      })
      .catch(err => {
        console.log(err)
      })
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <div className="header">
          <h1>Test</h1>
          <UserCard userdata={this.state.userdata}/>
        </div>
      </div>
    )
  }
}

export default App;
