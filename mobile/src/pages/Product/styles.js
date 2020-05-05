import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight + 0.1,
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E60014',
    height: 50,
    marginBottom: 10,
  },

  backgroundGrey: {
      backgroundColor:'gray'
  },

  backgroundWhite: {
      backgroundColor:'white'
  },
})
