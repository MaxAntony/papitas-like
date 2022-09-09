import type { NextPage } from 'next';
import Image from 'next/future/image';

const Home: NextPage = () => {
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

export default Home;
