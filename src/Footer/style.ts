import styled from 'styled-components';

import Theme from '../styles/Theme';

const Footer = styled.footer`
  display: none;
  position: fixed;
  bottom: 0;
  
  ${Theme.fontSizes['base']}
  
  @media (min-width: 768px) {
    display: none;
  }
`;

const Content = styled.div`
  display: flex;  
  flex-direction: column;
  
  width: 100vw;
  
  padding-inline:1rem ;

  backdrop-filter: ${Theme.effects.backdropFilterBlurWhite};  
  box-shadow: ${Theme.effects.shadowDarkMd};

  a {
    color: ${Theme.colors['whiteProcelain']};
  }
`;

export {
	Footer,
	Content
};
