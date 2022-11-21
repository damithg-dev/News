import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const FavoriteIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 20 19'} fill="none" {...rest}>
    <Path
      d="M18.243 1.757a6 6 0 0 1 .236 8.236l-8.126 8.138a.5.5 0 0 1-.708 0L1.521 9.993a6.002 6.002 0 0 1 8.135-8.751.568.568 0 0 0 .69 0 6 6 0 0 1 7.897.515ZM3.172 3.172a4 4 0 0 0-.192 5.451L9.646 15.3a.5.5 0 0 0 .708 0l6.666-6.676a4 4 0 0 0-5.646-5.64l-3.849 3.85a.5.5 0 0 1-.707 0l-.707-.708a.5.5 0 0 1 0-.707l2.395-2.397a.098.098 0 0 0-.006-.145 4 4 0 0 0-5.328.295Z"
      fill={color}
    />
  </Svg>
);
