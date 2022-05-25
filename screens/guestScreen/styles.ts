import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
  },
  button: {
    borderWidth: 1,
    borderRadius: 50,
    width: 30,
    height: 30,
    borderColor: 'lightgrey',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
