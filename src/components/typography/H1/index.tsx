import * as C from './style';

import Theme from '../../../styles/Theme';
import * as React from 'react';

type H1Props = {
  children: React.ReactNode
  color: keyof typeof Theme.colors
}& React.ComponentProps<'h1'>

const H1 = ({ children, color, ...rest }: H1Props) => (
	<C.H1 color={color} {...rest}>{children}</C.H1>
);

export default H1;