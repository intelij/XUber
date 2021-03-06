import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableHighlight
} from 'react-native';
var styles = require('../styles/styles');



export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = { userName: '' };
  }

  onPassengerPress() {
    this.props.navigator.push({
      name: 'RideMap',
      passProps: {}
    });
  }

  onDriverPress() {
    this.props.navigator.push({
      name: 'DriverMap',
      passProps: {}
    });
  }

  render() {
    return (
      <View style={[styles.container]}>
        <View style={[styles.logo]}>
          <Text style={styles.txtLogo}>xuber</Text>
        </View>

        <View style={[styles.imageContainer]}>
          <Image
            style={[styles.image]}
            source={require('../images/userpic.png')}
          />
        </View>

        <View style={[styles.inputContainer]}>
          <Text style={styles.inputLabel}>Your Name?</Text>
          <TextInput
            style={[styles.inputText]}
            onChangeText={text => this.setState({ userName: text })}
            value={this.state.userName} />
        </View>
        <View style={[styles.lalala]}>
          <Text style={styles.buttonContainerLabel}>Which are you today?</Text>
          <View style={[styles.buttonContainer]}>
            <TouchableHighlight underlayColor={ 'transparent' } style={[styles.button]}
              onPress={this.onDriverPress.bind(this)}>
              <Text style={styles.buttontext}>Im a driver</Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={ 'transparent' } style={[styles.button]}
              onPress={this.onPassengerPress.bind(this)}>
              <Text style={styles.buttontext}>Im a passenger</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    );
  }
};
