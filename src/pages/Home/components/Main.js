import s from '../sass/Main.module.scss';
import sContainer from '../../App/sass/Container.module.scss';

const mainPhoto = '';

function Main() {
  return (
    <div id="main" className={s.mainBlock}>
      <div className={sContainer.container}>
        <div className={s.greeting}>
          <h6>Hi there, I&apos;m</h6>
          <h1>Inna Fomichova</h1>
        </div>
        <div className={s.photo}>
          <img src={mainPhoto} alt="MainPhoto" />
        </div>
      </div>
    </div>
  );
}

export default Main;
