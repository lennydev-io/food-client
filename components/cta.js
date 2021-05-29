// LIBS
import * as S from '../lib/styles';
// UTILS
import MainData from '../utils/main-data';

const CTA = () => (
  <S.CTA
    href={MainData.CTA.url}
    target="_blank"
    rel="noopener noreferrer"
  >
    {MainData.CTA.text}
  </S.CTA>
);

export default CTA;
