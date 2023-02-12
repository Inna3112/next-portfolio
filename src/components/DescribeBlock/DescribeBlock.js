import React from 'react';
import PropTypes from 'prop-types';
import s from './DescribeBlock.module.scss';

function DescribeBlock({ title, description }) {
  return (
    <div className={s.describeInfo}>
      <h3 className={s.describeTitle}>{title}</h3>
      <span className={s.describeDescription}>{description}</span>
    </div>
  );
}

DescribeBlock.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default DescribeBlock;
