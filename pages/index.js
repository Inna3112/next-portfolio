import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import HomeView from '../src/pages/Home/HomeView';

function Home() {
  return (
    <HomeView />
  );
}

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...await serverSideTranslations(locale, ['common', 'home'])
  }
});

export default Home;
