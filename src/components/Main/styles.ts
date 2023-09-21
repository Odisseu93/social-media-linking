import styled from 'styled-components';

import Theme from '../../styles/Theme';

export const Main = styled.main`
  width: 100%;
  height: 100%;

  overflow: auto;
  scroll-behavior: smooth;
    
  &::-webkit-scrollbar {
    background-color: ${Theme.colors['nileBlue']};
      &-thumb {
        background: ${Theme.background.linearPurple};
     }
  }

  .perfil {
    z-index: 10;
    top: 2rem;
    left: 2rem;
  }
`; 