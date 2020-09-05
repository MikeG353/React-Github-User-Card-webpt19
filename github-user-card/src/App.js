import React from 'react';

//component imports
import UserCard from './Components/UserCard'
import SearchForm from './Components/SeachForm'

import axios from 'axios'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "MikeG353",
      userdata: [],
      followdata: []
    }
  }

  changeUsername = (username) => {
    this.setState({
      username: username
    })
    console.log(this.state.username)

  }
  getUserData = (username) => {
    axios.get(`https://api.github.com/users/${username}`)
    .then(res => {
      this.setState({
        userdata: res.data
      })
      console.log("state after axios call: ", this.state)
    })
    .catch(err => {
      console.log(err)
    })
    axios.get(`https://api.github.com/users/${username}/followers`)
      .then(res => {
        console.log("followers: ", res.data)
        this.setState({
          followdata: res.data
        })
        console.log("state after follower call: ", this.state)
    })

  }
  componentDidMount() {
    console.log("componentDidMount")
    // fetch("https://api.github.com/users/MikeG353")
    //  .then(res => res.json())
    //  .then(console.log(json))
    this.getUserData(this.state.username)
  }
  componentDidUpdate(prevProps, prevState) {
    console.log(
      "CDU runs: prevProps, prevState: ",
      prevProps,
      prevState,
      this.state.username
    );

    if (prevState.username !== this.state.username) {
      this.getUserData(this.state.username)
    }
  }
  

  render() {
    console.log("render runs")
    return (
      <div className="App">
        <div className="header">
          <h1>Github User Card</h1>
          <h2>by: Michael Gregory</h2>
          <SearchForm changeUsername={this.changeUsername} username={this.state.username}/>
        
          <UserCard userdata={this.state.userdata} followdata={this.state.followdata}/>
        </div>
      </div>
    )
  }
}

export default App;
