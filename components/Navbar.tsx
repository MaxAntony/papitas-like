import Image from 'next/future/image';
import Link from 'next/link';
import React, { FC, Fragment, useEffect, useState } from 'react';

type NavElement = { title: string; path: string };

const navElements: NavElement[] = [
	{ title: 'Inicio', path: '/' },
	{ title: 'Historia', path: '/history' },
	{ title: 'Contacto', path: '/contact' },
];

type propsNavItem = { bgTransparent?: boolean; navElement: NavElement; scrolled: boolean };
const NavItem: FC<propsNavItem> = ({ navElement, scrolled, bgTransparent }) => {
	return (
		<li>
			<Link href={navElement.path}>
				<a
					className={`cursor-pointer px-4 font-semibold hover:bg-gray-400 group-hover:text-black ${
						!bgTransparent || scrolled ? 'text-black' : 'text-white'
					}`}
				>
					{navElement.title}
				</a>
			</Link>
		</li>
	);
};

type props = { bgTransparent?: boolean };
export const Navbar: FC<props> = ({ bgTransparent }) => {
	const [scrolled, setScrolled] = useState(false);

	const changeNav = () => {
		window.scrollY >= 114 ? setScrolled(true) : setScrolled(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', changeNav);
		return () => {
			window.removeEventListener('scroll', changeNav);
		};
	}, []);

	return (
		<nav
			className={` group flex items-center transition-all duration-1000 hover:bg-white hover:text-black ${
				scrolled ? 'flex-row justify-between bg-white' : 'flex-col bg-transparent'
			}`}
		>
			<div className={`relative transition-all duration-1000 ${scrolled ? 'my-2 ml-2 h-20 w-28' : 'mt-2 h-36 w-48'}`}>
				<Image
					src={
						'https://res.cloudinary.com/maxantony/image/upload/v1662678503/papitas-like/305025155_127563886687889_7683522127482910038_n-removebg-preview_x5umih.png'
					}
					alt='logo'
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<ul className={` flex justify-center ${scrolled ? '' : 'my-4'}`}>
				{navElements.map((ne, i) => (
					<Fragment key={i}>
						<NavItem navElement={ne} scrolled={scrolled} bgTransparent={bgTransparent} />
					</Fragment>
				))}
			</ul>
		</nav>
	);
};
