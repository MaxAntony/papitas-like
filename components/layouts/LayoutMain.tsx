import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import { FC } from 'react';

type props = { child: JSX.Element };
export const LayoutMain: FC<props> = ({ child }) => {
  return (
    <div
      className='grid h-screen w-screen'
      style={{
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'auto 1fr auto',
        gridTemplateAreas: `
      'header'
      'main'
      'footer'
      `,
      }}
    >
      <div
        className=''
        style={{
          gridArea: 'header',
        }}
      >
        <Navbar />
      </div>
      <main className='flex justify-center' style={{ gridArea: 'main' }}>
        <div className=''>{child}</div>
      </main>
      <div className='' style={{ gridArea: 'footer' }}>
        <Footer />
      </div>
    </div>
  );
};
