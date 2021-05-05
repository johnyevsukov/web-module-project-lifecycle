import React from 'react';
import axios from 'axios';
import User from './components/User'
import Users from './components/Users'
import styled from 'styled-components'
import './App.css';

const StyledApp = styled.div `
  height: 100vh;
  `


class App extends React.Component {
  state = {
    user: {},
    followers: []
  }

  componentDidMount() {
    axios.get('https://api.github.com/users/johnyevsukov')
        .then(res=> {
            console.log(res.data)
            this.setState({
                user: res.data
            });
        })
        .catch(err => {
            console.log(err);
        });

    axios.get('https://api.github.com/users/johnyevsukov/followers')
        .then(res=> {
          this.setState({
            followers: res.data
          })
        })
        .catch(err => {
            console.log(err);
        });
}

  render() {
    return (
      <StyledApp className="App">
        <h1>My GitHub:</h1>
        <User user={this.state.user}/>
        <h2>My Followers:</h2>
        <Users users={this.state.followers}/>
      </StyledApp>
    );
  }
}

export default App;
