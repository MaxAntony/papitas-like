import { LayoutIndex } from '@components/layouts/LayoutIndex';
import Image from 'next/future/image';
import { img } from 'utils/data';
import { NextPageWithLayout } from './_app';

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
        <div className='absolute -bottom-11 z-10 w-48'>
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
        <div className='mt-20 px-8'></div>
      </section>
    </LayoutIndex>
  );
};

export default Home;
