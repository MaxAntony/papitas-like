import Link from "next/link";
import { FC } from "react";

export const Navbar: FC = () => {
  return (
    <nav>
      <ul className="flex">
        <li>
          <Link href={'/'}>
            Inicio
          </Link>
        </li>
        <li>
          <Link href={'/contact'}>
            Contacto
          </Link>
        </li>
      </ul>
    </nav>
  )
}
