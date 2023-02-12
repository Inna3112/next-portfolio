import { state } from '../../../mock/mock';
import Title from '../../../components/Title/Title';
import Skill from './Skill';
import s from '../sass/Skills.module.scss';
import sContainer from '../../App/sass/Container.module.scss';

function Skills() {
  return (
    <div id="skills" className={s.skillsBlock}>
      <div className={`${sContainer.container} ${s.skillsContainer}`}>
        <Title text="Skills" />
        <div className={s.skills}>
          {state.skills.map(({
            title, description, icon, imgAlt
          }) => {
            return (
              <Skill
                key={imgAlt}
                title={title}
                description={description}
                icon={icon}
                imgAlt={imgAlt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Skills;
