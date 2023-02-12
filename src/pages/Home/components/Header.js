import Nav from './Nav';
import BurgerNav from './BurgerNav';
import s from '../sass/Header.module.scss';

function Header() {
  return (
    <header className={s.header}>
      <div className={s.fixed}>
        <Nav />
        <BurgerNav />
      </div>
    </header>
  );
}

export default Header;
