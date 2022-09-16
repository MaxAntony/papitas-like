import { LayoutIndex } from '@components/layouts/LayoutIndex';
import Image from 'next/future/image';
import { FC, Fragment } from 'react';
import { img } from 'utils/data';
import { NextPageWithLayout } from './_app';

type CardData = { img: string; title: string; description: string };
const cardData: CardData[] = [
  {
    img: 'https://res.cloudinary.com/maxantony/image/upload/v1663330366/papitas-like/summary__sm_wne6ev.jpg',
    title: 'Papitas con un sabor intenso',
    description: `With Walkers, youll never have to sacrifice flavour to cut down on calories. And whilst these snacks are not low-caloriethey
            might be lower than you think, helping you to enjoy our snacks responsibly.
`,
  },
  {
    img: 'https://res.cloudinary.com/maxantony/image/upload/v1663330366/papitas-like/summary__sm_wne6ev.jpg',
    title: 'Papitas con un sabor intenso',
    description: `With Walkers, youll never have to sacrifice flavour to cut down on calories. And whilst these snacks are not low-caloriethey
            might be lower than you think, helping you to enjoy our snacks responsibly.
`,
  },
  {
    img: 'https://res.cloudinary.com/maxantony/image/upload/v1663330366/papitas-like/summary__sm_wne6ev.jpg',
    title: 'Papitas con un sabor intenso',
    description: `With Walkers, youll never have to sacrifice flavour to cut down on calories. And whilst these snacks are not low-caloriethey
            might be lower than you think, helping you to enjoy our snacks responsibly.
`,
  },
];

const Card: FC<{ data: CardData }> = ({ data }) => {
  return (
    <div className='my-20 flex flex-col'>
      <div>
        <Image width={650} height={350} src={data.img} alt='papas' className='rounded-xl' style={{ objectFit: 'cover' }} />
      </div>
      <div className='mx-8 -mt-10 rounded-xl bg-white shadow-lg shadow-gray-400'>
        <div className='mx-8 mb-8'>
          <h3 className='my-8 text-4xl font-bold'>{data.title}</h3>
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
      <section className='relative bg-primary'>
        <div className='px-8'>
          <div className='px-8 pt-10 pb-16 text-white'>
            <h2 className='mb-16 mt-8 text-4xl font-bold'>Nosotros</h2>
            <p className=''>When you look at a potato, what do you see? Probably just a potato, right? </p>
            <p>With a bite of positivity he turned his humble spuds into </p>
            <div className='mt-10 flex w-full justify-center'>
              <h3 className='text-3xl font-extrabold uppercase'>
                Like
                <br />
                <div className='text-center text-sm'>Snacks</div>
              </h3>
            </div>
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
        <div className='absolute bottom-0 left-0 z-10 w-48 -translate-x-1/2 translate-y-1/2 transform'>
          <Image
            width={683}
            height={802}
            alt='papa'
            src={'https://res.cloudinary.com/maxantony/image/upload/v1663102216/papitas-like/potato--bg__sm_2x_o0dy1j.png'}
          />
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
        <div className='mx-8 mt-20 px-8'>
          <div className='m-4'>
            <h2 className='py-8 text-center text-4xl font-bold uppercase text-primary'>las papitas que estabas esperando</h2>
            <div className='relative h-80 w-60'>
              <Image
                fill
                src={'https://res.cloudinary.com/maxantony/image/upload/v1663329985/papitas-like/ready-salted__sm_dym3at.png'}
                alt='papitas'
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>
      <section>
        {cardData.map((e, i) => (
          <Fragment key={i}>
            <Card data={e} />
          </Fragment>
        ))}
      </section>
    </LayoutIndex>
  );
};

export default Home;
