import Main from './components/Main';
import GrassBackground from './components/GlassBackground';
import Perfil from './components/Perfil';

import MainBg from './components/Main/MainBg';

export default function App() { 
	return (
		<Main>
			<GrassBackground>
				<Perfil/>
			</GrassBackground>
			<MainBg/>
		</Main> 
	);
}