import sContainer from '../../App/sass/Container.module.scss';
import Title from '../../../components/Title/Title';
import Project from './Project';
import { state } from '../../../mock/mock';
import s from '../sass/Projects.module.scss';

function Projects() {
  return (
    <div id="projects" className={s.projectsBlock}>
      <div className={`${sContainer.container} ${s.projectsContainer}`}>
        <Title text="Projects" />
        <div className={s.projects}>
          {state.projects.map(({
            id, style, title, description, link
          }) => {
            return (
              <Project
                key={id}
                id={id}
                style={style}
                title={title}
                description={description}
                href={link}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Projects;
