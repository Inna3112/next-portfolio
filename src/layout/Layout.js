import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from './footer/Footer';
import styles from './sass/Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
