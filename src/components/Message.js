import React from 'react'
import { connect } from 'react-redux'

const mapState = state=>({
	message: state.messages.default
})

class Message extends React.Component{
	render(){
		const { message } = this.props
		return(
			<h1>
			{"TEST "+message}
			</h1>

		)

	}
}

export default connect(mapState)(Message)
