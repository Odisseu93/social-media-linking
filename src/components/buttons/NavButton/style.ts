import styled from 'styled-components';

import Theme from '../../../styles/Theme';

type NavButtonAndIconProps = {
  isvisited: boolean
}

const Icon = styled.div<NavButtonAndIconProps>`
  width: 40%;
  
  svg {
      height: fit-content;
      font-size:2rem;
      color: ${({ isvisited }) => isvisited ? '#551a8b' : Theme.colors['nileBlue']};
    }
`;

const Container = styled.div`
`;

const NavButton = styled.button<NavButtonAndIconProps>`
  background-color: ${Theme.colors['yellowStraw']};

  display: flex;
  flex-direction: row;
  align-items: self-start;

  width: 250px;

  padding-inline: 1rem;
  padding-top: 1rem;
  padding-bottom: .5rem;
  border: none;
  border-radius: 4px;

  ${Theme.fontSizes['text-lg']}
  font-weight : 500;

  box-shadow: ${Theme.effects.shadowLightMd};

  .content {
    height: 100%;
    width: 100%;
    
    color: ${({ isvisited }) => isvisited ? '#551a8b' : Theme.colors['nileBlue']};

    &::first-letter {
      text-transform: uppercase;
    }
  }
  
  cursor: pointer;

  &:active {

  box-shadow: ${Theme.effects.shadowDarkMd};
  }

  @media (min-width: 768px) {
    &:hover {
      transform: scale(.99);
    }
  }
`;

export {
	NavButton,
	Icon,
	Container
};