import PropTypes from 'prop-types';
import Button from '../../../components/Button/Button';
import DescribeBlock from '../../../components/DescribeBlock/DescribeBlock';
import s from '../sass/Project.module.scss';

function Project({
  id, title, description, style, href
}) {
  return (
    <div className={s.project}>
      <div style={style} className={s.img}>
        <Button projectId={id} title="Look" href={href} />
      </div>
      <DescribeBlock title={title} description={description} />
    </div>
  );
}

Project.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  style: PropTypes.shape({}).isRequired,
  href: PropTypes.string.isRequired,
};

export default Project;
