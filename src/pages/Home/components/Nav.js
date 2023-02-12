import Link from 'next/link';
import s from '../sass/Nav.module.scss';
import { navLinks } from '../../../mock/mock';

function Nav() {
  return (
    <div className={s.nav}>
      {navLinks.map(({ name, id }) => (
        <Link
          key={id}
          href={id}
        >
          <span>{name}</span>
        </Link>
      ))}
    </div>
  );
}

export default Nav;
