import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import { FC, Fragment, ReactNode, useEffect, useRef, useState } from 'react';

type props = { children: ReactNode };
export const LayoutMain: FC<props> = ({ children }) => {
  const [paddingTop, setPaddingTop] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setPaddingTop(ref.current?.clientHeight || 0);
  }, []);
  return (
    <Fragment>
      <div className='fixed w-full bg-white transition-all duration-700' ref={ref}>
        <Navbar />
      </div>
      <div
        className='grid h-screen w-full'
        style={{
          gridTemplateColumns: '1fr',
          gridTemplateRows: ' 1fr auto',
        }}
      >
        <main className='flex flex-col ' style={{ paddingTop }}>
          {children}
        </main>
        <div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};
