import PropTypes from 'prop-types';
import Image from 'next/image';
import s from '../sass/Skill.module.scss';
import DescribeBlock from '../../../components/DescribeBlock/DescribeBlock';

function Skill({
  title, description, icon, imgAlt
}) {
  return (
    <div className={s.skill}>
      <Image
        width={60}
        height={60}
        src={icon}
        alt={imgAlt}
      />
      <DescribeBlock title={title} description={description} />
    </div>
  );
}

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  imgAlt: PropTypes.string.isRequired,
};

export default Skill;
