import styled from 'styled-components';

import Colors from './colors';
import Fonts from './fonts';
import Spacing from './spacing';
import Transitions from './transitions';

// CONTAINERS
export const ContainerLayout = styled.div`
  min-height: 100vh;
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #eeeeee;
`;

// IMG
export const ImgMainLogo = styled.img`
  height: 3rem;
  margin-bottom: 3rem;
`;

export const ImgMainPhoto = styled.img`
  width: 50%;
  min-width: 180pt;
  max-width: 720pt;
  height: auto;
  margin-bottom: 3rem;
  transition: 0.5s;
`;

export const ImgLennyDevLogo = styled.img`
  height: 1.2rem;
  margin-bottom: 2rem;
`;

// ANCHORS
export const CTA = styled.a`
  width: 112pt;
  height: auto;
  background-color: black;
  color: white;
  padding: 8pt;
  text-align: center;
`;

// MAIN
export const Main = styled.main`
  padding: 5rem 0;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// FOOTER
export const Footer = styled.footer`
  width: 100%;
  height: 40pt;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
