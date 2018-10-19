const initialState = {
	default: "Hello"
}
const messages = (state=initialState, action)=>{
	switch(action.type){
		case "TOGGLE_MESSAGE":
			return Object.assign({}, state,{ default: action.payload})
		default:
			return state
	}
}
export default messages
