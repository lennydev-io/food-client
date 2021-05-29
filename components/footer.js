// LIBS
import * as S from '../lib/styles';
// UTILS
import MainData from '../utils/main-data';

const Footer = () => (
  <S.Footer>
    <a
      href={MainData.footer.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <S.ImgLennyDevLogo src={MainData.footer.src} alt={MainData.footer.alt} />
    </a>
  </S.Footer>
);

export default Footer;
