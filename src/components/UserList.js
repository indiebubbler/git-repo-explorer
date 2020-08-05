import React from 'react'
import { useSelector } from 'react-redux'
import { RepoList } from './RepoList'

export const UserList = props => {
    const users = useSelector(state => state.users);

    if (users.isLoading) {
        return (<div className="infoText">Loading...</div>)
    }
    else if (users.fetchSuccess) {
        return (
            users.users.length > 0 ?
                <div className='UsersContainer'>
                    <div className='infoText'>
                        Showing users for "{users.searchTerm}"
                    </div>
                    {users.users.map(user => { return <RepoList user={user} /> })}
                </div>
                :
                <div className='infoText' >There are no users matching your criteria</div>
        )
    }
    return null
}

export default UserList;