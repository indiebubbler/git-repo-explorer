import { createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './userActions'
import repoReducer from './repoActions'
// import { composeWithDevTools } from 'redux-devtools-extension'

const allReducers = combineReducers({users: userReducer, repos: repoReducer})
const store = createStore(allReducers, applyMiddleware(thunk))
// const store = createStore(allReducers, compose(applyMiddleware(thunk), composeWithDevTools()))

export default store