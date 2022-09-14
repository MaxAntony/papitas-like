import { LayoutMain } from '@components/layouts/LayoutMain';
import { MainContainer } from '@components/MainContainer';
import { NextPage } from 'next';
import Head from 'next/head';
import { site } from 'utils/data';

const HistoryPage: NextPage = () => {
	return (
		<LayoutMain>
			<Head>
				<title>{site.title} | historia</title>
			</Head>
			<MainContainer>
				<div className='h-96 bg-green-300'>hola</div>
				<div className='h-96 bg-green-300'>hola</div>
				<div className='h-96 bg-green-300'>hola</div>
				<div className='h-96 bg-green-300'>hola</div>
			</MainContainer>
		</LayoutMain>
	);
};

export default HistoryPage;
