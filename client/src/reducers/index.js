import { combineReducers } from 'redux'
import { listMailReducers } from './listMailNormal'
const rootReducer = combineReducers({
    listMail: listMailReducers,
})
export default rootReducer;