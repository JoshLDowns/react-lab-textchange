import React from 'react';
import TextInput from './TextInput'
import RadioButtons from './RadioButtons'
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textInput: '',
      styleOption: '',
      color: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      textInput: event.target.value
    })
  }

  handleFontChange = (event) => {
    this.setState({
      styleOption: event.target.value
    })
  }

  handleColorChange = (event) => {
    this.setState({
      color: event.target.value
    })
  }

  render() {
    console.log(this.state.textInput)
    return (
      <div id='main-container'>
        <TextInput handleChange = {this.handleChange}  textInput = {this.state.textInput}  styleOption = {this.state.styleOption}  color = {this.state.color} />
        <RadioButtons styleOption={this.state.styleOption} handleFontChange={this.handleFontChange} color={this.state.color} handleColorChange={this.handleColorChange}/>
      </div>
    );
  }
}

export default App;
