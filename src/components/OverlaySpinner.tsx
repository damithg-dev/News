import React, {useMemo} from 'react';
import {BlurView} from '@react-native-community/blur';
import {View, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';
const Spinner = require('../../assets/lottie/SpinnerGray.json');

import {Colors} from '../Colors';

export const OverlaySpinner = () =>
  useMemo(() => {
    return (
      <>
        <BlurView
          blurType="light"
          blurAmount={5}
          reducedTransparencyFallbackColor={Colors.White}
          style={styles.blur}
        />
        <View style={styles.container}>
          <View style={styles.spinnerContainer}>
            <LottieView
              source={Spinner}
              autoPlay
              loop
              style={styles.spinnerSize}
              colorFilters={[{keypath: '预合成 1', color: Colors.Primary}]}
            />
          </View>
        </View>
      </>
    );
  }, []);

const styles = StyleSheet.create({
  blur: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  spinnerContainer: {
    paddingVertical: 18,
    alignSelf: 'center',
  },
  spinnerSize: {
    width: 100,
    height: 100,
    resizeMode: 'cover',
  },
});
