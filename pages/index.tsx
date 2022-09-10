import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import Image from 'next/future/image';
import { ReactElement } from 'react';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
	return (
		<>
			<div className='relative h-screen w-full'>
				<Image
					src={
						'https://res.cloudinary.com/maxantony/image/upload/v1662672871/papitas-like/BANNERpapas_2100x_d14515e7-4677-4094-83fd-eee0ea0cdcd7_2100x_g9xrve.webp'
					}
					alt='imagen de presentacion'
					fill
					style={{ objectFit: 'cover' }}
				/>
			</div>
			<div className='h-96 w-full bg-red-300'></div>
		</>
	);
};

Home.getLayout = function getLayout(page: ReactElement) {
	return (
		<>
			<div className='fixed top-0 z-10 w-full transition-all duration-700'>
				<Navbar bgTransparent={true} />
			</div>
			<div
				className='grid'
				style={{
					gridTemplateColumns: '1fr',
					gridTemplateRows: '1fr auto',
				}}
			>
				<main className='flex flex-col justify-center '>{page}</main>
				<div className=''>
					<Footer />
				</div>
			</div>
		</>
	);
};

export default Home;
