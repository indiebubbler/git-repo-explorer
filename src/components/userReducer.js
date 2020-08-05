obsolete
/*
import * as actions from '../actions/actionTypes'
import axios from 'axios'

const initialState = {
    searchTerm: '',
    users: [],
    errorMsg: '',
    isLoading: false
}

const fetchUsersRequest = (searchTerm) => {
    return {
        type: actions.FETCH_USERS_REQUEST,
        payload: searchTerm
    }
}

const fetchUsersSuccess = users => {
    return {
        type: actions.FETCH_USERS_SUCCESS,
        payload: users,
    }
}

const fetchUsersFailure = errorMsg => {
    return {
        type: actions.FETCH_USERS_FAILURE,
        payload: errorMsg
    }
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.FETCH_USERS_REQUEST:
            return { ...state, isLoading: true, searchTerm: action.payload }
        case actions.FETCH_USERS_SUCCESS:
            return { ...state, isLoading: false, users: action.payload, errorMsg: '' }
        case actions.FETCH_USERS_FAILURE:
            return { ...state, isLoading: false, errorMsg: action.payload, users: [] }
        default:
            return state;
    }
}


const fetchUsers = (text) => {
    debugger
    return function(dispatch) {
        dispatch(fetchUsersRequest(text))
        axios.get(`https://api.github.com/search/users?q=${text}&per_page=5`).then(response => {
            // response.data
            const  userList = response.data.items.map(user => { return { login: user.login, reposUrl: user.repos_url, loginId: user.id } })

            dispatch(fetchUsersSuccess(userList))
            
        }).catch(error => {
            // error.message
        })

    }
}

export default userReducer

*/