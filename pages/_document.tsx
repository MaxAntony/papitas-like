import Document, { Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	render(): JSX.Element {
		return (
			<Html lang='es'>
				<Head>
					<link rel='preconnect' href='https://fonts.googleapis.com' />
					<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />
					<link href='https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap' rel='stylesheet' />
				</Head>
				<body className='h-screen w-screen font-sans text-base'>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
