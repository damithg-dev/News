import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ChevronDownIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" {...rest}>
    <Path
      d="M18.703 7.351a.75.75 0 01.137.97l-.066.089-6.253 7.146a1.16 1.16 0 01-.874.403c-.295 0-.574-.114-.787-.313l-.087-.09L4.52 8.41a.75.75 0 011.05-1.066l.079.078 5.998 6.855 5.998-6.855a.75.75 0 01.97-.137l.088.066z"
      fill={color}
      fillRule="evenodd"
    />
  </Svg>
);
