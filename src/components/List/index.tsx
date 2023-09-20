import { ReactNode } from 'react';
import * as C from './style';

type ListProps = { 
  type: 'ul' | 'ol'
  children: ReactNode[]
 }

const List = ({ type, children }: ListProps) => ( 
	type === 'ul' &&
	<C.Ul>{children.map((item, index: number) => (<li key={index}>{item}</li>))}</C.Ul>
  ||
	<C.Ol>{children.map((item, index: number) => (<li key={index}>{item}</li>))}</C.Ol>
);

export default List;