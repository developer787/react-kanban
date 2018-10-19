import { combineReducers } from 'redux'
import messages from './messages'
import cardA from './cardA'
const rootReducer = combineReducers({
	messages,
	cardA
})
export default rootReducer
