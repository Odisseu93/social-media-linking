import styled from 'styled-components';

import Theme from '../../styles/Theme';

export const GrassBackground = styled.div`

position: fixed;
z-index: -10;

width: 100vw;
height: 95%;

backdrop-filter: ${Theme.effects.backdropFilterBlurWhite};
`;