import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BookmarkIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 16 20'} fill="none" {...rest}>
    <Path
      d="m15 19-7-5-7 5V3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16Z"
      stroke={color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
