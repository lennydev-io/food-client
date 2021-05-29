import Head from 'next/head';
// COMPONENTS
import Footer from '../components/footer';
// LIBS
import { ContainerLayout } from '../lib/styles';
// UTILS
import MainData from '../utils/main-data';

const Layout = (props) => (
  <ContainerLayout>
    {/* HEAD */}
    <Head>
      {/* TITLE */}
      <title>{MainData.head.title}</title>
      {/* FAVICON */}
      <link rel="icon" href={MainData.head.favicon} />
    </Head>
    {/* MAIN */}
    {props.children}
    {/* FOOTER */}
    <Footer />
  </ContainerLayout>
);

export default Layout;
