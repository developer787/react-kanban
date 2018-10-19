import React from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'


const mapState = state=>({
	items: state.cardA.items
})

class CardA extends React.Component{
	addItem(){
	  alert("Item added")
	}
	render(){
		const { items } = this.props
		return(
			<CardContainer>
			<StyledCardA>
			&lt;{"Card A"}&gt;
			</StyledCardA>
			<StyledButton
			  onClick={this.addItem}>
			{"\u2795"}
			</StyledButton>
			</CardContainer>

		)

	}
}

export default connect(mapState)(CardA)

const CardContainer = styled.div`
  padding: 0.5em;
  width: 100%;
    margin: 0.5em;
  background: #fff;
  border: none;
  border-radius: 3px;
  `
const StyledCardA = styled.div`
  padding: 0.5em;
  width: 90%;
    margin: 0.5em;
  color: ${props => props.inputColor || "palevioletred"};
  background: papayawhip;
  border: none;
  border-radius: 3px;
  `
const StyledButton = styled.button`
  background: #3CB371;
  color: #fff;
  border: none;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  `
