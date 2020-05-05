import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight + 0.1,
    backgroundColor: '#E3E3E3',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E60014',
    height: 50,
    marginBottom: 10,
  },

  productsContainer: {
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    height: 150,
    marginBottom: 10,
  },

  productsText: {
    flex: 1,
    padding: 10,
  },

  productImg: {
    height: 80,
    width: 80,
    marginTop: 20,
  },

  productDescription: {
    marginTop: 10,
    marginBottom: 10,
  },

  productValue: {
    marginTop: 10,
    fontWeight: 'bold',
  },
});
