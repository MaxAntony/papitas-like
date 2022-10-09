import { LayoutMain } from '@components/layouts/LayoutMain';
import { MainContainer } from '@components/MainContainer';
import { NextPage } from 'next';
import Image from 'next/future/image';
import Head from 'next/head';
import { FC, Fragment } from 'react';
import { site } from 'utils/data';

type HistoryData = { title: string; content: string; image: string };
const historyData: HistoryData[] = [
	{
		title: 'Nuestros inicios',
		content:
			'Like Snacks es un negocio familiar el cual empezó a inicios del año 2022. Nuestro producto se elabora a mano para un mejor desarrollo y acabado final. Tenemos snacks de la más alta calidad y siempre estamos buscando ampliar nuestra línea de productos y experimentando con nuevos sabores para brindar variedad a nuestros clientes y amigos. ¡Nuestro objetivo principal es brindar siempre a nuestros clientes bocadillos de alta calidad para que todos disfruten en diferentes momentos!',
		image:
			'https://res.cloudinary.com/maxantony/image/upload/v1664233375/papitas-like/293182388_109324178511860_279460675261365078_n_al8re3.jpg',
	},
];

type HistorySectionProps = { data: HistoryData };
const HistorySection: FC<HistorySectionProps> = ({ data }) => {
	return (
		<div className=' flex w-full flex-col md:flex-row'>
			<div className='mb-4 flex w-full flex-col justify-center text-center md:w-1/2 md:text-left'>
				<h3 className='mb-4 font-bold uppercase'>{data.title}</h3>
				<p className='pr-4'>{data.content}</p>
			</div>
			<div className='w-full md:w-1/2'>
				<div className='h-80 w-full overflow-hidden rounded-xl shadow-lg shadow-gray-800'>
					<Image width={2071} height='960' style={{ height: '100%', objectFit: 'cover' }} alt='inicios' src={data.image} />
				</div>
			</div>
		</div>
	);
};

const HistoryPage: NextPage = () => {
	return (
		<LayoutMain>
			<Head>
				<title>{site.title} | historia</title>
			</Head>
			<MainContainer>
				<div className='mx-auto h-full lg:w-[1000px]'>
					{historyData.map((e, i) => (
						<Fragment key={i}>
							<HistorySection data={e} />
						</Fragment>
					))}
				</div>
			</MainContainer>
		</LayoutMain>
	);
};

export default HistoryPage;
