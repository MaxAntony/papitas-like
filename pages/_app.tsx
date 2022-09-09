import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { LayoutMain } from '@components/layouts/LayoutMain';
import Head from 'next/head';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => <LayoutMain child={page} />);
	return getLayout(
		<>
			<Head>
				<meta name='application-name' content='Papitas Like' />
				<meta name='description' content='Papitas Like brinda los mejores snack 100% naturales' />
				<meta name='author' content='Max Antony Paucar Ramirez' />
				<meta name='keywords' content='Papita like, like snacks, bocaditos, huanuco, peru, bocaditos naturales' />
				<meta name='format-detection' content='telephone=no' />
				<meta name='mobile-web-app-capable' content='yes' />
				<meta name='theme-color' content='#000000' />
				<meta property='og:type' content='website' />
				<meta property='og:title' content='Papitas Like' />
				<meta property='og:description' content='Papitas Like brinda los mejores snack 100% naturales' />
				<meta property='og:site_name' content='Papitas Like' />
				<meta property='og:url' content='https://papitaslike.com' />
				<meta property='og:image' content='https://papitaslike.com/icons/manifest-icon-512.jpg' />
				<meta
					name='viewport'
					content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
				/>
				{/*				<link rel='icon' type='image/jpg' sizes='192x192' href='/icons/manifest-icon-192.jpg' />
				<link rel='icon' type='image/jpg' sizes='512x512' href='/icons/manifest-icon-512.jpg' />
				<link rel='manifest' href='/manifest.json' />
			<link rel='shortcut icon' href='/favicon.ico' />*/}
			</Head>
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;
