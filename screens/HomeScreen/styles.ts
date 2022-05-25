import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  container: {},
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: 'white',
    width: '70%',
    marginLeft: 25,
  },
  button: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 200,
    height: 40,
    marginLeft: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    borderRadius: 30,
    height: 60,
    width: Dimensions.get('screen').width - 20,
    marginHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: -120,
    zIndex: 1000,
  },
  searchbtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
