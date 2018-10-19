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
			&lt;{"Backlog"}&gt;
			</StyledCardA>
			<StoryInput />
			<StyledButton
			onClick={this.addItem}>
			{"+"}
			</StyledButton>
			<StyledCancel
			onClick={this.addItem}>
			{"x"}
			</StyledCancel>
			<StyledSubmit
			placeholder={"add user story here..."}
			onClick={this.addItem}>
			{"Save"}
			</StyledSubmit>
			</CardContainer>

		)

	}
}

export default connect(mapState)(CardA)

const StoryInput = styled.input`
    height: 34px;
      background-color: #ddd;
	    padding-left: 10px;
	      font: 400 14px 'Source Sans Pro', 'sans-serif';
		::-webkit-input-placeholder {
		    color: red;
		      }
		::placeholder {
			font: 400 14px 'Source Sans Pro', 'sans-serif';
			  }
			  `
const CardContainer = styled.div`
  width: 90%;
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-self: center;
  background: #fff;
  border: none;
  `
const StyledCardA = styled.div`
text-align: center;
padding:6px;
background: papayawhip;
font-size: 6vmin;
border: none;
border-radius: 3px;
`
const StyledButton = styled.button`
background: #3CB371;
color: #fff;
border: none;
width: 30px;
height: 30px;
line-height: 30px;
text-align: center;
font-size: 6vmin;
font-weight: 900;
border-radius: 50%;
`

const StyledSubmit = styled.button`
background: #3CB371;
color: #fff;
border: none;
height: 30px;
line-height: 30px;
text-align: center;
font-size: 6vmin;
font-weight: 900;
border-radius: 3px;
`
const StyledCancel = styled.button`
background: #B33C52;
color: #fff;
border: none;
width: 30px;
height: 30px;
line-height: 26px;
text-align: center;
font-size: 6vmin;
font-weight: 900;
border-radius: 50%;
`
