import { ReactNode } from 'react';
import * as C from './style';

type NavProps = { children: ReactNode; }

const Nav = ({ children }: NavProps) => ( <C.Nav>{children} </C.Nav>);

export default Nav;