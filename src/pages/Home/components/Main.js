import Image from 'next/image';
import s from '../sass/Main.module.scss';
import sContainer from '../../App/sass/Container.module.scss';

const mainPhoto = '/static/images/Pages/Home/photo.jpeg';

function Main() {
  return (
    <div id="main" className={s.mainBlock}>
      <div className={sContainer.container}>
        <div className={s.greeting}>
          <h6>Hi there, I&apos;m</h6>
          <h1>Inna Fomichova</h1>
        </div>
        <div className={s.photo}>
          <Image
            src={mainPhoto}
            width={300}
            height={420}
            alt="MainPhoto"
          />
        </div>
      </div>
    </div>
  );
}

export default Main;
