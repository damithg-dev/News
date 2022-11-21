import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

import {Colors} from '../Colors';

export const SearchIcon = ({
  color = Colors.Black,
  size = 20,
  ...rest
}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 25" fill="none" {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M2 11.371a8.627 8.627 0 1117.253 0 8.627 8.627 0 01-17.253 0zM10.627.745C4.756.745 0 5.503 0 11.37c0 5.87 4.758 10.627 10.627 10.627 2.574 0 4.934-.916 6.774-2.439l4.77 4.771a1 1 0 001.415-1.414l-4.771-4.771a10.583 10.583 0 002.438-6.774c0-5.868-4.758-10.626-10.627-10.626z"
      fill={color}
    />
  </Svg>
);
