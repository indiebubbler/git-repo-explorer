import React from 'react'
import { useSelector } from 'react-redux'
import { RepoList } from './RepoList'
import Label from './Label';

export const UserList = props => {
    const users = useSelector(state => state.users);
    return (
        <>
            <Label show={users.isLoading}>Loading...</Label>
            <Label show={users.fetchSuccess && users.users.length === 0}>There are no users</Label>

            {users.users.length > 0 && !users.isLoading  ?
                <div className='UsersContainer'>
                    <Label>Showing users for "{users.searchTerm}"</Label>
                    {users.users.map(user => { return <RepoList user={user} /> })}
                </div>
                : null}
        </>
    )
}

export default UserList;