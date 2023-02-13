import SkillsView from '../src/pages/SkillsView/SkillsView';
import Layout from '../src/layout/Layout';

function Skills() {
  return (
    <Layout>
      <SkillsView />
    </Layout>
  );
}

export const getStaticProps = async () => {
  return {
    props: {}
  };
};

export default Skills;
