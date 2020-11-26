import { combineReducers } from 'redux'
import { listMailReducers } from './listMail'
const rootReducer = combineReducers({
    listMail: listMailReducers,
})
export default rootReducer;