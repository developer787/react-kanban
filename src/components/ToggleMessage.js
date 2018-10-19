import React from 'react'
import { connect } from 'react-redux'
import { toggleMessage } from './actions'

const mapState = state=>({
	message: state.messages.default})

const mapDispatch = dispatch=>({
	toggle: (message)=>dispatch(toggleMessage(message))
})

class ToggleMessage extends React.Component{
	constructor(props){
		super(props)
		this.clickToggle = this.clickToggle.bind(this)

	}
	clickToggle(){
		const { toggle } = this.props
		const { message } = this.props
		message === "Hello"
		  ? toggle("Good BYE")
		  : toggle("Hello")

	}
	render(){
		return(
			<button onClick={this.clickToggle}>
			{"Click to Toggle"}
			</button>

		)

	}
}

export default connect(mapState, mapDispatch)(ToggleMessage)
