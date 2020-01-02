import {combineReducers} from 'redux'
import nameReducer from './nameReducer.js'

const appReducer = combineReducers({
    nameReducer,
})
export default appReducer