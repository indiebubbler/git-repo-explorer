import { createStore, combineReducers, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import userReducer from '../actions/userActions'
import repoReducer from '../actions/repoActions'
import { composeWithDevTools } from 'redux-devtools-extension'


// const allReducers = combineReducers({users: userReducer})
const allReducers = combineReducers({users: userReducer, repos: repoReducer})
const store = createStore(allReducers, compose(applyMiddleware(thunk), composeWithDevTools()))

export default store