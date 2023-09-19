type ImgProps = {
  src: string
  alt: string
} & React.ComponentProps<'img'>

const Img = ({src, alt, ...rest}: ImgProps) => (
	<img src={src} alt={alt} {...rest} />
);

export default Img;