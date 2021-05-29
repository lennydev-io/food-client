// LIBS
import { ImgMainPhoto } from '../lib/styles';
// UTILS
import MainData from '../utils/main-data';

const MainPhoto = () => <ImgMainPhoto alt={MainData.mainPhoto.alt} src={MainData.mainPhoto.src} />;

export default MainPhoto;
