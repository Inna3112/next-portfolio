import { state } from '../../mock/mock';
import Title from '../../components/Title/Title';
import Skill from './components/Skill';
import s from './sass/SkillsView.module.scss';
import sContainer from '../App/sass/Container.module.scss';

function SkillsView() {
  return (
    <div id="skills" className={s.skillsBlock}>
      <div className={`${sContainer.container} ${s.skillsContainer}`}>
        <Title text="SkillsView" />
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

export default SkillsView;
