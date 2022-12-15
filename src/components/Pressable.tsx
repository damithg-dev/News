import React, {FC, PropsWithChildren} from 'react';
import {
  Pressable as NativePressable,
  ViewStyle,
  Animated,
  PressableProps as RnPressableProps,
  StyleProp,
} from 'react-native';

export interface PressableProps extends RnPressableProps {
  containerStyle?: StyleProp<ViewStyle>;
  activeOpacity?: number;
}

export const Pressable: FC<PropsWithChildren<PressableProps>> = ({
  activeOpacity,
  containerStyle,
  children,
  ...rest
}) => {
  const animated = new Animated.Value(1);

  const fadeIn = () => {
    Animated.timing(animated, {
      toValue: activeOpacity ?? 0.2,
      duration: 100,
      useNativeDriver: true,
    }).start();
  };
  const fadeOut = () => {
    Animated.timing(animated, {
      toValue: 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
  };

  return (
    <NativePressable onPressIn={fadeIn} onPressOut={fadeOut} {...rest}>
      <Animated.View
        style={[containerStyle && containerStyle, {opacity: animated}]}>
        {children}
      </Animated.View>
    </NativePressable>
  );
};
