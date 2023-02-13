import PropTypes from 'prop-types';
import Link from 'next/link';
import Image from 'next/image';
import s from '../sass/Contact.module.scss';

function Contact({ link, image, imgAlt }) {
  return (
    <Link href={link} target="_blank" rel="noreferrer" prefetch={false}>
      <a className={s.contact}>
        <Image
          src={image}
          alt={imgAlt}
          width={40}
          height={40}
        />
      </a>
    </Link>
  );
}

Contact.propTypes = {
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default Contact;
