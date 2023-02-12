import Layout from '../../layout/Layout';
import Main from './components/Main';
import Skills from './components/Skills';
import Projects from './components/Projects';

function HomeView() {
  return (
    <Layout>
      <Main />
      <Skills />
      <Projects />
    </Layout>
  );
}

export default HomeView;
