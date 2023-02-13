import Head from 'next/head';
import PropTypes from 'prop-types';
import Footer from './footer/Footer';
import Header from '../pages/Home/components/Header';
import styles from './sass/Layout.module.scss';

function Layout({ children }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="google-site-verification" content="FD-gBKi1RIwrrlyBb4vNBCxsar5YYbLkjn_bz3HBF-A" />
      </Head>
      <main className={styles.main}>
        <Header />
        {children}
        <Footer />
      </main>
    </div>
  );
}

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
