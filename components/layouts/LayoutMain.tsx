import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import { FC } from 'react';

type props = { child: JSX.Element };
export const LayoutMain: FC<props> = ({ child }) => {
	return (
		<>
			<div className='fixed top-0 z-10 w-full transition-all duration-700'>
				<Navbar />
			</div>
			<div
				className='grid'
				style={{
					gridTemplateColumns: '1fr',
					gridTemplateRows: '1fr auto',
				}}
			>
				<main className='flex flex-col justify-center '>{child}</main>
				<div className=''>
					<Footer />
				</div>
			</div>
		</>
	);
};
