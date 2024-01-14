import { lazy, useLayoutEffect, useState } from 'react';
import ReactGA from 'react-ga4';

const Main = lazy(()=> import('./components/Main'));
const GrassBackground = lazy(() => import('./components/GlassBackground'));
const Perfil = lazy(() => import('./components/Perfil'));
const MainBg = lazy(() => import('./components/Main/MainBg'));
const NavButton = lazy(() => import('./components/buttons/NavButton'));
const List = lazy(() => import('./components/List'));
const Nav = lazy(() => import('./components/Nav'));

import Icon from './components/Icons';

import * as C from './style';
import Footer from './Footer';

type Links = {
	name:  string
	to: string
	iconName: keyof typeof Icon
}

export default function App() { 
	const [links, setLinks] = useState<Links[]>({} as Links[]);

	ReactGA.initialize('G-XCSCDF3N1Z');

	const getLinks = async() => {
		try {
			const res = await fetch('assets/json/links.json');
			const { links } = await res.json();

			if (links) setLinks(links);
		} catch (err) {
			console.error(err);
		}
	};
    
	const handleLinkNameGA =  (name: string) => {
		ReactGA.event({
			category: 'professional links',
			action: 'redirect',
			label: name, // optional
			value: 99, // optional, must be a number
		});
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
									<NavButton key={index} iconName={iconName} onClick={() => handleLinkNameGA(name)}  to={to} target='_blank'>
										{name}
									</NavButton>))}
							</List>
						</Nav>
					): null }
				</C.Content>

			</Main>
			<Footer />
		</>
	);
}
