import Link from 'next/link';
import { FC, Fragment } from 'react';

type NavElement = { title: string; path: string };

const navElements: NavElement[] = [
  { title: 'Inicio', path: '/' },
  { title: 'Historia', path: '/history' },
  { title: 'Contacto', path: '/contact' },
];

const NavItem: FC<{ navElement: NavElement }> = ({ navElement }) => {
  return (
    <li>
      <Link href={navElement.path}>
        <a className='cursor-pointer px-4 hover:bg-gray-400'>{navElement.title}</a>
      </Link>
    </li>
  );
};

export const Navbar: FC = () => {
  return (
    <nav className='flex flex-col items-center bg-gray-200'>
      <div className='h-24 w-48 bg-gray-400'></div>
      <ul className='mt-6 flex justify-center'>
        {navElements.map((ne, i) => (
          <Fragment key={i}>
            <NavItem navElement={ne} />
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};
