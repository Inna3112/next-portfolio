import App from 'next/app';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import { appWithTranslation } from 'next-i18next';
import { useStore } from '../src/store/store';
import nextI18NextConfig from '../next-i18next.config';
import '../src/pages/App/sass/globals.scss';

function MainApp({ Component, pageProps }) {
  const store = useStore(pageProps.initialReduxState);
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

MainApp.getStaticProps = async (MainAppContext) => (
  { ...await App.getStaticProps(MainAppContext) }
);

MainApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.shape({
    initialReduxState: PropTypes.shape({})
  }).isRequired
};

export default appWithTranslation(MainApp, nextI18NextConfig);
