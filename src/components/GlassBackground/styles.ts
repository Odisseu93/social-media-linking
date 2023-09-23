import styled from 'styled-components';

import Theme from '../../styles/Theme';

export const GrassBackground = styled.div`
position: fixed;
z-index: -10;

width: 100vw;
height: 1000%;

@media (min-width: 768px) {
  height: 95%;
}

backdrop-filter: ${Theme.effects.backdropFilterBlurWhite};
`;