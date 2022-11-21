import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const HomeIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 22 20'} fill="none" {...rest}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.5 18a.5.5 0 0 0 .5-.5V8.378a.5.5 0 0 0-.164-.37l-5.5-5a.5.5 0 0 0-.672 0l-5.5 5a.5.5 0 0 0-.164.37V17.5a.5.5 0 0 0 .5.5h11Zm1.5 2H4a1 1 0 0 1-1-1v-8.5a.5.5 0 0 0-.5-.5H1.293a.5.5 0 0 1-.336-.87l9.37-8.518a1 1 0 0 1 1.346 0l9.37 8.518a.5.5 0 0 1-.336.87H19.5a.5.5 0 0 0-.5.5V19a1 1 0 0 1-1 1Z"
      fill={color}
    />
    <Path
      d="M7 13.5c0-.276.225-.504.498-.458a3 3 0 0 1 2.46 2.46c.046.273-.182.498-.458.498h-2a.5.5 0 0 1-.5-.5v-2ZM7 9.5c0-.276.224-.502.5-.482a7 7 0 0 1 6.482 6.482c.02.276-.206.5-.482.5h-1a.542.542 0 0 1-.525-.5 5 5 0 0 0-4.476-4.475A.542.542 0 0 1 7 10.5v-1Z"
      fill={color}
    />
  </Svg>
);
