import Layout from '../src/layout/Layout';
import ContactUsView from '../src/pages/ContactUsView/ContactUsView';

function Contacts() {
  return (
    <Layout>
      <ContactUsView />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {}
  };
};

export default Contacts;
