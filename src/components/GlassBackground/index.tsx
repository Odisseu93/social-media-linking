import * as C from './styles';

type GrassBackgroundProps = {
  children: React.ReactNode;
}

/** backgroud with glass effect */
const GrassBackground = ({children}: GrassBackgroundProps)=>(
	<C.GrassBackground>{children}</C.GrassBackground>);

export default GrassBackground;