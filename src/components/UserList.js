import React from 'react'
import { useSelector } from 'react-redux'
import { RepoList } from './RepoList'
import { Alert } from 'react-bootstrap'
import Label from './Label';

export const UserList = props => {
    const users = useSelector(state => state.users);
    return (
        <>
            <Label show={users.isLoading}>Loading...</Label>
            <Label show={users.fetchSuccess && users.users.length === 0}>There are no users matching your criteria</Label>



            {users.users.length > 0 && !users.isLoading ?
                <div className='UsersContainer'>
                    <Label>Showing users for "{users.searchTerm}"</Label>
                    {users.users.map(user => { return <RepoList key={user.loginId} user={user} /> })}
                </div>
                : null}
            <br />
            <Alert variant='danger' hidden={users.errorMsg.length === 0}>Unable to load data: {users.errorMsg.message}</Alert>
        </>
    )
}

export default UserList;