import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import { FC, ReactNode, useEffect, useRef, useState } from 'react';

type props = { children: ReactNode };
export const LayoutMain: FC<props> = ({ children }) => {
	const [paddingTop, setPaddingTop] = useState(0);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		setPaddingTop(ref.current?.clientHeight || 0);
	}, []);
	return (
		<div
			className='grid h-screen'
			style={{
				gridTemplateColumns: '1fr',
				gridTemplateRows: '1fr auto',
			}}
		>
			<div className='fixed w-full bg-white transition-all duration-700' ref={ref}>
				<Navbar />
			</div>
			<main className='flex flex-col justify-center overflow-hidden ' style={{ paddingTop }}>
				{children}
			</main>
			<div>
				<Footer />
			</div>
		</div>
	);
};
