import * as React from 'react';

import * as C from './styles';

type MainProps = {
  children: React.ReactNode[] | React.ReactNode
} & React.ComponentProps<'main'>;

const Main = ({children, ...rest}: MainProps) => (<C.Main {...rest}>{children}</C.Main>);

export default Main;