import React, { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux'
import { InputGroup, FormControl, Button, Container } from 'react-bootstrap'
import { fetchUsers } from '../actions/userActions'
import UserList from './UserList';


export const GitExplorer = props => {
    const dispatch = useDispatch();
    const searchInputField = useRef();

    // after component gets mounted, set the focus on searchBox
    useEffect(() => {
        searchInputField.current.focus()
    });

    const onKeyUp = (e) => {
        // send search phrase on ENTER key press
        if (e.charCode === 13) {
            onSearchBtn();
        }
    }

    const onSearchBtn = () => {
        const text = searchInputField.current.value.trim()
        if (text && text.length > 0) {
            dispatch(fetchUsers(text))
        }
    }

    return (
        <Container  className='GitExplorer'>
            <h3 style={{paddingBottom: '1rem'}}>GitHub Repositories Explorer</h3>
            <InputGroup size="sm" className="mb-3">
                <FormControl ref={searchInputField} onKeyPress={onKeyUp} placeholder="Enter username" />
            </InputGroup>
            <Button onClick={onSearchBtn} block>
                Search
            </Button>
            <UserList/>
        </Container>
    );
}

export default GitExplorer