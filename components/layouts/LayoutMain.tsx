import { Footer } from '@components/Footer';
import { Navbar } from '@components/Navbar';
import { FC, useEffect, useRef, useState } from 'react';

type props = { child: JSX.Element };
export const LayoutMain: FC<props> = ({ child }) => {
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
				gridTemplateAreas: `
        'main'
        'footer'
        `,
			}}
		>
			<div className='fixed w-full bg-white transition-all duration-700' ref={ref}>
				<Navbar />
			</div>
			<main className='flex flex-col justify-center ' style={{ gridArea: 'main', paddingTop }}>
				{child}
			</main>
			<div className='' style={{ gridArea: 'footer' }}>
				<Footer />
			</div>
		</div>
	);
};
