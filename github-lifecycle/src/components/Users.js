import React from 'react'
import User from './User'


class Users extends React.Component {

    render() {
        const {users} = this.props
        return (
                <div>
                    {
                        users.map(user => {
                            return <User key={user.id} user={user}/>
                        })
                    }
                </div>
        )
    }
}

export default Users;