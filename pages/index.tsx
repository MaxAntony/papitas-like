import { LayoutIndex } from '@components/layouts/LayoutIndex';
import Image from 'next/future/image';
import { FC } from 'react';
import { img } from 'utils/data';
import { NextPageWithLayout } from './_app';

type CardData = { img: string; title: string; description: string };
const cardData: CardData[] = [
	{
		img: 'https://res.cloudinary.com/maxantony/image/upload/v1664233375/papitas-like/293182388_109324178511860_279460675261365078_n_al8re3.jpg',
		title: '100% Naturales',
		description: `Nuestros productos se elaboran a mano meticulosamente para un mejor desarrollo y acabado final.`,
	},
	{
		img: 'https://res.cloudinary.com/maxantony/image/upload/v1664233543/papitas-like/296825683_118273177616960_586246744402616391_n_tm2tcl.jpg',
		title: 'Disfrútalas a cualquier hora',
		description: `En el trabajo, en el transporte o mientras descansas siempre es un buen momento para darte un gustito`,
	},
	{
		img: 'https://res.cloudinary.com/maxantony/image/upload/v1664233651/papitas-like/299377317_121204157323862_4891396918322721696_n_ngxmka.jpg',
		title: 'Orgullo Huanuqueño',
		description: `Nuestros agricultores huanuqueños son los principales abastecedores de para la elaboración de nuestros snacks`,
	},
];

const Card: FC<{ data: CardData; imgToRight: boolean }> = ({ data, imgToRight }) => {
	return (
		<div className={`my-20 flex flex-col md:flex-row ${imgToRight ? 'justify-end' : 'justify-start'}`}>
			<div className='relative h-56 w-full overflow-hidden md:h-[550px] md:w-[655px]'>
				<Image fill src={data.img} alt='papas' className='rounded-xl' style={{ objectFit: 'cover' }} />
			</div>
			<div
				className={`z-10 mx-8 -mt-10 rounded-xl bg-white shadow-lg shadow-gray-400 md:absolute md:top-1/2 md:mx-0 md:mt-0 md:w-[380px] md:-translate-y-1/2 md:transform ${
					imgToRight ? 'left-0' : 'right-0'
				}`}
			>
				<div className='mx-8 mb-8'>
					<h3 className='my-8 text-4xl font-bold text-primary'>{data.title}</h3>
					<p>{data.description}</p>
				</div>
			</div>
		</div>
	);
};

const Home: NextPageWithLayout = () => {
	return (
		<LayoutIndex>
			<div className='relative h-screen w-full'>
				<Image src={img.index.presentation} alt='imagen de presentacion' fill style={{ objectFit: 'cover' }} />
			</div>
			<section className='bg-primary md:flex md:justify-center'>
				<div className='relative px-8 md:flex md:w-[1000px] md:justify-center'>
					<div className='px-8 pt-10 pb-16 text-white md:px-0'>
						<h2 className='mb-16 mt-8 text-4xl font-bold md:text-8xl'>Nosotros</h2>
						<p>Brindamos bocaditos a base de hojuelas de papa 100% organicas</p>
						<p>buscando promover el consumo de alimentos de nuestra tierra</p>
						<div className='mt-10 flex w-full justify-center'>
							<h3 className='text-3xl font-extrabold uppercase'>
								Like
								<br />
								<div className='text-center text-sm'>Snacks</div>
							</h3>
						</div>
					</div>
					<div className='absolute top-1 left-[80%] w-24'>
						<Image
							width={375}
							height={474}
							alt='hojuela de papita'
							src={'https://res.cloudinary.com/maxantony/image/upload/v1663097529/papitas-like/crisp--2__lg_iicht2.png'}
						/>
					</div>
					<div className='absolute bottom-0 left-0 z-10 w-48 -translate-x-1/2 translate-y-1/2 transform md:translate-y-1/4'>
						<Image
							width={683}
							height={802}
							alt='papa'
							src={'https://res.cloudinary.com/maxantony/image/upload/v1663102216/papitas-like/potato--bg__sm_2x_o0dy1j.png'}
						/>
					</div>
				</div>
			</section>
			<section className='relative'>
				<div
					style={{
						WebkitMask: 'url(https://res.cloudinary.com/maxantony/image/upload/v1663098702/papitas-like/edge-top_s5k72d.svg)',
						WebkitMaskSize: '350px auto',
						WebkitMaskRepeat: 'repeat-x',
					}}
					className='absolute -top-2 h-8 w-full bg-white'
				/>
				<div className='mx-8 my-20 px-8'>
					<div className='m-4 flex flex-col items-center'>
						<h2 className='py-8 text-center text-4xl font-bold uppercase text-primary md:text-6xl'>las papitas que estabas esperando</h2>
						<div className='relative mt-12 h-96 w-60'>
							<Image
								fill
								src={'https://res.cloudinary.com/maxantony/image/upload/v1664232989/papitas-like/Board-1_h79n6k.png'}
								alt='papitas'
								style={{ objectFit: 'cover' }}
							/>
						</div>
					</div>
				</div>
			</section>
			<section className='md:flex md:flex-col md:items-center'>
				<div className='md:w-[1000px]'>
					{cardData.map((e, i) => (
						<div className='md:relative' key={i}>
							<Card data={e} imgToRight={i % 2 === 0} />
						</div>
					))}
				</div>
			</section>
		</LayoutIndex>
	);
};

export default Home;
