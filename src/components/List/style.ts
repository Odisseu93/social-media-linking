import { styled, css } from 'styled-components';

const commonCss = css`
  display: flex;
  flex-direction: column;
  gap: 3rem;

  width: fit-content;

  margin-inline: auto;
  padding-bottom: 5rem;

  list-style: none;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;

    max-width: 800px;

    margin-top: 3rem;
    padding-bottom: 0;
  }
`;

export const Ul = styled.ul`${commonCss}`;

export const Ol = styled.ol`${commonCss}`;
