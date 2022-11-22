import React, {FC, PropsWithChildren} from 'react';
import {Text as RNText, TextProps as RNTextProps} from 'react-native';
import {Colors} from '../Colors';
import {getFont} from '../Fonts';

interface TextProps extends RNTextProps {
  fontFamily?: 'NWSB' | 'NWB' | 'NL' | 'NR' | 'NSB' | 'NB' | 'NEB' | 'NBL';
  size?: number;
  color?: string;
  formatted?: boolean;
}

export const Text: FC<PropsWithChildren<TextProps>> = ({
  children,
  fontFamily = 'NB',
  size = 14,
  color = Colors.Black,
  style,
  ...rest
}) => {
  if (children == null || children === '') {
    return null;
  }

  return (
    <RNText
      style={[
        {
          fontFamily: getFont(fontFamily),
          fontSize: size,
          lineHeight: size * 1.1,
          color: color,
        },
        style,
      ]}
      {...rest}>
      {children}
    </RNText>
  );
};
