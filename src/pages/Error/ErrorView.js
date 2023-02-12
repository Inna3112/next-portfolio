import PropTypes from 'prop-types';
import { useTranslation } from 'next-i18next';
import Layout from '../../layout/Layout';
import { NOT_FOUND } from '../../constants/httpStatusCodes';
import styles from './sass/Error.module.scss';

function ErrorView({ statusCode }) {
  const { t } = useTranslation('error');

  return (
    <Layout>
      <div className={styles.errorBody}>
        <h2>
          {t(statusCode === NOT_FOUND ? 'pageNotFound' : 'internalServerError')}
        </h2>
      </div>
    </Layout>
  );
}

ErrorView.propTypes = {
  statusCode: PropTypes.number.isRequired
};

export default ErrorView;
