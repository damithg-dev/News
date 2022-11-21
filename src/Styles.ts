import {StyleSheet, ViewStyle, StyleProp} from 'react-native';

import {Colors} from './Colors';

const shadowStyle: StyleProp<ViewStyle> = {
  shadowColor: Colors.Black,
  shadowOffset: {
    width: 0,
    height: 6,
  },
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 5,
  zIndex: 10,
};

export const Styles = StyleSheet.create({
  shadowDefault: {
    ...shadowStyle,
  },

  shadowCenter: {
    ...shadowStyle,
    shadowOffset: {
      width: 0,
      height: 0,
    },
  },

  card: {
    padding: 16,
    borderRadius: 20,
    backgroundColor: Colors.White,
    ...shadowStyle,
  },
});
