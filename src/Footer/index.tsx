import { Link} from 'react-router-dom';

import * as C from './style';

const Footer = () => (
	<C.Footer>
		<C.Content>
			<p>
				<Link to="https://www.linkedin.com/in/ulisses-silverio" rel="noreferrer noopener" target='_blank'>Coded by Ulisses Silvério</Link>
			</p>
			<p>
				<Link to="https://www.freepik.com" rel="noreferrer noopener" target='_blank'>Background image Designed by fullvector / Freepik</Link>
			</p>
		</C.Content>
	</C.Footer>
);

export default Footer;