import PropTypes from 'prop-types';
import Contact from './Contact';

function Links({ contacts }) {
  return (
    <div>
      {contacts.map((el, index) => (
        <Contact
          key={[el, index].join('_')}
          image={el.image}
          imgAlt={el.imgAlt}
          link={el.link}
        />
      ))}
    </div>
  );
}

Links.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Links;
