import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const ArrowLeftIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 10 12'} fill="none" {...rest}>
    <Path
      d="M12 5a.546.546 0 0 1-.471.54l-.075.006H1.867L5.33 8.994a.545.545 0 0 1-.708.826l-.062-.053-4.4-4.381A.547.547 0 0 1 0 5.02V4.98l.002-.032L0 5a.548.548 0 0 1 .107-.325l.005-.006a.547.547 0 0 1 .048-.055L4.56.232a.545.545 0 0 1 .823.712l-.053.061-3.462 3.45h9.586c.302 0 .546.244.546.545Z"
      fill={color}
    />
  </Svg>
);
