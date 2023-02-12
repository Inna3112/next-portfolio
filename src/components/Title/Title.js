import React from 'react';
import PropTypes from 'prop-types';
import s from './Title.module.scss';

function Title({ text }) {
  return (
    <div className={s.title}>
      <h2>{text}</h2>
    </div>
  );
}

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
