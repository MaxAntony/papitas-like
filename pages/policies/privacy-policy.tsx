import { NextPage } from 'next';
import Head from 'next/head';
import { site } from 'utils/data';

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <Head>
        <title>{site.title} | Politicas de privacidad</title>
      </Head>
      <div>
        <h2>Política de privacidad</h2>
        <p>
          En cumplimiento por lo dispuesto en la Ley N° 29733, Ley de Protección de Datos Personales y su reglamento aprobado por Decreto
          Supremo N° 003-2013-JUS, Like Snacks S.A. desea poner en conocimiento de sus usuarios, los siguientes aspectos relacionados con
          sus datos personales:
        </p>
      </div>
    </>
  );
};

export default PrivacyPolicy;
