import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const XIcon = ({size = 24, color = Colors.Grey, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
    <Path
      d="M4.946 3.897l.084.073L12 10.939l6.97-6.97a.75.75 0 011.133.977l-.073.084L13.061 12l6.97 6.97a.75.75 0 01-.977 1.133l-.084-.073L12 13.061l-6.97 6.97a.75.75 0 01-1.133-.977l.073-.084L10.939 12l-6.97-6.97a.75.75 0 01.977-1.133z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
