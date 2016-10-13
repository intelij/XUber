'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

var blue = '#2baaed';

module.exports = StyleSheet.create({
  //main view container
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'ghostwhite'
  },

  // logo
  logo: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtLogo: {
    color: blue,
    fontSize: 40,
    fontWeight: '200'
  },

  //image
  imageContainer: {
    flex: 7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {

  },

  //input area
  inputContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
  },
  inputLabel: {
    color: 'grey',
    fontWeight: '600',
    paddingVertical: 5,

  },
  input: {
    backgroundColor: 'white',
    borderRadius: 3,
    height: 40,
    borderColor: 'gray',
    borderWidth: .4,
  },

  //button
  lalala: {
    flexDirection: 'column',
    flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  buttonContainerLabel: {
    color: 'grey',
    fontWeight: '600',
    paddingVertical: 5,
  },
  button: {
    alignSelf: 'center',
    alignItems: 'center',
    flex: 1,
    flexDirection: 'row',
    height: 50,
    borderRadius: 3,
    backgroundColor: blue,
    padding: 8,
    margin: 4,
    justifyContent: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  buttontext: {
    color: 'white',
    fontSize: 15,
    fontWeight: '500'
  },

});
