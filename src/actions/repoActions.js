import * as actions from './actionTypes'
import axios from 'axios'

const initialState = {}

const fetchReposRequest = loginId => {
    return {
        type: actions.FETCH_REPOS_REQUEST,
        payload: loginId
    }
}

const clearReposRequest = () => {
    return {
        type: actions.CLEAR_REPOS
    }
}

const fetchReposSuccess = repos => {
    return {
        type: actions.FETCH_REPOS_SUCCESS,
        payload: repos
    }
}

const fetchReposFailure = errorMsg => {
    return {
        type: actions.FETCH_REPOS_FAILURE,
        payload: errorMsg
    }
}

const repoReducer = (state = initialState, action) => {
    let newState;
    switch (action.type) {
        case actions.FETCH_REPOS_REQUEST:
            newState = { ...state }
            newState[action.payload] = {
                isLoading: true,
                fetched: false,
                items: []
            }
            return newState;
        case actions.FETCH_REPOS_SUCCESS:
            newState = { ...state }
            newState[action.payload.loginId] = {
                isLoading: false,
                fetched: true,
                items: action.payload.repos
            }
            return newState;
        case actions.FETCH_REPOS_FAILURE:
            return { ...state }
        case actions.CLEAR_REPOS:
            return { }
        default:
            return state;
    }
}

export default repoReducer;

export const clearRepos = () => {
    return function (dispatch) {
        dispatch(clearReposRequest())
    }
}
export const fetchRepos = (loginReposTuple) => {
    return function (dispatch) {
        const loginId = loginReposTuple.loginId;
        const reposUrl = loginReposTuple.reposUrl;

        dispatch(fetchReposRequest(loginId))

        axios.get(reposUrl).then(response => {
            const repos = response.data.map(repo => { return { name: repo.name, stargazersCount: repo.stargazers_count, description: repo.description } })
            const o = {
                loginId: loginId,
                repos: repos
            }
            dispatch(fetchReposSuccess(o));
        }).catch(error => {
            dispatch(fetchReposFailure(error))
        })
    }
}