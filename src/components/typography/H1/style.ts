import styled from 'styled-components';

import Theme from '../../../styles/Theme';

interface H1Props {
  color: keyof typeof Theme.colors
}

export const H1 = styled.h1<H1Props>`
  color: ${({ color }) => Theme.colors[color]};

  ${()=> Theme.fontSizes['text-3xl']}
`; 