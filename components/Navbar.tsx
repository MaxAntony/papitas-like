import Link from "next/link";
import { FC } from "react";

type NavElement = { title: string, path: string }

const navElements: NavElement[] = [
  { title: 'Inicio', path: '/' },
  { title: 'Historia', path: '/history' },
  { title: 'Contacto', path: '/contact' },
]

const NavItem: FC<{ navElement: NavElement }> = ({ navElement }) => {
  return (
    <li>
      <Link href={navElement.path}>
        <a className="p-4">
          {navElement.title}
        </a>
      </Link>
    </li>
  )
}

export const Navbar: FC = () => {
  return (
    <nav>
      <ul className="flex">
        {navElements.map(ne => (<NavItem navElement={ne} />))}
      </ul>
    </nav>
  )
}
