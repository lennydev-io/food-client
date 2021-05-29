import styled from 'styled-components';

import Fonts from './fonts';
import Colors from './colors';

export const H1 = styled.h1`
  font-family: ${Fonts.family.playfairDisplayRegular};
  font-size: ${props => props.fontSize || Fonts.size.h1};
  line-height: ${Fonts.lineHeight.h1};
  color: ${props => props.color || Colors.light};
  margin-bottom: ${props => props.marginBottom || '0'};
  display: block;
`;

export const H2 = styled.h2`
  font-family: ${Fonts.family.playfairDisplayRegular};
  font-size: ${Fonts.size.h2};
  line-height: ${Fonts.lineHeight.h2};
  color: ${props => props.color || Colors.light};
  margin: 0;
  margin-bottom: ${props => props.marginBottomMobile || '0'};

  @media only screen and (min-width: 768px) {
    margin-bottom: ${props => props.marginBottom || '0'};
  }
`;

export const H3 = styled.h3`
  font-family: ${Fonts.family.playfairDisplayRegular};
  font-size: ${Fonts.size.h3};
  color: ${props => props.color || Colors.light};
  margin: 0;
  margin-bottom: ${props => props.marginBottom || '0'};
`;

export const H4 = styled.h4`
  font-family: ${Fonts.family.playfairDisplayRegular};
  font-size: ${Fonts.size.h4};
  color: ${props => props.color || Colors.light};
`;

export const P = styled.p`
  font-family: ${props => props.fontFamily || Fonts.family.playfairDisplayRegular};
  font-size: ${Fonts.size.p};
  line-height: ${Fonts.lineHeight.p};
  color: ${props => props.color || Colors.light};
  margin-bottom: ${props => props.marginBottomMobile || '0'};
  display: block;

  @media only screen and (min-width: 768px) {
    margin: 0;
    margin-bottom: ${props => props.marginBottom || '0'};
  }
`;

export const Small = styled.small`
  font-family: ${Fonts.family.playfairDisplayRegular};
  font-size: ${Fonts.size.small};
  color: ${props => props.color || Colors.light};
  margin-bottom: ${props => props.marginBottom || '0'};
  display: block;
  position: relative;
  right: ${props => props.right || '0'};
`;

export const A = styled.a`
  font-family: ${Fonts.family.playfairDisplayRegular};
  font-size: ${Fonts.size.a};
  text-decoration: none;
  cursor: pointer;
  color: ${props => props.color || Colors.light};
`;
