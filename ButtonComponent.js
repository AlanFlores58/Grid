import React, { Component } from 'react';
import {  AppRegistry,
          StyleSheet,
          TouchableOpacity
       } from 'react-native';

class ButtonComponent extends Component {
  componentWillReceiveProps(){
    console.log('componentWillReceiveProps');
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white'
    }
  }
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  componentWillUpdate() {
    console.log('componentWillUpdate');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }
  onPressButton(){
    if(this.state.backgroundColor === 'white'){
      this.setState({
        backgroundColor: 'black'
      });
      this.props.onPressButtonCount('black');
    }
    else{
      this.setState({
        backgroundColor: 'white'
      });
      this.props.onPressButtonCount('white');
    }


  }
  render() {
    return (
      <TouchableOpacity style={{
        backgroundColor: this.state.backgroundColor,
        height: 30,
        width: 30,
        borderColor: 'black',
        borderStyle: 'solid',
        borderWidth: 2
      }} onPress={this.onPressButton.bind(this)}>
      </TouchableOpacity>
    );
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

const styles = StyleSheet.create({
  box: {
    backgroundColor: 'white',
    height: 30,
    width: 30,
    borderColor: 'black',
    borderStyle: 'solid',
    borderWidth: 2
  }
});


module.exports = ButtonComponent;
