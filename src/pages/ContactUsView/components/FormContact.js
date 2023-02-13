import PropTypes from 'prop-types';
import Image from 'next/image';
import s from '../sass/FormContact.module.scss';

function FormContact({
  formInfoItems
}) {
  return (
    <div className={s.contact}>
      {formInfoItems.map((el, index) => {
        return (
          <div className={s.contactItem} key={[el, index].join('_')}>
            <Image
              src={el.image}
              width={20}
              height={20}
              alt={el.imgAlt}
            />
            <div className={s.description}>{el.description}</div>
          </div>
        );
      })}
    </div>
  );
}

FormContact.propTypes = {
  formInfoItems: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default FormContact;
