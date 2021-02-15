import {} from 'styled-components';

import { ThemeStyle } from '.';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeStyle {}
}