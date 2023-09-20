import Img from '../Img';
import Title from '../Title';

import * as C from './style';

import perfilpic from '/assets/img/perfil_picture.svg';

/** Name, title and picture */
const Perfil = () => (
	<C.Perfil className='perfil'>
		<Img src={perfilpic} alt='Ulisses pefil picture' className='photo' />
		<Title />
	</C.Perfil>
);

export default Perfil;