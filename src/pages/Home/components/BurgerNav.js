import { useState } from 'react';
import Link from 'next/link';
import { burgerNavItems } from '../../../mock/mock';
import s from '../sass/BurgerNav.module.scss';

function BurgerNav() {
  const [isOpen, setIsOpen] = useState(false);

  const handlerIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.burgerNav}>
      <div className={!isOpen ? s.hide : s.burgerNavItems}>
        {burgerNavItems.map((id, name) => (
          <Link
            key={id}
            href={id}
          >
            <span>{name}</span>
          </Link>
        ))}
      </div>
      <button onClick={handlerIsOpen} className={s.burgerBtn} type="button">
        <div className={s.burgerDiv}>
          <span className={isOpen ? s.active : ''} />
          <span className={isOpen ? s.active : ''} />
          <span className={isOpen ? s.active : ''} />
        </div>
      </button>
    </div>
  );
}

export default BurgerNav;
