import React from 'react';
import {
  ActivityIndicator,
  ActivityIndicatorProps,
  View,
  ViewStyle,
  StyleSheet,
} from 'react-native';
import LottieView from 'lottie-react-native';
import {Colors} from '../Colors';
import {SpinnerStyle} from '../types/appEnums';

const SpinnerAnim = require('../../assets/lottie/SpinnerGray.json');

interface SpinnerProps extends ActivityIndicatorProps {
  containerViewStyle?: ViewStyle;
  renderStyle?: SpinnerStyle;
}

export const Spinner = ({
  size = 'large',
  containerViewStyle,
  renderStyle = SpinnerStyle.Basic,
  ...rest
}: SpinnerProps) => {
  switch (renderStyle) {
    case SpinnerStyle.Basic: {
      return (
        <View style={{...styles.container, ...containerViewStyle}}>
          <ActivityIndicator size={size} color={Colors.Secondary} {...rest} />
        </View>
      );
    }
    case SpinnerStyle.Fluid: {
      return (
        <View
          style={{
            ...containerViewStyle,
            ...styles.containerFluid,
          }}>
          <LottieView
            source={SpinnerAnim}
            autoPlay
            loop
            style={styles.spinnerSize}
            colorFilters={[{keypath: '预合成 1', color: Colors.Primary}]}
          />
        </View>
      );
    }
    default: {
      return (
        <View style={{...styles.container, ...containerViewStyle}}>
          <ActivityIndicator size={size} color={Colors.Secondary} {...rest} />
        </View>
      );
    }
  }
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
  },
  containerFluid: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  spinnerSize: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
