import React, {FC, PropsWithChildren} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {Colors} from '../Colors';
import {getFont} from '../Fonts';

interface TextProps extends RNTextProps {
  children: any;
  fontFamily?: 'NWSB' | 'NWB' | 'NL' | 'NR' | 'NSB' | 'NB' | 'NEB' | 'NBL';
  size?: number;
  color?: string;
  formatted?: boolean;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  formatted = false,
  fontFamily = 'NB',
  size = 14,
  color = Colors.Black,
  style,
  ...rest
}) => {
  if (children == null || children === '') {
    return null;
  }

  const renderChildren = () => {
    if (!formatted) {
      return children;
    }
    if (typeof children === 'number') {
      return `Rs. ${children.toLocaleString('en')}`;
    } else {
      return children;
    }
  };

  return (
    <RNText
      style={[
        {
          fontFamily: getFont(fontFamily),
          fontSize: size,
          lineHeight: size * 0.1,
          color: color,
        },
        style,
      ]}
      {...rest}>
      {renderChildren()}
    </RNText>
  );
};
