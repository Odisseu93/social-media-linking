import styled from 'styled-components';

import Theme from '../../../styles/Theme';

type SpanProps = {
  color: keyof typeof Theme.colors
  fontSize: keyof typeof Theme.fontSizes
}

export const Span = styled.span<SpanProps>`
  color: ${({ color }) => Theme.colors[color]};
  ${({ fontSize }) => Theme.fontSizes[fontSize]}
`;