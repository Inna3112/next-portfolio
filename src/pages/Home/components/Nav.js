import Link from 'next/link';
import s from '../sass/Nav.module.scss';
import { navLinks } from '../../../mock/mock';

function Nav() {
  return (
    <div className={s.nav}>
      {navLinks.map(({ name, path }) => (
        <Link
          key={name}
          href={`${path}`}
        >
          <span>{name}</span>
        </Link>
      ))}
    </div>
  );
}

export default Nav;
