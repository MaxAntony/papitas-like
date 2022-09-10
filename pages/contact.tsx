import { NextPage } from 'next';
import Head from 'next/head';
import { site } from 'utils/data';

const ContactPage: NextPage = () => {
	return (
		<>
			<Head>
				<title>{site.title} | Contacto</title>
			</Head>
			<div> Pagina de Contacto</div>
		</>
	);
};

export default ContactPage;
