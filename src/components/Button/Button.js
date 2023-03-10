import PropTypes from 'prop-types';
import Link from 'next/link';
import s from './Button.module.scss';

function Button({ title, href, projectId }) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      className={s.button}
    >
      <a id={projectId}>
        <span className={s.button}>{title}</span>
      </a>
    </Link>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  projectId: PropTypes.number.isRequired,
};

export default Button;
