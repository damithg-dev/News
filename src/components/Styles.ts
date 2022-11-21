import {StyleSheet} from 'react-native';
import {Colors} from '../Colors';
export const ComponentStyles = StyleSheet.create({
  input: {
    height: 50,
    paddingHorizontal: 16,
    fontSize: 16,
    color: Colors.Black,
    backgroundColor: Colors.White,
    borderRadius: 10,
    marginTop: 8,
  },
  inputContainer: {
    flex: 1,
  },
  inputBlock: {
    width: '100%',
  },
  inputText: {
    color: Colors.Black,
  },
  inputError: {
    color: Colors.Secondary.Red,
  },
  inputMaskButton: {
    padding: 5,
  },
  inputIconWrapper: {
    position: 'absolute',
    right: 16,
    height: '100%',
    justifyContent: 'center',
    padding: 5,
    marginTop: 8,
  },
  buttonRoot: {flex: 1},
  buttonMarginLeft: {marginLeft: 16},
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 16,
    borderRadius: 8,
    backgroundColor: Colors.Primary.Blue,
  },
  buttonText: {
    color: Colors.Primary.White,
    marginLeft: 8,
  },
  buttonIconRight: {
    marginLeft: 8,
  },
  buttonIconLeft: {
    marginRight: 8,
  },
});
