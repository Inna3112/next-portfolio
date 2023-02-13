import Layout from '../src/layout/Layout';
import ProjectsView from '../src/pages/ProjectsView/ProjectsView';

function Projects() {
  return (
    <Layout>
      <ProjectsView />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {}
  };
};

export default Projects;
