import styled, { keyframes } from 'styled-components';

const slidein = keyframes` 
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
`;

export const Content = styled.div`
  max-height: 90vh;
  max-width: 1440px;

  padding-bottom: 10rem;
  animation: 3s ${slidein} ease-out;
`;
