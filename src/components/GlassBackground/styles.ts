import styled from 'styled-components';

import Theme from '../../styles/Theme';

export const GrassBackground = styled.div`
/* background: ${Theme.background.linearPurple};  */

position: fixed;
overflow: auto;
z-index: -10;

overflow-y: auto;

width: 100vw;
height: 95%;

backdrop-filter: ${Theme.effects.backdropFilterBlurWhite};
`;