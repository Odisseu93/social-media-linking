import * as React from 'react';

import Img from '../Img';
import SourceFc from '../SourceFc';

type PictureProps = {
  SourcesListProps: {
    srcSet: string
    media: string
  }[] & React.ComponentProps<'source'>

  ImageProps: {
     src: string
     alt: string } & React.ComponentProps<'img'>

} & React.ComponentProps<'picture'>;

const Picture = ({ ImageProps, SourcesListProps: sourcesList, ...rest}:PictureProps)=> (
	<picture {...rest}>
		{sourcesList.map(({srcSet, media, ...rest}, index: number) => <SourceFc key={index} srcset={srcSet} media={media} {...rest}/> )}
		<Img src={ImageProps.src} alt={ImageProps.alt}/>
	</picture>
);

export default Picture;