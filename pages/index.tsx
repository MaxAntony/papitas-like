import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import Image from 'next/future/image';
import { ReactElement } from 'react';
import { img } from 'utils/data';
import { NextPageWithLayout } from './_app';

const Home: NextPageWithLayout = () => {
  return (
    <>
      <div className='relative h-screen w-full'>
        <Image src={img.index.presentation} alt='imagen de presentacion' fill style={{ objectFit: 'cover' }} />
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
