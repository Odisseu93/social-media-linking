import { ReactNode, useId, useState } from 'react';
import { Link } from 'react-router-dom';

import Icons from './../../Icons';

import * as C from './style';

type NavButtonProps = {
	to: string
	target?: '_blank' | '_self' | '_parent' |'_top'
  iconName?: keyof typeof Icons
  children: ReactNode
} & React.ComponentProps<'button'>

const NavButton = ({ to, target, iconName, children, ...rest}: NavButtonProps)=> {
	const [isvisited, setIsvisited] = useState<boolean>(false);

	const handleClick = ()=> setIsvisited(true);

	const uuid = useId();


	const renderIcon = (iconName: keyof typeof Icons) => {
		const Icon = Icons[iconName];
		return (
			<Icon />
		);
	};

	return (
		<C.Container key={uuid}>

			<Link to={to} target={target ? target : '_self'} onClick={handleClick}>

				<C.NavButton type='button'  isvisited={isvisited} {...rest}>
					{ iconName && <C.Icon isvisited={isvisited}>{renderIcon(iconName)}</C.Icon> }
					<span className='content'>{children}</span>
				</C.NavButton>
			</Link>

		</C.Container>
	);
};

export default NavButton;