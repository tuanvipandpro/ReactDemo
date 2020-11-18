import { combineReducers } from 'redux'

import LoginReducer from './LoginReducer'

const Reducer = combineReducers({
    login : LoginReducer
})

export default Reducer