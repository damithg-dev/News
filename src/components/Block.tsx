import React, {FC, PropsWithChildren} from 'react';
import {View, StyleProp, TextStyle, ViewStyle} from 'react-native';
import {Text} from './Text';
import {Pressable, PressableProps} from './Pressable';
import {ComponentStyles} from './Styles';

interface BlockProps extends PressableProps {
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  margin?: boolean;
  textStyle?: StyleProp<TextStyle>;
  buttonStyle?: StyleProp<ViewStyle>;
  onPress?: () => void;
}

export const Block: FC<PropsWithChildren<BlockProps>> = ({
  margin,
  iconLeft,
  iconRight,
  textStyle = ComponentStyles.buttonText,
  buttonStyle,
  children,
  disabled,
  ...rest
}) => (
  <Pressable
    style={[
      ComponentStyles.buttonRoot,
      margin && ComponentStyles.buttonMarginLeft,
      {opacity: disabled ? 0.3 : 1},
    ]}
    {...rest}>
    <View style={[ComponentStyles.button, buttonStyle]}>
      {iconLeft}
      {typeof children === 'string' ? (
        <Text
          style={[
            iconLeft != null && ComponentStyles.buttonIconLeft,
            iconRight != null && ComponentStyles.buttonIconLeft,
            textStyle,
          ]}>
          {children}
        </Text>
      ) : (
        children
      )}
      {iconRight}
    </View>
  </Pressable>
);
