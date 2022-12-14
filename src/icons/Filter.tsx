import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const FilterIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 10 12'} fill="none" {...rest}>
    <Path
      d="M6.334 6.966a.5.5 0 0 0-.084.277v3.29a.5.5 0 0 1-.276.447l-1.5.75a.5.5 0 0 1-.724-.447v-4.04a.5.5 0 0 0-.084-.277L.084 1.593A.5.5 0 0 1 0 1.315V.717a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 .5.5v.598a.5.5 0 0 1-.084.278L6.334 6.966Zm-3.897-5.5a.5.5 0 0 0-.416.778l2.563 3.845a.5.5 0 0 0 .832 0l2.563-3.845a.5.5 0 0 0-.416-.777H2.437Z"
      fill={color}
    />
  </Svg>
);
