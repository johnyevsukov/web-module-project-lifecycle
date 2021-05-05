import React from 'react'
import styled from 'styled-components'

const UserCard = styled.div`
padding: 2%;
border-radius: 7px;
display: flex;
flex-direction: column;
justify-content: center;
margin: auto;
margin-top: 2%;
margin-bottom: 2%;
border: 3px lightblue outset;
background-color: lightblue;
width: 40%;
h2 {
    font-family: Marker Felt, fantasy;
}
img {
    margin: auto;
    border-radius: 7px;
    width: 30%;
}
a {
    display: felx;
    justify-content: center;
    align-items: center;
    border: 2px green outset;
    border-radius: 7px;
    width: 50%;
    height: 3vh;
    margin: auto;
    text-decoration: none;
    background-color: green;
    color: black;
    &:hover {
        background-color: teal;
        transform: scale(1.1);
        transition: all .2s ease-in-out;
        box-shadow: 0 2px 4px black;
      }
      transition: all .2s ease-in-out;
    }
  
    transition: all .5s ease-in-out;
}
`

class User extends React.Component {

    render() {
        const {user} = this.props
        return (
            <UserCard>
                <img src={user.avatar_url} alt={'alt'}/>
                <h2>{user.login}</h2>
                {user.following && <p>Following: {user.following}</p>}
                {user.following && <p>Followers: {user.followers}</p>}
                {user.location && <p>Location: {user.location}</p>}
                {user.bio && <p>Bio: {user.bio ? user.bio : 'no bio'}</p>}
                <a href={user.html_url}>{user.login}'s GitHub</a>
            </UserCard>
        )
    }
}

export default User;