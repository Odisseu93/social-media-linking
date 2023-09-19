import Picture from '../../Picture';

import Theme from '../../../styles/Theme';

/** Image background of the app*/
const MainBg = () => (
	<>
		<Picture 
			ImageProps={{src: Theme.background.bodyDesktop, alt: 'desktop background'}}
			SourcesListProps={[
				{srcSet: Theme.background.bodyDesktop, media:'(min-width: 401px)'} ,
				{srcSet: Theme.background.bodyMobile, media:'(max-width: 400px)'}
			]}
		/>
	</>
);

export default MainBg;