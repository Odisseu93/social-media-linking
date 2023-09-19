import * as React from 'react';

type SourceFcProps =  {
  srcset: string
  media: string
} & React.ComponentProps<'source'>

const SourceFc = ({ srcset, media, ...rest}: SourceFcProps) => (
	<source srcSet={srcset} media={media} {...rest}/>
);

export default SourceFc;