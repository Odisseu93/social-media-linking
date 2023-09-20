import { useLayoutEffect, useState } from 'react';

import Main from './components/Main';
import GrassBackground from './components/GlassBackground';
import Perfil from './components/Perfil';
import MainBg from './components/Main/MainBg';
import NavButton from './components/buttons/NavButton';
import Icon from './components/Icons';
import List from './components/List';
import Nav from './components/Nav';

import * as C from './style';
import Footer from './Footer';

type Links = {
	name:  string
	to: string
	iconName: keyof typeof Icon
}

export default function App() { 
	const [links, setLinks] = useState<Links[]>({} as Links[]);

	const getLinks = async() => {
		try {
			const res = await fetch('assets/json/links.json');
			const { links } = await res.json();

			if (links) setLinks(links);
		} catch (err) {
			console.error(err);
		}
	};

	useLayoutEffect(()=> {
		(async ()=>{
			await getLinks();
		})();
	},[]);

	return (
		<>
			<Main>
				<MainBg/>

				<GrassBackground />

				<C.Content>
					<Perfil/>
					{	links && links.length > 0 ? (
						<Nav>
							<List type='ul'>

								{links.map(({name, to, iconName}, index: number)=> (
									<NavButton key={index} iconName={iconName}  to={to} target='_blank'>
										{name}
									</NavButton>))}
							</List>
						</Nav>
					): null }
				</C.Content>

				<Footer />
			</Main>
		</>
	);
}