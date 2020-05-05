import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 0.1,
  },

  header: {
    flexDirection: "row",
    backgroundColor: "#E60014",
    alignContent: "flex-start",
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10,
    height: 40
  },

  button: {
    flexDirection: 'column',
    marginTop: 8,
    borderRadius: 4,
    width: '200%',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#e60014',
  },

  h4Regular: {
    fontSize: 17.329,
    lineHeight: 20.7948,
  },

  buttonText: {
    color: '#ffffff',
  },

  textInput: {
    borderRadius: 4,
    paddingLeft: 8,
    backgroundColor: '#f0f0f0',
    height: 50,
    width: '100%',
    color: '#999999',
    borderWidth: 1
  },
})
