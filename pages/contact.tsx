import { LayoutMain } from '@components/layouts/LayoutMain';
import { MainContainer } from '@components/MainContainer';
import { NextPage } from 'next';
import Head from 'next/head';
import { site } from 'utils/data';

const ContactPage: NextPage = () => {
	return (
		<LayoutMain>
			<Head>
				<title>{site.title} | Contacto</title>
			</Head>
			<MainContainer>
				<div> Pagina de Contacto</div>
			</MainContainer>
		</LayoutMain>
	);
};

export default ContactPage;
