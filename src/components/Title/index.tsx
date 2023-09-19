import H1 from '../typography/H1';
import Span from '../typography/Span';
import * as C from './style';

const Title = ()=> (
	<C.Title className='title'>
		<H1 color='yellowCanary'>Ulisses Silvério</H1>
		<Span color='whiteProcelain' fontSize='text-3xl'>Desenvolvedor Front-end</Span>
	</C.Title>);

export default Title;