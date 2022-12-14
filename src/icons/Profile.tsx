import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ProfileIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 20 20'} fill="none" {...rest}>
    <Path
      d="M10 20C4.477 20 0 15.523 0 10S4.477 0 10 0s10 4.477 10 10-4.477 10-10 10Zm0-2a8 8 0 1 0 0-16.001A8 8 0 0 0 10 18Zm-4.975-7.5c-.028-.276.199-.5.475-.5h1c.276 0 .496.225.542.498a3 3 0 0 0 5.916 0c.046-.273.266-.498.542-.498h1c.276 0 .503.224.475.5a5 5 0 0 1-9.95 0Z"
      fill={color}
    />
  </Svg>
);
