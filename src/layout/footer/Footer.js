import Links from './components/Links';
import { state } from '../../mock/mock';
import s from './sass/Footer.module.scss';
import sContainer from '../../pages/App/sass/Container.module.scss';

function Footer() {
  return (
    <div className={s.footerBlock}>
      <div className={`${sContainer.container} ${s.footerContainer}`}>
        <h2 className={s.title}>Inna Fomichova</h2>
        <div className={s.socialIcons}>
          <Links contacts={state.contacts} />
        </div>
        <p className={s.footerRight}>2022 All rights reserved</p>
      </div>
    </div>
  );
}

export default Footer;
