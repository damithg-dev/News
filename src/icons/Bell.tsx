import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

export const BellIcon = ({size, color, ...rest}: IconProps) => (
  <Svg width={size} height={size} viewBox={'0 0 14 15'} fill="none" {...rest}>
    <Path
      d="M9.056 12.765C8.474 13.588 7.748 14 6.876 14c-.873 0-1.6-.412-2.181-1.235m6.616-1.236H2.44c-.255 0-.505-.063-.725-.184a1.4 1.4 0 0 1-.528-.505 1.3 1.3 0 0 1 .019-1.37 8.306 8.306 0 0 0 1.308-4.459v-.893c0-.874.368-1.712 1.022-2.33A3.597 3.597 0 0 1 6.003.824h1.745c.925 0 1.813.347 2.467.964a3.203 3.203 0 0 1 1.022 2.33v.893a8.3 8.3 0 0 0 1.308 4.46c.132.206.203.441.206.682a1.3 1.3 0 0 1-.187.687 1.4 1.4 0 0 1-.527.505c-.22.12-.471.184-.726.184v0Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
