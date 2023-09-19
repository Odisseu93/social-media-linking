import * as React from 'react';

import * as C from './style';

import Theme from '../../../styles/Theme';

type SpanProps = {
  children: React.ReactNode;
  color: keyof typeof Theme.colors
  fontSize: keyof typeof Theme.fontSizes
} & React.ComponentProps<'span'>

const Span = ({ children, color, fontSize, ...rest }:SpanProps)=> (
	<C.Span color={color} fontSize={fontSize} {...rest}>{children}</C.Span>);

export default Span;