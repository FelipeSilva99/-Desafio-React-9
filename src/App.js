import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  text-align: center;
`

const Box =  styled.div`
  background-color: #282c34;
  min-height: 78vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`
const Btn = styled.button`
  width: 2rem;
  border-radius: 50%;
  cursor: pointer;
`

const Text =  styled.h1`
font-weight: lighter;
`


class App extends Component {
  state = {
    cont: 0
  }

  componentDidMount() {
    window.addEventListener("keydown", this.keydown)
  }

  keydown = (e) => {
    if (e.key === "ArrowUp") {
      this.positive()
    }
    if (e.key === "ArrowDown") {
      this.negative()
    }
  }

  positive = () => {
    if (this.state.cont < 10) {
      this.setState({
        cont: this.state.cont + 1
      })
    }
  }

  negative = () => {
    if (this.state.cont > 0) {
      this.setState({
        cont: this.state.cont - 1
      })
    }
  }

  render() {
    return (
      <Container>
        <Text> Contador </Text>
        <Box>
          <Btn onClick={this.positive}>+</Btn>
            <h2>{this.state.cont}</h2>
          <Btn onClick={this.negative}>-</Btn>
        </Box>
      </Container>
    );
  }
}

export default App;
