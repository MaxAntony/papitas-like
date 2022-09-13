import { NextPage } from 'next';
import Head from 'next/head';
import { site } from 'utils/data';

const HistoryPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>{site.title} | historia</title>
      </Head>
      <div>
        <div className='h-96 bg-green-300'>hola</div>
        <div className='h-96 bg-green-300'>hola</div>
        <div className='h-96 bg-green-300'>hola</div>
        <div className='h-96 bg-green-300'>hola</div>
      </div>
    </>
  );
};

export default HistoryPage;
