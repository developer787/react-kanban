import React, { Component } from 'react';
import styled from 'styled-components';
import MessageBanner from './components/Message'
import ToggleMessage from './components/ToggleMessage'
import CardA from './components/CardA'

class App extends Component {
  render() {
    return (
      <AppContainer>
	    <MessageBanner />
	    <ToggleMessage />
	    <CardA />
      </AppContainer>
    );
  }
}

export default App;

const AppContainer = styled.div`
  width: 100%;
  background: #456;
  border: none;
  display: flex;
  flex-direction: column;
  `
