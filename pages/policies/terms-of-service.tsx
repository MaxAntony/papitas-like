import { LayoutMain } from '@components/layouts/LayoutMain';
import { MainContainer } from '@components/MainContainer';
import { NextPage } from 'next';
import Head from 'next/head';
import { site } from 'utils/data';

const TermsOfService: NextPage = () => {
	return (
		<LayoutMain>
			<Head>
				<title>{site.title} | Terminos del servicio</title>
			</Head>
			<MainContainer>
				<h2>Terminos del servicio</h2>
				<p>
					Este documento describe los términos y condiciones generales (en adelante los &quot;Términos&quot;) aplicables al acceso y uso de
					los servicios ofrecidos por Like Snacks S.A. por cualquier USUARIO que acceda o utilice el sitio web www.papitaslike.com (en
					adelante “El Sitio”), aplicación móvil o cualquier otro servicio en línea (en conjunto “Los Servicios”) relacionado con “Los
					Términos”, mismos que regirán su acceso y uso al SITIO o cualquier otro sitio de Internet que pertenezca a Like Snacks S.A.
				</p>
			</MainContainer>
		</LayoutMain>
	);
};

export default TermsOfService;
