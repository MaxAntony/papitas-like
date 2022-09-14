import Image from 'next/future/image';
import Link from 'next/link';
import React, { FC, Fragment, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { GrClose } from 'react-icons/gr';
import { img } from 'utils/data';

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
					className={` cursor-pointer px-4 font-semibold hover:bg-gray-400 group-hover:text-black ${
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
	const [movilMenuOpen, setMovilMenuOpen] = useState(false);

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
		<>
			<div
				className={`z-50z-50z-50z-50z-50z-50z-50z-50 fixed top-0 bottom-0 z-10 bg-black transition-opacity duration-500 ${
					movilMenuOpen ? 'w-full opacity-50' : 'w-0 opacity-0'
				}`}
			></div>
			<div
				className={`fixed top-0 bottom-0 z-20 bg-white transition-all duration-500 ${movilMenuOpen ? '' : ''}`}
				style={{ width: '767px', maxWidth: '90%', left: movilMenuOpen ? '0' : '-767px' }}
			>
				<div className='relative mb-2 mt-6 flex items-center justify-center'>
					<div className='relative h-16 w-24'>
						<Image src={img.logo} alt='logo' fill style={{ objectFit: 'cover' }} />
					</div>
					<button
						title='close menu'
						className='absolute right-8 text-primary'
						onClick={() => {
							setMovilMenuOpen(false);
						}}
						style={{ fontSize: '28px' }}
					>
						<GrClose className='text-primary' />
					</button>
				</div>
				<div className='w-full'>
					{navElements.map((e, i) => (
						<Fragment key={i}>
							<Link href={e.path}>
								<a className='block py-4 px-8'>{e.title}</a>
							</Link>

							{navElements.length - 1 !== i && <hr />}
						</Fragment>
					))}
				</div>
			</div>
			<nav
				className={`group flex items-center justify-center py-2 px-4 transition-all duration-1000 hover:text-black md:hover:bg-white ${
					scrolled ? 'bg-white md:flex-row md:justify-between' : 'flex-col bg-transparent'
				}`}
			>
				<button
					title='open menu'
					className={`absolute left-4 md:hidden  ${!bgTransparent || scrolled ? 'text-primary' : 'text-white'}`}
					style={{ fontSize: '28px' }}
					onClick={() => {
						setMovilMenuOpen(true);
					}}
				>
					<FaBars />
				</button>
				<div className={`relative transition-all duration-1000 ${scrolled ? 'h-16 w-24 md:ml-2' : ' h-24 w-28'}`}>
					<Image src={img.logo} alt='logo' fill style={{ objectFit: 'cover' }} />
				</div>
				<ul className={` hidden justify-center md:flex ${scrolled ? '' : 'my-4'}`}>
					{navElements.map((ne, i) => (
						<Fragment key={i}>
							<NavItem navElement={ne} scrolled={scrolled} bgTransparent={bgTransparent} />
						</Fragment>
					))}
				</ul>
			</nav>
		</>
	);
};
