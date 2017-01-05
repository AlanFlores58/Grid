/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
var ButtonComponent = require('./ButtonComponent');

var countWhite=25;
export default class Grid extends Component {

  constructor(props) {
    super(props);
    this.state = {
      countWhite: 25
    }
  }

  _onPressButton(color){
    console.log("hola");
    if(color === 'white')
      this.setState({
        countWhite : this.state.countWhite + 1
      });
    else {
      this.setState({
        countWhite : this.state.countWhite - 1
      });
    }
    console.log(countWhite);
  }
  render() {

    return (
      <View style={styles.container}>
        <Text>white = {this.state.countWhite}</Text>
        <Text>black = {25-this.state.countWhite}</Text>
        <View style={styles.containerRow}>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
        </View>
        <View style={styles.containerRow}>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
        </View>
        <View style={styles.containerRow}>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
        </View>
        <View style={styles.containerRow}>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
        </View>
        <View style={styles.containerRow}>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
          <ButtonComponent onPressButtonCount={this._onPressButton.bind(this)}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
  },
  containerRow: {
    flexDirection: 'row'
  },
});

AppRegistry.registerComponent('Grid', () => Grid);
