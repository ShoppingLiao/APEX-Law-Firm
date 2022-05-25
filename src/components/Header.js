import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LINK_LIST = [
  {
    path: '/',
    name: '公司簡介',
  },
  {
    path: '/team',
    name: '團隊介紹',
  },
  {
    path: '/contact',
    name: '聯絡方式',
  },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  function handleMenuBtnClick() {
    setIsOpen(!isOpen);
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between bg-blue-darker p-1 shadow">
      <div className="h-14 w-24 bg-[url('./assets/logo.png')] bg-contain bg-center bg-no-repeat"></div>
      <div className="text-2xl text-white">鼎道國際法律事務所</div>
      <div
        className="flex h-12 w-10 items-center justify-center rounded text-white"
        onClick={handleMenuBtnClick}
      >
        <FontAwesomeIcon icon="fa-solid fa-bars" className="h-6 w-6" />
      </div>
      {isOpen && (
        <div className="absolute top-16 left-0 flex w-screen flex-col bg-blue shadow">
          {LINK_LIST.map(({ path, name }, idx) => (
            <Link
              key={`link_${idx}`}
              to={path}
              className={clsx('mx-4 border-b p-4 text-white last:border-b-0 border-white', {
                'text-yellow': pathname === path,
              })}
              onClick={handleMenuBtnClick}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}

export default Header;
