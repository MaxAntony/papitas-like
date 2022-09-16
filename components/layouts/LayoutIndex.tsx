import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import { FC, ReactNode } from 'react';

export const LayoutIndex: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className='fixed top-0 z-20 w-full transition-all duration-700'>
        <Navbar bgTransparent={true} />
      </div>
      <div
        className='grid'
        style={{
          gridTemplateColumns: '1fr',
          gridTemplateRows: '1fr auto',
        }}
      >
        <main className='flex flex-col justify-center overflow-hidden'>{children}</main>
        <div className='bg-primary text-white'>
          <Footer />
        </div>
      </div>
    </>
  );
};
