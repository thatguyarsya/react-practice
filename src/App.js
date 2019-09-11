import React, { Component } from 'react';
import ButtonStyle from './components/comp.js'
import Greet from './components/text.js'
import "./App.css";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
      show: true
    };
  }

  IncrementItem = () => {
    this.setState({ clicks: this.state.clicks + 1 });
  }
  DecreaseItem = () => {
    this.setState({ clicks: this.state.clicks - 1 });
  }
  ToggleClick = () => {
    this.setState({ show: !this.state.show });
  }

  render() {
    return (
      <div class="App">
        <button onClick={this.IncrementItem} style={ButtonStyle}>Click to increase by 1</button>
        <button onClick={this.DecreaseItem} style={ButtonStyle}>Click to decrease by 1</button>
        <button onClick={this.ToggleClick} style={ButtonStyle}>
          { this.state.show ? 'Hide number' : 'Show number' }
        </button >
        { this.state.show ? <h2>{ this.state.clicks }</h2> : '' }
        <div class="App-logo">
      <Greet name = 'bob' />
      </div>
      </div>
    );
  }
}



export default App;