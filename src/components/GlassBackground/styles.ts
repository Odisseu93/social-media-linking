import styled from 'styled-components';

import Theme from '../../styles/Theme';

export const GrassBackground = styled.div`
background: ${Theme.background.linearPurple}; 

position: fixed;
overflow: auto;
top: 0;

width: clamp(375px, 100%, 1024px);
height: 100%;

backdrop-filter: ${Theme.effects.backdropFilterBlurWhite};
`;